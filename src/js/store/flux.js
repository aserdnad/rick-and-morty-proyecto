const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				const buscarStore = getStore();
				const cargar = async () => {
					try {
						const response = await fetch("https://www.swapi.tech/api/people/");
						const data = await response.json();
						const datos = data.results;
						// setStore({ personajes: data.results });

						//fetch de personajes especifico
						let especificos = data.results.map(dato => {
							return fetch(dato.url).then(resp => {
								let respuesta = resp.json();
								return respuesta;
							});
						});

						const prueba = async variable => {
							const porfa = await Promise.all(variable).then(function(results) {
								console.log(results);
								return results;
							});
							console.log(porfa, "este es porfa");
							return porfa;
						};

						const dios = prueba(especificos);
						console.log(dios, "este es dios");
					} catch (error) {
						console.log(error);
					}
				};
				cargar();

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
			}
		}
	};
};

export default getState;
