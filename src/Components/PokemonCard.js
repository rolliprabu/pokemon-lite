import {
    Button, Card, CardImg, CardText, CardBody,
    CardTitle, Col, Table
} from 'reactstrap';
import { useHistory } from 'react-router-dom'

const PokemonCard = (props) => {
    const history = useHistory();

    const clickAction = (pokemonName) => {
        history.push({
            pathname: '/detail',
            state: { pokemon: pokemonName }
        });
    };

    return props.data.map((e, i) => {
        // console.log(props.ownPokemon[e.name].length)

        var pokemonNum = 0

        if (props.ownPokemon) {
            pokemonNum = props.ownPokemon[e.name] ? props.ownPokemon[e.name].length : 0;
        }

        return (
            <Col key={"poke_" + i} xs="6" sm="2">
                <Card className="Card-Pokemon">
                    <CardImg top width="100%" src={e.image} alt={e.name + ".png"} onClick={() => clickAction(e.name)} />
                    <CardBody onClick={() => clickAction(e.name)}>
                        <CardTitle tag="h5">{e.name}</CardTitle>
                        <CardText>You own: {pokemonNum}</CardText>

                    </CardBody>
                    {/* <Table>
                        <tbody>
                            {props.showName &&
                                props.ownPokemon[e.name].map((e, i) => {
                                    return (
                                        <tr key={"mypoke_" + i}>
                                            <td>
                                                "{e}"
                                            </td>
                                            <td>
                                                <Button color="danger" onClick={() => alert(e)}>release</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table> */}
                    {props.showName &&
                        props.ownPokemon[e.name].map((e, i) => {
                            return (
                                <div key={"mypoke_" + i} className="d-flex flex-row mb-2">
                                    <div>
                                        "{e}"
                                    </div>
                                    <div>
                                        {/* <Button color="danger" onClick={() => alert(e)}>release</Button> */}
                                        :
                                    </div>
                                </div>
                            )
                        })
                    }
                </Card>
            </Col>
        )
    })
}

export default PokemonCard;