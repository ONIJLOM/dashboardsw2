import { gql } from '@apollo/client';

// Query para obtener todos los tratamientos
export const GET_ALL_TRATAMIENTOS = gql`
  query {
    obtenerAllTratamientos {
      tratamientoId
      nombre
      descripcion
      precio
      paciente {
        pacienteId
        nombre
        apellido
        fecha_nacimiento
        genero
        direccion
        telefono
        email
      }
    }
  }
`;

// Mutation para crear un nuevo tratamiento
export const CREATE_TRATAMIENTO = gql`
  mutation crearTratamiento($nombre: String!, $descripcion: String!, $precio: String!, $pacienteId: ID!) {
    crearTratamiento(nombre: $nombre, descripcion: $descripcion, precio: $precio, pacienteId: $pacienteId) {
      tratamientoId
      nombre
      descripcion
      precio
      paciente {
        nombre
      }
    }
  }
`;

// Mutation para eliminar un tratamiento
export const DELETE_TRATAMIENTO = gql`
  mutation eliminarTratamiento($tratamientoId: ID!) {
    eliminarTratamiento(tratamientoId: $tratamientoId)
  }
`;
