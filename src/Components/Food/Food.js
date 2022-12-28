import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import "./Food.css";

const Food = (props) => {
  const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal;

  const navigate=useNavigate();

  const showDetails=()=>{

     const path =`/Food/${idMeal}`

     navigate(path)

  }

  return (
    <Col>
      <Card className="card-size">
        <Card.Img className="img-size" variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title className="text-center">{strMeal}</Card.Title>
          <Card.Text>
            {strInstructions.substring(0, 100) + "...Read More"}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="d-grid ">
            <button onClick={showDetails} className="btn btn-danger">Show  {strMeal} Details</button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Food;
