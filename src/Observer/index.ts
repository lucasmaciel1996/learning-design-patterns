import {EventEmitter} from 'node:events'

const emitter = new EventEmitter()


console.log('EventEmitter')

emitter
    .on('fail',console.error)
    .on('file_read',console.info)
    .on('file_match',console.log)
    
const list=[
    {
        name:'fail',
        data:'ERROR'
    },
    {
        name:'file_read',
        data:'FILE'
    },
    {
        name:'file_match',
        data:'FILE_MATCH'
    }
]

list.forEach(({name,data})=>{
    emitter.emit(name,data)
})    