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
					store.personajes.map(personaje => {
						return (
							<Col key={personaje.created}>
								<Personaje
									nombre={personaje.name}
									image={personaje.image}
									gender={personaje.gender}
									species={personaje.species}
								/>
							</Col>
						);
					})}
			</Row>
			<h1 className="text-danger mt-3">Locations</h1>
			{/* <Row>
				{store["lugares"] &&
					store.lugares.map(personaje => {
						return (
							<Col key={lugares.created}>
								<Location nombre={lugares.name} dimension={lugares.dimension} type={lugares.type} />
							</Col>
						);
					})}
			</Row> */}
			<h1 className="text-danger mt-3">Episodes</h1>
			{/* <Row>
				{store["episodios"] &&
					store.episodios.map(personaje => {
						return (
							<Col key={episodios.created}>
								<Location 
								nombre={episodios.name} 
								episode={episodios.episode} 
								air={episodios.air_date} />
							</Col>
						);
					})}
			</Row> */}
		</div>
	);
};
