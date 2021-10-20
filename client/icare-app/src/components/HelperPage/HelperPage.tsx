import { useEffect, useState } from "react";
import "./HelperPage.css";
import InNeedCard from "../InNeedCard/InNeedCard";
import axios from "axios";
import InNeedModal from "../InNeedPage/InNeedModal/InNeedModal";
import InNeedPopUp from "../InNeedPage/InNeedPopUp/InNeedPopUp";
const HelperPage: React.FC = () => {
  const [inNeed, setInNeed] = useState<any[]>([]);
  const [isClicked, setIsClicked] = useState(false);
  const [modalData, setModalData] = useState<any>({});

  useEffect(() => {
    async function getNeeded() {
      try {
        let response = await axios.get("http://localhost:3001/wishes", {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM0NzIzOTAzLCJleHAiOjE2MzczMTU5MDN9.5WARWmullxrj-A6EYpETbWlOJEUMauxKyv3S4tFjMgs"
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
