// 函数myType用于根据输入参数返回相应的类型信息。
// 语法如下：
// let str = myType (param);
// 使用范例如下：
// myType (1);		返回值： "number"
// myType (false);		返回值： "boolean"
// myType ({});		返回值： "object"
// myType ([]);		返回值：" Array"
// myType (function(){});	返回值："function"
// myType (new Date());	返回值： "Date"
// 请写出函数myType的实现代码。


function myType(param){
    if(typeof param === "object"){

        if((Object.prototype.toString.call(param).slice(8,-1)) === "Object"){return "object"}else{return Object.prototype.toString.call(param).slice(8,-1);}

    }else{return typeof param;}


}

//打印测试如下：
myType (1);
//"number"
myType (false);
//"boolean"
myType ({});
//"object"
myType ([]);
//"Array"
myType (function(){});
//"function"
myType (new Date());
//"Date"