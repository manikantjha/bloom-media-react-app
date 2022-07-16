import { Typography } from "@mui/material";
import React from "react";
import { TeamMemberWrapper } from "../../assets/styles/about/TeamMemberWrapper";

export default function TeamMember() {
  return (
    <TeamMemberWrapper>
      <div className="image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
          alt="member"
        />
      </div>
      <Typography variant="subtitle1" className="team-member-name">
        Name
      </Typography>
      <Typography variant="body1">Designation</Typography>
    </TeamMemberWrapper>
  );
}
