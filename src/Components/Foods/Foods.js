import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Food from '../Food/Food';

const Foods = (props) => {

    const{inputValue} =props

    const[meals,setMeals]=useState([]);


    useEffect(()=>{

         const api=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
         
         fetch(api)
         .then(Response=>Response.json())
         .then(data=>setMeals(data.meals));

    },[inputValue]);


    console.log("The foods are:",meals);



    return (
        <div>
              <h4 className='text-center mt-2 text-uppercase border'>{inputValue} Meal Section</h4>
              
              <Row xs={1} md={4} className="g-4 mt-2">

                {
                    meals.map(meal=><Food 
                    meal={meal}
                    key={meal.idMeal}
                    ></Food>)
                }

              </Row>
        </div>
    );
};

export default Foods;