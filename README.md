# interactive-rating
Programa que recebe a avaliação do usuário e logo após "redireciona" para uma página de obrigado

## Processo:
- **HTML e CSS**: Primeiro construi o esqueleto do projeto e logo após estilizei, bem tranquilo
- **Page Thank-You**: Depois de fazer a base, parti para criar a página de obrigado para aparecer logo após o usuário clicar em "Submit", e consegui, foi o mesmo processo da primeira parte, dupliquei o container e fiz umas modificações
- **JavaScript**: Parti para o JS para poder criar uma funcionalidade que logo que clicar em SUBMIT o primeiro container sumisse e aparecesse o container da página "Thank You", foi algo simples que já tinha em mente, adicionei o evento *onclick* e uma **function** e usando os atributos position e display posicionei o container da avaliação por cima do Thank You com *position: absolute* e fiz com que também sumisse usando *display: none* <br>
        - Outra funcionalidade que adicionei seguindo esse racioncinio foi que na página "Thank You" aparecesse o valor da avaliação que o usuário escolher, e para isso era necessário mais manipulação do DOM, com um pouco de pesquisa escolhi em criar um parágrafo vazio e estilizado e assim que o SUBMIT for acionado ele aparecesse com a mensagem pronta, deu certo. <br>
        - Porém, quis fazer com que os circulos onde tavam as opções de avaliação fosse interativos e quando clicado ficassem marcados e com uma cor laranja de background, e par isso subtitui os span por inputs do tipo radio, e ai criei labels em volta para poder mudar de cor quando o input estiver *checked*, depois coloquei display none nos input para ficar só com os labels. <br>
        - Com a funcionalidade de *checked* seria interessante com que na mensagem de obrigado aparecesse o valor da avaliação de acordo com o input marcado, e para isso eu estou trabalhando e tendo dificuldades.
