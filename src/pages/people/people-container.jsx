import { connect } from 'react-redux';
import { PeoplesView } from './people-view';
import { handleGetPeoples } from './people-state';

const mapStateToProps = ({ peoples }) => ({ 
  rows: peoples.rows,
  nextPage: peoples.nextPage,
  prevPage: peoples.prevPage,
  isLoading: peoples.isLoading,
});

const mapActionToProps = {
  handleGetPeoples,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(PeoplesView)