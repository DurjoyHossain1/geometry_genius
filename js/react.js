function calculateRectangleFunction(){
   const reactLengthInput = document.getElementById('rect-length');
   const reactLengthText = parseFloat(reactLengthInput.value);
   console.log(reactLengthText);

   const reactWidthInput = document.getElementById('rect-width');
   const reactWidthText = parseFloat(reactWidthInput.value);
   console.log(reactWidthText);

   const areaReact = reactLengthText * reactWidthText;
   console.log(areaReact);

   const areaTextSpan = document.getElementById('area-react-span');
   areaTextSpan.innerText = areaReact
}
