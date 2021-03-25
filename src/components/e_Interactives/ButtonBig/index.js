import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  colorMain: state.global.UI.colorMain,
});

export default connect(mapStateToProps, {})(Component);
