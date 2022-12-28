import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import '../components/Cards.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(props) {
  let [numOfLikes, setNumOfLikes] = useState(0);

  const updateLikes = () => {
    setNumOfLikes(numOfLikes + 1)
    props.likes()
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        className="img-card"
        variant="top"
        src={props.imgPath}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Likes: {numOfLikes}
        </Card.Text>
        <Button variant="primary" onClick={updateLikes}>
          👍
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
