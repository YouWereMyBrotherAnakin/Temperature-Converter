window.addEventListener("DOMContentLoaded", (event) => {
    function ctok(c) {
        var k = c + 273.15;
        return k;
    }
    function ktoc(k) {
        var c = k - 273.15;
        return c;
    }

    var cinput = document.getElementById("cinput");
    var kinput = document.getElementById("kinput");

    document.getElementById("csubmit").onclick = function () {
        document.getElementById("kpopup").value = "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              " +  document.getElementById("cinput").value + " degrees Celsius is " + ctok(Number(cinput.value)) + " degrees Kelvin.";
    };
    document.getElementById("ksubmit").onclick = function () {
        document.getElementById("cpopup").value = "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              " + document.getElementById("kinput").value + " degrees Kelvin is " + ktoc(Number(kinput.value)) + " degrees Celsius.";
    };
});
