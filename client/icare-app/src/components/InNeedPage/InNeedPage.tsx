import { useState } from "react";
import InNeedCard from "./InNeedCard/InNeedCard";

import "./InNeedPage.css";
import InNeedModal from "./InNeedModal/InNeedModal";
import InNeedApply from "./InNeedApply/InNeedApply";

const InNeedPage: React.FC = () => {
  const [click, onClick] = useState(false);

  const helpTypes = [
    {
      name: "Provision",
      img:
        "https://news.europawire.eu/wp-content/uploads/2019/02/SGS-can-now-offer-FSMA-certification-for-VQIP-and-FSVP-to-foreign-food-importers-into-the-US.jpg"
    },
    {
      name: "Financial support",
      img:
        "https://employeebenefits.co.uk/content/uploads/2021/09/financial-support.png"
    },
    {
      name: "Emotional support",
      img:
        "https://manchesterinklink.com/wp-content/uploads/2017/02/Screen-Shot-2017-02-02-at-2.19.14-PM-336x228.png"
    },
    {
      name: "Other",
      img: "https://icon-library.com/images/icon-other/icon-other-15.jpg"
    }
  ];
  return (
    <>
      {click ? (
        <InNeedModal isOpen={click} setClick={onClick}>
          <InNeedApply />
        </InNeedModal>
      ) : null}
      <div className="inNeed-page">
        <h1 className="inNeedPageHeader">our help options</h1>
        <div className="inNeedContainer">
          {helpTypes.map(type => (
            <div onClick={() => onClick(true)} className="InNeedCard">
              <InNeedCard name={type.name} img={type.img} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InNeedPage;
