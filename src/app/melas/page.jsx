"use client"
import React, { useEffect, useState } from 'react';




const page = () => {

    const [meal, setmeals] = useState([])


    useEffect(() => {
        const allmeals = async () => {

            const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            const data = await res.json()
            setmeals(data.meals)
            return data.meals;



        }
        allmeals()
    }, [])

    return (
        <div>
            <p>Total Meal are :  {meal.length}:</p>

            <div className='grid grid-cols-3 gap-3'>
                {
                    meal.map((m) => {
                        return (
                            <div className='border-2 p-1.5'>
                                <h2> {m.strMeal}</h2>
                                <p>{m.strInstructions}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default page;



// import React, { useEffect, useState } from "react";

// const Page = () => {
//   const [meal, setmeals] = useState([]);

//   const allmeals = async () => {
//     const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
//     const data = await res.json();
//     setmeals(data.meals); // ✅ Correct usage
//   };

//   useEffect(() => {
//     allmeals(); // ✅ Call the function
//   }, []);

//   return (
//     <div>
//       <p>title length: {meal.length}</p>
//     </div>
//   );
// };

// export default Page;
