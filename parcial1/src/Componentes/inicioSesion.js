import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./incio.css"
import imagen from "../Imagenes/inicio.png"
import { useState } from 'react';

function IncioSesion () {

    const [formValues, setFormValues] = useState({email:"", password:""})

    const handleEmailChange = ((e) => {
        setFormValues({...formValues, email: e.target.value})
      });
     
    const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
      });

    function click(){

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues)
        };

        fetch('http://localhost:3001/login', requestOptions)
            .then(response => {
                console.log(response)
            });

    }

    return (
        <div>
        <h1>Tu segundazo</h1>
        <img src={imagen} alt="Imagen Inicial"></img> 
        <Form>
                    <Form.Group className="ancho" controlId="formBasicEmail">
                        <Form.Label className="formato">USUARIO</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese el usuario"  onChange={handleEmailChange}/>
                    </Form.Group>
                
                    <Form.Group className="ancho" controlId="formBasicPassword">
                        <Form.Label className="formato">CONTRASEÑA</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese la clave" onChange={handlePasswordChange}/>
                    </Form.Group>
                    <Form.Group className="text-center margen">
                        <Button variant="secondary"  className="text-center" onClick={click}>Iniciar Sesión</Button>
                    </Form.Group>
            
                </Form>
         </div>
    )

}

export default IncioSesion