import * as types from "./mutation-types";

export default {
	[types.SET_ATIVIDADE] (state, payload) {
		state.atividade = payload;
	}
};