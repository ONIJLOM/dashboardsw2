import { useMutation, useQuery } from '@apollo/client';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { CREATE_PATIENT, DELETE_PATIENT, GET_ALL_PATIENTS } from '../../graphql/pacientes'; // Asegúrate de que la ruta es correcta
import './datatable1.scss';
import { patientColumns } from "./pacientes"; // Asegúrate de que la ruta es correcta

const Datatable = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_PATIENTS);
  const [deletePatient] = useMutation(DELETE_PATIENT, {
    onCompleted: () => refetch()  // Refetch the patients after a delete operation
  });
  const [createPatient] = useMutation(CREATE_PATIENT);

  const handleDelete = (id) => {
    deletePatient({ variables: { pacienteId: id } });
  };

  const handleAddPatient = async (patient) => {
    try {
      await createPatient({ 
        variables: { 
          nombre: patient.nombre,
          apellido: patient.apellido,
          fecha_nacimiento: patient.fecha_nacimiento,
          genero: patient.genero,
          direccion: patient.direccion,
          telefono: patient.telefono,
          email: patient.email
        } 
      });
      refetch();  // Refetch the patients after adding a new one
    } catch (error) {
      console.error('Error creating patient:', error);
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
            <Link to={`/pacientes/${params.row.pacienteId}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.pacienteId)}>
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
    <div className="datatable1">
      <div className="datatableTitle">
        Agregar un nuevo Paciente
        <button onClick={() => handleAddPatient({ /* some patient data here */ })} className="link">
          Agregar un nuevo paciente
        </button>
      </div>
      <DataGrid
        getRowId={(row) => row.pacienteId}
        rows={data?.obtenerAllPacientes || []}
        columns={patientColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />

    </div>
  );
};

export default Datatable;
