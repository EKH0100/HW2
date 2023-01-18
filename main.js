document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("button1").addEventListener("click", function () {

        let numOne = document.getElementById("textbox1").value;
        let numTwo = document.getElementById("textbox2").value;
        let numThree = document.getElementById("textbox3").value;
        let total = parseInt(numOne) + parseInt(numTwo) + parseInt(numThree);
        let Average = total/3;
        document.querySelector('#result').textContent = Average;
    });
});

