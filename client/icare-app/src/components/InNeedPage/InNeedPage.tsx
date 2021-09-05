import HelpVariation from "./HelpVariation/HelpVariation";
import "./InNeedPage.css";
const InNeedPage: React.FC = () => {
  return (
    <div className="inNeed-page">
      <h1>Hello there,We will do our best to help you!</h1>
      <HelpVariation color={"pink"} name="food" />
      <HelpVariation color={"yellow"} name="money" />
      <HelpVariation color={"azure"} name="mental help" />
    </div>
  );
};

export default InNeedPage;
