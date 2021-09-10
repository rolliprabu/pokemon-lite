import {
    useQuery,
    gql
} from "@apollo/client";
import { useLocation, Redirect } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';

const queryPokemon = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            sprites {
                front_default
            }
            moves {
                move {
                    name
                }
            }
            types {
                type {
                    name
                }
            }
        }
    }
`;

const PokemonDetail = (props) => {
    const location = useLocation();

    if(!location.state){
        alert("No pokemon selected");
        return <Redirect to="/" />
    } else {
        return (
            <div className="Detail-Container">
                <h2>Pokemon Detail</h2>
                <PokemonInfo pokemonName={location.state.pokemon}/>
            </div>
        )
    }
}

const PokemonInfo = (props) => {
    const gqlVariables = {
        name: props.pokemonName,
    };

    const { loading, error, data } = useQuery(queryPokemon, {
        variables: gqlVariables,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const pokemonData = data.pokemon
    console.log(pokemonData)

    return (
        <Row className="Detail-Info">
            <Col xs="12" sm="4">
                <div>
                    <img src={pokemonData.sprites.front_default} alt="poke_img.png"/>
                </div>
                <div>
                    <Button color="success" onClick={() => tryCatch(pokemonData.name)}>Catch this pokemon!</Button>
                </div>
            </Col>
            <Col xs="12" sm="8">
                <div className="Detail-Info-Box">
                    <div>
                        <b>{pokemonData.name}</b>
                    </div>
                    <div>
                        <Row>
                        {
                            pokemonData.types.map((e, i) => {
                                return (
                                    <Col key={"poke_type_"+i} className="d-flex justify-content-center">
                                        <div className={"align-middle Detail-Type-Box "+e.type.name}>
                                            {e.type.name}
                                        </div>
                                    </Col>
                                )
                            })
                        }
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

const tryCatch = (pokemon) => {
    alert("you catch: " + pokemon)
}

export default PokemonDetail;