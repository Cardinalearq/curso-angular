export interface Cursos {
        id: number;
        nombre: string;
        meses: number;
        materias: number;
        inscripcion: Date;
        activo: boolean;    
}

export interface Alumnos {
        nombre: string;
        edad: number;
        email: string;
        mensaje: string;
        inscripto: boolean;
}

