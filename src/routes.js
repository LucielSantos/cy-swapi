import HomePage from './pages/home/home-container';
import { PeoplePage } from './pages/people/people';

export const routes = [
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