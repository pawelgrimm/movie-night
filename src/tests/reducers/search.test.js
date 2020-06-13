import { expect } from "@jest/globals";
import searchReducer from "../../reducers/search";

test('should set actions', () => {
    const results = [{title: 'movie one'}, {title: 'movie two'}];
    const action = {
        type: 'SET_RESULTS',
        results
    }
    const state = searchReducer([], action);
    expect(state).toEqual(results);
})