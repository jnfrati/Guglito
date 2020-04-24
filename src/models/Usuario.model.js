export class Usuario {
    id;
    nombre;
    apellido;
    sala;


    constructor() {
        this.id = null;
        this.nombre = null;
        this.apellido = null;
        this.sala = null;
    }

    setValues({id, nombre, apellido, sala}) {
        this.id = id || this.id;
        this.nombre = nombre || this.nombre;
        this.apellido = apellido || this.apellido;
        this.sala = sala || this.sala;
    }


}