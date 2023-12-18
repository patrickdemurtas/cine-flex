# Cine-Flex

## Descrição geral:

Este app consiste em um site para reserva e compra de ingressos para filmes em um cinema, onde há, a princípio, a lista de filmes disponíveis, as sessões existentes para cada filme escolhido, uma tela de assentos onde se pode escolher um ou mais assentos (com um esquema de cores para determinar se o assento está disponível/indisponível e/ou selecionado), tela de confirmação de compra e tela de sucesso exibindo as informações da compra.

## Funcionalidades:

- **Listagem de filmes**: a primeira tela carrega a lista de filmes disponíveis no cinema;

- **Listagem de sessões**: ao escolher um filme, o usuário poderá ver os horários das sessões disponíveis para o filme escolhido (dia da semana - dia do mês xx/xx/xxxx, seguido de botões clicáveis com os horários), além do rodapé exibindo o título e imagem do filme escolhido;

- **Seleção de assentos**: nesta tela, o usuário poderá selecionar os assentos que deseja comprar (há uma legenda de cores para determinar se o assento está disponível, indisponível ou se foi selecionado pelo usuário), não há limite para o número de assentos a serem selecionados, desde que estejam disponíveis; os assentos podem ser desselecionados/desmarcados se o usuário clicar uma segunda vez em algum que já esteja selecionado e selecionado novamente por um terceiro clique (e assim por diante), se for da vontade do usuário. Há dois espaços/forms para o usuário inserir o 'Nome do comprador' e 'CPF do comprador', seguidos por um botão para reservar os assentos escolhidos. esta tela exibe ainda, em seu rodapé, o título e imagem do filme, além de informações do dia da semana e horário da sessão;

- **Confirmação da compra**: tela de sucesso exibindo a confirmação da compra e suas informações: nome do filme e horário - data da sessão / ingressos comprados / dados do comprador fornecidos pelo próprio usuário na seleção de assentos. Há também, depois das informações citadas, um botão clicável para navegar de volta para a tela incial (listagem de filmes), caso o usuário queira fazer outra compra ou simplesmente olhar o catálogo de filmes novamente;

## Tecnologias/linguagens/bibliotecas utilizadas:

- React
- React Router Dom
- Axios
- Styled Components

## Como executar o projeto localmente:

- Instalar dependências: rodar o comando "npm install" no terminal para instalação das dependências;

- Seguir as instruções do arquivo .env.example situado na raíz do projeto;

- Após todas as etapas anteriores, executar o código com o comando "npm start", no terminal, para poder visualizar localmente a aplicação.

## Links do deploy funcional:

- https://projeto10-cineflex-novo.vercel.app/

- https://projeto10-cineflex-novo-patrickdemurtas.vercel.app/

- https://projeto10-cineflex-novo-git-main-patrickdemurtas.vercel.app/

## Sugestões:

Sugestões e contribuições são bem-vindas, assim como apontamento de bugs e melhorias de código.