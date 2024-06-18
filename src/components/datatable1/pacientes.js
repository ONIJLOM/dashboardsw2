export const patientColumns = [
    { field: "pacienteId", headerName: "ID", width: 70 },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 130,
      renderCell: (params) => {
        return `${params.row.nombre} ${params.row.apellido}`; // Combina nombre y apellido
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "fecha_nacimiento",
      headerName: "Fecha de Nacimiento",
      width: 150,
    },
    {
      field: "genero",
      headerName: "Género",
      width: 100,
    },
    {
      field: "direccion",
      headerName: "Dirección",
      width: 220,
    },
    {
      field: "telefono",
      headerName: "Teléfono",
      width: 130,
    }
  ];
  