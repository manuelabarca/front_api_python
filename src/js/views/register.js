import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="principal-container text-center">
			<div className="auth">
				<form>
					<h4>Registrarse</h4>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Ingresar su correo electronico" />
					</div>
					<div className="form-group">
						<label>Contraseña</label>
						<input type="password" className="form-control" placeholder="Ingresar su contraseña" />
					</div>

					<button type="submit" className="btn btn-primary btn-block">
						Enviar
					</button>
					<p className="forgot text-right">
						Ya estas registrado ? <Link to={"/sign-in"}>Iniciar sesión</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Register;
