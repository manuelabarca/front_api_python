import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { useHistory } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	console.log(store);

	useEffect(() => {
		if (store.isAuthenticate || store.token) {
			history.push("/dashboard");
		}
	}, []);
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
