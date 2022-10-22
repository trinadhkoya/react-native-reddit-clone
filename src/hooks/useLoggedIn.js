import {useState} from 'react';
import {ACCESS_TOKEN, storage} from '../utils/storage';

export default function useIsAuthenticated() {
  const getToken = () => {
    return storage.getString(ACCESS_TOKEN);
  };
  const [token, setToken] = useState(getToken());
  return token;
}
