import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Radio,
  Paper,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import * as noteAction from '../../actions/noteAction'

const useStyles = makeStyles({
  radioGroup: {
    flexDirection: "row",
  },
});

function CreateOrEdit(props) {
  const classes = useStyles();
  const {
    isEdit,
    noteData,
    changeContent,
    changeLevel,
    handleConfirm,
    toggleOpenform,
  } = props;

  const handleChangeContent = (event) => {
    changeContent(event.target.value);
  };

  const handleChangeLevel = (event) => {
    changeLevel(event.target.value);
  };

  const confirm = () => {
    handleConfirm();
  };

  const handleCancel = () => {
    toggleOpenform();
  };

  return (
    <Paper variant="outlined">
      <Box p={2}>
        <Box display="flex">
          {isEdit ? (
            <>
              <EditIcon color="primary" />
              <Box pl={1}>
                <Typography
                  variant="body2"
                  style={{ fontWeight: "bold" }}
                  color="primary"
                >
                  Edit note
                </Typography>
              </Box>
            </>
          ) : (
            <>
              <AddCircleIcon color="primary" />
              <Box pl={1}>
                <Typography
                  variant="body2"
                  style={{ fontWeight: "bold" }}
                  color="primary"
                >
                  Add new note
                </Typography>
              </Box>
            </>
          )}
        </Box>
        <Box py={2}>
          <TextField
            value={noteData.content}
            onChange={handleChangeContent}
            label="Content*"
            variant="outlined"
          ></TextField>
        </Box>
        <Box>
          <FormLabel component="legend">Select level</FormLabel>
          <RadioGroup
            className={classes.radioGroup}
            aria-label="gender"
            name="gender1"
            value={noteData.level}
            onChange={handleChangeLevel}
          >
            <FormControlLabel
              value="low"
              control={<Radio color="primary" />}
              label="Low"
              onChange={handleChangeLevel}
            />
            <FormControlLabel
              value="medium"
              control={<Radio color="primary" />}
              label="Medium"
              onChange={handleChangeLevel}
            />
            <FormControlLabel
              value="high"
              control={<Radio color="primary" />}
              label="High"
              onChange={handleChangeLevel}
            />
          </RadioGroup>
        </Box>
        <Box py={1}>
          <Button
            onClick={() => props.toggleOpenForm()}
            variant="contained"
            style={{ marginRight: "16px" }}
          >
            Cancel
          </Button>
          <Button onClick={confirm} variant="contained" color="primary">
            {isEdit ? "Edit" : "Confirm"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

CreateOrEdit.propTypes = {
  isEdit: PropTypes.bool,
  noteData: PropTypes.object,
  changeContent: PropTypes.func,
  changeLevel: PropTypes.func,
  handleConfirm: PropTypes.func,
  toggleOpenform: PropTypes.func,
};

const mapStateToProps = state =>{
  return {
    noteData: state.noteData
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    ...bindActionCreators(noteAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrEdit);
