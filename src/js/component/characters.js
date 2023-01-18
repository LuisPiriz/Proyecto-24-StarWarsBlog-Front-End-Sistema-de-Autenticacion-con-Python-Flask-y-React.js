import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Characters = (props) => {

  const { store, actions } = useContext(Context);
 
  // console.log(store.personajes)
  console.log(store.personajes)

  return (
    <div className="">
      <div className="card mx-3" style={{height: "auto", width: 350}}>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Gender: {store.personajes.gender}</li>
            <li className="list-group-item">Hair color: {props.pelo}</li>
            <li className="list-group-item">Eye-color: {props.ojos}</li>
          </ul>
          <Link to={"/single/"+props.id} type="button" className="btn btn-outline-primary">Learn more</Link>
          <button type="button" onClick={actions.agregarFavorito} className="btn btn-outline-warning float-end"><i className="fa fa-heart"></i></button>
        </div>
      </div>
    </div>
  )
}
