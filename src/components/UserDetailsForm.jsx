import { Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function UserDetailsForm({form, handleChange}) {

 return (
    <form id='userForm'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstname"
            name="firstname"
            label="First Name"
            required
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={form.firstname}
            onChange={handleChange('firstname')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastname"
            name="lastname"
            label="Last Name"
            required
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={form.lastname}
            onChange={handleChange('lastname')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="E-Mail"
            required
            fullWidth
            autoComplete="given-email"
            variant="standard"
            value={form.email}
            onChange={handleChange('email')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="contact"
            name="contact"
            label="Contact No"
            required
            fullWidth
            autoComplete="phone"
            variant="standard"
            value={form.contact}
            onChange={handleChange('contact')}
          />
        </Grid>
      </Grid>
      
    </form>
  );
}
