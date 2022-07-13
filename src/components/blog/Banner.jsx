import { Box, Button } from "@mui/material";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BannerWrapper } from "../../assets/styles/blog/BannerWrapper";

export default function Banner() {
  const [params] = useSearchParams();
  const category = params.get("category");
  return (
    <BannerWrapper>
      <div className="img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="banner"
        />
      </div>
      <Box sx={{ position: "absolute", right: 50, bottom: 50 }}>
        <Link
          to={`/create-post?category=${category || ""}`}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained">Create Post</Button>
        </Link>
      </Box>
    </BannerWrapper>
  );
}
