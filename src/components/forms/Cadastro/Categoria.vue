<template>
  <div>
    <div class="seletor-container">
      <div class="seletor">
        <span>
          <strong>
            <a @click="this.toggleExibicao"> Nova Categoria </a>
          </strong>
        </span>
        <span>
          <a @click="this.toggleExibicao">
            <i v-if="!this.exibir" class="fas fa-chevron-down" />
            <i v-else class="fas fa-chevron-up" />
          </a>
        </span>
      </div>
    </div>
    <div v-if="this.exibir">
      <div v-if="!this.erro.visivel" id="formulario" class="conteudo">
        <input
          type="text"
          placeholder="Título"
          v-on:input="categoria.titulo = $event.target.value"
        />
        <input
          type="text"
          placeholder="Cor"
          v-on:input="categoria.cor = $event.target.value"
        />
        <button @click="validaCampos">Cadastrar</button>
      </div>
      <div v-else id="erro" class="conteudo">
        <h2>Ops... Algo deu errado!</h2>
        <p>{{ this.erro.mensagem }}</p>
        <button @click="escondeErro">Entendi</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CadastroCategora",
  data() {
    return {
      exibir: false,
      erro: {
        mensagem: "",
        visivel: false,
      },
      categoria: {
        titulo: "",
        cor: "",
      },
    };
  },
  methods: {
    validaCampos() {
      if (this.categoria.titulo == "") {
        this.erro.mensagem = "Parece que o título não foi prenchido...";
        this.erro.visivel = true;
        return;
      }
      if (this.categoria.cor == "") {
        this.erro.mensagem = "Informe a cor desejada!";
        this.erro.visivel = true;
        return;
      }
    },
    escondeErro() {
      this.erro.visivel = false;
    },
    toggleExibicao() {
      this.exibir = !this.exibir;
    },
  },
};
</script>

<style scoped>
.seletor-container {
  height: 40px;
  color: white;
  display: flex;
  flex-direction: column;
}
.seletor {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.conteudo {
  padding-top: 3px;
  padding-bottom: 7px;
  font-size: 11pt;
}
input {
  margin: 5px;
  width: 80%;
}
button {
  margin: 5px;
  padding: 5px;
  border: transparent;
  border-radius: 5px;
  min-width: 100px;
}
</style>