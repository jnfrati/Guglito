import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {db} from '../FirestoreConfig';
import { Form, Input,  Button } from "antd";




class Create extends Component {

    constructor()
    {
        super ();
        this.ref = db.collection('Boards');
        this.state = {
            nombre: '',
            apellido: '',
            sala: ''
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(e.target.name)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { nombre, apellido, sala } = this.state;

        this.ref.add({
            nombre,
            apellido,
            sala
        }).then((docRef) => {
            this.setState({
                nombre: '',
                apellido: '',
                sala: ''
            });
            // this.props.history.push("/")
            console.log(docRef)
        })
            .catch((error) => {
                console.error("Error al agregar: ", error);
            });
    }

    render()
    {
        const {nombre, apellido, sala} = this.state;

        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };

        const validateMessages = {
            required: 'Campo Requerido'
        }

        const Demo = () => {
            const onFinish = values => {
                console.log(values);
            }
        };


        return (
            <div class="container" style={{width:300, padding:30 }}>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title"> AGREGAR ALUMNO </h3>
                    </div>
                    <div class="panel-body">
                        <Form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="title">Nombre:</label>
                                <Input type="text" class="form-control" name="nombre" value={nombre}
                                       onChange={this.onChange} placeholder="Ingrese su nombre"/>
                            </div>
                            <div class="form-group">
                                <label for="description">Apellido:</label>
                                <Input type="text" class="form-control" name="apellido" value={apellido}
                                       onChange={this.onChange} placeholder="Ingrese su apellido"/>
                            </div>
                            <div class="form-group">
                                <label for="author">Sala:</label>
                                <Input type="text" class="form-control" name="sala" value={sala}
                                       onChange={this.onChange} placeholder="Ingrese sala"/>
                            </div>
                            <Button type="submit" class="btn btn-success">Crear</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;