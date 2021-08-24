import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Login from "./views/login";
import Register from "./views/register";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import Dashboard from "./views/dashboard";
import Post from "./views/post";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<Router basename={basename}>
				<ScrollToTop>
					<Navbar />

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/sign-in">
							<Login />
						</Route>
						<Route exact path="/sign-up">
							<Register />
						</Route>
						<Route exact path="/dashboard">
							<Dashboard />
						</Route>
						<Route exact path="/post/:id">
							<Post />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</Router>
		</div>
	);
};

export default injectContext(Layout);
