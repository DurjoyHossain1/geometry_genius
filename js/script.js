function calculateFunctionArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const base = parseFloat(triangleBaseInput.value);

    const triangleHeightInput = document.getElementById('tringle-height');
    const height = parseFloat(triangleHeightInput.value);

    const ease = .5 * base * height;

   const areaSpanText =  document.getElementById('area-span');
   areaSpanText.innerText = ease;
};
