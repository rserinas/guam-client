import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onChangeUsername } from '../actions/home-actions';
import { onChangePassword } from '../actions/home-actions';
import { submitForm } from '../actions/home-actions';
import { testOtherReducer } from '../actions/home-actions';

import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import '../styles/home.css';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={4}> </Grid>
          <Grid item xs={4}>
            <Card>
              <h2> User Login : { this.props.testReducer }</h2>
              <TextField onChange={ (e) => this.props.onChangeUsername(e.target.value) } className="form-input" id="outlined-name" label="Username" margin="normal" variant="outlined" /> <br />
              <TextField onChange={ (e) => this.props.onChangePassword(e.target.value) }  className="form-input" id="outlined-name1" label="Password" margin="normal" variant="outlined" type="password"/>
              <div className="submit-button-div">
                <Button onClick={ (e) => this.props.submitForm({username: this.props.username, password: this.props.password}) } variant="contained" color="primary">
                  SUBMIT
                </Button>
                <button onClick={ (e) => this.props.testOtherReducer(2) }>Test Reducer trigger</button>
              </div>
            </Card>       
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>

        <Snackbar
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={this.props.snackBarOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
          variant={ this.props.snackBarVariant }
          message={ this.props.snackBarMessage }
        ></Snackbar>

      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    username: state.fields.username,
    password: state.fields.password,
    snackBarOpen: state.fields.snackBarOpen,
    snackBarVariant: state.fields.snackBarVariant,
    snackBarMessage: state.fields.snackBarMessage,
    testReducer: state.testReducer.value
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onChangeUsername: onChangeUsername,
      onChangePassword: onChangePassword,
      submitForm: submitForm,
      testOtherReducer: testOtherReducer
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
