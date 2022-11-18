var obj={num: 10};

var addnum=function (a,b){
    return this.num+a+b;
}
var arr=[1,2,4];
// console.log(addnum.apply(obj,arr));
var bound=addnum.bind(obj);
console.log(bound(1,3));