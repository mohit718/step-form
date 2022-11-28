import { Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function PersonalDetailsForm({form, setForm}) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="organisation"
            name="organisation"
            label="Organisation"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={form.organisation}
            onChange={e=>setForm({...form, organisation:e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={form.city}
            onChange={e=>setForm({...form, city:e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="bio"
            name="bio"
            label="Bio"
            fullWidth
            autoComplete="given-bio"
            variant="standard"
            value={form.bio}
            onChange={e=>setForm({...form, bio:e.target.value})}
          />
        </Grid>
      </Grid>
    </>
  );
}
