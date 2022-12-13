import React, { useEffect, useState } from 'react'
import { Client } from '@petfinder/petfinder-js';
import GridItem from '../pets/GridItem';

function Pets() {
    const [pets, setPets] = useState([]);
    const [token, setToken] = useState('');
    // const [expires, setExpires] = useState(null);
    // const [latitude, setLatitude] = useState('');
    // const [longitude, setLongitude] = useState('');

    
    
    useEffect(() => {
        client.authenticate()
        .then(res => {
        setToken(res.data.access_token);
        // setExpires(res.data.expires_in);
        });
        // navigator.geolocation.getCurrentPosition((position) => {
            //     setLatitude(position.coords.latitude);
            //     setLongitude(position.coords.longitude);
            //     console.log('Latitude is: ', position.coords.latitude);
        //     console.log('Longitude is: ', position.coords.longitude);
        // });
        // getPets();
    }, []);
    
    
    //  build client object - setting the key,  secret key and token. Token is needed  to make get requests
    const client = new Client({apiKey: process.env.REACT_APP_API_KEY, secret: process.env.REACT_APP_SECRET_KEY, token: token });
    console.log('client:  ', client);

    // make request to get  animal data
    function getPets(type = null, breed = null, location = null, page = 1, limit = 50){
        // client.animal.search()
        client.animal.search({
            type: type,
            breed: breed,
            location: location,
            limit: limit,
            page: page,
        })
        // do something with animal results
        .then((response) => {
            setPets(response.data.animals);
            console.log(response);
        // catch any errors
        }).catch((err) => {
            console.log(err);
        });
  };

  return (
    <>
        <div>
            {/* <button onClick={() => getPets('Dog', 'Akbash', 1, 50)}>submit</button> */}
            <button onClick={() => getPets('Dog', '', 98106, )}>submit</button>
            {pets.length > 0 && pets.map((pet, idx) => {
                return <GridItem index={idx} animal={pet} key={pet.id}/>;
        })}
        </div>
        {/* {loader} */}
    </>
  );
};

export default Pets;