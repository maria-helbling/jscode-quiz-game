let Arr = [['name', '22'],['second','18'],['third','3']]
Arr.sort(compareFn:(a, b)=>{
    if (parseInt(a[1]) < parseInt(b[1])) {
        return 1
    } else if (parseInt(a[1]) > parseInt(b[1])) {
        return -1
    }
    return 0
})