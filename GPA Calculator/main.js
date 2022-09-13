function fun() {
    let gpa1 = document.getElementById('gpa1').value;
    gpa1 = parseFloat(gpa1)
    let ch1 = document.getElementById('ch1').value;
    ch1 = parseFloat(ch1)
    let gpa2 = document.getElementById('gpa2').value;
    gpa2 = parseFloat(gpa2)
    let ch2 = document.getElementById('ch2').value;
    ch2 = parseFloat(ch2)
    let ch3 = document.getElementById('ch3').value;
    ch3 = parseFloat(ch3)
    let total = document.getElementById('total').value;
    total = parseFloat(total)
    console.log(ch1, ch2, ch3, gpa1, gpa2, total);
    let chTotal = ch1 + ch2 + ch3;
    console.log(chTotal);
    if (gpa1 > 4 || gpa2 > 4) {
        document.getElementById('gp').innerHTML = "Please Enter correct GPA";
    }

    else {
        let final = ((total * chTotal) - (gpa1 * ch1) - (gpa2 * ch2)) / ch3;
        console.log(final);
        document.getElementById('gp').innerHTML = final;
    }
}