import React from 'react';
import {
    useQuery,
    gql
} from "@apollo/client";
import { Row } from 'reactstrap';

import PokemonCard from '../Components/PokemonCard';

const queryPokemonList = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

const gqlVariables = {
    limit: 151,
    offset: 0,
};

const MyPokemon = () => {
    const { loading, error, data } = useQuery(queryPokemonList, {
        variables: gqlVariables,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const pokemonList = data.pokemons.results;

    var localPokemon = JSON.parse(localStorage.getItem("PokemonData"));
    localPokemon = localPokemon ? localPokemon : false;

    var myPokemon = []
    for(var i=0; i<pokemonList.length; i++){
        var pokemonName = pokemonList[i].name;
        var isOwn = localPokemon[pokemonName] ? localPokemon[pokemonName].length > 0 : false;

        if(isOwn){
            myPokemon.push(pokemonList[i])
        }
    }

    console.log(localPokemon)

    return (
        <div className="Home-Container">
            <h2>My Pokemon</h2>

            {
                localPokemon ?
                <Row className="Home-Card-Row">
                    <PokemonCard data={myPokemon} ownPokemon={localPokemon} showName={true}/>
                </Row>
                :
                <i>You dont have any pokemon at the moment, go catch some</i>
            }
        </div>
    )
}

export default MyPokemon;