function getInputFeildValue(inputFeildId) {
    const inputFeildElement = document.getElementById(inputFeildId);
    const InputFeildValueAsString = inputFeildElement.value;
    inputFeildElement.value = ''
    const inputFeildValue = parseFloat(InputFeildValueAsString);
     return inputFeildValue;
    
 
}

function getTextFromTextFeild(textFeildId) {
    const textFeildElement = document.getElementById(textFeildId);
    const textFeildvalue = textFeildElement.innerText;
    return textFeildvalue;
    
}


function getValueFromTextFeild(textFeildId) {
    const textFeildElement = document.getElementById(textFeildId);
    const textFeildvalueAsString = textFeildElement.innerText;
    const textFeildvalue = parseFloat(textFeildvalueAsString);
    return textFeildvalue;
    
}

function setTextFeildValue(textFeildId, value) {
    const textFeildElement = document.getElementById(textFeildId);
    const textFeildvalue = textFeildElement.innerText;
    textFeildvalue.innerText = value;
}



function setValueInTable(count,Pname,area) {
    const tbody = document.getElementById('tableBody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${Pname}</td>
    <td>${area} cm<sup>2</sup></suP></td>
    <td><button class="  px-3 py-1  rounded-md  text-white bg-blue-500 border-none hover:bg-blue-600">Covert <span>m<sup>2</sup></span> </suP></button></td>
    
    `
    tbody.appendChild(tr)
}




function hideAndDisplay(targetEementid,btnId,) {
    const element = document.getElementById(targetEementid);

    
    document.getElementById(btnId).addEventListener('click', function () {
        if (element.style.display != "block") {
            
            element.style.display='block'
        }
        else {
            element.style.display = 'none';
        }

    })
}

function changeBgRandomColor(cardId) {
    document.getElementById(cardId).addEventListener('mouseenter', function () {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById(cardId).style.backgroundColor = '#' + randomColor;
        
    })
    
}