function calculateRombosh(){

    const base = rombosh('romboush-base');
    console.log(base);

    const base2 = rombosh('rombosh=base2');

   const total = .5 * base * base2;
  
   const AreaSpan = romboshText('rombosh-area',total);


}


function rombosh(dets){
    const romboshInput = document.getElementById(dets);
    const romboshtext = romboshInput.value;
    const romboshNum = parseFloat(romboshtext);
    return romboshNum;
}

function romboshText (text,val){
    const romboshSpan = document.getElementById(text);
    romboshSpan.innerText = val;
}