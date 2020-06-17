import React, { Component } from "react";
import User from '../components/User';
import Main from '../components/Main';
import { connect } from "react-redux";
import { setName } from '../actions/userActions';

const mapStateToProps = (state) => ({
  user: state.user
})
const mapDispatchToProps = (dispatch) => ({
  setName: (name) => {
    dispatch(setName(name))
  }
})

class App extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <Main changeName={(name) => { this.props.setName(name) }} />
          <User userName={this.props.user.name} />
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);