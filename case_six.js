const fs= require("fs");
function c6()
{
    fs.copyFile('file.txt','copyfile.txt',function(err)
    {
        if(err)
        {
            console.log("couldn't write back on the file");
        }
        else
        {
            console.log("wriiten on the same file");
        }
    });
}

module.exports = {c6};