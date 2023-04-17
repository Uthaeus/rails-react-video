import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <h1 className='home-title'>Home Page</h1>
            <Link to='/projects'>Projects</Link>
        </>
    );
};

export default Home;