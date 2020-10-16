import { connect } from 'react-redux';
import { PeopleDetailsView } from './peopleDetails-view';
import { handleGetPeopleDetails } from './peopleDetails-state';

const mapStateToProps = ({ peopleDetails }) => ({ 
  data: peopleDetails.data,
  isLoading: peopleDetails.isLoading
});

const mapActionToProps = {
  handleGetPeopleDetails,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(PeopleDetailsView);