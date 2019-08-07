import { createSelector } from 'reselect';

const collection = state => state.get('collection');

export const GetItems = createSelector(
	collection,
	item => item
);