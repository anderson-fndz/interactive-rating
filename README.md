# interactive-rating
Programa que recebe a avaliação do usuário e logo após "redireciona" para uma página de obrigado

## Imagens do projeto:
![image](https://github.com/anderson-fndz/interactive-rating/assets/103613700/acbc20df-9a7d-4daf-afe7-d5cb6328ad81)

Aqui o inpt tá marcado como *checked* e o hover:
![image](https://github.com/anderson-fndz/interactive-rating/assets/103613700/33280304-169a-4ddc-9cfc-3cd85346b7ee)

Resultado da interação com o input de valor 1 marcado:
![image](https://github.com/anderson-fndz/interactive-rating/assets/103613700/4d1dc6d1-0cf8-4849-833c-860397b41620)
## Processo:
- **HTML e CSS**: Primeiro construi o esqueleto do projeto e logo após estilizei, bem tranquilo
- **Page Thank-You**: Depois de fazer a base, parti para criar a página de obrigado para aparecer logo após o usuário clicar em "Submit", e consegui, foi o mesmo processo da primeira parte, dupliquei o container e fiz umas modificações
- **JavaScript**: Parti para o JS para poder criar uma funcionalidade que logo que clicar em SUBMIT o primeiro container sumisse e aparecesse o container da página "Thank You", foi algo simples que já tinha em mente, adicionei o evento *onclick* e uma **function** e usando os atributos position e display posicionei o container da avaliação por cima do Thank You com *position: absolute* e fiz com que também sumisse usando *display: none* <br>
        - Outra funcionalidade que adicionei seguindo esse racioncinio foi que na página "Thank You" aparecesse o valor da avaliação que o usuário escolher, e para isso era necessário mais manipulação do DOM, com um pouco de pesquisa escolhi em criar um parágrafo vazio e estilizado e assim que o SUBMIT for acionado ele aparecesse com a mensagem pronta, deu certo. <br>
        - Porém, quis fazer com que os circulos onde tavam as opções de avaliação fosse interativos e quando clicado ficassem marcados e com uma cor laranja de background, e par isso subtitui os span por inputs do tipo radio, e ai criei labels em volta para poder mudar de cor quando o input estiver *checked*, depois coloquei display none nos input para ficar só com os labels. <br>
        - Com a funcionalidade de *checked* seria interessante com que na mensagem de obrigado aparecesse o valor da avaliação de acordo com o input marcado, e para isso eu estou trabalhando e tendo dificuldades. <br>
        - Depois de quebrar muito a cabeça tentando atribuir valores aos input, e com uma funcinalidade na cabeça, tentei por passar esse problema por outro jeito, ao invés de resgatar os valores de cada input com o click do botão SUBMIT que era meu plano no começo, decidi que iria adiciona o evento *onclik* para cada input e junto com esse evento atribuir um valor e criando uma variável para armazenar esse valor, assim cada vez que o evento é acionado o valor identificado no evento do input é armazenado na variável que por sua vez modifica o html da mensagem da página Thank You usando o DOM, e junto com o botão que aplica display none para o container, faz o projeto ficar quase totalmente concluido

### Continuidade do projeto:
Não quero mer dar por vencido, ainda quero conseguir capturar os valore de cada input, eu até que consegui, mas só de apenas um por vez, não cosnegui criar um verificador par poder ver qual input tá marcado e ai pegar esse valor e armazenar numa variável, até pensei em usar a estrutura repititva *for* e ai armazenar o grupo de radio com o mesmo *name* e contabilizando o número de cada radio, com o *lenght* e ai criando o *for* para ir passando em cada input, como uma lista e ir verificando qual está *checked* e ai pegar o valor do input e guardar.

## O que aprendi:
Nesse processo todo de tentar capturar os valores dos próprios inputs, eu consegui aprender bastante sobre input e labels, e como function e suas variáveis funcinoam, e claro percebi que com esforço e dedicação eu consigo achar a solução de projetos, podem não sair exatamente como pensado, mas sai algo funcinoal, seguindo o objetivo que foi estipulado desde o começo.
