import React from 'react';
import {connect} from 'react-redux';
import * as profileActionCreators from '../../../redux/actions/profile.actions';
import {bindActionCreators} from 'redux';
import {StyleSheet, View} from 'react-native';
import HeadDesc from '../../../ui-kit/HeadDesc';
import {getReadableTime} from '../../../utils';
import DisplayPic from '../../../ui-kit/DisplayPic';

const ProfileScreen = ({data}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <React.Fragment>
        <DisplayPic avatarInfo={data} />
        <View style={styles.karmaContainer}>
          <HeadDesc headerName={'Post'} headerValue={data?.link_karma} />
          <HeadDesc headerName={'Comments'} headerValue={data?.comment_karma} />
          <HeadDesc headerName={'Age'} headerValue={getReadableTime(data?.created_utc)} />
        </View>
      </React.Fragment>
    </View>

  );
};

const styles = StyleSheet.create({
  karmaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
});

const mapStateToProps = ({profile}) => {
  return {
    loading: profile.loading,
    data: profile.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...profileActionCreators}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
