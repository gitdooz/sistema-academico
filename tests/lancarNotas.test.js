const {lancar_notas}=require("../src/lancarNotas")

describe('Testes de Lançar Notas no Sistema', () => {
  test('Nota válida de 1UP e 2UP', () => {
    expect(lancar_notas(7.5,8.2)).toBe("Notas salvas com sucesso");
  }); 

  test('Nota de 1UP fora do intervalo".', ()=> {
    expect(()=> lancar_notas(-1.0,8.2).toThrow("Nota de 1UP inválida"))
  });

  test('Nota de 2UP fora do intervalo', ()=>{
    expect(()=>lancar_notas(7,5,12).toThrow("Nota de 2UP inválida"))
  });

  test('Nota de 1UP com mais de uma casa decimal', ()=> {
    expect(()=>lancar_notas(7.5,8.2).toThrow("Nota de 1UP inválida"));
  })

  test('Nota de 2UP com mais de uma casa decimal', ()=>{
    expect(()=>lancar_notas(7.5,8.256).toThrow("Nota de 2UP inválida"))
  });

  test('Entradas não numéricas.', ()=>{
    expect(()=>lancar_notas("sete ").toThrow("Entradas devem ser númericas."))
  })
});
