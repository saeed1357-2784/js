var shopinglist=["نان","گوشت","مرغ"];
// document.getElementById("paragraph").innerHTML+="</br>"+shopinglist[0];
// document.getElementById("paragraph").innerHTML+="</br>"+shopinglist[1];
// document.getElementById("paragraph").innerHTML+="</br>"+shopinglist[2];

function show(x) {
    document.getElementById("paragraph").innerHTML+="</br>"+x+" "+"عالی !";
}
show(shopinglist[0]);
show(shopinglist[2]);
shopinglist[0]="نان باگت";
show(shopinglist);
shopinglist.sort();
show(shopinglist);
var mysaeed="what is your name?";
    show(mysaeed);
    var mysaeed=mysaeed.split('');
show(mysaeed);
document.write("helloword");