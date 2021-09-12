import React, { useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

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
    var localPokemon = JSON.parse(localStorage.getItem("PokemonData"));
    localPokemon = localPokemon ? localPokemon : false;

    const [modalReleaseOpen, setModalReleaseOpen] = useState(false);
    const [releasedPokemon, setReleasedPokemon] = useState(["", ""]);
    const [ownPokemon, setOwnPokemon] = useState(localPokemon);

    const toggleModalRelease = () => setModalReleaseOpen(!modalReleaseOpen);
    
    const releasePokemon = (pokemon, pokeName) => {
        setReleasedPokemon([pokemon, pokeName]);
        toggleModalRelease();
    }

    const deleteEntry = () => {
        var pokemon = releasedPokemon[0];
        var pokeName = releasedPokemon[1];

        var cloneOwnPokemon = JSON.parse(JSON.stringify(ownPokemon));
        cloneOwnPokemon[pokemon] = cloneOwnPokemon[pokemon].filter(name => name !== pokeName);

        if(cloneOwnPokemon[pokemon].length == 0){
            delete cloneOwnPokemon[pokemon];
        }

        if(Object.keys(cloneOwnPokemon).length == 0){
            localStorage.removeItem("PokemonData");
            setOwnPokemon(false);
        } else {
            localStorage.setItem("PokemonData", JSON.stringify(cloneOwnPokemon));
            setOwnPokemon(cloneOwnPokemon);
        }
        
        toggleModalRelease();
    }

    const { loading, error, data } = useQuery(queryPokemonList, {
        variables: gqlVariables,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const pokemonList = data.pokemons.results;

    var myPokemon = []
    for(var i=0; i<pokemonList.length; i++){
        var pokemonName = pokemonList[i].name;
        var isOwn = ownPokemon[pokemonName] ? ownPokemon[pokemonName].length > 0 : false;
        
        if(isOwn){
            myPokemon.push(pokemonList[i]);
        }
    }

    return (
        <div className="Home-Container">
            <h2>My Pokemon</h2>
            {ownPokemon ?
                <Row className="Home-Card-Row">
                    <PokemonCard 
                        data={myPokemon}
                        ownPokemon={ownPokemon}
                        showName={true}
                        releasePokemon={releasePokemon}
                    />
                </Row>
                :
                <i>You dont have any pokemon at the moment, go catch some</i>
            }
            <Modal isOpen={modalReleaseOpen} toggle={toggleModalRelease} backdrop={"static"}>
                <ModalHeader>Release</ModalHeader>
                <ModalBody>
                    <p>You are about to release <b>{releasedPokemon[1]}</b>, Proceed?</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={deleteEntry}>Release</Button>
                    <Button color="primary" onClick={toggleModalRelease}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default MyPokemon;