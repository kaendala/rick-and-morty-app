import { createAction } from '@reduxjs/toolkit';
import { Character } from '../models/interfaces/character.interface';

export const insert = createAction<Character[]>('character/insert');
