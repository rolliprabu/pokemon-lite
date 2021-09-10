import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Col
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
        return (
            <Col key={"poke_" + i} xs="6" sm="2">
                <Card className="Card-Pokemon" onClick={() => clickAction(e.name)}>
                    <CardImg top width="100%" src={e.image} alt={e.name + ".png"} />
                    <CardBody>
                        <CardTitle tag="h5">{e.name}</CardTitle>
                        <CardText>You own: 0</CardText>
                    </CardBody>
                </Card>
            </Col>
        )
    })
}

export default PokemonCard;