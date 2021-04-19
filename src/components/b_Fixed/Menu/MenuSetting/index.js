import { connect } from 'react-redux';

import Component from './Component';

const mapStateToProps = (state) => ({
  colorMain: state.global.colorMain,
  cheating: state.global.cheating,
});

export default connect(mapStateToProps, {})(Component);
