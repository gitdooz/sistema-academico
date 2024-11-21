# Sistema Acadêmico
Alunos:
[Osmar Pereira de Menezes](https://www.linkedin.com/in/osmar-menezes-8b8297246/)
[Matheus José Dantas](https://www.linkedin.com/in/matheusjdantas/)
[Marcos Vinícius Nunes](https://www.linkedin.com/in/marcos-vinícius-83284526b/)

![image](https://github.com/user-attachments/assets/8ea5c14c-f9fe-44d8-ba2a-b97817da453b)

## Descrição do Projeto

Este é um exercício prático de desenvolvimento colaborativo que simula um ambiente real de trabalho utilizando práticas ágeis como *TDD* (*Test-Driven Development*), *Code Review* e *CI* (*Continuous Integration*). O objetivo principal é desenvolver um **Sistema Acadêmico** básico, composto por três módulos interdependentes, com validação rigorosa de entradas, testes automatizados e integração contínua configurada via **GitHub Actions**.

---

## Estrutura do Projeto

O projeto é dividido em três módulos:

1. **Módulo de Lançamento de Notas (`lancamentoNotas.js`)**  
   - Responsável por validar e armazenar as notas do aluno (1UP e 2UP).  
   - Regras de validação:
     - As notas devem ser números decimais entre **0.0 e 10.0**, com **uma única casa decimal**.
     - Entradas inválidas geram erros com mensagens específicas.

2. **Módulo de Cálculo de Média (`calcularMedia.js`)**  
   - Calcula a média do aluno com base nas notas validadas.  
   - Fórmula:  
     ```text
     média = (1UP + 2UP) / 2
     ```
   - A média deve estar no intervalo de **0.0 a 10.0**.

3. **Módulo de Status do Aluno (`statusAluno.js`)**  
   - Determina o status do aluno com base na média:  
     - **Média < 4.0**: "Reprovado por média".  
     - **Média >= 6.0**: "Aprovado por média".  
     - **Média entre 4.0 e 6.0 (inclusivo 4.0 e exclusivo 6.0)**: "Aguardando a final".  
   - Retorna o status em uma mensagem formatada.
  
## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução.  
- **Jest**: Framework de testes automatizados.  
- **GitHub Actions**: Configuração de CI para testes automatizados.

---

## Como exectuar os testes

**Pré-requisitos**
- Node.js: Certifique-se de que o Node.js está instalado em sua máquina. Você pode baixá-lo em nodejs.org.

1. Instalar o Jest
Se ainda não instalou o Jest, siga as etapas abaixo:

- No terminal, navegue até o diretório do seu projeto.
- Instale o Jest com o comando:
```text
npm install --save-dev jest
```
2. Configurar o JSON
Embora o Jest funcione automaticamente na maioria das configurações, você pode configurar algumas opções no package.json:

- Adicione um script para rodar tests:
```text
"scripts": {
  "test": "jest"
}
```

**Passo a passo**
1. Clone o seu repositório
     ```text
     git clone <url-do-repositório>
     ```
2. Navegue até o repositório do projeto
     ```text
    cd <caminho-para-diretório>
     ```
3. Instale as dependências do projeto
     ```text
     npm install
     ```
4. Execute os testes no JavaScript Debug Terminal
     ```text
     npm test
     ```

---

Centro Universitário Tiradentes - UNIT PE
Profª Rafaella Chrystiane de Moura Matos - Turma E03
