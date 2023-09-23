import { CardMedia, Stack } from '@mui/material'
import React from 'react'

export default function Loading() {
    const urlSrc = "https://www.lacoste.com.eg/on/demandware.static/Sites-Lacoste_EG-Site/-/default/dw9a039067/images/svg/croco-loader.svg"
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
        <CardMedia src={urlSrc} sx={{width:"100px"}} component={"img"}/>
    </Stack>
  )
}
