import React from 'react';
import {
    useQuery,
    gql
} from "@apollo/client";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Col, Row
  } from 'reactstrap';

const GET_POKEMONS = gql`
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
    limit: 60,
    offset: 0,
};

export default function Home() {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: gqlVariables,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const pokemonList = data.pokemons.results

    return <Row><PokemonCard data={pokemonList}/></Row>
}

function PokemonCard(props){
    return props.data.map((e, i) => {
        return (
            <Col key={"poke_"+i} xs="4" sm="2">
                <Card className="Card-Pokemon" onClick={() => clickAction(e.name)}>
                    <CardImg top width="100%" src={e.image} alt={e.name+".png"}/>
                    <CardBody>
                        <CardTitle tag="h5">{e.name}</CardTitle>
                        <CardText>You own: 0</CardText>
                    </CardBody>
                </Card>
            </Col>
        )
    })
}

function clickAction(pokeName){
    alert("You clicked: " + pokeName)
}