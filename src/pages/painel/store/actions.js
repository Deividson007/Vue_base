import services from "@/http";
import * as types from "./mutation-types";
import { reject } from "q";

export const findAtividade = ({ commit }, payload) => {
	return new Promise(async (resolve, reject) => {
		try {
			const atividades = await services.painel.load(payload);
			resolve(atividades);
		} catch (err) {
			reject(err);
		}
	})

	/*services.painel.load(payload).then(res => {
		commit(types.SET_ATIVIDADE, res.data);
	});
	*/
};