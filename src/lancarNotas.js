function lancar_notas(up1,up2){
  if (typeof(up1) !== 'number' || typeof(up2) !== 'number') {
      throw new Error('Erro: "Entradas devem ser numéricas"')
  }
  if (up1 < 0 || up1 > 10) {
      throw new Error('Erro: "Nota de 1UP inválida"')
  }
  if (!(up1 % 1 !== 0 && Math.floor(up1 * 10) / 10 === up1)) {
      throw new Error('Erro: "Nota de 1UP inválida"')
  }
  if (up2 < 0 || up2 > 10) {
      throw new Error('Erro: "Nota de 2UP inválida"')
  }
  if (!(up2 % 1 !== 0 && Math.floor(up2 * 10) / 10 === up2)) {
      throw new Error('Erro: "Nota de 2UP inválida"')
  }
  return "Notas salvas com sucesso"
}

module.exports={lancar_notas}