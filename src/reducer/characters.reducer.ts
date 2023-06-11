import { createReducer } from '@reduxjs/toolkit';
import { Character } from '../models/interfaces/character.interface';
import { insert, currentSelection } from './characters.actions';

interface CharacterState {
  lastSelected: Character[];
  currentSelect: Character | null;
}
const initialState: CharacterState = {
  lastSelected: [],
  currentSelect: null,
};

export const CharactersReducer = createReducer(initialState, (builder) => {
  builder.addCase(insert, (state, action) => ({
    ...state,
    lastSelected: action.payload,
  }));

  builder.addCase(currentSelection, (state, action) => ({
    ...state,
    currentSelect: action.payload,
  }));
});
