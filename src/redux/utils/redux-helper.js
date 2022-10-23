export const reduxHelper = (actionName) => {
  if (typeof actionName !== 'string') {
    throw new Error('actionName must be a string');
  }
  const actionRequest = actionName + '_REQUEST'.toUpperCase();
  const actionSuccess = actionName + '_SUCCESS.'.toUpperCase();
  const actionFailure = actionName + '_FAILURE'.toUpperCase();
  return {
    actionRequest,
    actionSuccess,
    actionFailure,
  };
};
