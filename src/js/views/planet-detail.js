import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import BigImage from "../../img/800x600.png";

export const PlanetDetail = () => {
	const { store, actions } = useContext(Context);
    const params = useParams();

	return (
		<div className="container">
            <div className="card mb-3 border-0">
                <div className="row g-0">
                    <div className="col">
                        <img src={BigImage} className="mb-3" alt="..." style={{width: '600px'}} />
                    </div>
                    <div className="col">
                        <div className="card-body text-center">
                            <h1 className="card-title">{store.planets[params.planet].name}</h1>
                            <p className="card-text mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="border-top border-danger border-3 "></p>
            <table className="table table-borderless fs-2 text-center text-danger mb-5">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Climate</th>
                        <th scope="col">Population</th>
                        <th scope="col">Orbital Period</th>
                        <th scope="col">Rotation Period</th>
                        <th scope="col">Diameter</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{store.planets[params.planet].name}</td>
                        <td>{store.planets[params.planet].climate}</td>
                        <td>{store.planets[params.planet].population}</td>
                        <td>{store.planets[params.planet].orbital_period}</td>
                        <td>{store.planets[params.planet].rotation_period}</td>
                        <td>{store.planets[params.planet].diameter}</td>
                    </tr>
                </tbody>
            </table>
		</div>
	);
};

PlanetDetail.propTypes = {
	match: PropTypes.object
};