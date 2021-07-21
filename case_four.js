const fs= require("fs");
function c4()
{
    try{
        var data = fs.readFileSync('file.txt',function(err,data) 
        {
            if(err)
            {
                throw err;
            }
        });
        console.log(data.toString());
    }
    catch(err)
    {
        console.error('readFile failed due to unexisting file');
    }
}

module.exports = {c4};