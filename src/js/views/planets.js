import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import SmallImage from "../../img/400x200.png";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
            <h1 className="text-start text-danger">Planets</h1>
            <div className="row horizontal">
                {store.planets.map((item, index) => {
                    return (
                        <div key={index} className="card text-start mx-3" style={{width: '400px'}}>
                            <img src={SmallImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Population: {item.population}</p>
                                <p className="card-text">Terrain: {item.terrain}</p>
                                <Link to="/">
                                    <button className="btn btn-outline-primary">Learn more!</button>
                                </Link>
                                <Link to="/">
                                    <button className="btn btn-outline-warning float-end">♡</button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
			<br />
		</div>
	);
};
