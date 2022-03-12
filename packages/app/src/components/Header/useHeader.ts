import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/useCurrentUser';

export function useHeader() {
  const { currentUser, setCurrentUser } = useCurrentUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setIsAdmin(currentUser.role === 'ADMIN');
    }
  }, [currentUser]);

  const goToUsersList = useCallback(() => {
    navigate(`/users/${currentUser?.id}`);
  }, [currentUser, navigate]);

  const goToAppointmentsList = useCallback(() => {
    navigate(`/admin-appointments/${currentUser?.id}`);
  }, [currentUser, navigate]);

  const handleLogout = useCallback(() => {
    setCurrentUser(null);
    navigate('/login');
  }, [setCurrentUser, navigate]);

  return { isAdmin, goToUsersList, goToAppointmentsList, handleLogout };
}
