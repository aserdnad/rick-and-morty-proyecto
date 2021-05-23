import React, { useContext } from "react";
import "../../styles/demo.scss";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import EspPersonaje from "../component/EspPersonaje";
import EspEpisode from "../component/EspEpisode";
import EspLocation from "../component/EspLocation";

export const Especifico = () => {
	const { store } = useContext(Context);
	const parametros = useParams();

	if (parametros.variable === "personaje") {
		return (
			<div>
				<EspPersonaje
					img={store.personajes[parametros.id].image}
					nombre={store.personajes[parametros.id].name}
					origen={store.personajes[parametros.id].origin.name}
					location={store.personajes[parametros.id].location.name}
					gender={store.personajes[parametros.id].gender}
					specie={store.personajes[parametros.id].species}
					status={store.personajes[parametros.id].status}
				/>
			</div>
		);
	}

	if (parametros.variable === "location") {
		return (
			<div>
				<EspLocation
					dimension={store.lugares[parametros.id].dimension}
					name={store.lugares[parametros.id].name}
					type={store.lugares[parametros.id].type}
				/>
			</div>
		);
	}
	if (parametros.variable === "episodio") {
		return (
			<div>
				<EspEpisode
					air={store.episodios[parametros.id].air_date}
					episode={store.episodios[parametros.id].episode}
					name={store.episodios[parametros.id].name}
				/>
			</div>
		);
	}
};
