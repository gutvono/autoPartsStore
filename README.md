# Boas-vindas ao repositório do projeto `AutoParts Store`!

🌱 Neste projeto temos a base para qualquer tipo de _e-commerce_ do tipo delivery. 
Este em específico, até o momento, estou construindo uma **API**, com usuários 
(customers e sellers) e peças automotivas. A interação entre eles, acontecerá 
através de compras e vendas desses produtos.
Dentro da aplicação temos fluxo de vendedor e cliente, cada um com suas funções 
e terão telas diferentes ao logar.

# Contexto geral:

<details>
    <summary>🗃️ <strong>Arquivos e pastas feitas por mim</strong></summary><br />
    📁 Este projeto faz parte dos meus estudos para aplicações com Java Springboot
    + Angular. Então, tudo foi feito por mim.
</details>

</br>

<details>
    <summary>🧰 <strong>Ferramentas</strong>, <strong>linguagens</strong> e 
    respectivas <strong>funções</strong> utilizadas:</summary>
    <li> <i>Java</i> (linguagem);</li>
    <li> <i>SpringBoot</i> (framework);</li>
    <li> <i>MySQL</i> (Banco de dados);</li>
    <li> <i>Flyway</i> (migration e seeds);</li>
    <li> <i>MVC</i> (arquitetura);</li>
</details>

</br>

<details>
    <summary>🚀 <strong>Como rodar o projeto</strong></summary>
    Será necessário ter o <i>Java Development Kit (JDK)</i>, <i>Maven</i> e a 
    IDE <i>IntelliJ</i> instalados na máquina.
    <br>

1. **Baixar as dependências**

Certifique-se que as dependências do projeto estão instaladas corretamente.


2. **Alterar o arquivo application.properties**

Alterar as configurações do arquivo "application.properties" de acordo com
as necessidades do seu ambiente local.


3.  **Executar o aplicativo**

O IntelliJ executa um aplicativo Spring Boot automaticamente. Geralmente, isso 
é equivalente a executar o comando **mvn spring-boot:run** no terminal, mas 
com a vantagem de que o IntelliJ lida com detalhes de **configuração** e 
**classpath** para você.

Se deseja executar o aplicativo Spring Boot a partir do terminal usando 
o Maven (como o comando **mvn spring-boot:run**), certifique-se de estar no diretório 
**raiz** do projeto (onde está localizado o arquivo **pom.xml**) e execute o comando **mvn 
spring-boot:run** diretamente no terminal.

Se a construção falhou ao executar o comando mvn spring-boot:run, pode haver um 
problema relacionado às **configurações do Maven** ou ao **ambiente Java**. Certifique-se 
de que o Maven e o Java estejam configurados corretamente em seu sistema e que 
todas as dependências do projeto tenham sido resolvidas com sucesso. Você também 
pode verificar os logs de erro para obter informações mais detalhadas sobre a 
causa da falha.


O banco de dados é criado e populado _automaticamente_ pelo **flyway**, através 
dos arquivos _.sql_ criados no diretório /resources/db.
</details>

# Observações
Como sempre, um projeto nunca termina de fato. Sempre haverão **melhorias** para 
serem aplicadas.

<details>
    <summary><strong>Futuro potencial/melhorias</strong></summary>
    <li>Refatoração do código já feito visando a sua reutilização e escalabilidade através de POO;</li>
    <li>Testes unitários;</li>
    <li>Adicionar comentários explicativos;</li>
    <li>Criar fluxo de administrador;</li>
    <li>Iniciar o front-end com <strong>Angular</strong>;</li>
</details>

Assim que o projeto estiver com o back-end pronto, estarei publicando todas as 
_rotas_ criadas para acesso das informações desta **API**, tanto para _consulta_ 
(GET), tanto para _interações_ (PUT, POST).