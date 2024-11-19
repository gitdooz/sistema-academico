function lancar_notas(up1,up2){
  if (typeof entrada !== "number" || isNaN(Number(entrada))){
    if (numero.toString().includes('.') && numero.toString().split('.')[1].length > 2){
      if(up1>=0 && up1<=10 && up2 >= 0 && up2 <= 10){
        const nota1 = parseFloat(up1);
        const nota2 = parseFloat(up2);
        return "Notas salvas com sucesso";
      }
      else{
        throw new Error("Nota de 1UP inválida")
      }
    }
    else{
      throw new Error("Nota de 1UP inválida.")
    }
  }
  else{
    throw new Error("Entradas devem ser numéricas.")
  }
}

const numero = 123.456;

module.exports={lancar_notas}