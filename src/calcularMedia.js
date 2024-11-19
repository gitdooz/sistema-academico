function calcularMedia(up1,up2){
  if(up1>=0 && up1<=10 && up2 >= 0 && up2 <= 10){
    return (up1+up2)/2
  }
  else{
    throw new Error("Notas inválidas.");
  }
}

module.exports={calcularMedia}