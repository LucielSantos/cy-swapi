import { connect } from 'react-redux';
import { PeoplesView } from './people-view';
import { handleGetPeoples } from './people-state';

const mapStateToProps = ({ peoples }) => ({ 
  peoples
});

const mapActionToProps = {
  handleGetPeoples,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(PeoplesView)