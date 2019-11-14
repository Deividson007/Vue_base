import store from "../store";

export default async (to, from, next) => {
	document.title = `${to.name} - Painel`;

	if (to.name !== "login" && !store.getters["auth/hasToken"]) {
		try {
			await store.dispatch("auth/CheckToken");
			next({ path: to.path });
		} catch (err) {
			next({ name: "login" });
		}
	} else {
		if (to.name === "login" && store.getters["auth/hasToken"]) {
			next({ name: "painel" });
		} else {
			next();
		}
	}
};
