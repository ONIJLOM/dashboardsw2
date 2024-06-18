export const treatmentColumns = [
  { field: "tratamientoId", headerName: "ID", width: 90 },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 200,
  },
  {
    field: "descripcion",
    headerName: "Descripción",
    width: 300,
    renderCell: (params) => {
      // Asegúrate de que la descripción no sea demasiado larga, podrías cortarla si es necesario
      return `${params.row.descripcion.substring(0, 50)}...`; 
    },
  },
  {
    field: "precio",
    headerName: "Precio",
    width: 110,
  },
  {
    field: "paciente",
    headerName: "Paciente",
    width: 200,
    renderCell: (params) => {
      // Muestra nombre y apellido del paciente asociado al tratamiento
      return `${params.row.paciente.nombre} ${params.row.paciente.apellido}`;
    },
  }
];
