import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Carta = ({ nombre }) => {
	return (
		<Card style={{ width: "18rem" }} className="mt-3">
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{nombre}</Card.Title>
				<Card.Text>
					{"Some quick example text to build on the card title and make up the bulk of the card's content."}
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

Carta.propTypes = {
	nombre: PropTypes.string
};

export default Carta;
