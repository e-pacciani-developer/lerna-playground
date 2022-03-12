import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers, User } from '../../../entities';
import { useCurrentUser } from '../../../hooks/useCurrentUser';

export function useLogin() {
  const { users } = useUsers();
  const navigate = useNavigate();
  const { setCurrentUser } = useCurrentUser();

  const signInAs = useCallback(
    (userId: string) => {
      const currentUser = users.find(user => user.id === userId);

      if (currentUser) {
        setCurrentUser(currentUser);

        const initialRoute =
          currentUser.role === 'ADMIN'
            ? `/admin-appointments/${currentUser.id}`
            : `/appointments/${currentUser.id}`;

        navigate(initialRoute);
      }
    },
    [users, setCurrentUser, navigate]
  );

  const signInAfterSignUp = useCallback(
    (user: User) => {
      setCurrentUser(user);
      navigate(`/appointments/${user.id}`);
    },
    [setCurrentUser, navigate]
  );

  return { users, signInAs, signInAfterSignUp };
}
