import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  kanjisArr: state.kanjisArr.about,
});

export default connect(mapStateToProps, {})(Component);
