<template>
  <div class="c-app pace-done">
    <div class="c-wrapper">
      <div class="c-body">
        <main class="c-main">
          <div class="container-fluid">
            <div class="fade-in">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card card-accent-danger border-danger" style="height:449px">
                    <h4 class="card-header alert alert-danger">Importante Urgente <span class="badge badge-danger">{{ atividadeIUList.length }}</span></h4>
                    <div class="card-body">
                      <div class="alert alert-secondary alert-dismissible fade show" role="alert" v-for="i in atividadeIUList" v-bind:key="i.descricao">
                        {{i.descricao}}
                        <button class="close" type="button" data-dismiss="alert" aria-label="Close" v-on:click="deleteAtividade(i)"><span aria-hidden="true">×</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card card-accent-warning border-warning" style="height:449px">
                    <h4 class="card-header alert alert-warning">Importante Não Urgente <span class="badge badge-warning">{{ atividadeINUList.length }}</span></h4>
                    <div class="card-body">
                      <div class="alert alert-secondary alert-dismissible fade show" role="alert" v-for="i in atividadeINUList" v-bind:key="i.descricao">
                        {{i.descricao}}
                        <button class="close" type="button" data-dismiss="alert" aria-label="Close" v-on:click="deleteAtividade(i)"><span aria-hidden="true">×</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="card card-accent-dark border-dark" style="height:449px">
                    <h4 class="card-header alert alert-dark">Não Importante Urgente <span class="badge badge-dark">{{ atividadeNIUList.length }}</span></h4>
                    <div class="card-body">
                      <div class="alert alert-secondary alert-dismissible fade show" role="alert" v-for="i in atividadeNIUList" v-bind:key="i.descricao">
                        {{i.descricao}}
                        <button class="close" type="button" data-dismiss="alert" aria-label="Close" v-on:click="deleteAtividade(i)"><span aria-hidden="true">×</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card card-accent-info border-info" style="height:449px">
                   <h4 class="card-header alert alert-info">Não Importante Não Urgente <span class="badge badge-info">{{ atividadeNINUList.length }}</span></h4>
                    <div class="card-body">
                      <div class="alert alert-secondary alert-dismissible fade show" role="alert" v-for="i in atividadeNINUList" v-bind:key="i.descricao">
                        {{i.descricao}}
                        <button class="close" type="button" data-dismiss="alert" aria-label="Close" v-on:click="deleteAtividade(i)"><span aria-hidden="true">×</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
	name: "Home",
	components: {
	},
	data() {
		return {
			atividadeIUList: [],
			atividadeINUList: [],
			atividadeNIUList: [],
			atividadeNINUList: [],
			codigo: "",
			time: ""
		};
  },
  methods: {
    ...mapActions("painel", ["findAtividade"])
  },
	created() {
		
	},
	mounted() {
    this.findAtividade({ codigo: this.user.codigo, time: this.user.time }).then(response => {
      this.atividadeIUList = response.data.filter(item => item.idrelevancia === 1);
      this.atividadeINUList = response.data.filter(item => item.idrelevancia === 2);
      this.atividadeNIUList = response.data.filter(item => item.idrelevancia === 3);
      this.atividadeNINUList = response.data.filter(item => item.idrelevancia === 4);
    })
	},
	computed: {
    ...mapState("auth", ["user"])
	},
};
</script>

<style>

</style>