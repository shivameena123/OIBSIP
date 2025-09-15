const btn = document.getElementById('convertBtn');
const res = document.getElementById('result');

btn.onclick = function() {
    const deg = document.getElementById('degreeInput').value;
    const unit = document.getElementById('typeSelect').value;
    const num = parseFloat(deg);

    if (isNaN(num)) {
        res.textContent = "Enter a valid number.";
        return;
    }

    let output = "";
    if (unit === "celsius") {
        output = (num * 9 / 5 + 32).toFixed(2) + " °F";
    } else {
        output = ((num - 32) * 5 / 9).toFixed(2) + " °C";
    }
    res.textContent = "Result: " + output;
}