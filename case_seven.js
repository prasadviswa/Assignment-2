const fs= require("fs");
const case1 = require("./case_one")

function c7()
{
    try
    {
        var data = fs.readFileSync('file.txt',function(err,data) 
        {
            if(err)
            {
                return console.log.error(err);
            }
        });
        console.log(data.toString());
    }
    catch(err)
    {
        console.error('File does not exist');
    }
}

module.exports = {c7};