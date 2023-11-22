import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
            <h1 className="text-start text-danger">Characters</h1>
			{store.character.map((item, index) => {
				return (
                    <div key={index} className="card text-start" style={{width: '18rem'}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Gender: {item.gender}</p>
                            <p className="card-text">Hair Color: {item.hair_color}</p>
                            <p className="card-text">Eye Color: {item.eye_color}</p>
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
			<br />
		</div>
	);
};
