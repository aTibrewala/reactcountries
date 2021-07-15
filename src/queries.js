import { gql } from "@apollo/client";

export const GET_COUNTRY_DATA = ({code}) => {
 gql`query getCountries($code) {
        country(code: $${code}) {
            code
          name
          native
          phone
          continent {
            code
            name
          }
          capital
          currency
          languages {
            code
            name
            native
            rtl
          }
          emoji
          emojiU
          states {
            code
            name
          }
        }
      }`
}

export const GET_CONTINENT_DATA = 
    gql `query getContinents {
        continents {
            name
            code
            countries {
                name
                code
            }
        }
    }`;