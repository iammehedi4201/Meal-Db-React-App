import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import './FoodDetails.css'

const FoodDetails = () => {

    const param = useParams();


    const {mealid} = param;

    

    const [foodDetails,setFoodDetails] =useState({});
   
    console.log("The food Details:",foodDetails);

    const{strArea,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strMealThumb,strInstructions,strMeal,strYoutube}=foodDetails;

    console.log("The Meal Name is:",foodDetails.strMeal);

    useEffect(()=>{

         const api =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;

         fetch(api)
         .then(res=>res.json())
         .then(data=>setFoodDetails(data.meals[0]));

    },[mealid])

  return (
    <div className=" food-details-section">
      <Card className="card"  style={{ width: "40rem" }}>
        <Card.Img className="img-size" variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title className="text-center border-bottom">{strMeal}</Card.Title>
          <Card.Text>
           <h5>Cooking Instructions:</h5>
           {strInstructions?.substring(0, 100) + "...Read More"}
          </Card.Text>
        </Card.Body>
        <h5 className="mx-2">Ingredients:</h5>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{strIngredient1}</ListGroup.Item>
          <ListGroup.Item>{strIngredient2}</ListGroup.Item>
          <ListGroup.Item>{strIngredient3}</ListGroup.Item>
          <ListGroup.Item>{strIngredient4}</ListGroup.Item>
          <ListGroup.Item>{strIngredient5}</ListGroup.Item>
          <ListGroup.Item>{strIngredient6}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link className="btn d-grid btn-success" href={strYoutube}>Youtube Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodDetails;
