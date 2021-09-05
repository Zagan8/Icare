import "./HelperPage.css";
import InNeedCard from "../InNeedCard/InNeedCard";
const HelperPage: React.FC = () => {
  return (
    <div className="helper-page">
      <h1>People that need help</h1>
      <div className="card-container">
        <InNeedCard />
        <InNeedCard />
        <InNeedCard />
      </div>
    </div>
  );
};

export default HelperPage;
