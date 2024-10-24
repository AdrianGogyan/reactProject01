import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const RandomUser = () => {

    const [randUser, setRandUser] = useState(null);

    const randomData = async() => {
        try{
            const response = await axios.get(`https://randomuser.me/api/`);
            return response.data;
        }
        catch(error){
            throw new Error('Fetching the api has gone wrong');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await randomData();
            if(data) 
                setRandUser(data.results[0])
        }
        fetchData();
    }, []);
        

    return(
        <div className="randomUserWrapper">
            {randUser ? (
                <div className="randomUser">
                    <img src = {randUser.picture.large} alt="User Picture" />
                    <p>Name: {randUser.name.first} {randUser.name.last}</p>
                    <p>Email: {randUser.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default RandomUser;