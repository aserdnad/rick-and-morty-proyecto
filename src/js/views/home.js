import React, { useContext } from "react";
import "../../styles/home.scss";
import Carta from "../component/Carta";
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap";

export const Home = () => {
	const { store } = useContext(Context);
	// console.log(store);
	return (
		<div className="container">
			<Row>
				{store["personajes"] &&
					store.personajes.map(personaje => {
						return (
							<Col key={personaje.uid}>
								<Carta nombre={personaje.name} />
							</Col>
						);
					})}
			</Row>
		</div>
	);
};
