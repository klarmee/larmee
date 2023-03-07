const fs = require('fs');
const https = require('https');
const readline = require('readline');
const urls = []

async function processLineByLine() {
  const fileStream = fs.createReadStream('drawingslist.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  for await (const line of rl) {
    const file = fs.createWriteStream("img/drawings/" + line);
    const request = https.get("https://raw.githubusercontent.com/hallhassi/kevin/main/" + line, function(response) {
       response.pipe(file);
    
       // after download completed close filestream
       file.on("finish", () => {
           file.close();
           console.log("Download Completed");
       });
    });
  }
}

processLineByLine()