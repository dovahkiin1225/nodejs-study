var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

// addEventListener

life.on('need',function (who) {
    console.log('give ' + who + ' water')
})

life.emit('need','dovahkiin')