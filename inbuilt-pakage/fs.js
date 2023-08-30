const fs=require("fs");
const content="hello subaash";
fs.writeFile("awesome.pdf",content, (err)=>{
    if(err) throw err;
    console.log("complee the writhing");
});

// const [,,n] =process.argv;
// const fs=require("fs");
// const content="Live more,worry Less";
// for(let i=1;i<=n;i++)
// {
// fs.writeFile(`./backup/text-${i}.html`,content, (err)=>{
//     if(err) throw err;
//     console.log(`complee the writhing text-${i}.html`);
// });
// }


// const [,,n] =process.argv;
// const fs=require("fs");
// const content="Live more,worry Less";
// for(let i=1;i<=n;i++)
// {
// fs.writeFile(`./backup/sample-${i}.txt`,content, (err)=>{
//     if(err) throw err;
//     console.log(`complee the writhing sample-${i}.txt`);
// });
// }