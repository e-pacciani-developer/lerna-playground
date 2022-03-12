import { useEffect, useState } from 'react';
import { User } from './user.model';
import { usersService } from './users.service';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    usersService.getAllUsers().then(setUsers);
  }, []);

  return { users };
}
