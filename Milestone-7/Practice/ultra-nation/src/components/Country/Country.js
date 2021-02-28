
import React from 'react';
import './Country.css'


const Country = (props) => {
    const { name, flag, region, population,} = props.country;

    const handleAddCountry = props.handleAddCountry

    return (
        <div>
            <div className="country-container">
                

                <h3>Country : {name}</h3>
                <br/>
                
                <img  src={flag} alt=""/>
                <br/>

                <h4>Region : {region} </h4>

                <h3>Population : {population} </h3>

                <button onClick={() => handleAddCountry(props.country)} >Country</button> 
                <hr/>

            </div>
        </div>
    )
}

export default Country;