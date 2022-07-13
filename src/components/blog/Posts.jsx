import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { API } from "../../services/api";
import PostCard from "./PostCard";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [params] = useSearchParams();
  const category = params.get("category");
  console.log("category", category);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await API.getAllPosts({ category: category || "" });
      if (response.isSuccess) {
        setPosts(response.data);
      }
    };
    fetchPosts();
  }, [category]);

  if (!posts || posts.length <= 0)
    return (
      <Typography variant="h4" sx={{ px: 5, py: 10 }}>
        No posts to display!
      </Typography>
    );

  return (
    <Box sx={{ py: 10, px: 5 }}>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
            <Link
              to={`/post/${post._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <PostCard post={post} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
