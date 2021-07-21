const fs= require("fs");
function c3()
{
    fs.writeFile('file.txt',"Hello Guys!!",function(err,data)
    {
        if(err)
        {
            console.log(err);
        } 
        else
        {
            console.log('Given content is written');
        }
    });
}

module.exports = {c3};