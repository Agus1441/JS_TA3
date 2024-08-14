function removeFromArray(arreglo, item){
    arreglo.splice(arreglo.indexOf(item),(arreglo.indexOf(item)))
    console.log(arreglo);
}

removeFromArray([2,3,4,5,6], 3)