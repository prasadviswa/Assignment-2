const fs= require("fs");
const glob = require("glob");
function c8()
{
    try
    {
        glob('file.txt', function(err, files) 
        {
            if (err) 
            { 
                throw err;
            }
            files.forEach(function(file, index, array) 
            {
                console.log(file + ' exists');
                fs.appendFile('file.txt',"Have fun coding!!",function(err){
                    if(err)
                    {
                        console.log(err);
                    }
                    console.log("File append successfull !")
                });
            });
        });
    }

    catch(err)
    {
        console.log('File not found');
    }
}

module.exports = {c8};