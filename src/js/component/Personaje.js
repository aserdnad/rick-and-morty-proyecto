import React, { useContext } from "react";
import { Card, Button, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Personaje = ({ nombre, image, gender, species }) => {
	const { store, actions } = useContext(Context);

	return (
		<Card style={{ width: "18rem" }} className="mt-3 text-left">
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{nombre}</Card.Title>
				<Card.Text>{`Gender : ${gender}`}</Card.Text>
				<Card.Text>{`Specie : ${species}`}</Card.Text>
				<Row className="justify-content-between mx-1">
					<Button variant="primary">Learn More!</Button>
					<Button variant="outline-warning" onClick={() => actions.agregarFavoritos(nombre)}>
						<i className="far fa-heart" />
					</Button>
				</Row>
			</Card.Body>
		</Card>
	);
};

Personaje.propTypes = {
	nombre: PropTypes.string,
	image: PropTypes.string,
	gender: PropTypes.string,
	species: PropTypes.string
};

export default Personaje;
