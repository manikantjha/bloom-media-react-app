import { Button } from "@mui/material";
import React from "react";
import { BloomButtonWrapper } from "../../assets/styles/CommonStyles";

export default function BloomButton(props) {
  const { children, ...other } = props;
  return (
    <BloomButtonWrapper>
      <Button {...other}>{props.children}</Button>
    </BloomButtonWrapper>
  );
}
