from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Lista para armazenar os produtos
produtos = []

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        
        # Receber dados do formulário
        nome = request.form['nome']
        descricao = request.form['descricao']
        valor = float(request.form['valor'])
        disponivel = request.form['disponivel'] == 'Sim'

        # Adicionar o novo produto à lista
        produtos.append({'nome': nome, 'descricao': descricao, 'valor': valor, 'disponivel': disponivel})

        # Ordenar produtos por valor (menor para maior)
        produtos_sorted = sorted(produtos, key=lambda x: x['valor'])

        return render_template('index.html', produtos=produtos_sorted)

    # Exibir produtos na página inicial
    return render_template('index.html', produtos=produtos)

@app.route('/novo', methods=['GET'])
def novo_produto():
    return render_template('novo_produto.html')

if __name__ == '__main__':
    app.run(debug=True)
