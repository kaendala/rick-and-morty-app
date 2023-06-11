import { RootState } from '../app/store';

export const lastSelected = (state: RootState) => state.characters.lastSelected;

export const changeSelection = (state: RootState) =>
  state.characters.currentSelect;
