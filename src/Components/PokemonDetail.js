import React, { useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import { useLocation, Redirect } from 'react-router-dom';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap';

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

    const [modalCatchOpen, setModalCatchOpen] = useState(false);
    const [modalFailedOpen, setModalFailedOpen] = useState(false);
    const [caughtPokemon, setCaughtPokemon] = useState("");
    const [caughtName, setCaughtName] = useState("");

    const toggleModalCatch = () => setModalCatchOpen(!modalCatchOpen);
    const toggleModalFailed = () => setModalFailedOpen(!modalFailedOpen);

    const savePokemon = () => {
        var localPokemon = localStorage.getItem("PokemonData");
        var pokemonObj = {};
        var isUnique = true;

        if (localPokemon) {
            pokemonObj = JSON.parse(localPokemon);

            if (!pokemonObj[caughtPokemon]) {
                pokemonObj[caughtPokemon] = [];
            }
            
            Object.values(pokemonObj).forEach(val => {if (val.includes(caughtName)) isUnique = false});

            pokemonObj[caughtPokemon].push(caughtName);
        } else {
            pokemonObj = { [caughtPokemon]: [caughtName] };
        }

        if(isUnique){
            localStorage.setItem("PokemonData", JSON.stringify(pokemonObj));

            setCaughtName("");
            toggleModalCatch();
        } else {
            alert("You already have a pokemon named: " + caughtName + "\nPlease give it another name");
        }
    }

    if (!location.state) {
        alert("No pokemon selected");
        return <Redirect to="/" />
    } else {
        return (
            <div className="Detail-Container">
                <h2>Pokemon Detail</h2>
                <PokemonInfo
                    pokemonName={location.state.pokemon}
                    toggleModalCatch={toggleModalCatch}
                    toggleModalFailed={toggleModalFailed}
                    setCaughtPokemon={setCaughtPokemon}
                />
                <Modal isOpen={modalCatchOpen} toggle={toggleModalCatch} backdrop={"static"}>
                    <ModalHeader>SUCCESS</ModalHeader>
                    <ModalBody>
                        <p>Congratulation, you catch <b>{caughtPokemon}</b></p>
                        <p>Please give it a good name :)</p>
                        <input
                            type="text"
                            value={caughtName}
                            onChange={e => setCaughtName(e.target.value)}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={savePokemon}>Save</Button>{' '}
                        <Button color="danger" onClick={toggleModalCatch}>Release</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={modalFailedOpen} toggle={toggleModalFailed} backdrop={"static"}>
                    <ModalHeader>Failed</ModalHeader>
                    <ModalBody>
                        <p>Failed to catch <b>{caughtPokemon}</b></p>
                        <p>Keep trying, dont give up!</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggleModalFailed}>Close</Button>
                    </ModalFooter>
                </Modal>
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

    const pokemonData = data.pokemon;

    const tryCatch = (pokemon) => {
        var successCatch = Math.random() < 0.5;
        props.setCaughtPokemon(pokemon);

        if (successCatch) {
            props.toggleModalCatch();
        } else {
            props.toggleModalFailed();
        }
    }

    return (
        <Row className="Detail-Info">
            <Col xs="12" sm="4">
                <div>
                    <img src={pokemonData.sprites.front_default} alt="poke_img.png" />
                </div>
                <div className="mb-2">
                    <Button color="success" onClick={() => tryCatch(pokemonData.name)}>Catch this pokemon!</Button>
                </div>
            </Col>
            <Col xs="12" sm="8">
                <div className="Detail-Info-Box">
                    <Row>
                        <b>{pokemonData.name}</b>
                    </Row>
                    <Row className="mb-2">
                        {
                            pokemonData.types.map((e, i) => {
                                return (
                                    <Col key={"poke_type_" + i} className="d-flex justify-content-center">
                                        <div className={"align-middle Detail-Type-Box " + e.type.name}>
                                            {e.type.name}
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row>
                        <div className="Detail-Table-Move">
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th colSpan="2">Move Set</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        pokemonData.moves.map((e, i) => {
                                            if (i == 0 || i % 2 == 0) {
                                                if (pokemonData.moves[i + 1]) {
                                                    return (
                                                        <tr key={"poke_move_" + i}>
                                                            <td>{pokemonData.moves[i].move.name}</td>
                                                            <td>{pokemonData.moves[i + 1].move.name}</td>
                                                        </tr>
                                                    )
                                                } else {
                                                    return (
                                                        <tr key={"poke_move_" + i}>
                                                            <td colSpan="2">{pokemonData.moves[i].move.name}</td>
                                                        </tr>
                                                    )
                                                }
                                            }
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default PokemonDetail;