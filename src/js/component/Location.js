import React, { useContext } from "react";
import { Card, Button, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Location = ({ nombre, dimension, type }) => {
	const { store } = useContext(Context);

	return (
		<Card style={{ width: "18rem" }} className="mt-3 text-left">
			<Card.Img variant="top" src={"hola"} />
			<Card.Body>
				<Card.Title>{nombre}</Card.Title>
				<Card.Text>{`Dimension : ${dimension}`}</Card.Text>
				<Card.Text>{`Type : ${type}`}</Card.Text>
				<Row className="justify-content-between mx-1">
					<Button variant="primary">Learn More!</Button>
					<Button variant="outline-warning">
						<i className="far fa-heart" />
					</Button>
				</Row>
			</Card.Body>
		</Card>
	);
};

Location.propTypes = {
	nombre: PropTypes.string,
	dimension: PropTypes.string,
	type: PropTypes.string
};

export default Location;
