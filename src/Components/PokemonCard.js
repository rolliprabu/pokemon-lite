import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom'

const PokemonCard = (props) => {
    const history = useHistory();

    const clickAction = (pokemonName) => {
        history.push({
            pathname: '/detail',
            state: { pokemon: pokemonName }
        });
    };

    return props.data.map((pokeData, dataIndex) => {
        var pokemonNum = 0;

        if (props.ownPokemon) {
            pokemonNum = props.ownPokemon[pokeData.name] ? props.ownPokemon[pokeData.name].length : 0;
        }

        return (
            <Col key={"poke_" + dataIndex} xs="6" sm="4" md="3" lg="2">
                <Card className="Card-Pokemon">
                    <CardImg top width="100%" src={pokeData.image} alt={pokeData.name + ".png"} onClick={() => clickAction(pokeData.name)} />
                    <CardBody onClick={() => clickAction(pokeData.name)}>
                        <CardTitle tag="h5">{pokeData.name}</CardTitle>
                        <CardText>You own: {pokemonNum}</CardText>
                    </CardBody>
                    {props.showName &&
                        props.ownPokemon[pokeData.name].map((pokeName, pokeIndex) => {
                            return (
                                <div key={"mypoke_" + pokeIndex} onClick={() => props.releasePokemon(pokeData.name, pokeName)} className="d-flex justify-content-between mb-1 mx-2 border-bottom">
                                    <div>
                                        - "{pokeName.length > 10 ? pokeName.substring(0, 10) + "..." : pokeName}"
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="Card-Menu-Dot">&nbsp;&#10247;</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="mb-3"></div>
                </Card>
            </Col>
        )
    })
}

export default PokemonCard;