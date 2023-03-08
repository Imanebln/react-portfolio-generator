import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import { Button, IconButton } from "@mui/material";

function ProjectDisplay() {
  // extract id from the route
  const { id } = useParams();
  const project = ProjectList[id];

  const urlGithub = `https://github.com/Imanebln`;

  return (
    <div className="project">
      <div class="tools">
        <div class="circle">
          <span class="red box"></span>
        </div>
        <div class="circle">
          <span class="yellow box"></span>
        </div>
        <div class="circle">
          <span class="green box"></span>
        </div>
      </div>
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills: </b>
        {project.skills}
      </p>
      <Button
        onClick={() => window.open(project.github, "_blank")}
        sx={{ color: "black", borderColor: "black" }}
        variant="outlined"
        startIcon={<GithubIcon />}
      >
        Github
      </Button>
    </div>
  );
}

export default ProjectDisplay;
