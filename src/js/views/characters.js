import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import SmallImage from "../../img/400x200.png";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
            <h1 className="text-start text-danger">Characters</h1>
            <div className="row horizontal">
                {store.character.map((item, index) => {
                    return (
                        <div key={item.url} className="card text-start mx-3 my-3 p-0 carditem" style={{width: '400px'}}>
                            <img src={SmallImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Gender: {item.gender}</p>
                                <p className="card-text">Hair Color: {item.hair_color}</p>
                                <p className="card-text">Eye Color: {item.eye_color}</p>
                                <Link to={"/character-detail/" + index}>
                                    <button className="btn btn-outline-primary">Learn more!</button>
                                </Link>
                                <button onClick={()=>actions.addFavorite(item.name)} className="btn btn-outline-warning float-end" style={{backgroundColor: store.favorites.includes(item.name) ? "#ffc107" : "", color: store.favorites.includes(item.name) ? "black" : "" }} >♡</button>
                            </div>
                        </div>
                    );
                })}
            </div>
			<br />
		</div>
	);
};
