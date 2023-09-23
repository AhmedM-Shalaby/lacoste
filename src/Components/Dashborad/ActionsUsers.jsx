import { Check, Save } from "@mui/icons-material";
import { Box, CircularProgress, Fab } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../Api/httpService";
import axios from "axios";

export default function ActionsUsers({ params, row, setRow }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { id } = params.row;

  const handleUpData = () => {
    setLoading(true);
    const timeOut = setTimeout(async () => {
      const { role, block } = params.row;
      const url = `${baseUrl}/users/${row?.id}`;
      const resposne = (await axios.patch(url, { role, block })).data;
      if (resposne) {
        setSuccess(true);
        setRow(null);
      }
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    if (row?.id === params.id && success) setSuccess(false);
  }, [row?.id]);
  return (
    <Box
      sx={{
        m: 1,
        position: "relative",
      }}
    >
      {success ? (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            "&:hover": { bgcolor: green[700] },
          }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
          }}
          disabled={row?.id !== id || loading}
          onClick={handleUpData}
        >
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: green[500],
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
}
