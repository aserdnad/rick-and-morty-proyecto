import React from "react";
import { Row } from "react-bootstrap";

const EspPersonaje = ({ img, nombre, origen, location, gender, specie, status }) => {
	return (
		<div className="container">
			<Row>
				<img src={img} alt="" height="400px" width="300px" className="col-6" />
				<div className="col-6">
					<h1 className="text-center">{nombre}</h1>
					<p className="mt-3">
						Luctus semper luctus montes himenaeos. Amet potenti ultricies rutrum fringilla tempus vitae
						hendrerit dolor sapien. Nibh justo nostra nibh tempor magnis leo maecenas parturient cubilia ut.
						Curae; vivamus nibh blandit habitasse cubilia lacus tristique porta pulvinar accumsan neque
						purus. Quisque dictum varius potenti nisi eget luctus eu! Faucibus platea nisi porttitor erat!
						Bibendum morbi fusce est neque est consectetur. Magnis sodales, sagittis potenti adipiscing.
						Curae; eleifend ultricies scelerisque ad aenean auctor dictum egestas enim. Pellentesque
						lobortis egestas adipiscing, et augue donec.
					</p>
				</div>
			</Row>
			<div className="my-3 container border-top border-primary" />
			<Row>
				<h6 className="col-2">Name</h6>
				<h6 className="col-2">Species</h6>
				<h6 className="col-2">Gender</h6>
				<h6 className="col-2">Status</h6>
				<h6 className="col-2">Origin</h6>
				<h6 className="col-2">Location</h6>
			</Row>
			<Row>
				<h6 className="col-2">{nombre}</h6>
				<h6 className="col-2">{specie}</h6>
				<h6 className="col-2">{gender}</h6>
				<h6 className="col-2">{status}</h6>
				<h6 className="col-2">{origen}</h6>
				<h6 className="col-2">{location}</h6>
			</Row>
		</div>
	);
};

EspPersonaje.propTypes = {
	img: PropTypes.string,
	nombre: PropTypes.string,
	origen: PropTypes.string,
	location: PropTypes.string,
	gender: PropTypes.string,
	specie: PropTypes.string,
	status: PropTypes.string
};

import PropTypes from "prop-types";

export default EspPersonaje;
