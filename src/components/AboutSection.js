import "./AboutSection.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./HeroSection.css";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";

function AboutSection() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <div className="about-container">
        <Grid
          container
          spacing={{ xs: 2, md: 7 }}
          columns={{ xs: 5, md: 12 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3.2} md={2.5}>
            <Item>
              <img
                src="/img/Jun Lee.png"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "5px",
                  marginTop: "5px",
                }}
                class="rounded mx-auto d-block"
              />
              <Divider />
              <br></br>
              <div className="about-name-font">Jeong Hyun Lee </div>
            </Item>
          </Grid>
          <Grid item xs={3.5} md={4}>
            <Item>
              <div className="about-hello-font">Hello,</div>
              <Divider />
              <br />
              <br />
              <div className="about-intro-font">
                I'm Jeong Hyun Lee, and am majoring in CS at Texas A&M.
                <br />I have a lot of experience of developing the frontend by
                using React and Vue.
              </div>
              <br></br>
              <br></br>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AboutSection;
