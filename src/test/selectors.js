import { createSelector } from 'reselect';

const collection = state => state.collection;

export const GetItems = createSelector(
	collection,
	item => item
);