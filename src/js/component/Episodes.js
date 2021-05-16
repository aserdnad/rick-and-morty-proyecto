import React, { useContext } from "react";
import { Card, Button, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Episodes = ({ nombre, episode, air }) => {
	const { store } = useContext(Context);

	return (
		<Card style={{ width: "18rem" }} className="mt-3 text-left">
			<Card.Img variant="top" src={"hola"} />
			<Card.Body>
				<Card.Title>{nombre}</Card.Title>
				<Card.Text>{`Episode : ${episode}`}</Card.Text>
				<Card.Text>{`Air date : ${air}`}</Card.Text>
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

Episodes.propTypes = {
	nombre: PropTypes.string,
	episode: PropTypes.string,
	air: PropTypes.string
};

export default Episodes;
