function ctof(ct) {
    var f = (ct / 5) * 9 + 32;
    return f;
}

function ftoc(ft) {
    var c = ((ft - 32) * 5) / 9;
    return c;
}

var input1 = document.getElementById("cinput");
var input2 = document.getElementById("finput");

document.getElementById("csubmit").onclick = function () {
    document.getElementById("fpopup").value = "                                                                                                                                                                                    " + input1.value + " degrees Celsius is " + ctof(Number(input1.value)) + " degrees Fahrenheit ";
};

document.getElementById("fsubmit").onclick = function () {
    document.getElementById("cpopup").value = "                                                                                                                                                                                    " + input2.value + " degrees Fahrenheit is " + ftoc(Number(input2.value)) + " degrees Celsius";
};
