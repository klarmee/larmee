const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

let folders = [480]
let imgs = []

//get contents of img
fs.readdir('img', (err, files) => {
    if (err) {throw err;}
    else {
        folders.forEach((folder) => {
            files.forEach((file) => {
                fs.open(`${folder}/${file}`, 'r', (err, fd) => {
                    if (err) { // if file does not exist
                        sharp(img)
                        .resize(480)
                        .toFile('img/480/${img}')
                        .catch(err => { console.log(err) });      
                    }            
                  });              
            })    
        })
    }
})
