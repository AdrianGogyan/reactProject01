import React from "react";
import { useState } from "react";
import axios from "axios";

const RandomUser = () => {

    const [randUser, setRandUser] = useState(null);

    return(
        <div className="randomUser">
            <p>Randomuser</p>
        </div>
    );
}

export default RandomUser;