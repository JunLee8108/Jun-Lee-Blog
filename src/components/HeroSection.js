import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./HeroSection.css";

import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";

function HeroSection() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <div className="hero-container">
        <Grid
          container
          spacing={{ xs: 2, md: 5 }}
          columns={{ xs: 5, md: 12 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={4} md={4.5}>
            <Item>
              <div className="hero-font">Latest Posts</div>
              <br></br>
              <Divider />
              This is the first post
              <br></br>
              <br></br>
              <Button>Go to this post</Button>
            </Item>
          </Grid>
          <Grid item xs={4} md={4.5}>
            <Item>
              <div className="hero-font">Latest Posts</div>
              <br></br>
              <Divider />
              This is the Second post
              <br></br>
              <br></br>
              <Button>Go to this post</Button>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HeroSection;
