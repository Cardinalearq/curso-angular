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
        apellido: string;
        edad: number;
        email: string;
        mensaje: string;
        inscripto: boolean;
}

export interface Curso {
        nombre: string;
        descripcion: string;
      }

