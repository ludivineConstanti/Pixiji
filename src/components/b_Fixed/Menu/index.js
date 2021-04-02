import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  color: state.global.UI.colorMain,
});

export default connect(mapStateToProps, {}, null, { forwardRef: true })(Component);
