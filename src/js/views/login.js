import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const Login = () => {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	useEffect(() => {
		if (store.isAuthenticate || store.token) {
			history.push("/dashboard");
		}
	});

	return (
		<div className="principal-container text-center">
			<div className="auth">
				<h4>Iniciar sesión</h4>
				<div className="form-group">
					<label>Email</label>
					<input
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						className="form-control"
						placeholder="Ingresar su correo electronico"
					/>
				</div>
				<div className="form-group">
					<label>Contraseña</label>
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						className="form-control"
						placeholder="Ingresar su contraseña"
					/>
				</div>

				<button onClick={() => actions.signIn(email, password)} className="btn btn-primary btn-block">
					Ingresar
				</button>
			</div>
		</div>
	);
};

export default Login;
