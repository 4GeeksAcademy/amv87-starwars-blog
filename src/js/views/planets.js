import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
            <h1 className="text-start text-danger">Planets</h1>
			{store.planets.map((item, index) => {
				return (
                    <div key={index} className="card text-start" style={{width: '18rem'}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Population: {item.population}</p>
                            <p className="card-text">Terrain: {item.terrain}</p>
                            <Link to="/">
                                <button className="btn btn-primary">Learn more!</button>
                            </Link>
                        </div>
                    </div>
				);
			})}
			<br />
		</div>
	);
};
