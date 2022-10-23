import {useState} from 'react';
import {ACCESS_TOKEN, storage} from 'utils/storage.utils';

export default function useIsAuthenticated() {
  const getToken = () => {
    return storage.getString(ACCESS_TOKEN);
  };
  const [token] = useState(getToken());
  return token;
}
