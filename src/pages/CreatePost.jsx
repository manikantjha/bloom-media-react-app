import Add from "@mui/icons-material/AddCircle";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputBase,
  TextareaAutosize,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API } from "../services/api";

export default function CreatePost() {
  const initialPostState = {
    title: "",
    description: "",
    image: "",
    category: "",
    createdDate: new Date(),
  };

  const [postState, setPostState] = useState(initialPostState);
  const [file, setFile] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const imageURL = postState.image
    ? postState.image
    : "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        // API Call
        const response = await API.fileUpload(data);
        postState.image = response.data;
      }
    };
    getImage();
    postState.category = decodeURIComponent(
      location.search?.split("=")[1] || "All"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  function handleChange(e) {
    setPostState({ ...postState, [e.target.name]: e.target.value });
  }

  async function handlePublish() {
    const response = await API.createPost(postState);
    if (response.isSuccess) {
      navigate("/");
    }
  }

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          width: "100%",
          height: "50vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={imageURL}
          alt="banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <label htmlFor="fileInput">
            <Box
              sx={{
                bgcolor: "white",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Add
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                  p: 0,
                  m: 0,
                }}
                color="primary"
                fontSize="large"
              />
            </Box>
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
          />
        </Box>
      </Box>
      <Box>
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: 1,
          }}
        >
          <InputBase
            placeholder="Title"
            sx={{ flexGrow: 1, fontSize: "24px" }}
            onChange={handleChange}
            name="title"
          />
          <Button variant="contained" onClick={handlePublish}>
            Publish
          </Button>
        </FormControl>
        <TextareaAutosize
          style={{
            marginTop: 16,
            width: "100%",
            border: "none",
            outline: "none",
            fontSize: "18px",
          }}
          minRows={5}
          placeholder="Description"
          onChange={handleChange}
          name="description"
        />
      </Box>
    </Container>
  );
}
