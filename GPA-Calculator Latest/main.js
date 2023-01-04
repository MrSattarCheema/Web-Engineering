function fun2(){
    let gpa1 = document.getElementById('2gpa1').value;
    gpa1 = parseFloat(gpa1)
    let ch1 = document.getElementById('2ch1').value;
    ch1 = parseFloat(ch1)
    let gpa2 = document.getElementById('2cgpa').value;
    gpa2 = parseFloat(gpa2)
    let ch2 = document.getElementById('2ch2').value;
    ch2 = parseFloat(ch2)
    console.log(ch1, ch2, gpa1, gpa2);
    let chTotal = ch1 + ch2;
    if (gpa1 > 4 || gpa2 > 4) {
        document.getElementById('1stGPA').innerHTML = "Please Enter correct GPA";
    }

    else {
        let final = ((gpa2 * chTotal) - (gpa1 * ch1)) / ch2;
        console.log(final);
        final=final.toFixed(3)
        document.getElementById('1stGPA').innerHTML = final;
    }
}
function fun3() {
    let gpa1 = document.getElementById('3gpa1').value;
    gpa1 = parseFloat(gpa1)
    let ch1 = document.getElementById('3ch1').value;
    ch1 = parseFloat(ch1)
    let gpa2 = document.getElementById('3gpa2').value;
    gpa2 = parseFloat(gpa2)
    let ch2 = document.getElementById('3ch2').value;
    ch2 = parseFloat(ch2)
    let ch3 = document.getElementById('3ch3').value;
    ch3 = parseFloat(ch3)
    let total = document.getElementById('3cgpa').value;
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
        final=final.toFixed(3);
        document.getElementById('3rdGPA').innerHTML = final;
    }
}
function fun4() {
    let gpa1 = document.getElementById('4gpa1').value;
    gpa1 = parseFloat(gpa1)
    let ch1 = document.getElementById('4ch1').value;
    ch1 = parseFloat(ch1)
    let gpa2 = document.getElementById('4gpa2').value;
    gpa2 = parseFloat(gpa2)
    let ch2 = document.getElementById('4ch2').value;
    ch2 = parseFloat(ch2)
    let gpa3=document.getElementById('4gpa3').value;
    gpa3=parseInt(gpa3);
    let ch3 = document.getElementById('4ch3').value;
    ch3 = parseFloat(ch3)
    let ch4 = document.getElementById('4ch4').value;
    ch4 = parseFloat(ch4)
    let total = document.getElementById('4cgpa').value;
    total = parseFloat(total)
    console.log(ch1, ch2, ch3, gpa1, gpa2, total);
    let chTotal = ch1 + ch2 + ch3 + ch4;
    console.log(chTotal);
    if (gpa1 > 4 || gpa2 > 4) {
        document.getElementById('gp').innerHTML = "Please Enter correct GPA";
    }

    else {
        let final = ((total * chTotal) - (gpa1 * ch1) - (gpa2 * ch2) -(gpa3*ch3)) / ch4;
        console.log(final);
        final=final.toFixed(3);
        document.getElementById('4thGPA').innerHTML = final;
    }
}

function fun5() {
    let gpa1 = document.getElementById('5gpa1').value;
    gpa1 = parseFloat(gpa1)
    let ch1 = document.getElementById('5ch1').value;
    ch1 = parseFloat(ch1)
    let gpa2 = document.getElementById('5gpa2').value;
    gpa2 = parseFloat(gpa2)
    let ch2 = document.getElementById('5ch2').value;
    ch2 = parseFloat(ch2)
    let gpa3=document.getElementById('5gpa3').value;
    gpa3=parseInt(gpa3);
    let ch3 = document.getElementById('5ch3').value;
    ch3 = parseFloat(ch3)
    let gpa4 = document.getElementById('5gpa4').value;
    gpa4 = parseFloat(gpa4)    
    let ch4 = document.getElementById('5ch4').value;
    ch4 = parseFloat(ch4)
    let ch5 = document.getElementById('5ch5').value;
    ch5 = parseFloat(ch5)    
    let total = document.getElementById('5cgpa').value;
    total = parseFloat(total)
    console.log(ch1, ch2, ch3, gpa1, gpa2, total);
    let chTotal = ch1 + ch2 + ch3 + ch4 + ch5;
    console.log(chTotal);
    if (gpa1 > 4 || gpa2 > 4) {
        document.getElementById('gp').innerHTML = "Please Enter correct GPA";
    }

    else {
        let final = ((total * chTotal) - (gpa1 * ch1) - (gpa2 * ch2) -(gpa3*ch3) -(gpa4*ch4)) / ch5;
        console.log(final);
        final=final.toFixed(3);
        document.getElementById('5thGPA').innerHTML = final;
    }
}