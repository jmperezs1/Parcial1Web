import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./incio.css"
import imagen from "../Imagenes/inicio.png"

function IncioSesion () {


    return (
        <div>
        <h1>Tu segundazo</h1>
        <img src={imagen} alt="Imagen Inicial"></img> 
        <Form>
                    <Form.Group className="ancho" controlId="formBasicEmail">
                        <Form.Label className="formato">USUARIO</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese el usuario"/>
                    </Form.Group>
                
                    <Form.Group className="ancho" controlId="formBasicPassword">
                        <Form.Label className="formato">CONTRASEÑA</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese la clave"/>
                    </Form.Group>
                    <Form.Group className="text-center margen">
                        <Button variant="secondary"  className="text-center">Iniciar Sesión</Button>
                    </Form.Group>
            
                </Form>
         </div>
    )

}

export default IncioSesion