import React from 'react';
import { View } from 'react-native';
import { Button } from '../../../components';
import Firebase from '../../../config/firebase';

const ProfileScreenView = () => (
  <View>
    <Button
      label="Log Out"
      onPress={() => {
        Firebase.auth().signOut();
      }}
    />
  </View>
);

export default ProfileScreenView;
