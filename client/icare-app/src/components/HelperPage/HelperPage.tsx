import { useEffect, useState } from "react";
import "./HelperPage.css";
import InNeedCard from "../InNeedCard/InNeedCard";
import axios from "axios";
const HelperPage: React.FC = () => {
  const [inNeed, setInNeed] = useState<any[]>([]);
  useEffect(() => {
    async function getNeeded() {
      try {
        let response = await axios.get("http://localhost:3001/wishes", {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM0NDg2MjY1LCJleHAiOjE2MzcwNzgyNjV9.hwBLn834Q9TlFhjrxtA46boZLCWrq3qcRrdGUmq5VsA",
          },
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
        {inNeed ? (
          inNeed.map((needed: any) => (
            <InNeedCard
              type={needed.type}
              img={needed.img}
              city={needed.city}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default HelperPage;
