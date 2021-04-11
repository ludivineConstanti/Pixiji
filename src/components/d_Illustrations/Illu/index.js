import { connect } from 'react-redux';
import {
  updateValueGlobal,
} from 'src/reducer/slices/globalSlice';
import Component from './Component';

const mapDispatchToProps = (dispatch) => ({
  updateValueGlobal: (payload) => dispatch(updateValueGlobal(payload)),
});

export default connect(null, mapDispatchToProps)(Component);
