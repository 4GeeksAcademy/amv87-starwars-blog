import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img width="100" height="100" src="https://img.icons8.com/ios/100/star-wars.png" alt="star-wars"/>
				</Link>
				<div className="ml-auto">
					<div className="btn-group">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((item, index)=> <li><a key={index} className="dropdown-item" href="#">{item}</a></li>)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
