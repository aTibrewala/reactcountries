import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_COUNTRY_DATA, GET_CONTINENT_DATA} from './queries';

function Countries() {
    const {data, loading, error} = useQuery(GET_CONTINENT_DATA);
    return data.continents.map(({ name, code }) => (
        <div key={code}>
          <p>
           {code}: {name}
          </p>
        </div>
      ));
    
}

export default Countries;