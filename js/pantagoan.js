function calculatePantagoan(){
    const pose = patagoan('pantagoan-pose');
    console.log(pose);

    const base = patagoan('pantagoan-base');
    console.log(base);

    const area = .5 * pose * base;

    const areaSpan = spanText('pentagon-area',area)
}


function patagoan(item){

    const pantagoanInput = document.getElementById(item);
    const pantagoantext = pantagoanInput.value;
    const pantagoan = parseFloat(pantagoantext);
    return pantagoan;

}

function spanText (text,val){
    const textSpan =  document.getElementById(text);
    textSpan.innerText = val;
}