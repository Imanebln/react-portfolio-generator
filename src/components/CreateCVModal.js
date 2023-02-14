import { Modal, Button, TextField, Fade} from '@mui/material'
import React, { useState } from 'react';
import { makeStyles } from "tss-react/mui";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { addExperience } from '../redux/store';

 // 👇 update mui styles
const useStyles = makeStyles()((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        border: 'none',
        borderRadius: '10px'
      },
       field: {
        width: "300px"
       },
       closeBtn: {
        marginLeft: '270px',
        color: theme.palette.grey[500],
       },
       addBtn: {
        marginLeft: '115px'
       }
       
    }
   ));

function CreateCVModal({open, handleClose}) {
   
   // 👇 update mui styles
  const {classes} = useStyles();

   // 👇 update user info
   const dispatch = useDispatch();

   // 👇 experience state
   const [experience, setExperience] = useState({ title: '', start: '', end: '' });

   // 👇 handle experience
   const handleChange = e => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  // 👇 Dispatch experiences
  const handleAddExperience = () => {
    dispatch(addExperience(experience));
    handleClose();
  }

  return (
        <Modal
         aria-labelledby="transition-modal-title"
         aria-describedby="transition-modal-description"
         open={open}
         onClose={handleClose}
         className={classes.modal}
        >
        <Fade in={open}>
          <div className={classes.paper} >
          <CloseIcon onClick={handleClose} className={classes.closeBtn} />
            <h2 id="transition-modal-title">Add</h2>
            <TextField
            className={classes.field}
              label="Title"
              name="title"
              value={experience.title}
              onChange={handleChange}
            /><br/><br/>
            <TextField
            className={classes.field}
              label="Company"
              name="company"
              value={experience.company || ""}
              onChange={handleChange}
            />
            <p
            style={{marginBottom: '4px'}}
            >Start Day</p>
            <TextField
              className={classes.field}
              type="date"
              name="start"
              value={experience.start}
              onChange={handleChange}
            />
            <p
             style={{marginBottom: '4px'}}
            >End Day</p>
            <TextField
              className={classes.field}
              type="date"
              placeholder='none'
              name="end"
              value={experience.end}
              onChange={handleChange}
            /><br/><br/>
            <Button className={classes.addBtn} onClick={handleAddExperience} variant="contained" color="primary">
              Add
            </Button>
          </div>
        </Fade>
        </Modal>
  )
}

export default CreateCVModal