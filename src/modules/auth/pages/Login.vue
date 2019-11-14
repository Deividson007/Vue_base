<template>
  <form @submit.prevent="submit()">
    <div class="app flex-row align-items-center pace-done" cz-shortcut-listen="true">
      <div class="pace pace-inactive">
        <div class="pace-progress" data-progress-text="100%" data-progress="99" style="transform: translate3d(100%, 0px, 0px);" >
          <div class="pace-progress-inner"></div>
        </div>
        <div class="pace-activity"></div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card-group">
              <div class="card p-4">
                <div class="card-body">
                  <h1>Login</h1>
                  <p class="text-muted">Faça login em sua conta</p>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="icon-user"></i>
                      </span>
                    </div>
                    <input class="form-control" type="email" v-model="form.email" placeholder="Email" required />
                  </div>
                  <div class="input-group mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="icon-lock"></i>
                      </span>
                    </div>
                    <input class="form-control" type="password" v-model="form.senha" placeholder="Senha" required />
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <button class="btn btn-primary px-4" type="submit">Login</button>
                    </div>
                    <div class="col-6 text-right">
                      <button class="btn btn-link px-0" type="button">Esqueceu a senha?</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
	data: () => ({
		form: {
			email: "",
			senha: ""
		}
	}),
	methods: {
		...mapActions("auth", ["doLogin"]),
		async submit () {
			try {
				await this.doLogin(this.form);
				this.$router.push({ name: "painel" });
			} catch (err) {
        this.form.email = "";
        this.form.senha = "";
				this.$swal({
          title: "Autenticação",
          text: err.data ? err.data.error : "Não foi possível fazer o login",
          type: "error",
          showCancelButton: false,
          showConfirmButton: false,
          closeOnConfirm: false,
          timer: 3000
        });
			}
		}
	}
};
</script>

<style>
</style>