# Boas-vindas ao repositório de exercícios de MySQL funções mais utilizadas

Nesse exercício, utilizaremos as `funções mais utilizadas` do MySQL para encontrar informações dentro de um banco de dados. Bora lá?

Para desenvolver o exercício, você deverá seguir contidas nesse README. Tenha atenção ao que é pedido e em caso de dúvida, procure o time de instrução via _Slack_ ou nas mentorias! #vqv 🚀

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

## Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu exercício você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/35e03d5e-6341-4a8c-84d1-b4308b2887ef/lesson/573db55d-f451-455d-bdb5-66545668f436) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Hoje, nosso exercício será trabalhar utilizando as `principais funções do MySQL`.
</details>

<details>
  <summary><strong>🚵 Habilidades a serem trabalhadas</strong></summary><br />

  <ul>
    <li>Funções matemáticas;</li>
    <li>Funções de manipulação de datas;</li>
  </ul>

</details>

# Orientações

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary>
  
  ## 👉 Com Docker

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  * Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  * Esses serviços irão inicializar um container chamado `api_exercise` e outro chamado `db_exercise`;

  * A partir daqui você pode rodar o container `api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it api bash`.

  * Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)
  
  * **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  * **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  * **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  * ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  ![sequelize test](./public/remote-container.png)

  <br />
  
  ## 👉 Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  * **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do exercício, e essa atualização gera conflitos com o avaliador.

  * **✨ Dica:** Para rodar o exercício desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  * **✨ Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

  <br/>
</details>

<details>
  <summary id="antes-comecar-desenvolver"><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

* `git clone git@github.com:tryber/sd-0x-exercise-sequelize-associations.git`.
* Entre na pasta do repositório que você acabou de clonar:
  * `cd sd-031-b-exercise-mysql-popular-functions`

2. Instale as dependências

* `npm install`

3. Crie uma branch a partir da branch `main`

* Verifique que você está na branch `main`
  * Exemplo: `git branch`
* Se não estiver, mude para a branch `main`
  * Exemplo: `git checkout main`
* Agora, crie uma branch onde você vai guardar os `commits` do seu exercício
  * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercício`
  * Exemplo: `git checkout -b seunome-exercise-mysql-popular-functions`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

* Verifique que as mudanças ainda não estão no _stage_
  * Exemplo: `git status` (deve aparecer o arquivo que você alterou como exercicio1.sql)
* Adicione o novo arquivo ao _stage_ do Git
  * Exemplo:
    * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    * `git status` (deve aparecer listado o arquivo _seunome/README.md_ em verde)
* Faça o `commit` inicial
  * Exemplo:
    * `git commit -m 'iniciando o exercício de Sequelize Associations'` (fazendo o primeiro commit)
    * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

* Usando o exemplo anterior: `git push -u origin seunome-exercise-mysql-popular-functions`

6. Crie um novo `Pull Request` _(PR)_

* Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-exercise-mysql-mysql-popular-functions/pulls)
* Clique no botão verde _"New pull request"_
* Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
* Coloque um título para a sua _Pull Request_
  * Exemplo: _"Adiciona migrations"_
* Clique no botão verde _"Create pull request"_
* Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
* **Não se preocupe em preencher mais nada por enquanto!**
* Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-031-b-exercise-mysql-popular-functions/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🛠 Execução de testes localmente</strong></summary>

  > :information_source: IMPORTANTE

  1. Para executar localmente os testes é preciso adicionar variáveis de ambiente com suas credenciais do `mysql`, você pode fazer de algumas formas:

   Adicionando os dados a arquivo um arquivo com o nome `.env`, como no estão no de exemplo, `.env.example`, basta renomeá-lo e ajustá-lo com suas credenciais:
  
      ```sh
        # ./.env

        DB_HOST=localhost # o padrão é `localhost`
        DB_NAME=hospital_control
        DB_USER=root # ou seu usuário
        DB_PASSWORD=password # senha do usuário acima, o padrão é `password`
        DB_PORT=3306 # a padrão é `3306`
      ```
  
      - Depois disso basta rodar `npm test`.

    1. Você também pode usar as variáveis de ambiente antes do comando `npm test` como abaixo:
      ```sh
      DB_USER=<SEU_NOME_DE_PESSOA_USUARIA> DB_PASSWORD=<SUA SENHA> DB_HOST=<NOME_DO_HOST> DB_PORT=<PORTA> npm test
      ```

    * Ou seja, suponha que para poder acessar a base de dados feita neste exercício você tenha `root` como seu nome de pessoa usuária, `password` como senha, `localhost` como host e `1337` como porta. Logo, você executaria:
      ```sh
      DB_USER=root DB_PASSWORD=password DB_HOST=localhost DB_PORT=1337 npm test
      ```

    * Usando o exemplo anterior de base, suponha que você não tenha setado uma senha para `root` e esteja usando a porta padrão (3306). Neste caso, você executaria:
      ```sh
      DB_USER=root DB_PASSWORD= DB_HOST=localhost DB_PORT= npm test
      ```

    **Dica**: variáveis de ambiente definidas na mesma linha do comando valem apenas para aquele comando. Se preferir, você pode exportar as variáveis de ambiente para toda a _sessão_ (todos os comandos até você fechar aquele terminal). Por exemplo:

    ```sh
    export DB_USER=root DB_PASSWORD=password HOSTNAME=localhost PORT=3306
    ```

  ---

  > :information_source: Scripts para executar os testes locais:

  Vamos usar o Jest para executar os testes, use o comando a seguir para executar todos os testes: 

  ```sh
  npm test
  ```

<br />
</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu exercício está pronto para o _"Code Review"_, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-00`

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
   <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary>

Agora que você finalizou o exercício, chegou a hora de mostrar ao mundo que você aprendeu algo novo! 🚀

Siga esse [**guia que preparamos com carinho**](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/a3cac6d2-5060-445d-81f4-ea33451d8ea4/section/d4f5e97a-ca66-4e28-945d-9dd5c4282085/day/eff12025-1627-42c6-953d-238e9222c8ff/lesson/49cb103b-9e08-4ad5-af17-d423a624285a) para disponibilizar o exercício finalizado no seu GitHub pessoal.

Esse passo é super importante para ganhar mais visibilidade no mercado de trabalho, mas também é útil para manter um back-up do seu trabalho.

E você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse exercício no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

   <br />
 </details>

</details>

# Exercícios

## Exercícios não avaliativos

### 🚀 Exercício 1
- Escreva uma query que exiba o maior salário da tabela.

### 🚀 Exercício 2
- Escreva uma query que exiba a diferença entre o maior e o menor salário.

### 🚀 Exercício 3
- Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.

### 🚀 Exercício 4
- Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

### 🚀 Exercício 5
- Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

### 🚀 Exercício 6
- Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).

### 🚀 Exercício 7
- Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).

### 🚀 Exercício 7
- Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).

### 🚀 Exercício 9
- Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).

### 🚀 Exercício 11
- Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.

### 🚀 Exercício 12
- Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

### 🚀 Exercício 13
- Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).

### 🚀 Exercício 14
- Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

### 🚀 Exercício 15
- Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).

### 🚀 Exercício 16
- Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

### 🚀 Exercício 17
- Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

### 🚀 Exercício 18
- Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).

## Exercícios avaliativos

### 🚀 Exercício 10

- Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.