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

const Home = () => {
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

  return (
    <div className="Home-Container">
      <Row className="Home-Card-Row">
        <PokemonCard data={pokemonList} ownPokemon={localPokemon}/>
      </Row>
    </div>
  )
}

export default Home;