const convertFahrenhit=()=>{
    var celsius=parseFloat(document.querySelector('#celsius').value);
    var fahrenhitResult=(1.8*celsius)+32;
    var a=fahrenhitResult.toFixed(2);
    document.querySelector('#celsius').value=celsius;
    document.querySelector('#fahrenhit').value=a;
}

const convertCelsius=()=>{
    var fahrenhit=parseFloat(document.querySelector('#fahrenhit').value);
    var celsiusResult=(fahrenhit-32)/1.8;
    var b=celsiusResult.toFixed(2);
    document.querySelector('#fahrenhit').value=fahrenhit;
    document.querySelector('#celsius').value=b;
}

const reset=()=>{
    document.querySelector('#fahrenhit').value=" ";
    document.querySelector('#celsius').value=" ";
}