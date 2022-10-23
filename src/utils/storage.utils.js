import {MMKV} from 'react-native-mmkv';

export const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const storage = new MMKV({
  encryptionKey: 'reddit-rn',
  id: 'before-login',
});
