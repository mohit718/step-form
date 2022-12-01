import { Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function PersonalDetailsForm({form, handleChange}) {
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
            onChange={handleChange('organisation')}
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
            onChange={handleChange('city')}
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
            onChange={handleChange('bio')}
          />
        </Grid>
      </Grid>
    </>
  );
}
