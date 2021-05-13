const { dir } = require('console');
const fs = require('fs');
const glob = require('glob');
const path = require('path');


const directoryName = '003-file-system/server-directory';

function getDirectoryTextFileNamesArray(callback) {

	let txtFilesNames= [];
	
	fs.readdir(directoryName,(err, files) =>{
		if (err){ 
			return callback(err);	
		}

		files.forEach(fileName => {
			if (fileName.split('.')[1] === 'txt') {
				txtFilesNames.push(fileName);
			}
		})

		return callback(err, txtFilesNames);
	})
	//}
	// gettxtFileName((txtfiles) =>  {
	// 	console.log(txtfiles)

	// });
	

	// const p = new Promise((resolve, reject) => {
	// 	fs.readdir(directoryName, (err, files) =>{
	// 		const txtFiles = files.filter(fileName => {
	// 			if(fileName.split('.')[1]=== "txt"){
	// 				return fileName;
	// 			}
	// 		})
	// 		console.log(txtFiles);
	// 		resolve(txtFiles)
	// 	})
	// })
	
	

}

function getDirectoryTextFilesAllLogRowsArray(callback) {

	fs.readdir(directoryName,(err, files) => {
		
		let textInFiles = [];
		let filesAmoutnLeft = files.length;


		files.forEach(txtFileName =>{
			fs.readFile(directoryName + '/' + txtFileName, 'utf-8' ,function(err, content){
				filesAmoutnLeft--;
				if (txtFileName.split('.')[1] === 'txt'){
					let textFileArray = content.trim().split('\r\n');
					for(i = 0; i < textFileArray.length; i++) 
					{
						textInFiles.push(textFileArray[i]);
					}
					
				}
				if (filesAmoutnLeft === 0){
					if (err){
						return callback(err);
					}
					return callback(err, textInFiles);
				}

			})
		})
	})
}


function getDirectoryAndSubDirectoryTextFilesAllLogRows(){
	// let txtFilesLogs = [];

	// var getDirectories = function (src, callback) {
	// 	glob(src + '/**/*', callback);
	// };

	// getDirectories(directoryName, function (err, res) {
	// 	if (err) {
	// 		return err;
	// 	} 

	// 	listOfAllFiles = res;
	// 	const listOfAllTextFiles = listOfAllFiles.filter(fileName => fileName.split('.')[1] === 'txt')
	// 	// console.log(listOfAllTextFiles);
	// 	let txtFilesAmount = listOfAllTextFiles.length;

	// 	listOfAllTextFiles.forEach(txtFileName => {
			
	// 		fs.readFile(txtFileName, 'utf-8',function(err, content){
	// 			txtFilesAmount--;
	// 			let textFileArray = content.trim().split('\r\n');

	// 			for(i = 0; i < textFileArray.length; i++) {
	// 				txtFilesLogs.push(textFileArray[i]);
	// 			}
	// 			if(txtFilesAmount === 0){
	// 				console.log(txtFilesLogs);
	// 			}
					
	// 		})
	// 	})
	// });
	
	let txtfiles = [];

	function getTextFromAllTextFilesInDirectories(directory){
		const filesInDirectory = fs.readdirSync(directory);
		const subDirectory = filesInDirectory.filter(fileName => fileName.split('.')[1] === undefined);
		const txtFilesInDirectory = filesInDirectory.filter(fileName => fileName.split('.')[1] === 'txt');
		
		txtfiles = txtfiles.concat(txtFilesInDirectory.reduce((accumulator, currentvalue) => {
			const ab = fs.readFileSync(directory + '/' + currentvalue, 'utf-8', function(err, content){
				return content;
			})
			
			let textFileArray = ab.trim().split('\r\n');

			return accumulator.concat(textFileArray);
		}, []))
		subDirectory.forEach(directoryInSubDirector => {
			getTextFromAllTextFilesInDirectories(directory + '/' + directoryInSubDirector);
		})
	}
	getTextFromAllTextFilesInDirectories(directoryName);
	return txtfiles;
}
console.log(getDirectoryAndSubDirectoryTextFilesAllLogRows());

module.exports = {
	getDirectoryTextFileNamesArray,
	getDirectoryTextFilesAllLogRowsArray,
}
