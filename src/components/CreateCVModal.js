import { Modal, Button, TextField, Fade } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addExperience, addEducation } from "../redux/store";
import { useRef } from "react";

// 👇 update mui styles
const useStyles = makeStyles()((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "column",
    alignItems: "center",
    flexDirection: "center",
    width: "370px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border: "none",
    borderRadius: "10px",
  },
  field: {
    width: "300px",
  },
  closeBtn: {},
  addBtn: {
    marginLeft: "115px",
  },
}));

function CreateCVModal({ open, handleClose, type }) {
  // 👇 update mui styles
  const { classes } = useStyles();

  // 👇 update user info
  const dispatch = useDispatch();

  // 👇 experience state
  const [experience, setExperience] = useState({
    title: "",
    company: "",
    start: "",
    end: "",
  });

  // 👇 education state
  const [education, setEducation] = useState({
    title: "",
    univ: "",
    start: "",
    end: "",
  });

  // 👇 handle education
  const handleChangeEducation = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  // 👇 Dispatch education
  const handleAddEducation = () => {
    dispatch(addEducation(education));
    handleClose();
  };

  // 👇 handle experience
  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  // 👇 Dispatch experiences
  const handleAddExperience = () => {
    dispatch(addExperience(experience));
    handleClose();
  };
  console.log(type);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      className={classes.modal}
    >
      <Fade in={open}>
        <form className={classes.paper}>
          <CloseIcon onClick={handleClose} className={classes.closeBtn} />
          <h2
            id="transition-modal-title"
            style={{ color: "#3B3F46", textAlign: "center" }}
          >
            Add {type === "experience" ? "Experience" : "Education"}
          </h2>
          <TextField
            className={classes.field}
            label="Title"
            name="title"
            // value={type === "experience" ? experience.title : education.title}
            onChange={
              type === "experience" ? handleChange : handleChangeEducation
            }
            required
          />
          <br />
          <br />
          {type === "experience" ? (
            <TextField
              className={classes.field}
              label="Company"
              name="company"
              // value={experience.company}
              onChange={handleChange}
              required
            />
          ) : (
            <TextField
              className={classes.field}
              label="School Or University"
              name="univ"
              // value={education.univ}
              onChange={handleChangeEducation}
              required
            />
          )}
          <p style={{ marginBottom: "4px" }}>Start Day</p>
          <TextField
            className={classes.field}
            type="date"
            name="start"
            // value={type === "experience" ? experience.start : education.start}
            onChange={
              type === "experience" ? handleChange : handleChangeEducation
            }
            required
          />
          <p style={{ marginBottom: "4px" }}>End Day</p>
          <TextField
            className={classes.field}
            type="date"
            // value={type === "experience" ? experience.end : education.end}
            name="end"
            onChange={
              type === "experience" ? handleChange : handleChangeEducation
            }
            required
          />
          <br />
          <br />
          <Button
            onClick={
              type === "experience" ? handleAddExperience : handleAddEducation
            }
            fullWidth
            className={classes.closeBtn}
            color="primary"
          >
            Add
          </Button>
        </form>
      </Fade>
    </Modal>
  );
}

export default CreateCVModal;
