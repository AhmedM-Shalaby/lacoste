import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export default function DataGridTable({ columns, rows, PerPage, setRow }) {
  return (
    <Box
      sx={{
        p: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <DataGrid
        sx={{ margin: "auto" }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={PerPage}
        onCellEditStart={(params) => setRow(params)}
      />
    </Box>
  );
}
