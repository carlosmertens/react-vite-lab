import { useEffect, useState } from 'react';
import userService, { User } from '../services/user-service';
import { CanceledError } from '../services/api-client';

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [fetchingError, setFetchingError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get<User[]>(url);
    //     setUsers(response.data);
    //   } catch (err) {
    //     setFetchingError((err as AxiosError).message);
    //   }
    // };
    // fetchData();
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setFetchingError(err.message);
        setLoading(false);
      });
    // .finally(() => setLoading(false));

    return () => cancel();
  }, []);

  return { users, fetchingError, isLoading };
};

export default useUsers;
