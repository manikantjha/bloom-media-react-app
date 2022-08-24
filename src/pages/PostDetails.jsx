import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../services/api";

function PostDetails() {
  const [post, setPost] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchPost = async () => {
      const result = await API.getPostById(id);
      if (result.isSuccess) {
        setPost(result.data);
      }
    };
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Box sx={{ height: "50vh", width: "100%", overflow: "hidden" }}>
        <img
          src={post?.image}
          alt={post?.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ mt: 2 }}>
          <Typography variant="h1">{post?.title}</Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1">{post?.description}</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default PostDetails;
