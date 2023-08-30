const os =require("os");
console.log("Free memory",os.freemem()/1024/1024/1024);
console.log("total",os.totalmem()/1024/1024/1024);
console.log("os",os.version());
console.log(os.cpus());
console.log(os.platform());
console.log(os.arch());
console.log(os.userInfo());
