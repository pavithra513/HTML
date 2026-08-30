import React, { useState } from 'react';

const Fruit = () => {

    const [fruit, setFruit] = useState([
        "Apple",
        "Banana",
        "Grapes"
    ]);

    const [insert, setInsert] = useState("");

    let add = () => {
        setFruit([...fruit, insert]);
        setInsert("");
    };

    return (
        <div>

            Fruit:
            <input
                type="text"
                value={insert}
                onChange={(e) => setInsert(e.target.value)}
            />

            <button onClick={add}>Add</button>

            <ul>
                {fruit.map((slice, i) => (
                    <li key={i}>
                        <h1>{slice}</h1>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Fruit;