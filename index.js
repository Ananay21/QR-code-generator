import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        name:"URL",
        message:"Type in your URL:"
    }
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_png=qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr_image.png"));
    fs.writeFile("./URL.txt",url,"utf8",(err,data)=>{
        if(err) throw err;
        console.log("data written!");
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
    } else {
        console.log("Something else went wrong");
    }
  });
