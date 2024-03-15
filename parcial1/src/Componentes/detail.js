import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";

const Detail = (props) => {
    
    return (
        <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
            <Card.Title>
                {props.car.marca + " " + props.car.linea}
            </Card.Title>
            <Card.Body>
                <Card.Img style={{ height: '14rem' }} variant="top" src={props.car.imagen} alt={props.car.linea} />
                <CardBody />
                <Card.Text>
                        {"Kilometraje: " + props.car.kilometraje}
                </Card.Text>
                <Card.Text>
                        {"Color: " + props.car.color}
                </Card.Text>
                <Card.Text>
                        {"Referencia: " + props.car.referencia}
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Detail;
