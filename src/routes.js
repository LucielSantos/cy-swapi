import HomePage from './pages/home/home-container';
import PeoplePage from './pages/people/people-container';
import PeopleDetails from './pages/people/details/peopleDetails-container';

export const routes = [
  {
    path: '/people/:id',
    component: PeopleDetails,
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