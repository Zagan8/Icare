import "./HelpVariation.css";
const HelpVariation: React.FC<{ color: string; name: string }> = props => {
  return (
    <div
      className="help-variation"
      style={{ backgroundColor: `${props.color}` }}
    >
      {props.name}
    </div>
  );
};

export default HelpVariation;
