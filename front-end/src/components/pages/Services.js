import React, { useContext } from "react";
import Cards from "../../components/Cards/Cards.js";
import { AuthContext } from "../../context/AuthProvider.js";
import '../Cards/Cards.css';



const About = () => {
    const { currentUser } = useContext(AuthContext);
    if (currentUser._id === null) {
        return (
            <>
                <div alt="" className="ServicesTopPic" />

                <Cards />

            </>

        );
    };
};
export default About;