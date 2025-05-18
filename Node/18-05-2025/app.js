const http = require("http");
const fs = require('fs')
const path = require('path')


const filePath = path.join(process.cwd() , 'data.txt') // Define the File Path , To Save File

const server = http.createServer((req, res) => {  
  
  if (req.url === "/") {
    res.write("Hello World from Node");
    res.end();
  } 
  
  else if(req.url === '/form') {
      res.setHeader('Content-Type' , "text/html")
      res.write('<form action="/submit" method="POST" > <input name="data" type="text" /> <button>Submit </button>  </form>')
      res.end() 
  } 
  
  
  else if (req.url === '/submit') {

    let data = ''
    req.on('data', chunk => data+=chunk) //collecting data from request from chunks
    req.on('end' , ()=>{



fs.readFile(filePath , 'utf-8' , ( _ , fileData)=>{
          let updateData = fileData + "\n" + data
          fs.writeFile(filePath , updateData , ()=> {
            res.write(`Data Received ===> ${updateData}`)
            console.log(updateData)
            res.end()
          })

        })

     

        


      

    })
  
  }
  
  else {
    res.write("404 - Not Found");
    res.end();
  }
});

server.listen(3000);
