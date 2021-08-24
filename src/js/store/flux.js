const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			api: "https://3000-pink-junglefowl-xsmm1zel.ws-eu16.gitpod.io",
			isAuthenticate: !!localStorage.getItem("token") ? true : false,
			posts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			signIn: (email, password) => {
				console.log("data post", email, password);
				const store = getStore();
				let requestBody = {
					email: email,
					password: password
				};
				fetch(`${store.api}/login`, {
					method: "POST",
					body: JSON.stringify(requestBody),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						} else {
							console.log("response error", resp);
						}
					})
					.then(data => {
						localStorage.setItem("token", data.token);
						localStorage.setStore({ isAuthenticate: true });
					})
					.catch(error => console.error("[ERROR IN SIGN IN]", error));
			},
			getPosts: () => {
				const store = getStore();
				fetch(`${store.api}/post`, {
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						} else {
							console.error("[Error response]", resp);
						}
					})
					.then(data => setStore({ posts: data }))
					.catch(error => console.error("[ERROR TO GET POSTS]", error));
			}
		}
	};
};

export default getState;
