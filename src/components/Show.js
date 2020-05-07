import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {db} from '../FirestoreConfig';
import {Button} from "antd";

const Show = (props) => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const Boards = db.collection('Boards');

        Boards.get().then((docs) => {
            if (!docs.empty) {
                let usuarios = [];
                docs.forEach(doc => {
                    usuarios.push(
                    {
                        key:doc.id, ...doc.data()
                    })
                })
                setUsuarios(usuarios);
            }
        });
    }, [])


    const borrar = (id) => {
        db.collection('Boards').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }


    return (
        <div className="container" style={{width: 400, padding: '20px 10px'}}>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4><Link to="/">Lista de alumnos</Link></h4>
                    <table>
                        <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Sala</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            usuarios.map(({nombre, apellido, sala, key}) => {
                                return (
                                    <tr key={key}>
                                        <td>{nombre}</td>
                                        <td>{apellido}</td>
                                        <td>{sala}</td>
                                        <td>
                                            <Button> <Link to={`/edit/${key}`}>Editar</Link>&nbsp;</Button>
                                            <Button onClick={() => borrar(key)} className="btn btn-danger">Borrar</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default Show;