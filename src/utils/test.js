import { testSelector } from '../constants';

export const addTestSelector = (selector) => 
  ({[testSelector]: selector});