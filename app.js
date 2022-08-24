const fs = require("fs");

function chartParser(line){

	if (line.trim() == ""){

	}


	else {
		let  parsedLine = line.trim()
		if (parsedLine[0] == "["){
			return line.match(/\[(.*?)\]/)[1];
		}

		//

		else if (parsedLine[0] == "{"){
			content = []
			count = 1
			while (parsedLine[count]!="}"){
				count+=1

			}

		}
	}
	
	}

function getHeader(line){

	let parsedLine = line.trim()
	if (parsedLine[0] == "["){
		results = line.match(/\[(.*?)\]/)[1];
		console.log(results)
		return results
	}
}


function tokenizer(line){
	if (line.trim() == ""){
		return;
	}

	results = line.match(/^.*?(?==)|[^=\n\r].*$/gm)

	if (results){

    let first = results[0].trim()
    let second = results[1].trim()
     return([first,second])
	}

}


function trimLine(line){
	return line.trim()
}


function fileReader(file_path){
	//check if is a valid file path

let holder = {}

 fs.readFile(file_path, (err, data) => {
  if (err) throw err;

   let lines = data.toString().split(/[\n\r]/g)

 

   let header = "";

   let data_holder = []


   for (var i =0;i<lines.length;i++){

   	let new_line = trimLine(lines[i])
   	if (new_line == null){
   		continue
   	}

   	//get header field

   	if (header == ""){
   		tmp_val = getHeader(new_line)
   		if (tmp_val){
             header = tmp_val
   		}
   		else {
   			continue
   		}
   	}

   	else{

   		if (new_line == "{"){
   			//check for repeat 
   		}
   		else if (new_line == "}"){ 
   			//equating to data holder

   			tmp = {}


   			data_holder.forEach((results)=>{

   				if (results){

   				tmp[results[0]] = results[1]

   			}

   			})

   			holder[header] = tmp

            header = ""

            data_holder = []
   		}

   		else {

   			data_holder.push(tokenizer(new_line))

   		}



   	}


   	}


   	console.log(holder)
   });

}

fileReader("./notes.txt")
//xs