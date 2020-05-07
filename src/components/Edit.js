import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { db } from "../FirestoreConfig";
import { Form, Input, Button } from "antd";

const Edit = ({
  match: {
    params: { id },
  },
  history,
  match,
}) => {
  
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [sala, setSala] = useState("");
  const [key, setKey] = useState("");

  const BoardsRef = useRef(db.collection("Boards"));

  useEffect(() => {
    const Boards = BoardsRef.current;
    Boards.doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const { nombre, apellido, sala } = doc.data();
          setKey(doc.id);
          setNombre(nombre);
          setApellido(apellido);
          setSala(sala);
        } else {
          console.log("No such document!");
        }
      });
  }, [id]); //Cuales son sus dependencias

  const onSubmit = () => {
    const Boards = BoardsRef.current;
    const updateRef = Boards.doc(key);
    updateRef
      .set({
        nombre,
        apellido,
        sala,
      })
      .then((docRef) => {
        setKey("");
        setNombre("");
        setApellido("");
        setSala("");

        history.push("/show/" + match.params.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div className="container" style={{ width: 300, padding: "20px 50px" }}>
      <div className="panel panel-default">
        <div className="panel-heading" />
        <div className="panel-body">
          <h4>
            <Link to={`/show/${key}`} class="btn btn-primary">
              Lista de Alumnos
            </Link>
          </h4>
          <Form>
            <div class="form-group">
              <label htmlFor={"nombre"}>Nombre</label>
              <Input
                type="text"
                className="form-control"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
              />
            </div>
            <div class="form-group">
              <label htmlFor={"apellido"}>Apelldio</label>
              <Input
                type="text"
                className="form-control"
                name="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                placeholder="Apellido"
              />{" "}
            </div>
            <div class="form-group">
              <label htmlFor={"sala"}>Sala</label>
              <Input
                type="text"
                className="form-control"
                name="sala"
                value={sala}
                onChange={(e) => setSala(e.target.value)}
                placeholder="Sala"
              />
            </div>
            <Button onClick={onSubmit} type="submit" class="btn btn-success">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
