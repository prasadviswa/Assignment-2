var file = "file.txt"
const fs= require("fs");
function c1(filename)
{
    fs.access(filename, function(err)
    {
        if(err)
        {
            console.log("File does not exist.");
            return false;
        }
        else
        {
            return true;
        }
    });
}

module.exports = {c1};