import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill } from "../redux/store";

function Skills({ register, edit }) {
  console.log(edit);
  // 👇 handle skills TextField using useRef hook
  const skillsRef = useRef();

  // 👇 get user info
  const userInfo = useSelector((state) => state.user);

  // 👇 update user info
  const dispatch = useDispatch();

  // 👇 Dispatch skills
  const handleAddSkill = () => {
    const ski = skillsRef.current.value.split(",");
    ski.forEach((skill) => {
      if (skill) {
        dispatch(addSkill(skill));
      }
    });
    skillsRef.current.value = "";
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Skills</InputLabel>
        <OutlinedInput
          inputProps={{
            readOnly: !edit,
          }}
          fullWidth
          {...register("skills")}
          inputRef={skillsRef}
          label="Skills"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                color="primary"
                onClick={handleAddSkill}
                aria-label="toggle password visibility"
                edge="end"
              >
                <AddIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}

export default Skills;
