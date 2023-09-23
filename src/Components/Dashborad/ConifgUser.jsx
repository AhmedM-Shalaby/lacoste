import { baseUrl } from "../../Api/httpService";
import { GetData } from "../../Hooks/HookApi";
import { Box } from "@mui/material";
import DataGridTable from "./DataGridTable";
import ActionsUsers from "./ActionsUsers";
import { useState } from "react";

export default function ConifgUser() {
  const url = `${baseUrl}/users`;
  const [users] = GetData(url);
  const [row, setRow] = useState(null);
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "email", headerName: " Email", flex: 1 },
    {
      field: "block",
      headerName: " Block ",
      flex: 1,
      type: "boolean",
      editable: true,
    },
    {
      field: "role",
      headerName: " Role",
      width: 100,
      type: "singleSelect",
      valueOptions: ["admin", "user"],
      editable: true,
    },
    {
      field: "action",
      headerName: "Actions",
      type: "action",
      width: 200,
      renderCell: (params) => <ActionsUsers {...{ params, row, setRow }} />,
    },
  ];

  let PerPage = [5, 10, 15];
  return (
    <Box>
      <DataGridTable
        columns={columns}
        rows={users}
        PerPage={PerPage}
        setRow={setRow}
      />
    </Box>
  );
}
