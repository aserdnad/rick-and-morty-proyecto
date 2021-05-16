import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="data:image/png;base64,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"
						alt="Rick and Morty"
						width="120"
						height="60"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<DropdownButton title={`Favorites ${store.favoritos.length}`} id="bg-nested-dropdown">
					{store.favoritos.length === 0 ? (
						<Dropdown.Item eventKey="1">Empty</Dropdown.Item>
					) : (
						store.favoritos.map((favorito, index) => {
							return (
								<Dropdown.Item eventKey={index} key={index}>
									{favorito}
									<Button className="ml-2 btn btn-light">
										<i
											className="fas fa-trash"
											onClick={() => actions.eliminarFavoritos(favorito)}
										/>
									</Button>
								</Dropdown.Item>
							);
						})
					)}
				</DropdownButton>
			</div>
		</nav>
	);
};
