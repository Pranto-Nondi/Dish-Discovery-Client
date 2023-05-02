import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleChef from '../SingleChef/SingleChef';


const RecipeDetails = () => {
    const [chefs, setChefs] = useState([]);
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:3000/chefs`)
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error));
    }, [])
    const selectedChef = chefs.find(chef => chef.id == id)
    console.log(selectedChef)
    return (
        <div>
            <SingleChef selectedChef={selectedChef} />
        </div>
    );
};

export default RecipeDetails;