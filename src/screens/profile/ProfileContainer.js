import React, {useEffect, useMemo} from 'react';
import {connect, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProfileActionCreators from 'redux/actions/profile.actions';
import {fetchProfileRequest} from 'redux/actions/profile.actions';
import ProfileScreen from 'screens/profile/ProfileScreen';
import Loader from 'ui-kit/Loader';

function ProfileContainer({isLoading, profile}) {
  let dispatch = useDispatch();

  const boundActionCreators = useMemo(
    () => bindActionCreators(ProfileActionCreators, dispatch),
    [dispatch],
  );

  useEffect(() => {
    dispatch(fetchProfileRequest());
  }, []);

  if (isLoading) {
    return <Loader isLoading={isLoading} size={'large'} />;
  }
  return <ProfileScreen profile={profile} {...boundActionCreators} />;
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.data,
    isLoading: state.profile.isLoading,
  };
};
export default connect(mapStateToProps)(ProfileContainer);
