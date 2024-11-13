const {lancar_notas}=require("../src/funcoes")

describe('LNCRNTS01', () => {
  test('Deve retornar notas entre 0.0 e 10.0', () => {
    expect(()=>lancar_notas(7.5,8.2)).toThrow("Erro: As notas devem estar entre 0.0 e 10.0 com uma casa decimal.");
  });
});
