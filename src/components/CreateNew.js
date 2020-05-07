import React, {useState} from "react";
import { Link } from 'react-router-dom';
import {db} from '../FirestoreConfig';
import { Form, Input,  Button } from "antd";



const Create = (props) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [sala, setSala] = useState('');
    const [key, setKey] = useState('');

    const Boards = db.collection('Boards');


    const onSubmit = (e) => {
        e.preventDefault();

        Boards.add({
            nombre,
            apellido,
            sala
        }).then((docRef) => {
            setKey('');
            setNombre('');
            setApellido('');
            setSala('')
            });
            // this.props.history.push("/")
            //console.log(docRef)

            //.catch((error) => {
            //    console.error("Error al agregar: ", error);
            //});
    }

    return (
        <div className="container" style={{width: 300, padding: '20px 50px'}}>
            <div class="panel panel-default">
                <div class="panel-heading"/>
                <div class="panel-body">
                    <h4><Link to={`/show/${key}`} class="btn btn-primary">Lista de Alumnos</Link></h4>
                    <Form>
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <Input type="text" class="form-control" name="nombre" value={nombre}  onChange={e => setNombre(e.target.value)} placeholder="Nombre" />

                        </div>
                        <div class="form-group">
                            <label for="apellido">Apelldio</label>
                            <Input type="text" class="form-control" name="apellido" value={apellido}  onChange={e => setApellido(e.target.value)} placeholder="Apellido" />                            </div>
                        <div class="form-group">
                            <label for="sala">Sala</label>
                            <Input type="text" class="form-control" name="sala" value={sala}  onChange={e => setSala(e.target.value)} placeholder="Sala" />
                        </div>
                        <Button onClick={onSubmit} type="submit" class="btn btn-success">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Create;
