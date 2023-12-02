import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import SmallImage from "../../img/400x200.png";
import "../../styles/home.css";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
            <h1 className="text-start text-danger">Planets</h1>
            <div className="row horizontal">
                {store.planets.map((item, index) => {
                    return (
                        <div key={item.url} className="card text-start mx-3 my-3 p-0 carditem" style={{width: '400px'}}>
                            <img src={SmallImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Population: {item.population}</p>
                                <p className="card-text">Terrain: {item.terrain}</p>
                                <Link to={"/planet-detail/" + index}>
                                    <button className="btn btn-outline-primary">Learn more!</button>
                                </Link>
                                <button onClick={()=>actions.addFavorite2(item.name, index)} className="btn btn-outline-warning float-end" style={{backgroundColor: store.favorites.includes(item.name) ? "#ffc107" : "", color: store.favorites.includes(item.name) ? "black" : "" }} >♡</button>
                            </div>
                        </div>
                    );
                })}
            </div>
			<br />
		</div>
	);
};
