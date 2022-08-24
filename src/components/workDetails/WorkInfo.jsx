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

  return (
    <Accordion
      expanded={expanded === index}
      onChange={handleChange(index)}
      sx={{
        bgcolor: "#424242",
        border: "none",
        borderTopLeftRadius: `0px !important`,
        borderTopRightRadius: `0px !important`,
        borderBottomLeftRadius: `0px !important`,
        borderBottomRightRadius: `0px !important`,
        color: "white",
        mb: 2,
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
        <Typography variant="h6">{item.title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          bgcolor: "#424242",
          color: "#ffffff",
          borderBottomLeftRadius: `0px !important`,
          borderBottomRightRadius: `0px !important`,
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
