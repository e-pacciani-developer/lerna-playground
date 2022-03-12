import { useAtom } from 'jotai';
import { currentUserAtom, isLoggedInAtom } from '../store';

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const [isLoggedIn] = useAtom(isLoggedInAtom);
  return { currentUser, isLoggedIn, setCurrentUser };
}
