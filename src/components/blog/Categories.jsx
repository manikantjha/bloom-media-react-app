import {
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CategoriesWrapper } from "../../assets/styles/blog/CategoriesWrapper";

export default function Categories() {
  const categories = [
    "Category A",
    "Category B",
    "Category C",
    "Category D",
    "Category E",
    "Category F",
  ];

  return (
    <CategoriesWrapper>
      <List>
        <ListItem>
          <Typography>Categories</Typography>
        </ListItem>
        <Divider sx={{ mb: 2 }} />
        <ListItem>
          <Link to={`/blog?category=All`} style={{ textDecoration: "none" }}>
            <Chip
              avatar={<Avatar>A</Avatar>}
              label="All"
              variant="outlined"
              onClick={() => {}}
            />
          </Link>
        </ListItem>
        {categories.map((category, index) => (
          <ListItem key={index}>
            <Link
              to={`/blog?category=${category}`}
              style={{ textDecoration: "none" }}
            >
              <Chip
                avatar={
                  <Avatar>{`${category.split(" ")[0][0]}${
                    category.split(" ")[1][0]
                  }`}</Avatar>
                }
                label={category}
                variant="outlined"
                onClick={() => {}}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </CategoriesWrapper>
  );
}
