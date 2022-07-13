import { Box, Typography } from "@mui/material";

export default function PostCard(props) {
  const { post } = props;

  return (
    <Box sx={{ border: "solid 1px #ddd", borderRadius: 4, overflow: "hidden" }}>
      <Box sx={{ width: "100%", height: "250px", overflow: "hidden" }}>
        <img
          src={post.image}
          alt={post.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Box sx={{ mb: 1 }}>
          <Typography variant="h5">{post.title}</Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            {post.description.slice(0, 100).concat("...")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
