import { connect } from 'react-redux';
import { PlanetView } from './planet-view';
import { handleGetPlanets } from './planet-state';

const mapStateToProps = ({ planets }) => ({ 
  rows: planets.rows,
  nextPage: planets.nextPage,
  prevPage: planets.prevPage,
  currentPage: planets.currentPage,
  isLoading: planets.isLoading,
});

const mapActionToProps = {
  handleGetPlanets,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(PlanetView)