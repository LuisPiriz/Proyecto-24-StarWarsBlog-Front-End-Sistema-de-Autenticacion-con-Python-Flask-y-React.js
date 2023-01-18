import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single2 = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [planetas2, setPlanetas2] = useState({});

  function getInfoPlanets() {
    fetch("https://www.swapi.tech/api/planets/"+params.theid)
      .then((res) => res.json())
      .then((data) => setPlanetas2(data.result.properties))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
	getInfoPlanets();
  }, []);

  return (
    <div className="container mt-4">
		<div className="d-flex">
        <img
          src={params.theid === "1" ? `https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg` :`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}
          height={"300"}
          width={"auto"}
          alt=""
        />
        <div className="text-center ms-3">
          <h1 className="text-center">
			{planetas2.name}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            dolorem quos quo soluta saepe quaerat molestias placeat deleniti.
            Tempore sunt vel animi eveniet, nesciunt officia ullam nemo ipsum
            dignissimos fugiat?
          </p>
        </div>
      </div>
      <div className="text-center">
        <hr className="my-4 text-danger" />
        <div className="d-flex mt-2 text-danger">
          <div className="col-2 text-center">
            <p><strong>Name</strong></p>
			<p>{planetas2.name}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Climate</strong></p>
			<p>{planetas2.climate}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Population</strong></p>
			<p>{planetas2.population}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Orbital Period</strong></p>
			<p>{planetas2.orbital_period}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Rotation Period</strong></p>
			<p>{planetas2.rotation_period}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Diameter</strong></p>
			<p>{planetas2.diameter}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Single2.propTypes = {
  match: PropTypes.object,
};
