var http = require('http')
var url = 'http://www.imooc.com/learn/348'

var  cheerio  =  require('cheerio')
//得得得
function  filterChapters(html){
    //在服务器端处理HTML,cheerio是像Jquery一样的东西
    var $ = cheerio.load(html)
    var chapters = $('.chapter')

    // [
    //     {
    //         chapterTitle: '',
    //         videos: {
    //             title: '',
    //             id: ''
    //         }
    //     }
    // ]

    var courseData = []
    chapters.each(function (item) {
        var chapter = $(this)
        var chapterTitle = chapter.find('h3').text().replace(/^\s+|\s+$/g,"")
        var videos = chapter.find('.video').children('li')
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }
        videos.each(function (item) {
            var video = $(this).find('.J-media-item')
            var videoTitle = video.text().replace(/\s+/g,"")
            videoTitle = videoTitle.substring(0, videoTitle.indexOf(')')+1)
            var id = video.attr('href').split('video/')[1]
            chapterData.videos.push({
                title: videoTitle,
                id: id
            })
        })
        courseData.push(chapterData)
    })
    return courseData
}

function printCourseData(courseData) {
    courseData.forEach(item => {
        var chapterTitle = item.chapterTitle
        console.log(chapterTitle + '\n');
        
        item.videos && item.videos.forEach(function (video) {
            console.log('    [' + video.id + '] ' + video.title + '\n');
        })
    });
}

http.get(url,(res)=>{
    var html = ''

    res.on('data',(data)=>{
        html += data
    })

    res.on('end',()=>{
        // console.log(html);
        //信息过滤
        var courseData = filterChapters(html)
        printCourseData(courseData)
    }).on('error',()=>{
        console.log('获取课程数据出错');
    })
})
