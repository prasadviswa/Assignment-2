const fs= require("fs");
function c2()
{
    fs.open('file.txt','w+',function(err,fd)
    {
        if(err)
        {
            return console.log.error("Failed tp create");
        }
        else
        {
            console.log("The file you sought doesn't exist. A new file with the given name has been created!!")
        }
    });
}

module.exports = {c2};