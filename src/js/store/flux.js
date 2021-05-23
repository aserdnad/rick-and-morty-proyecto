const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			lugares: [],
			episodios: [],
			favoritos: []
		},
		actions: {
			loadSomeData: () => {
				const buscarStore = getStore();
				const cargar = async () => {
					try {
						const response = await fetch("https://rickandmortyapi.com/api/character");
						const data = await response.json();
						const datos = data.results;
						setStore({ personajes: datos });

						const response1 = await fetch("https://rickandmortyapi.com/api/location");
						const data1 = await response1.json();
						const datos1 = data1.results;
						setStore({ lugares: datos1 });

						const response2 = await fetch("https://rickandmortyapi.com/api/episode");
						const data2 = await response2.json();
						const datos2 = data2.results;
						setStore({ episodios: datos2 });
					} catch (error) {
						console.log(error);
					}
				};
				cargar();

				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			agregarFavoritos: nombre => {
				const store = getStore();
				if (!store.favoritos.includes(nombre)) {
					setStore({ favoritos: [...store.favoritos, nombre] });
				}
			},
			eliminarFavoritos: nombre => {
				const store = getStore();
				let actualizar = store.favoritos.filter(personaje => {
					return personaje !== nombre;
				});
				setStore({ favoritos: actualizar });
			}
		}
	};
};

export default getState;
