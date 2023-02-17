document.getElementById('blogBtn').addEventListener('click', function () {
    window.location.href='../blog.html'
})





   

let count = 0;
//triangleBtn


document.getElementById('triangleBtn').addEventListener('click', function () {
    count=count+1
    const name = getTextFromTextFeild('triangleHeading');
    const B = getInputFeildValue('inputFeildForB');
    const H = getInputFeildValue('inputFeildForH');
    if (isNaN(B)) {
        alert('input a Number');
        return;
        
    }
    else if (B < 0) {
        alert('Positive Number Only')
        return;
    }
    if (isNaN(H)) {
        alert('input a Number');
        return;
    }
    else if (H < 0) {
        alert('Positive Number Only')
        return;
    }
    const area = 0.5 * B * H;
     setValueInTable(count,name,area)
})
// Rectangle
document.getElementById('rectangleBtn').addEventListener('click', function () {
    count=count+1
    const name = getTextFromTextFeild('triangleHeading');
    const width = getInputFeildValue('inputFeildForWidth');
    const length= getInputFeildValue('inputFeildForLength');
    if (isNaN(width)) {
        alert('input a Number');
        return;
        
    }
    else if (width < 0) {
        alert('Positive Number Only')
        return;
    }
    if (isNaN(length)) {
        alert('input a Number');
        return;
    }
    else if (length < 0) {
        alert('Positive Number Only')
        return;
    }
    const area = width * length;
     setValueInTable(count,name,area)
})
console.log(count);

// parallelogramedit
hideAndDisplay('parallelogrameditBtn', 'parallelogrameditOnBtn')

document.getElementById('parallelogrameditSaveValue').addEventListener('click', function () {

    const inputB=getInputFeildValue('inputFeildForparallelogramB')
    const inputH = getInputFeildValue('inputFeildForparallelogramH')
 
    if (isNaN(inputB)) {
        alert('input a Number');
        return;
        
    }
    else if (inputB < 0) {
        alert('Positive Number Only')
        return;
    }
    if (isNaN(inputH)) {
        alert('input a Number');
        return;
    }
    else if (inputH < 0) {
        alert('Positive Number Only')
        return;
    }
    else {
        console.log(inputB,inputH);
        document.getElementById('pB').innerText = inputB;
        document.getElementById('pH').innerText = inputH;
    }
    
    
})

document.getElementById('ParallelogramBtn').addEventListener('click', function () {
    count = count + 1;
    const name = getTextFromTextFeild('ParallelogramHeading');
    const b = getValueFromTextFeild('pB');
    const h = getValueFromTextFeild('pH');
    const area = b * h;
  setValueInTable(count,name,area)
})
