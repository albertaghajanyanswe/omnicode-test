import Card from "react-bootstrap/Card";
import classNames from "classnames";
import "./card.css";

function CustomCard({ detail }) {
  return (
    <Card className="custom-card-root" style={{ backgroundColor: "rgba(35, 35, 35, 1)", cursor: 'pointer' }}>
      <Card.Body>
        <div style={{ textAlign: 'start'}}>{detail.icon}</div>
        <p className="custom-card-title">{detail.title}</p>
        <Card.Text className="custom-card-info"> {detail.info} </Card.Text>
        <Card.Text className={classNames("custom-card-info mt-80")}> Explore more </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
