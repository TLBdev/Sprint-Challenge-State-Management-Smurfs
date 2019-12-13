import React from 'react';


const Smurf = props => {


    return (
        <div>
            <p>{props.item.name}</p>
            <p>{props.item.age}</p>
            <p>{props.item.height}</p>
            <p>{props.item.id}</p>
        </div>
    );
};

export default Smurf;