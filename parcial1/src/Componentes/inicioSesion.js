import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./incio.css"
import imagen from "../Imagenes/image.png"
import { useState } from 'react';
import { FormattedMessage } from "react-intl";


function IncioSesion () {

    const [formValues, setFormValues] = useState({login:"", password:""})
    const [validacion, setValidacion] = useState()

    const handleEmailChange = ((e) => {
        setFormValues({...formValues, login: e.target.value})
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

        console.log(requestOptions)

        fetch('http://localhost:3001/login', requestOptions)
            .then(response => {
                if (response.ok) {
                    window.location.href = '/carros';                    
                } else {
                    console.log("Login failed");
                    setValidacion(false);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return (
        <div>
            <div>
                <h1 className="font">TuSegundazo.com</h1>
                <div className="text-center">
                 <img src={imagen} alt="Imagen Inicial"  width="1244" height="323"></img> 
                 </div>
            </div>
        <Form>
                <h2 className="text-center"><FormattedMessage id="InicioSesion"/></h2>
                    <Form.Group className="ancho" controlId="formBasicEmail">
                        <Form.Label className="formato"><FormattedMessage id="usuario"/></Form.Label>
                        <Form.Control type="email"  
                                      onChange={handleEmailChange} 
                                      style={{ backgroundColor: '#D9D9D9', border: validacion === false ? '1px solid red' : 'none' }}/>
                    </Form.Group>
                
                    <Form.Group className="ancho" controlId="formBasicPassword">
                        <Form.Label className="formato"><FormattedMessage id="contraseña"/></Form.Label>
                        <Form.Control type="password" 
                                      onChange={handlePasswordChange} 
                                      style={{ backgroundColor: '#D9D9D9', border: validacion === false ? '1px solid red' : 'none' }}/>
                    </Form.Group>
                    <Form.Group className="flex">
                        <Button variant="primary"  className="text-center margenes"  onClick={click}><FormattedMessage id="boton1"/></Button>
                        <Button variant="danger"  className="text-center margenes"  ><FormattedMessage id="boton2"/></Button>
                    </Form.Group>
                    <div className="text-center"> 
                        {validacion === false && <Form.Text className="text-danger text-center" ><FormattedMessage id="Error"/></Form.Text>}
                    </div>
                </Form>
         </div>
    )

}

export default IncioSesion