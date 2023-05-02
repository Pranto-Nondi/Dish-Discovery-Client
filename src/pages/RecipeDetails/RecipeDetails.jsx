import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const [data, setData] = useState([]);
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:3000/chefs`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, [])
    console.log(data)
    return (
        <div>
            this is recipe details
        </div>
    );
};

export default RecipeDetails;