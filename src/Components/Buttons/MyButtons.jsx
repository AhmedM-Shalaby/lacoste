import { Button } from "@mui/material";
export default function MyButtons({
  context,
  colorVainat,
  click,
  state = "button",
  ...restProps
}) {
  return (
    <Button
      type={state}
      variant="contained"
      size="small"
      sx={{
        backgroundColor: "#fff",
        padding: "6px 20px",
        borderRadius: "10px",
        color: "#000",
        "&:hover": {
          backgroundColor: `${colorVainat ? colorVainat : "#292929"}`,
          color: "white",
        },
        ...restProps,
      }}
      onClick={click}
    >
      {context}
    </Button>
  );
}
