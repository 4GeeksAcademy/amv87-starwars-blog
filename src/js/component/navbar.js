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
							Favorites <span className="rounded bg-secondary mx-2 px-2">{store.favorites1.length + store.favorites2.length}</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{store.favorites1.map((item)=>
								<li className="px-2 d-flex justify-content-between align-items-center">
									<Link to={"/character-detail/" + item.id}>
									<a className="dropdown-item d-flex justify-content-between" >{item.name}</a>
									</Link>
									<a onClick={()=>actions.deleteFavorite1(item.name)} className="btn btn-danger btn-sm" >X</a>
								</li>
							)}
							{store.favorites2.map((item)=>
								<li className="px-2 d-flex justify-content-between align-items-center">
									<Link to={"/planet-detail/" + item.id}>
									<a className="dropdown-item d-flex justify-content-between" >{item.name}</a>
									</Link>
									<a onClick={()=>actions.deleteFavorite2(item.name)} className="btn btn-danger btn-sm" >X</a>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
