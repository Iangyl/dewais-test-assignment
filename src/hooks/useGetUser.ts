import { useState } from 'react';
import { IUserData, IUserNotFound } from 'interfaces/IUserData';

const useGetUser = () => {
  const [data, setData] = useState<IUserData>();
  const [error, setError] = useState<IUserNotFound>();

  const makeRequest = async (user: string) => {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const result = await res.json();
    if ('message' in result) {
      setData(undefined);
      setError(result);
    } else {
      setError(undefined);
      setData(result);
    }
  };

  return { data, error, makeRequest };
};

export default useGetUser;
