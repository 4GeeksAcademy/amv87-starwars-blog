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
						<button type="button" className="btn btn-lg btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="rounded bg-secondary mx-2 px-2">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{store.favorites.map((item)=>
								<li className="px-2 d-flex justify-content-between align-items-center">
									<a className="dropdown-item d-flex justify-content-between" href="#">{item}</a>
									<a onClick={()=>actions.deleteFavorite(item)} className="btn btn-danger btn-sm" >X</a>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
