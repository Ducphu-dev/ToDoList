import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  InputBase,
  NativeSelect,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as noteAction from '../../actions/noteAction'
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    margin: "0 auto",
  },
  paper: {
    padding: "0.5em 1em",
    // display: "flex",
  },
  formSearch: {
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    "& .MuiInputBase-root": {
      width: "90%",
      "& .MuiInputBase-input": {
        paddingLeft: "20px",
      },
    },
  },
  sortBy: {
    margin: "auto",
    display: "flex",
    height: "fit-content",
    "& p": {
      margin: "auto 20px",
      height: "fit-content",
    },
  },
  select: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const SortOption = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "low",
    label: "Low",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "high",
    label: "High",
  },
];
 function FormHeader(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper variant="outlined" className={classes.paper}>
        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={2}>
            <Button
              onClick={() => props.toggleOpenForm()}
              size="large"
              variant={props.isOpenForm ? "contained" : "outlined"}
              color="primary"
              style={{ fontWeight: "500", width: "150px", fontSize: "14px" }}
            >
              {props.isOpenForm ? "CANCEL" : "ADD NOTE"}
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Paper component="form" className={classes.formSearch}>
              <InputBase
                className={classes.input}
                placeholder="Search notes"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={props.changeQueryContent}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Box className={classes.sortBy}>
              <Typography variant="body1" component="p">
                Sort by:
              </Typography>
              <FormControl className={classes.margin}>
                <NativeSelect
                  id="demo-customized-select-native"
                  // value={age}
                  onChange={props.changeQueryLevel}
                  input={<BootstrapInput />}
                >
                  {SortOption.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="date"
              label="Sort by date"
              type="date"
              defaultValue={new Date()}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={props.changeQueryDate}
            />
          </Grid>
          <Grid item xs={2} style={{ display: "flex" }}>
            <Box display="flex" alignItems="center">
              Done{" "}
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                onClick={()=> props.changeQueryStatus('done')}
              />
            </Box>
            <Box display="flex" alignItems="center">
              Doing{" "}
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                onClick={()=> props.changeQueryStatus('doing')}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

const mapStateToProps = state =>{
  return {
    isOpenForm: state.isOpenForm
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    ...bindActionCreators(noteAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (FormHeader);