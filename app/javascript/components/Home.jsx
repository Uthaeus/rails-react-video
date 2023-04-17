import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <h1 className='home-title'>Home Page</h1>
            <Link to='/recipes'>Recipes</Link>
        </>
    );
};

export default Home;