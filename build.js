const fs = require('fs');

const ROOT = 'myBook';

function getTitle(fileName){
    if(!/.md$/.test(fileName))return false;
    let filePath = ROOT+'/'+fileName;
    let line = '';
    let content = fs.readFileSync(filePath,'utf-8');

    //匹配注释，进行分类
    let notes = content.match(/^(\s|\n|\r)*#(.*)/);
    //匹配标题
    let search = content.match(/<h1>(\S+)<\/h1>/) || '';
    let title = search && search[1];
    if(!notes){
        line=`### [${title}](${filePath})`;
    }

    // console.log(search);
    return line;
}

function writeCatalog(content){
    return updateModule('README.md','catalog',content);
}

function updateModule(filePath,moduleName,content){
    let file = fs.readFileSync(filePath,'utf-8');
    let addTag = res=>(`<!-- ${moduleName} -->${res}<!-- ${moduleName} end -->`);
    let reg = new RegExp(addTag('[\\s\\S]*'));
    content = addTag('\r\n'+content+'\r\n');
    let res = '';
    if(!reg.test(file)){
        res = file+content;
    }else{
        res = file.replace(reg,content);
    }

    console.log(res);
    fs.open(filePath,"w",function(err,fd){
        var buf = new Buffer(res);
        fs.write(fd,buf,0,buf.length,0,function(err,written,buffer){});
    })
}

fs.readdir(ROOT,(err,files)=>{
    let catalog = files.map(getTitle).filter(res=>(res)).join('\n\r');
    writeCatalog(catalog);
})