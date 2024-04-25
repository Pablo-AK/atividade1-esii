## Descrição do Pull Request

Este pull request contém as implementações das funções implementadas na calculadora, conforme distribuídas entre os colaboradores.

### Colaboradores

- Pablo (@pablo)
- Ricardo (@ricardo)
- Felipe (@felipe)
- John (@john)

### Objetivo

O objetivo deste pull request é integrar as funcionalidades desenvolvidas por cada colaborador na branch principal do projeto, seguindo as boas práticas recomendadas GitFlow.

### Implementações

- Pablo: Função de soma
- Ricardo: Função de raiz quadrada
- Felipe: Função de subtração
- John: Função de multiplicação

-Pablo: Criação do Menu da calculadora

### Passos realizados por cada colaborador

1. Criou a branch de desenvolvimento `feature/xxx` a partir da branch `dev`
2. git switch -c feature/soma dev
3. Feita as alterações necessárias nos arquivos logo em seguida

- git status
- git add .
- git commit -m "Implementação da função xxxxx "

4. Feito o merge da branch de desenvolvimento na dev

- git switch dev
- git merge feature/soma

### Checklist

- [x] As alterações foram revisadas?
- [x] Os testes foram executados localmente?
- [x] Todos os testes passaram?
- [x] Funcionalidade extra

### Prints de Teste

![Teste de Soma](/imagens/funcao_soma.png)
![Teste de Raiz Quadrada](/imagens/funcao_raiz.png)
![Teste de Subtração](/imagens/funcao_sub.png)
![Teste de Multiplicação](/imagens/funcao_mult.png)
