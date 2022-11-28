import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Review({form}) {
  return (
    <Grid container px={1}>
        <Grid item xs={3}>
            <Typography fontSize={14} fontWeight={800}>Name:</Typography>
        </Grid>
        <Grid item xs={9}>
            <Typography fontSize={14}>{`${form.firstname} ${form.lastname}`}</Typography>
        </Grid>
        
        <Grid item xs={3}>
            <Typography fontSize={14} fontWeight={800}>Email:</Typography>
        </Grid>
        <Grid item xs={9}>
            <Typography fontSize={14}>{form.email}</Typography>
        </Grid>

        <Grid item xs={3}>
            <Typography fontSize={14} fontWeight={800}>Contact:</Typography>
        </Grid>
        <Grid item xs={9}>
            <Typography fontSize={14}>{form.contact}</Typography>
        </Grid>

        <Grid item xs={3}>
            <Typography fontSize={14} fontWeight={800}>Organisation:</Typography>
        </Grid>
        <Grid item xs={9}>
            <Typography fontSize={14}>{form.organisation}</Typography>
        </Grid>

        <Grid item xs={3}>
            <Typography fontSize={14} fontWeight={800}>City:</Typography>
        </Grid>
        <Grid item xs={9}>
            <Typography fontSize={14}>{form.city}</Typography>
        </Grid>

        <Grid item xs={3}>
            <Typography fontSize={14} fontWeight={800}>Bio:</Typography>
        </Grid>
        <Grid item xs={9}>
            <Typography fontSize={14} textAlign='justify'>{form.bio}</Typography>
        </Grid>
    </Grid>
  )
}
