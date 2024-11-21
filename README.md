# Sistema Acadêmico
Alunos: Osmar Pereira de Menezes, Matheus José Dantas, Marcos Vinícius Nunes

![image](https://github.com/user-attachments/assets/8ea5c14c-f9fe-44d8-ba2a-b97817da453b)

## Descrição do Projeto

Este é um exercício prático de desenvolvimento colaborativo que simula um ambiente real de trabalho utilizando práticas ágeis como TDD (Test-Driven Development), Code Review e CI (Continuous Integration). O objetivo principal é desenvolver um **Sistema Acadêmico** básico, composto por três módulos interdependentes, com validação rigorosa de entradas, testes automatizados e integração contínua configurada via **GitHub Actions**.

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

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução.  
- **Jest**: Framework de testes automatizados.  
- **GitHub Actions**: Configuração de CI para testes automatizados.

##Como exectuar os testes

**Pré-requisitos**
- Node.js: Certifique-se de que o Node.js está instalado em sua máquina. Você pode baixá-lo em nodejs.org.


