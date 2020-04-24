import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import {db} from '../FirestoreConfig';
import { Form, Input,  Button } from "antd";

const Edit = (props) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [sala, setSala] = useState('');
    const [key, setKey] = useState('');


    const Boards = db.collection('Boards');


        useEffect(() => {
            Boards.doc(props.match.params.id).get().then((doc) => {
                if (doc.exists) {
                    const {nombre, apellido, sala} = doc.data()
                    setKey(doc.id);
                    setNombre(nombre);
                    setApellido(apellido);
                    setSala(sala)
                } else {
                    console.log("No such document!");
                }
            });
        }, [])



    const onSubmit = () => {

        const updateRef = Boards.doc(key);
        updateRef.set({
            nombre,
            apellido,
            sala
        }).then((docRef) => {
            setKey('');
            setNombre('');
            setApellido('');
            setSala('')

            props.history.push("/show/"+props.match.params.id)
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

        return (
            <div className="container" style={{width: 300}}>
            <div className="panel panel-default">
                    <div className="panel-heading"/>
                    <div className="panel-body">
                        <h4><Link to={`/show/${key}`} class="btn btn-primary">Lista de Alumnos</Link></h4>
                        <Form>
                            <div class="form-group">
                                <label htmlFor={"nombre"}>Nombre</label>
                                <Input type="text" className="form-control" name="nombre" value={nombre}  onChange={e => setNombre(e.target.value)} placeholder="Nombre" />

                            </div>
                            <div class="form-group">
                                <label htmlFor={"apellido"}>Apelldio</label>
                                <Input type="text" className="form-control" name="apellido" value={apellido}  onChange={e => setApellido(e.target.value)} placeholder="Apellido" />                            </div>
                            <div class="form-group">
                                <label htmlFor={"sala"}>Sala</label>
                                <Input type="text" className="form-control" name="sala" value={sala}  onChange={e => setSala(e.target.value)} placeholder="Sala" />
                            </div>
                            <Button onClick={onSubmit} type="submit" class="btn btn-success">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
}

export default Edit;