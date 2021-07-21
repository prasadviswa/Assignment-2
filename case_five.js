var fs = require('fs');
var replace = require('replace');
var glob = require('glob');
var exist = require('./case_one');
var filename = "file.txt"

function c5()
{
    if(!exist.check(filename)){
        try{
            glob(filename, function(err, files) 
            {
                if (err) 
                {
                    throw err;
                }
                files.forEach(function(file, index, array) 
                {
                    console.log(file + ' exists');
                    console.log(fs.readFileSync(file, 'utf8'));
                    replace({
                        regex: 'Hello', replacement: 'Hi', paths: [file], recursive: true, silent: true
                    });
                    console.log('words replaced.');
                    console.log(fs.readFileSync(file, 'utf8'));
                });
            });
        }
        catch(err){
            console.log('Unable to find words');
        }
    }
    else{
        console.log("File not found");
    }
}

module.exports = {c5};