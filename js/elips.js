function calculateElipsFunction(){

const ases = elips('elips-aese');

const height = elips ('elips-height');


const area = 3.1416 * ases + height;

const spantext = textSpan('span-Area',area);


};


function elips(items){

    const elipsInput = document.getElementById(items)
    const elipstext = elipsInput.value;
    const elips = parseFloat(elipstext);
    return elips

};

function textSpan (text,val){
    const textSpanArea = document.getElementById(text);
    textSpanArea.innerText = val;
}