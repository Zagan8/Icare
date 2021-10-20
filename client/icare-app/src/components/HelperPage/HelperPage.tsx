import { useEffect, useState } from "react";
import "./HelperPage.css";
import InNeedCard from "../InNeedCard/InNeedCard";
import axios from "axios";
import InNeedModal from "../InNeedPage/InNeedModal/InNeedModal";
import InNeedPopUp from "../InNeedPage/InNeedPopUp/InNeedPopUp";
import MenuAppBar from "../AppBar/MenuAppBar";
const HelperPage: React.FC = () => {
  const webToken = localStorage.getItem("jwt");
  const [inNeed, setInNeed] = useState<any[]>([]);
  const [isClicked, setIsClicked] = useState(false);
  const [modalData, setModalData] = useState<any>({});

  useEffect(() => {
    async function getNeeded() {
      try {
        let response = await axios.get("http://localhost:3001/wishes", {
          headers: {
            authorization: `Bearer ${webToken}`
          }
        });

        let data = await response.data;
        setInNeed([...data]);
      } catch (err) {
        console.error(err);
      }
    }
    getNeeded();
  }, []);

  return (
    <div className="helper-page">
      <MenuAppBar />
      <h1>People that need help</h1>
      <div className="card-container">
        {isClicked ? (
          <InNeedModal isOpen={isClicked} setClick={setIsClicked}>
            <InNeedPopUp modalData={modalData} />
          </InNeedModal>
        ) : null}
        {inNeed
          ? inNeed.map((needed: any) => {
              return (
                <div
                  onClick={() => {
                    setIsClicked(true);
                    setModalData(needed);
                  }}
                >
                  <InNeedCard inNeedData={needed} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default HelperPage;
