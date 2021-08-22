<template>
  <div>
    <div class="seletor-container">
      <div class="seletor">
        <span>
          <strong>
            <a @click="this.toggleExibicao"> Novo Video </a>
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
        <input type="text" placeholder="Título" v-model="video.titulo" />
        <input type="text" placeholder="Descrição" v-model="video.descricao" />
        <input type="text" placeholder="Url" v-model="video.url" />
        <input
          type="text"
          placeholder="Categoria"
          v-model="video.nomeCategoria"
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
  name: "CadastroVideo",
  data() {
    return {
      exibir: false,
      erro: {
        mensagem: "",
        visivel: false,
      },
      video: {
        titulo: "",
        descricao: "",
        url: "",
        nomeCategoria: "",
      },
    };
  },

  methods: {
    toggleExibicao() {
      this.exibir = !this.exibir;
    },
    escondeErro() {
      this.erro.visivel = false;
    },
    fecharModal() {
      this.$store.dispatch("cadastroVideo/fecharModal");
    },
    validaCampos() {
      if (this.video.titulo == "") {
        this.erro.mensagem = "Parece que o título não foi prenchido...";
        this.erro.visivel = true;
        return;
      }
      if (this.video.descricao == "") {
        this.erro.mensagem = "Que tal verificar a descrição?!";
        this.erro.visivel = true;
        return;
      }
      if (this.video.url == "") {
        this.erro.mensagem =
          "Hmm, a URL precisa ser preenchida... Lembre-se, só aceitamos links do Google Drive!";
        this.erro.visivel = true;
        return;
      }
      if (this.video.nomeCategoria == "") {
        this.erro.mensagem = "Precisamos saber qual a categoria desse vídeo!";
        this.erro.visivel = true;
        return;
      }
      this.$store.dispatch(
        "cadastroVideo/cadastrarNovoVideo",
        JSON.stringify(this.video)
      );
      this.fecharModal();
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