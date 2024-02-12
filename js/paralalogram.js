function calculateParalaloGremFunction(){
    const base = paralaloGream('paralalogream-base');

    const height = paralaloGream('paralalogream-height');
    
    const area = base * height;
    console.log(area);

    const areas = paralalogreamText('paralalogream-area',area); 
}

function paralaloGream(inputVal){
    const paralalogreamInput = document.getElementById(inputVal);
    const paralalogreamText = paralalogreamInput.value;
    const paralalogream = parseFloat(paralalogreamText);
    return paralalogream;
}


function paralalogreamText (text,value) {
    const paralaloText = document.getElementById(text);
    paralaloText.innerText = value
}