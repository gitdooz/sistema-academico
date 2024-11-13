function lancar_notas(up1,up2){
  if(up1>=0.0 && up1<=10.0 && up2 >= 0.0 && up2 <= 10.0){
    const nota1 = parseFloat(up1);
    const nota2 = parseFloat(up2);
    return true;
  }
  else{
    throw new Error("Erro: As notas devem estar entre 0.0 e 10.0 com uma casa decimal.")
  }
}

module.exports={lancar_notas}