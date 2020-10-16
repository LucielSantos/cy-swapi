import HomePage from './pages/home/home-container';
import PeoplePage from './pages/people/people-container';
import PeopleDetailsPage from './pages/people/details/peopleDetails-container';
import PlanetPage from './pages/planet/planet-container';

export const routes = [
  {
    path: '/planet',
    component: PlanetPage,
    exact: true,
  },
  {
    path: '/people/:id',
    component: PeopleDetailsPage,
    exact: true,
  },
  {
    path: '/people',
    component: PeoplePage,
    exact: true,
  },
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
]