import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import BigImage from "../../img/800x600.png";

export const CharacterDetail = () => {
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
                            <h1 className="card-title">{store.character[params.character].name}</h1>
                            <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="border-top border-danger border-3 "></p>
            <table className="table table-borderless fs-2 text-center text-danger mb-5">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Birth Year</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Height</th>
                        <th scope="col">Skin Color</th>
                        <th scope="col">Eye Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{store.character[params.character].name}</td>
                        <td>{store.character[params.character].birth_year}</td>
                        <td>{store.character[params.character].gender}</td>
                        <td>{store.character[params.character].height}</td>
                        <td>{store.character[params.character].skin_color}</td>
                        <td>{store.character[params.character].eye_color}</td>
                    </tr>
                </tbody>
            </table>
		</div>
	);
};

CharacterDetail.propTypes = {
	match: PropTypes.object
};