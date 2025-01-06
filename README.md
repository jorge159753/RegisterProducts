# Cadastro e Listagem de Produtos

## Descrição

Este projeto é uma aplicação web desenvolvida em Python usando Flask que permite o cadastro e listagem de produtos. Os usuários podem:

- Cadastrar produtos com os seguintes campos:
  - Nome do produto (campo de texto)
  - Descrição do produto (campo de texto)
  - Valor do produto (campo de valor numérico)
  - Disponibilidade para venda (campo com opções "Sim" ou "Não")
- Visualizar a listagem de produtos ordenados pelo valor (do menor para o maior).
- Acessar a página de cadastro de um novo produto diretamente da listagem.

## Funcionalidades

- **Cadastro de Produto**:

  - Um formulário para inserir informações sobre o produto.
  - Quando um novo produto é cadastrado, ele é adicionado à listagem automaticamente.

- **Listagem de Produtos**:

  - Exibição dos produtos com nome e valor.
  - Ordenação dos produtos pelo valor, do menor para o maior.
  - Botão para cadastrar um novo produto.

## Tecnologias Utilizadas

- **Back-end**: Python 3.10+ com Flask
- **Front-end**: HTML5, CSS3
- **Banco de Dados**: Estrutura em memória usando listas Python
- **Ambiente Virtual**: `venv` para gerenciar dependências

## Estrutura do Projeto

```
RegisterProducts/
├── app.py                 # Código principal do Flask
├── templates/
│   ├── index.html         # Página principal (listagem de produtos)
│   └── novo_produto.html  # Página de cadastro de produtos
├── static/
│   ├── css/
│   │   └── styles.css     # Arquivo CSS
├── requirements.txt       # Dependências do projeto
```

## Instalação e Execução

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2. Crie e Ative o Ambiente Virtual

No Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

No Linux/MacOS:

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Instale as Dependências

```bash
pip install -r requirements.txt
```

### 4. Execute a Aplicação

```bash
python app.py
```

Acesse a aplicação no navegador em [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Uso

1. Acesse a página inicial para visualizar a listagem de produtos.
2. Clique em "Cadastrar Novo Produto" para adicionar um novo item.
3. Preencha o formulário e clique em "Cadastrar" para adicionar o produto à lista.
4. Volte para a listagem para visualizar os produtos cadastrados.

## Exemplo de Interface

- **Listagem de Produtos**:

  - Colunas: Nome e Valor.
  - Produtos ordenados do menor para o maior valor.

- **Formulário de Cadastro**:

  - Nome, Descrição, Valor, e Disponibilidade para Venda (Sim/Não).

## Melhorias Futuras

- Persistência dos dados em um banco de dados relacional (ex.: SQLite).
- Paginação para a listagem de produtos.
- Validação mais robusta nos campos do formulário.

## Autor

- **Nome do Desenvolvedor**: Jorge Vitor Silva Gois
- **Contato**: jv6001757@gmail.com

---

## Obrigado por usar este projeto! Sinta-se à vontade para contribuir ou relatar problemas no repositório.

