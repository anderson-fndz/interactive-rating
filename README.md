# interactive-rating
Programa que recebe a avaliação do usuário e logo após "redireciona" para uma página de obrigado. <br>
link do projeto: https://anderson-fndz.github.io/interactive-rating/


## Imagens do projeto:
![image](https://github.com/anderson-fndz/interactive-rating/assets/103613700/acbc20df-9a7d-4daf-afe7-d5cb6328ad81)

Mensagem de Erro quando não é marcado nenhuma opção:
![image](https://github.com/anderson-fndz/interactive-rating/assets/103613700/8a5d9e79-ab7f-4298-af67-3c4e8fcb1880)


Aqui o inpt tá marcado como *checked* e o hover:
![image](https://github.com/anderson-fndz/interactive-rating/assets/103613700/33280304-169a-4ddc-9cfc-3cd85346b7ee)

Resultado da interação com o input de valor 1 marcado:
![image](https://github.com/anderson-fndz/interactive-rating/assets/103613700/4d1dc6d1-0cf8-4849-833c-860397b41620)
## Processo:
- **HTML e CSS**: Primeiro construi o esqueleto do projeto e logo após estilizei, bem tranquilo
- **Page Thank-You**: Depois de fazer a base, parti para criar a página de obrigado para aparecer logo após o usuário clicar em "Submit", e consegui, foi o mesmo processo da primeira parte, dupliquei o container e fiz umas modificações
- **JavaScript**: Parti para o JS para poder criar uma funcionalidade que logo que clicar em SUBMIT o primeiro container sumisse e aparecesse o container da página "Thank You", foi algo simples que já tinha em mente, adicionei o evento ``onclick`` e uma ``function()`` e usando os atributos ``position`` e ``display`` posicionei o container da avaliação por cima do Thank You com ``position: absolute`` e fiz com que também sumisse usando ``display: none`` <br>
        - Outra funcionalidade que adicionei seguindo esse racioncinio foi que na página "Thank You" aparecesse o valor da avaliação que o usuário escolher, e para isso era necessário mais manipulação do DOM, com um pouco de pesquisa escolhi em criar um ``<p>`` vazio e estilizado e assim que o SUBMIT for acionado ele aparecesse com a mensagem pronta, deu certo. <br>
        - Porém, quis fazer com que os circulos onde tavam as opções de avaliação fosse interativos e quando clicado ficassem marcados e com uma cor laranja de background, e par isso subtitui os ``span`` por ``inputs type="radio"``, e ai criei ``labels`` em volta para poder mudar de cor quando o input estiver ``checked``, depois coloquei `display none` nos input para ficar só com os labels. <br>
        - Com a funcionalidade de *checked* seria interessante com que na mensagem de obrigado aparecesse o valor da avaliação de acordo com o input marcado, e para isso eu estou trabalhando e tendo dificuldades. <br>
        - Depois de quebrar muito a cabeça tentando atribuir valores aos input, e com uma funcinalidade na cabeça, tentei resolver esse problema de outro jeito, ao invés de resgatar os valores de cada input com o click do botão SUBMIT que era meu plano no começo, decidi que iria adiciona o evento `onclik()` para cada input e junto com esse evento atribuir um valor e criando uma variável para armazenar esse valor, assim cada vez que o evento é acionado o valor identificado no evento do input é armazenado na variável que por sua vez modifica o html da mensagem da página Thank You usando o DOM, e junto com o botão que aplica display none para o container, faz o projeto ficar quase totalmente concluido

  - **No final**: eu consegui resolver criando um `form` e colocando cada `input` dentro com seus respectivos valores, e então criadno variáveis para o form e input, o display, e o texto que ia ser modificado na página de obrigado usando o DOM, e com isso adicionei o `addEventListener()` ao `button` e a partir dai comecei a validação dos valores, criando uma estrutura de repetição `for` para percorrer todo o `form` guardado na variável e assim assumindo um papel de matriz com todos os inputs e seus valores dentro, e ai criei a função `if()` para que verificasse se `input.checked === true` se sim o `input[index].value` seria guardado na variavel declarad, se `else()` seria contablizado para a variável declarada para armazenar e contar quantos inputs falsos tem, se os inputs falsos fossem = 5 aparece a mensagem de erro, esses foram os bugs e novoas implementações que adiconei e corrigi no projeto.

### Continuidade do projeto:
Não quero mer dar por vencido, ainda quero conseguir capturar os valore de cada input, eu até que consegui, mas só de apenas um por vez, não cosnegui criar um verificador par poder ver qual input tá marcado e ai pegar esse valor e armazenar numa variável, até pensei em usar a estrutura repititva `for` e ai armazenar o grupo de radio com o mesmo `name` e contabilizando o número de cada radio, com o `lenght` e ai criando o *for* para ir passando em cada input, como uma lista e ir verificando qual está `checked` e ai pegar o valor do input e guardar.

## O que aprendi:
- Nesse processo todo de tentar capturar os valores dos próprios inputs, eu consegui aprender bastante sobre input e labels, e como function e suas variáveis funcinoam, e claro percebi que com esforço e dedicação eu consigo achar a solução de projetos, podem não sair exatamente como pensado, mas sai algo funcinoal, seguindo o objetivo que foi estipulado desde o começo.
-  Aprendi muitas novas funções e melhorei minhas habilidades com JS, aprendi funções como o `forEach()`, usei de forma melhor as declarações de variáveis e mudando os escopos delas e aprendi a usar o `addEventListener()`, foi um bom aprendizado
