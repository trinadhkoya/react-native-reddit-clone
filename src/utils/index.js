/**
 *
 * @param count
 * @returns {number|*}
 */
const postCount = (count) => {
  if (count > 1000) {
    return Math.floor(count / 1000);
  } else {
    return count;
  }
};

/**
 *
 * @param UNIX_timestamp
 * @param defaultValue
 * @returns {`${number}hr`|`${number}month`|`${number}day`|`${number}yr`}
 */
const getReadableTime = (UNIX_timestamp='',defaultValue='') => {
  const a = new Date(UNIX_timestamp * 1000);
  const b = new Date().getTime();
  const value = Math.floor(Math.abs(b - a) / 3600000);
  if (Math.floor(value < 24)) {
    return `${value} hr`;
  } else if (value / 24 >= 1 && value / 24 <= 30) {
    const day = Math.floor(value / 24);
    return `${day} day`;
  } else if (value / 24 > 30 && value / 24 <= 365) {
    const month = Math.floor(value / (24 * 30));
    return `${month} month`;
  } else {
    const year = Math.floor(value / (24 * 30 * 12));
    return `${year} yr`;
  }
};
/**
 * Implementation of lodash.get function
 * @param object
 * @param keys
 * @param defaultVal
 * @returns {*}
 */
const getProp = (object, keys, defaultVal) => {
  keys = Array.isArray(keys) ? keys : keys.split('.');
  object = object[keys[0]];
  if (object && keys.length > 1) {
    return getProp(object, keys.slice(1));
  }
  return object === undefined ? defaultVal : object;
};

export {postCount, getReadableTime, getProp};
