import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {db} from '../FirestoreConfig';
import {Form, Input, Button} from "antd";

const Show = (props) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [sala, setSala] = useState('');
    const [key, setKey] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const boards = db.collection('Boards');

        boards.get().then((docs) => {
            if (docs && docs.length) {
                setUsuarios(docs);
            }
        });
    }, [])


    const borrar = (id) => {
        db.collection('boards').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
            this.props.history.push("/")
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }


    return (
        <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4><Link to="/">Lista de alumnos</Link></h4>
                    <ul>
                        {
                            usuarios.map(({nombre, apellido, sala}, index, array) => {
                                return (
                                    <li>
                                        Nombre: {nombre}
                                        Apellido: {apellido}
                                        Sala: {sala}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Link to={`/edit/${key}`} class="btn btn-success">Editar</Link>&nbsp;
                    <Button onClick={() => borrar(key)} class="btn btn-danger">Borrar</Button>
                </div>
            </div>
        </div>
    );
};


export default Show;