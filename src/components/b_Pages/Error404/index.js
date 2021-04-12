import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  kanjisArr: state.kanjisArr.error404,
});

export default connect(mapStateToProps, {})(Component);
