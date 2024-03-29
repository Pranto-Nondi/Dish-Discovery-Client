import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleChef from '../SingleChef/SingleChef';


const RecipeDetails = () => {
    const [chefs, setChefs] = useState([]);
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`https://modern-chef-recipe-site-server.vercel.app/chefs`)
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error));
    }, [])
    const selectedChef = chefs.find(chef => chef.id == id)
    return (
        <div>
            <SingleChef selectedChef={selectedChef} />
        </div>
    );
};

export default RecipeDetails;