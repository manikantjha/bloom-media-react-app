import { Grid } from "@mui/material";
import React from "react";
import Banner from "../components/blog/Banner";
import Categories from "../components/blog/Categories";
import Posts from "../components/blog/Posts";

export default function Blog() {
  return (
    <div>
      <Banner />
      <Grid container>
        <Grid item xs={12} md={2} sx={{ bgcolor: "#f8f8f8" }}>
          <Categories />
        </Grid>
        <Grid item xs={12} md={10}>
          <Posts />
        </Grid>
      </Grid>
    </div>
  );
}
