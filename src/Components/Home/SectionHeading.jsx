import { Container, Typography } from "@mui/material";
import { headingSectionStyle } from "../../Layout/PublicStyle";


export default function SectionHeading({nameHeading,children}) {

  return (
    <Container sx={{mt:"40px",mb:"40px"}}>
        <Typography component={"h2"} className="" sx={headingSectionStyle}>{nameHeading}</Typography>
        {children}
    </Container>
  )
}