import { gql } from '@apollo/client';

// Query para obtener todos los historiales dentales
export const GET_ALL_HISTORIALES_DENTALES = gql`
  query obtenerAllHistorialDental {
    obtenerAllHistorialDental {
      historiaId
      fecha
      descripcion
      paciente {
        pacienteId
        nombre
        apellido
      }
    }
  }
`;

// Mutation para crear un nuevo historial dental
export const CREATE_HISTORIAL_DENTAL = gql`
  mutation crearHistorialDental($fecha: String!, $descripcion: String!, $pacienteId: ID!) {
    crearHistorialDental(fecha: $fecha, descripcion: $descripcion, pacienteId: $pacienteId) {
      historiaId
      fecha
      descripcion
      paciente {
        nombre
        apellido
      }
    }
  }
`;

// Mutation para eliminar un historial dental
export const DELETE_HISTORIAL_DENTAL = gql`
  mutation eliminarHistorialDental($historiaId: ID!) {
    eliminarHistorialDental(historiaId: $historiaId)
  }
`;
