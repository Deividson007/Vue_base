import services from "@/http";
import * as storage from "../storage";
import * as types from "./mutation-types";

export const doLogin = ({ dispatch }, payload) => {
	return services.auth.login(payload).then(res => {
		dispatch("SetUser", res.data.usuario);
		dispatch("SetToken", res.data.token);
	});
};

export const LoadSession = ({ dispatch }) => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data: { usuario } } = await services.auth.loadSession();
			dispatch("SetUser", usuario);
			resolve();
		} catch (err) {
			dispatch(SingOut);
			reject(err);
		}
	});
};

export const CheckToken = ({ dispatch, state }) => {
	console.log();
	if (state.token) {
		return Promise.resolve(state.token);
	}

	const token = storage.getLocalToken();
	
	if (!token) {
		return Promise.reject(new Error("Token inválido"));
	}
	
	dispatch("SetToken", token);
	return dispatch("LoadSession");
};

export const SetUser = ({ commit }, paylod) => {
	commit(types.SET_USER, paylod);
};

export const SetToken = ({ commit }, paylod) => {
	storage.setLocalToken(paylod);
	storage.setHeaderToken(paylod);
	commit(types.SET_TOKEN, paylod);
};

export const SingOut = ({ dispatch }) => {
	storage.setHeaderToken("");
	storage.deleteLocalToken();
	dispatch("SetUser", {});
	dispatch("SetToken", "");
};