import { useMutation, useQuery } from '@apollo/client';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { GET_ALL_TRATAMIENTOS, CREATE_TRATAMIENTO, DELETE_TRATAMIENTO } from '../../graphql/tratamientos'; // Asegúrate de que la ruta es correcta
import './datatable2.scss';
import { treatmentColumns } from "./tratamientos"; // Asegúrate de que la ruta es correcta

const Datatable = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_TRATAMIENTOS);
  const [deleteTreatment] = useMutation(DELETE_TRATAMIENTO, {
    onCompleted: () => refetch()  // Refetch the treatments after a delete operation
  });
  const [createTreatment] = useMutation(CREATE_TRATAMIENTO);

  const handleDelete = (id) => {
    deleteTreatment({ variables: { tratamientoId: id } });
  };

  const handleAddTreatment = async (treatment) => {
    try {
      await CREATE_TRATAMIENTO({ 
        variables: { 
          nombre: treatment.nombre,
          descripcion: treatment.descripcion,
          precio: treatment.precio,
          pacienteId: treatment.pacienteId
        } 
      });
      refetch();  // Refetch the treatments after adding a new one
    } catch (error) {
      console.error('Error creating treatment:', error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/tratamientos/${params.row.tratamientoId}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.tratamientoId)}>
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
    <div className="datatable2">
      <div className="datatableTitle">
        Agregar un nuevo Tratamiento
        <button onClick={() => handleAddTreatment({ /* some treatment data here */ })} className="link">
          Agregar un nuevo tratamiento
        </button>
      </div>
      <DataGrid
        getRowId={(row) => row.tratamientoId}
        rows={data?.obtenerAllTratamientos || []}
        columns={treatmentColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />

    </div>
  );
};

export default Datatable;
