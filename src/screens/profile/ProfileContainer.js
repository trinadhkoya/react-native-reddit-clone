import React, {useEffect, useMemo} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProfileActionCreators from 'redux/actions/profile.actions';
import ProfileScreen from 'screens/profile/ProfileScreen';
import Loader from 'ui-kit/Loader';

function ProfileContainer({dispatch, isLoading, profile}) {

  const boundActionCreators = useMemo(
    () => bindActionCreators(ProfileActionCreators, dispatch),
    [dispatch],
  );

  useEffect(() => {
    let action = ProfileActionCreators.getProfile();
    dispatch(action);
  }, []);

  if (isLoading) {
    return <Loader isLoading={isLoading} size={'large'}></Loader>;
  }
  return <ProfileScreen profile={profile} {...boundActionCreators}></ProfileScreen>;
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.data,
    isLoading: state.profile.isLoading,
  };
};
export default connect(mapStateToProps)(ProfileContainer);
