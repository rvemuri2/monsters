import { useState, useEffect } from "react";
import "./card-list.css";
import Card from "../card/card-component";
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);
export default CardList;
