import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { WorkInfoWrapper } from "../../assets/styles/workDetails/WorkInfoWrapper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const data = [
  {
    title: "The Brand",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam maxime, perferendis omnis molestias quod sequi fuga et at reiciendis ex, dolores nostrum nisi, non excepturi asperiores! Quam odit quis porro?",
  },
  {
    title: "The Breif",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam maxime, perferendis omnis molestias quod sequi fuga et at reiciendis ex, dolores nostrum nisi, non excepturi asperiores! Quam odit quis porro?",
  },
  {
    title: "The Boom",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam maxime, perferendis omnis molestias quod sequi fuga et at reiciendis ex, dolores nostrum nisi, non excepturi asperiores! Quam odit quis porro?",
  },
];

function WorkInfoAccordion(props) {
  const { expanded, handleChange, item, index } = props;
  console.log("item", item);
  console.log("index", index);
  return (
    <Accordion
      expanded={expanded === index}
      onChange={handleChange(index)}
      sx={{
        bgcolor: "#232020",
        border: "none",
        borderTopLeftRadius: `16px !important`,
        borderTopRightRadius: `16px !important`,
        borderBottomLeftRadius: `16px !important`,
        borderBottomRightRadius: `16px !important`,
        color: "white",
        mb: 2,
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
        <Typography variant="h6">{item.title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          bgcolor: "#232020",
          color: "#ffffff",
          borderBottomLeftRadius: `16px !important`,
          borderBottomRightRadius: `16px !important`,
        }}
      >
        <Typography variant="body1">{item.description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default function WorkInfo() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <WorkInfoWrapper>
      <Container maxWidth="xl">
        {data.map((item, index) => (
          <WorkInfoAccordion
            expanded={expanded}
            handleChange={handleChange}
            item={item}
            index={index}
            key={index}
          />
        ))}
      </Container>
    </WorkInfoWrapper>
  );
}
