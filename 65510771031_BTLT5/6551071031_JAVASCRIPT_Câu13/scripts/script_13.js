function laSoNguyenTo(x){
    if(x<2) return false;
    for(var i=2;i<=Math.sqrt(x);i++){
        if(x%i==0){
            return false;
        }
    }
    return true;
}

function lietKeSoNguyenTo(n){
    var ds=[];
    for(var i =2;i<=n;i++){
        if(laSoNguyenTo(i)) ds.push(i);
    }
    return ds;
}
var n = 50;
document.getElementById("ketqua").innerHTML = 
"Danh sách số nguyên tố bé hơn " + n + " la: <br>"+ lietKeSoNguyenTo(n).join(",");