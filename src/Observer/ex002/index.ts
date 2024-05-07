// import  fs from 'node:fs'
// import {parsePageItems} from 'pdf-text-reader';

// // const file = __dirname+'/example.pdf';
// // fs.createReadStream(file).on('data',(data)=>console.log(data.toString()))

// import  fs from 'node:fs'
// import  pdfStream from 'pdf-stream'
//Load file contents to ArrayBuffer synchronously
// const file = __dirname+'/example.pdf';
// const pdf = new Uint8Array(fs.readFileSync(file));
// pdfStream.text(pdf).pipe(process.stdout);


// const pdf = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';
// // Stream PDF text to stdout
// new pdfStream.PDFReadable(pdf)
// // .on('data', (data)=>)
// .pipe(new pdfStream.PDFStringifyTransform()) 
// .on('data',(data)=>console.log(data.toString()) )
// .pipe(process.stdout);

// import { PdfReader } from "pdfreader";
// const file = __dirname+'/example.pdf';

// new PdfReader({debug:true}).parseFileItems(file, (err, item) => {
//     if (err) console.error("error:", err);
//     else if (!item) console.warn("end of file");
//     else if (item.text) console.log(item.text);
// });
  
// import {readPdfPages,} from 'pdf-text-reader';

// async function read(){
//     const file = __dirname+'/example.pdf';
//     const pages = await readPdfPages({url: file});
//     console.info(pages.length);
// }
// read()


// import fs from "fs";
// import PDFParser from "pdf2json";

// const file = __dirname+'/example.pdf';
// const pdfParser = new PDFParser();

// pdfParser.on("pdfParser_dataError", (errData) =>
//  console.error(errData.parserError)
// );
// pdfParser.on("pdfParser_dataReady", (pdfData) => {
//     fs.writeFile(
//         "fields.json",
//         JSON.stringify(pdfParser.getRawTextContent()),
//     () => {
//         console.log("Done.");
//     }
//     );
// });

// pdfParser.loadPDF(file);

import fs from "fs";
import pdfParse from "pdf-parse";

const file = __dirname+'/example.pdf';
const buffer = fs.readFileSync(file)

pdfParse(buffer).then(d => console.log(d))