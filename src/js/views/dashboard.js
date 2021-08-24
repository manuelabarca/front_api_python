import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Dashboard = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPosts();
	}, []);

	return (
		<div className="container">
			{!!store.posts &&
				store.posts.map((post, key) => (
					<div key={key} className="card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">{post.description}</p>
							<Link className="btn btn-primary" to={`/post/${post.id}`}>
								Ver más
							</Link>
						</div>
					</div>
				))}
		</div>
	);
};

export default Dashboard;
