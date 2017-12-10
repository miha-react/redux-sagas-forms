import Home from '../routes/Home';

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

function mapStateToProps(state) {
  return{
    form: state.form
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(()=>{ return {type:"SEND_FORM"}}, dispatch);
}

const WrappedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default WrappedHome;

