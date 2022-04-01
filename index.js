function Recargos() {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById('num2');
    var n3 = document.getElementById('num3');
    var n4 = document.getElementById('num4');
    /*var n4 = document.getElementById('num4');
    var n5 = document.getElementById('num5');
    console.log(n5);
    console.log(5);
    console.log(n5.value);
    console.log(parseInt(n5.value));
    if(n1.value == n2.value) {
        console.log("??");
        return true;
    }
    */
    
    let hourN = parseFloat(n1.value)/30/8;
    let hourD = hourN * 1.75;
    let dN = parseFloat(n2.value)*9.5;
    let dD = parseFloat(n3.value)*9.5
    let extra = parseFloat(n2.value) * 0.25 * hourN; 
    let x = (hourD * dD) + (hourN * dN);
    let y = x - (parseFloat(n1.value)*0.08) + 58586 + extra;
    alert(parseInt(y));

    return false;
}
