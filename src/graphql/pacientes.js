import { gql } from '@apollo/client';

// Query para obtener todos los pacientes
export const GET_ALL_PATIENTS = gql`
  query obtenerAllPacientes {
    obtenerAllPacientes {
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
`;

// Query para obtener un paciente específico por ID
export const GET_PATIENT_BY_ID = gql`
  query findByPacienteId($pacienteId: ID!) {
    findByPacienteId(pacienteId: $pacienteId) {
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
`;

// Mutation para crear un nuevo paciente
export const CREATE_PATIENT = gql`
  mutation crearPaciente($nombre: String, $apellido: String, $fecha_nacimiento: String!, $genero: String, $direccion: String, $telefono: String, $email: String) {
    crearPaciente(nombre: $nombre, apellido: $apellido, fecha_nacimiento: $fecha_nacimiento, genero: $genero, direccion: $direccion, telefono: $telefono, email: $email) {
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
`;

// Mutation para eliminar un paciente
export const DELETE_PATIENT = gql`
  mutation eliminarPaciente($pacienteId: ID!) {
    eliminarPaciente(pacienteId: $pacienteId)
  }
`;
