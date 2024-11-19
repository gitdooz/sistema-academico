function obterStatus(media){
  if (media < 4.0) {
    return "Reprovado por média";
  }
  if (media >= 6.0) {
    return "Aprovado por média";
  }
  if (media >= 4.0 && media < 6.0) {
    return "Aguardando a final";
  }
}

module.exports={obterStatus}