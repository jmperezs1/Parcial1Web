import { useEffect, useState } from "react";
import imagen from "../Imagenes/inicio.png";
import Table from "react-bootstrap/Table";
import Detail from "./detail";

function Lista() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleRowClick = (car) => {
    setSelectedCar(car);
};

  useEffect(() => {
    const URL = "http://localhost:3001/cars";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setCars(data);
      });
  }, []);

  return (
    <div>
      <h1>TuSegundazo.com</h1>
      <img src={imagen} alt="Imagen Inicial" />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Marca</th>
            <th>Linea</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id} onClick={() => handleRowClick(car)}>
              <td>{car.id}</td>
              <td>{car.marca}</td>
              <td>{car.linea}</td>
              <td>{car.modelo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
      {selectedCar && <Detail car={selectedCar} />} 
      </div>
    </div>
  );
}

export default Lista;