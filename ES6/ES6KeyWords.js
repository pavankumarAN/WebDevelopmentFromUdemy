//function level keyword
function scope1() {
    var a=1;
    if(true) {
        var a=2;
        console.log(a);//2
    }
    console.log(a);//2
}

//block level keyword
function scope2() {
    let b=1;
    if(true) {
        let b=2;
        console.log(b);//2
    }
    console.log(b);//1
}
document.write("gsgsdf")
scope1();
scope2();