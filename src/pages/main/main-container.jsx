import { connect } from 'react-redux';
import { MainView } from './main-view';

const mapStateToProps = ({ main }) => ({
  title: main.title
});

const mapActionToProps = { };

export default connect(
  mapStateToProps,
  mapActionToProps,
)(MainView)