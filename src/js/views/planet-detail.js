import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import BigImage from "../../img/800x600.png";

export const PlanetDetail = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
            {store.planets.map((item) => {
                return (
                    <>
                        <div class="card mb-3 border-0">
                            <div class="row g-0">
                                <div class="col">
                                    <img src={BigImage} className="mb-3" alt="..." style={{width: '600px'}} />
                                </div>
                                <div class="col">
                                <div class="card-body text-center">
                                    <h1 class="card-title">{item.name}</h1>
                                    <p class="card-text mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <p className="border-top border-danger border-3 "></p>
                        <table class="table table-borderless fs-2 text-center text-danger mb-5">
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
                                    <td>{item.name}</td>
                                    <td>{item.climate}</td>
                                    <td>{item.population}</td>
                                    <td>{item.orbital_period}</td>
                                    <td>{item.rotation_period}</td>
                                    <td>{item.diameter}</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                );
            })}
		</div>
	);
};
