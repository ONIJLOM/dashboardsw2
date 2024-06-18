import { useMutation, useQuery } from '@apollo/client';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DELETE_USER, GET_ALL_USERS } from '../../graphql/usuarios'; // Asegúrate de que la ruta es correcta
import "./datatable.scss";
import { userColumns } from "./usuario";

const Datatable = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_USERS);
  const [deleteUser] = useMutation(DELETE_USER, {
    onCompleted: () => refetch()  // Refetch the users after a delete operation
  });

  const handleDelete = (id) => {
    deleteUser({ variables: { id } });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Agregar un nuevo Usuario
        <Link to="/users/new" className="link">
          Agregar un nuevo usuario
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data?.obtenerAllUsuarios || []} // Safely access data
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
