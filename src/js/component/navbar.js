import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-light fixed-top">
			<div className="container">
				<Link className="navbar-brand" to={"/sign-in"}>
					Proyecto X
				</Link>
				<div className="collapse navbar-collapse" id="navbarToggle">
					{!store.isAuthenticate ? (
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link className="navbar-brand" to={"/sign-in"}>
									Iniciar sesión
								</Link>
							</li>
							<li className="nav-item">
								<Link className="navbar-brand" to={"/sign-up"}>
									Registrarse
								</Link>
							</li>
						</ul>
					) : (
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link>Cerrar sesión</Link>
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};
