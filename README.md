Cadastro e Listagem de Produtos
<p style="font-size: 20px; text-align: center;">Uma aplica\u00e7\u00e3o para cadastro e gerenciamento simples de produtos.</p>
Descrição
Esta aplicação é desenvolvida em Python usando Flask, permitindo:

Cadastro de produtos com campos como:
Nome do produto
Descrição do produto
Valor
Disponibilidade para venda
Listagem ordenada por valor (do menor para o maior).
Acesso direto para cadastro de novos produtos.
Funcionalidades
Cadastro de Produto:

<ul style="list-style-type: circle;"> <li>Formulário para inserir detalhes como nome, descrição, valor, e disponibilidade.</li> <li>Após cadastro, o produto é exibido automaticamente na listagem.</li> </ul>
Listagem de Produtos:

<ul style="list-style-type: circle;"> <li>Exibe produtos com colunas: Nome e Valor.</li> <li>Ordena produtos do menor para o maior valor.</li> </ul>
Tecnologias Utilizadas
Back-end: Python 3.10+ com Flask
Front-end: HTML5, CSS3 e JavaScript
Banco de Dados: Estrutura em memória (listas Python)
Ambiente Virtual: venv para gerenciar dependências
Estrutura do Projeto
csharp
Copiar código
Projeto_OAK/
├── app.py                 # Código principal do Flask
├── templates/
│   ├── index.html         # Página principal (listagem de produtos)
│   └── novo_produto.html  # Página de cadastro de produtos
├── static/
│   ├── css/
│   │   └── styles.css     # Arquivo CSS
├── requirements.txt       # Dependências do projeto
└── README.md              # Documentação do projeto

Instalação e Execução
1. Clone o Repositório
bash
Copiar código
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
2. Crie e Ative o Ambiente Virtual
No Windows:

bash
Copiar código
python -m venv venv
venv\\Scripts\\activate
No Linux/MacOS:

bash
Copiar código
python3 -m venv venv
source venv/bin/activate
3. Instale as Dependências
bash
Copiar código
pip install -r requirements.txt
4. Execute a Aplicação
bash
Copiar código
python app.py
Acesse no navegador: http://127.0.0.1:5000

Uso
Acesse a página inicial: Listagem de produtos ordenados por valor.
Cadastrar Produto: Clique no botão "Cadastrar Novo Produto" e preencha o formulário.
Visualizar Produtos: Volte para a listagem e veja os produtos cadastrados.
Exemplo de Interface
Listagem de Produtos
Exibe colunas: Nome e Valor.
Ordena os produtos automaticamente por valor.
Formulário de Cadastro
Campos: Nome, Descrição, Valor, Disponibilidade para Venda.
Melhorias Futuras
Persistência dos dados em um banco de dados relacional (ex.: SQLite).
Paginação para a listagem de produtos.
Validação mais robusta dos campos do formulário.
Autor
Nome: Seu Nome
Contato: seu-email@exemplo.com
