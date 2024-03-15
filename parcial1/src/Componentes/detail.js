import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import { FormattedMessage } from "react-intl";

const Detail = (props) => {
    return (
        <Card style={{ width: '18rem', height: '28rem', backgroundColor:"#D9D9D9", marginLeft:"80px"}} className="mb-3">
            <Card.Title className="centrar">
                {props.car.marca + " " + props.car.linea}
            </Card.Title>
            <Card.Body>
                <Card.Img style={{ height: '14rem', border:"1px solid black"}} variant="top" src={props.car.imagen} alt={props.car.linea} />
                <CardBody />
                <Card.Text>
                        {"→ "}<FormattedMessage id="Kilometraje"/> {":"} {props.car.kilometraje}
                </Card.Text>
                <Card.Text>
                        {"→ "}<FormattedMessage id="Color"/> {":"} {props.car.color}
                </Card.Text>
                <Card.Text>
                {"→ "}<FormattedMessage id="Referencia"/>{":"} {props.car.referencia}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Detail;