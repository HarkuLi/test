var pow = function(a, b){
    let rst = 1;
    for(let i=0; i<b; i++){
        rst *= a;
    }
    return rst;
}

module.exports = {pow};