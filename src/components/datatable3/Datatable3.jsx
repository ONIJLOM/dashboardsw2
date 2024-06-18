import { useMutation, useQuery } from '@apollo/client';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { CREATE_HISTORIAL_DENTAL, DELETE_HISTORIAL_DENTAL, GET_ALL_HISTORIALES_DENTALES } from '../../graphql/historialDental';
import './datatable3.scss';
import { historialDentalColumns } from "./historialDental"; // Asegúrate de que la ruta es correcta

const Datatable3 = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_HISTORIALES_DENTALES);
  const [deleteHistorialDental] = useMutation(DELETE_HISTORIAL_DENTAL, {
    onCompleted: () => refetch()  // Refetch after a delete operation
  });
  const [createHistorialDental] = useMutation(CREATE_HISTORIAL_DENTAL);

  const handleDelete = (id) => {
    deleteHistorialDental({ variables: { historiaId: id } });
  };

  const handleAddHistorialDental = async (historial) => {
    try {
      await createHistorialDental({ 
        variables: { 
          fecha: historial.fecha,
          descripcion: historial.descripcion,
          pacienteId: historial.pacienteId
        } 
      });
      refetch();  // Refetch the historiales dentales after adding a new one
    } catch (error) {
      console.error('Error creating historial dental:', error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Acción",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/historialDental/${params.row.historiaId}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Ver</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.historiaId)}>
              Eliminar
            </div>
          </div>
        );
      },
    },
  ];

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Agregar un nuevo Historial Dental
        <button onClick={() => handleAddHistorialDental({ /* some historial data here */ })} className="link">
          Agregar nuevo historial
        </button>
      </div>
      <DataGrid
        getRowId={(row) => row.historiaId}
        rows={data?.obtenerAllHistorialDental || []}
        columns={historialDentalColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable3;
