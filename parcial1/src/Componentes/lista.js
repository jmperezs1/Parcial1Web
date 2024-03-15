import { useEffect, useState } from "react";
import imagen from "../Imagenes/image.png";
import Table from "react-bootstrap/Table";
import Detail from "./detail";
import "./lista.css";
import { FormattedMessage } from "react-intl";

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
      <div>
        <h1 className="font">TuSegundazo.com</h1>
        <div className="text-center">
          <img src={imagen} alt="Imagen Inicial" width="1244" height="323" />
        </div>
      </div>
      <div className="flex">
        <div className="table-container"> {/* This div will not be centered */}
          <Table>
            <thead className="dark-header">
              <tr>
                <th className="dark-header">#</th>
                <th className="dark-header"><FormattedMessage id="Marca"/></th>
                <th className="dark-header"><FormattedMessage id="Linea"/></th>
                <th className="dark-header"><FormattedMessage id="Modelo"/></th>
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
        </div>
        <div className="card-container">{selectedCar && <Detail car={selectedCar} />}</div> {/* Add card-container */}
      </div>
    </div>
  );
}

export default Lista;