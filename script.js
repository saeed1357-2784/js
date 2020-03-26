
var x,y,z;
document.getElementById("button5").onclick=function () {

    x='math.round(math.random()*256)';
    y='math.round(math.random()*256)';
    z='math.round(math.random()*256)';
    var appcolor='rgb(+x+,+y+,+z+)';
    document.getElementById("facebook").style.backgroundColor=appcolor;
    document.getElementById("facebook").innerHTML=
        '<p>'+appcolor+'</p>';

}





function test() {
    alert("سلام سعید");

}
test();
test();
function test1(firstname){
    alert('سلام'+" "+firstname +'!')
}
test1('علی');
function sum(a,b){
    return a+b;
}
var x=sum(3,7);
alert(x);
// function swap(id1,id2){
//     var y=document.getElementById(id1).innerHTML;
//     var z=document.getElementById(id2).innerHTML;
//     document.getElementById(id1).innerHTML=z;
//     document.getElementById(id2).innerHTML=y;
//
// }

