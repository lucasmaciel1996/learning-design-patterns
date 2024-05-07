import {EventEmitter} from 'node:events'
import fs from 'node:fs'
import readline from 'node:readline'



function readFileWithEvent(files:string[], rgx:RegExp):EventEmitter{
  const emitter = new EventEmitter()

  for(const file of files){
    // readFile(file,'utf-8',(err, data)=>{
    //     if(err){
    //         emitter.emit('fail', err)
    //     }
    //     emitter.emit('file_read',{file})

    //     const match = data.match(rgx)
    //     if(match){
    //         match.forEach(d=> emitter.emit('file_match',file,d))
    //     }
    // })
    const fileStream = fs.createReadStream(file)
        // .on('error',(e)=> emitter.emit('fail',e))
        // .on('data',(data)=> {
        //     const text = data.toString()
        //     const match = text.match(rgx)
        //     if(match){
        //         match.forEach(match =>emitter.emit('file_match',{
        //             file,
        //             match
        //         }))
                
        //     }
            
        // })
        // .on('end',()=> emitter.emit('file_read',{file}))

        let line=0;
        const rl = readline.createInterface({
            input:fileStream,
            crlfDelay:Infinity
        })
        .on('line',(lineContent)=>{
            line++
            const match = lineContent.match(rgx)
            if(match){
                match.forEach(m => {
                    emitter.emit('file_match',{file,line,match:m,})
                })
            }
        })
        .on('close',()=>emitter.emit('file_read',{file}))
  }

  return emitter
}

readFileWithEvent([`${__dirname}/file1.txt`,`${__dirname}/file2.txt`,`${__dirname}/file3.txt`,`${__dirname}/file4.txt`],/maciel/g)
    .on('fail',console.error)
    .on('file_read',console.info)
    .on('file_match',console.log)