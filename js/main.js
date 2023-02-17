document.getElementById('blogBtn').addEventListener('click', function () {
    window.location.href='../blog.html'
})

document.getElementById('parallelogrameditSaveValue').addEventListener('click', function () {
  console.log(document.getElementById('parallelogrameditSaveValue').value); 
})


hideAndDisplay('parallelogrameditBtn','parallelogrameditOnBtn')
   

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
