const {lancar_notas}=require("../src/lancarNotas")
const {calcularMedia}=require("../src/calcularMedia")
const {obterStatus}=require("../src/obterStatus")

describe('Testes de Lançar Notas no Sistema', () => {
  test('Nota válida de 1UP e 2UP', () => {
    expect(lancar_notas(7.5,8.2)).toBe("Notas salvas com sucesso");
  }); 

  test('Nota de 1UP fora do intervalo".', ()=> {
    expect(()=> lancar_notas(-1.0,8.2).toThrow("Nota de 1UP inválida"));
  });

  test('Nota de 2UP fora do intervalo', ()=>{
    expect(()=>lancar_notas(7,5,12).toThrow("Nota de 2UP inválida"));
  });

  test('Nota de 1UP com mais de uma casa decimal', ()=> {
    expect(()=>lancar_notas(7.5,8.2).toThrow("Nota de 1UP inválida"));
  });

  test('Nota de 2UP com mais de uma casa decimal', ()=>{
    expect(()=>lancar_notas(7.5,8.256).toThrow("Nota de 2UP inválida"));
  });

  test('Entradas não numéricas.', ()=>{
    expect(()=>lancar_notas("sete ").toThrow("Entradas devem ser númericas."));
  });
});

describe('Testes para cálculo de média.',()=>{
  test('Notas válidas de 1UP e 2UP',()=>{
    expect(calcularMedia(7.0,8.0)).toBe(7.5);
  });
  
  test('Notas iguais de 1UP e 2UP',()=>{
    expect(calcularMedia(5.0,5.0)).toBe(5.0)
  });
  
  test('Nota mínima e máxima',()=>{
    expect(calcularMedia(0.0,10.0)).toBe(5.0);
  });

  test('Nota de 1UP no limite inferior',()=>{
    expect(calcularMedia(0.0,7.0)).toBe(3.5);
  });

  test('Nota de 2UP no limite superior',()=>{
    expect(calcularMedia(8.0,10.0)).toBe(9.0);
  });

  test('Notas inválidas(fora do intervalo)', ()=>{
    expect(()=>calcularMedia(-1.0,11.0).toThrow("Notas inválidas.")); 
  })
});

describe('Teste de verificação do status do aluno.',()=>{
  test('Média inferior a 4.0',()=>{
    expect(obterStatus(3.5)).toBe("Reprovado por média")
  });

  test('Média igual a 4.0', ()=>{
    expect(obterStatus(4.0)).toBe("Aguardando a final");
  });

  test('Média entre 4.0 e 6.0', ()=>{
    expect(obterStatus(5.5)).toBe("Aguardando a final");
  });

  test('Média igual a 6.0', ()=>{
    expect(obterStatus(6.0)).toBe("Aprovado por média");
  });

  test('Média superior a 6.0', ()=>{
    expect(obterStatus(7.5)).toBe("Aprovado por média");
  });

  test('Média no limite inferior (0.0)', ()=>{
    expect(obterStatus(0.0)).toBe("Reprovado por média");
  });
})
