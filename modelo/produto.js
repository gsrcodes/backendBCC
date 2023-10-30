export default class Produto{
    #codigo;
    #descricao;
    #precoCusto;
    #precoVenda;
    #dataValidade;
    #qtdeEstoque;
    #categoria;

    constructor(codigo = 0, descricao = "", precoCusto = 0, precoVenda = 0, dataValidade = "", qtdeEstoque = 0, categoria = {}) {
        this.#codigo = codigo;
        this.#descricao = descricao;
        this.#precoCusto = precoCusto;
        this.#precoVenda = precoVenda;
        this.#dataValidade = dataValidade;
        this.#qtdeEstoque = qtdeEstoque;
        this.#categoria = categoria;
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(novaDescricao) {
        this.#descricao = novaDescricao;
    }

    get precoCusto() {
        return this.#precoCusto;
    }

    set precoCusto(novoPrecoCusto) {
        this.#precoCusto = novoPrecoCusto;
    }
        

    get precoVenda() {
        return this.#precoVenda;
    }

    set precoVenda(novoPrecoVenda) {
        this.#precoVenda = novoPrecoVenda;
    }

    get dataValidade() {
        return this.#dataValidade
    }

    set dataValidade(novaDataValidade) {
        this.#dataValidade = novaDataValidade;
    }

    get qtdeEstoque() {
        return this.#qtdeEstoque;
    }

    set qtdeEstoque(novaQtdeEstoque) {
        this.#qtdeEstoque = novaQtdeEstoque;
    }

    get categoria() {
        return this.#categoria;
    }

    set categoria(novaCategoria) {
        this.#categoria = novaCategoria;
    }

    toJSON () {
        return {
            codigo:this.#codigo,
            descricao:this.#descricao,
            precoCusto:this.#precoCusto,
            precoVenda:this.#precoVenda,
            dataValidade:this.#dataValidade,
            qtdeEstoque:this.#qtdeEstoque,
            categoria:this.#categoria.toJSON()
        }
    }
} 