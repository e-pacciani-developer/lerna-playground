import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { User } from './entities';

export const currentUserAtom = atomWithStorage<User | null>('user', null);

export const isLoggedInAtom = atom(get => get(currentUserAtom) !== null);
