document.getElementById('blogBtn').addEventListener('click', function () {
    window.location.href='../blog.html'
})
function changeBgRandomColor(cardId) {
    document.getElementById(cardId).addEventListener('mouseenter', function () {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById(cardId).style.backgroundColor = '#' + randomColor;
        
    })
    
}

changeBgRandomColor('triangleCard');



   

let count = 0;


//triangle
// uItriangle

document.getElementById('triangleBtn').addEventListener('click', function () {
    count=count+1
    const name = getTextFromTextFeild('triangleHeading');
    const uItriangleB = getInputFeildValue('inputFeildForB');
    const uItriangleH = getInputFeildValue('inputFeildForH');
    if (isNaN(uItriangleB)) {
        alert('input a Number');
        return;
        
    }
    else if (uItriangleB < 0) {
        alert('Positive Number Only')
        return;
    }
    if (isNaN(uItriangleH)) {
        alert('input a Number');
        return;
    }
    else if (uItriangleH < 0) {
        alert('Positive Number Only')
        return;
    }
    const area = parseFloat((0.5 * uItriangleB * uItriangleH).toFixed(2));
     setValueInTable(count,name,area)
})
// Rectangle
document.getElementById('rectangleBtn').addEventListener('click', function () {
    count=count+1
    const name = getTextFromTextFeild('rectangleHeading');
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
    const area = parseFloat((width * length).toFixed(2)) ;
     setValueInTable(count,name,area)
})
console.log(count);

// parallelogram

hideAndDisplay('parallelogrameditBtn', 'parallelogrameditOnBtn')

document.getElementById('parallelogrameditSaveValue').addEventListener('click', function () {

    const uIparallelogramB=getInputFeildValue('inputFeildForparallelogramB')
    const uIparallelogramH = getInputFeildValue('inputFeildForparallelogramH')
 
    if (isNaN(uIparallelogramB)) {
        alert('input a Number');
        return;
        
    }
    else if (uIparallelogramB < 0) {
        alert('Positive Number Only')
        return;
    }
    if (isNaN(uIparallelogramH)) {
        alert('input a Number');
        return;
    }
    else if (uIparallelogramH < 0) {
        alert('Positive Number Only')
        return;
    }
    else {
        document.getElementById('pB').innerText = uIparallelogramB;
        document.getElementById('pH').innerText = uIparallelogramH;
    }
    
    
})

document.getElementById('ParallelogramBtn').addEventListener('click', function () {
    count = count + 1;
    const name = getTextFromTextFeild('ParallelogramHeading');
    const parallelogramb = getValueFromTextFeild('pB');
    const parallelogramh = getValueFromTextFeild('pH');
    const area = parseFloat((parallelogramb * parallelogramh).toFixed(2)) ;
  setValueInTable(count,name,area)
})

//rhombus 
hideAndDisplay('rhombusOnBtn', 'rhombusdltBtn')

document.getElementById('rhombusSaveValue').addEventListener('click', function () {

    const uIrhombusd1=getInputFeildValue('inputFeildrhombusd1')
    const uIrhombusd2 = getInputFeildValue('inputFeildrhombusd2')
 
    if (isNaN(uIrhombusd1)) {
        alert('input a Number');
        return;
        
    }
    else if (uIrhombusd1 < 0) {
        alert('Positive Number Only')
        return;
    }
    if (isNaN(uIrhombusd2)) {
        alert('input a Number');
        return;
    }
    else if (uIrhombusd2 < 0) {
        alert('Positive Number Only')
        return;
    }
    else {
        console.log(uIrhombusd1,uIrhombusd2);
        document.getElementById('rhombusd1').innerText = uIrhombusd1;
        document.getElementById('rhombusd2').innerText = uIrhombusd2;
    }
    
    
})

document.getElementById('rhombusBtn').addEventListener('click', function () {
    console.log('clicled');
    count = count + 1;
    const name = getTextFromTextFeild('rhombusHeading');
    const rhombusd1 = getValueFromTextFeild('rhombusd1');
    const rhombusd2 = getValueFromTextFeild('rhombusd2');
    const area = parseFloat((0.5 * rhombusd1 * rhombusd2).toFixed(2));
  setValueInTable(count,name,area)
})
// pentagon 

hideAndDisplay('pentagonOnBtn', 'pentagondltBtn')

document.getElementById('pentagonSaveValue').addEventListener('click', function () {

    const uIpentagonp=getInputFeildValue('inputFeildpentagonP')
    const uIpentagonb = getInputFeildValue('inputFeildpentagonB')
 
    if (isNaN(uIpentagonp)) {
        alert('input a Number');
        return;
        
    }
    else if (uIpentagonp < 0) {
        alert('Positive Number Only')
        return;
    }
    if (isNaN(uIpentagonb)) {
        alert('input a Number');
        return;
    }
    else if (uIpentagonb < 0) {
        alert('Positive Number Only')
        return;
    }
    else {
        document.getElementById('pentagonP').innerText = uIpentagonp;
        document.getElementById('pentagonB').innerText = uIpentagonb;
    }
    
    
})

document.getElementById('pentagonBtn').addEventListener('click', function () {
    count = count + 1;
    const name = getTextFromTextFeild('pentagonHeading');
    const upentagonp = getValueFromTextFeild('pentagonP');
    const ipentagonb = getValueFromTextFeild('pentagonB');
    const area = parseFloat((0.5 * upentagonp * ipentagonb).toFixed(2));
  setValueInTable(count,name,area)
})

//ellipse



hideAndDisplay('ellipseOnBtn', 'ellipsedltBtn')

document.getElementById('ellipseSaveValue').addEventListener('click', function () {

    const uIellipseA=getInputFeildValue('inputFeildEllipseA')
    const uIellipseB = getInputFeildValue('inputFeildEllipseB')
 
    if (isNaN(uIellipseA)) {
        alert('input a Number');
        return;
        
    }
    else if (uIellipseA < 0) {
        alert('Positive Number Only')
        return;
    }
    if (isNaN(uIellipseB)) {
        alert('input a Number');
        return;
    }
    else if (uIellipseB < 0) {
        alert('Positive Number Only')
        return;
    }
    else {
        document.getElementById('ellipseA').innerText = uIellipseA;
        document.getElementById('ellipseB').innerText = uIellipseB;
    }
    
    
})

document.getElementById('ellipseBtn').addEventListener('click', function () {
    count = count + 1;
    const name = getTextFromTextFeild('ellipseHeading');
    const uellipseA=getValueFromTextFeild('ellipseA')
    const IellipseB = getValueFromTextFeild('ellipseB');
    const area = parseFloat((3.1416 * uellipseA * IellipseB).toFixed(2));
  setValueInTable(count,name,area)
})