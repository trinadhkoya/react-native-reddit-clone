import React from 'react';

const postCount = (count) => {
  if (count > 1000) {
    return Math.floor(count / 1000);
  } else {
    return count;
  }
};
const getReadableTime = (UNIX_timestamp) => {
  const a = new Date(UNIX_timestamp * 1000);
  const b = new Date().getTime();
  const value = Math.floor(Math.abs(b - a) / 3600000);
  if (Math.floor(value < 24)) {
    return `${value}h`;
  } else if (value / 24 >= 1 && value / 24 <= 30) {
    const day = Math.floor(value / 24);
    return `${day}d`;
  } else if (value / 24 > 30 && value / 24 <= 365) {
    const month = Math.floor(value / (24 * 30));
    return `${month}mo`;
  } else {
    const year = Math.floor(value / (24 * 30 * 12));
    return `${year}y`;
  }
};

export {postCount, getReadableTime};
