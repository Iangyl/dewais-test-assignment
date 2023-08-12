import { useState } from 'react';
import { IUserData, IUserNotFound } from 'interfaces/IUserData';
import { instanceOfUserData } from 'utils/helpers';

const useGetUser = () => {
  const [data, setData] = useState<IUserData>();
  const [error, setError] = useState<IUserNotFound>();

  const makeRequest = async (user: string) => {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const result = await res.json();
    if (instanceOfUserData(result)) {
      setError(undefined);
      setData(result);
    } else {
      setData(undefined);
      setError(result);
    }
  };

  return { data, error, makeRequest };
};

export default useGetUser;
