import { gql } from '@apollo/client';

// Query para obtener todos los usuarios
export const GET_ALL_USERS = gql`
  query obtenerAllUsuarios {
    obtenerAllUsuarios {
      id
      username
      email
      role
    }
  }
`;

// Mutation para crear un nuevo usuario
export const CREATE_USER = gql`
  mutation crearUsuario($username: String!, $email: String!, $password: String!, $role: Role!) {
    crearUsuario(usuario: { username: $username, email: $email, password: $password, role: $role }) {
      id
      username
      email
      role
    }
  }
`;

// Mutation para eliminar un usuario
export const DELETE_USER = gql`
  mutation eliminarUsuario($id: ID!) {
    eliminarUsuario(id: $id)
  }
`;

// Mutation para obtener token (login)
export const GET_TOKEN = gql`
  mutation obtenerToken($email: String!, $password: String!) {
    obtenerToken(email: $email, password: $password)
  }
`;
