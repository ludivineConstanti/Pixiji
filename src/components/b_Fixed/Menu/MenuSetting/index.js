import { connect } from 'react-redux';

import Component from './Component';

const mapStateToProps = (state) => ({
  colorMainL1: state.global.colorMainL1,
  colorMain: state.global.colorMain,
  cheating: state.global.cheating,
});

export default connect(mapStateToProps, {})(Component);
