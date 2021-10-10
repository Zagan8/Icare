import { useState } from "react";
import "./InNeedCard.css";
import Modal from "../../Modal/Modal";
interface InNeedCardI {
  name: string;
  img: string;
}
const InNeedCard: React.FC<InNeedCardI> = props => {
  return (
    <div className="card 1">
      <div className="card_image">
        {" "}
        <img src={props.img} />{" "}
      </div>
      <div className="card_title title-white">
        <p className="cardText">{props.name}</p>
      </div>
    </div>
  );
};

export default InNeedCard;
