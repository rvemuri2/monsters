import { useState, useEffect } from "react";
import { Monster } from "../../App";
import "./card-list.css";
import Card from "../card/card-component";
type CardListProp = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProp) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);
export default CardList;
