function compute()
{
    checkPrincipal = validatePrincipal();
    if (checkPrincipal == true) {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        interest = interest.toFixed(2);
        var actualYear = new Date().getFullYear() + parseInt(years);
        document.getElementById('result').innerHTML = 'If you deposit <span class="highlighted">$' +principal+ '</span>,<br/> at an interest rate of <span class="highlighted">' +rate+ '%</span>.<br/> You will receive an amount of <span class="highlighted">$' +interest+ '</span>, <br/> in the year <span class="highlighted">' +actualYear+ '</span>';
    }
}

function updateSlider()
{
    var rate = document.getElementById("rate").value;
    document.getElementById('slider_value').innerHTML = `${rate}%`;
}

function updateFromSlider()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("valueOfSlider").innerHTML = rate + "%";
}

function validatePrincipal()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number for the principal amount");
        document.getElementById("principal").focus();
        return false;
    }

    return true;
}
        