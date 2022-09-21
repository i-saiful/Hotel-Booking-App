import Navigation from "./component/Navigation";
import Home from "./pages/Home";
import Room from "./pages/Room";
import { Routes, Route, Navigate } from 'react-router-dom';
import UserForm from "./pages/UserForm";
import { connect } from 'react-redux'
import { authCheck } from "./redux/authReducer";
import { Component } from "react";

const mapDispatchToProps = dispatch => ({
  authCheck: () => dispatch(authCheck())
})

const mapStateToProps = state => ({
  token: state.auth.token
})

class App extends Component {

  componentDidMount() {
    this.props.authCheck()
  }

  render() {
    let routes = null
    if (this.props.token) {
      routes = (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      )
    } else {
      routes = (
        <Routes>
          <Route path="/login" element={<UserForm />} />
          <Route path="*" element={<Navigate to="/login" replace={true}/>} />
        </Routes>
      )
    }
    return (
      <div>
        {this.props.token && <Navigation />}
        {routes}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
