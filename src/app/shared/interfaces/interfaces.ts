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
        id?: number,
        nombre: string;
        descripcion: string;
        editando?: boolean;
}

export interface Usuario {
        id?: number; 
        email: string;
        password: string;
        rol: 'alumno' | 'docente';
}

