import React, { useContext } from "react";
import "../../styles/home.scss";
import Personaje from "../component/Personaje";
import Location from "../component/Location";
import Episodes from "../component/Episodes";
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container mt-2">
			<h1 className="text-danger">Characters</h1>
			<Row>
				{store["personajes"] &&
					store.personajes.map((personaje, index) => {
						return (
							<Col key={personaje.created}>
								<Personaje
									nombre={personaje.name}
									image={personaje.image}
									gender={personaje.gender}
									species={personaje.species}
									index={index}
								/>
							</Col>
						);
					})}
			</Row>
			<h1 className="text-danger mt-3">Locations</h1>
			<Row>
				{store["lugares"] &&
					store.lugares.map((lugare, index) => {
						return (
							<Col key={lugare.created}>
								<Location
									nombre={lugare.name}
									dimension={lugare.dimension}
									type={lugare.type}
									index={index}
								/>
							</Col>
						);
					})}
			</Row>
			<h1 className="text-danger mt-3">Episodes</h1>
			<Row>
				{store["episodios"] &&
					store.episodios.map((episodio, index) => {
						return (
							<Col key={episodio.created}>
								<Episodes
									nombre={episodio.name}
									episode={episodio.episode}
									air={episodio.air_date}
									index={index}
								/>
							</Col>
						);
					})}
			</Row>
		</div>
	);
};
