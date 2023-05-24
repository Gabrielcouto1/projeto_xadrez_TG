# Trabalho Final de Teoria dos Grafos

#### Explorador de Aberturas de Xadrez
***
## Integrantes
* Ana Bárbara Campos Conti
* Gabriel Couto de Freitas
* Vitor Gomes Reis

***

## Descrição do programa
O programa dispõe de um banco de dados de jogadas iniciais de xadrez, permitindo o usuário a simular e explorar jogadas com fins de estudo.

***
## Funcionamento
O app inicia na tela inicial, que dispõe dois botões que redirecionam para outras páginas. 
O primeiro botão leva à página de exploração da árvore, que é composta por 12 botões com nomes de aberturas. Ao pressionar algum deles, 12 outros botões aparecem com nome de 12 respostas à primeira jogada, e isso se repete mais uma vez.
O segundo botão leva à página de simulação, que dispõe de um tabuleiro jogável. A cada jogada, se for conhecida, ele mostra na tela suas informações.

***
## Dificuldades enfrentadas
Tendo em vista o tamanho da árvore, tivemos dificuldade em povoar a árvore, porém nada que fosse um impedimento.

***
### Passo a passo para executar e testar o projeto:

1. Baixe o repositório no seu computador;
2. Se tiver Docker instalado em seu computador, abra o terminal na pasta src e rode o comando ```sudo docker build . -t projetoxadrez```;
3. Em seguida digite ```sudo docker run -d -p 80:80 --name projetoxadrez projetoxadrez```;
4. Abra seu navegador e entre em [localhost](localhost).
5. Para parar o container, digite ```sudo docker stop projetoxadrez```
6. Para rodar novamente o containter, digite ```sudo docker start projetoxadrez``` e retorne ao passo 4
7. O projeto atualmente está rodando em uma instância EC2 na AWS, e para acessar basta entrar em [184.72.173.89](184.72.173.89) (sujeito a estar desligado devido a custos da AWS)

***
### Tecnologias utilizadas
- JavaScript
- HTML
- CSS
- Docker
- AWS instância EC2
***
### Referências
https://lichess.org/
https://chessboardjs.com/
http://www.chesstree.net/
