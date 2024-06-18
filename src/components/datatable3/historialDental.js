export const historialDentalColumns = [
    { field: "historiaId", headerName: "ID", width: 70 },
    {
      field: "fecha",
      headerName: "Fecha",
      width: 150,
    },
    {
      field: "descripcion",
      headerName: "Descripción",
      width: 300,
    },
    {
      field: "nombrePaciente",
      headerName: "Paciente",
      width: 200,
      valueGetter: (params) => `${params.row.paciente.nombre} ${params.row.paciente.apellido}`
    },
];
