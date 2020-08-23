window.addEventListener("DOMContentLoaded", (event) => {
    function ftok(f) {
        var k = ((f - 32) * 5) / 9 + 273.15;
        return k;
    }

    function ktof(k) {
        var f = ((k - 273.15) * 9) / 5 + 32;
        return f;
    }
    document.getElementById("ksubmit").onclick = function () {
        document.getElementById("fpopup").value =
            "                                                                                                                                                                                                                                                                                                                                                                       " +
            document.getElementById("kinput").value +
            " degrees Kelvin is " +
            ktof(Number(document.getElementById("kinput").value)) +
            " degrees Fahrenheit";
    };
    document.getElementById("fsubmit").onclick = function () {
        document.getElementById("kpopup").value =
            "                                                                                                                                                                                                                                                                                                                                                                       " +
            document.getElementById("finput").value +
            " degrees Fahrenheit is " +
            ftok(Number(document.getElementById("finput").value)) +
            " degrees Kelvin";
    };
});
// Always add "window.addEventListener('DOMContentLoaded', (event) => {})""
