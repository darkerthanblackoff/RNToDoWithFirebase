import React from 'react';
import { View, ScrollView } from 'react-native';

import { useTranslation } from 'react-i18next';

import { Header, InputField, Button, Spacer } from '../../components';
import { styles } from './styles';

interface SignUpScreenViewProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPass: string;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPass: (value: string) => void;
  onPressSignUp: () => void;
}

const SignUpScreenView = (props: SignUpScreenViewProps) => {
  const { t } = useTranslation();
  const { firstName, lastName, email, password, confirmPass } = props;
  const {
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmPass,
    onPressSignUp,
  } = props;

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        title={t('sign_up.title')}
        subTitle={t('sign_up.sub_title')}
      />
      <ScrollView>
        <InputField
          label={t('sign_up.input_fields.firstname.label')}
          placeholder={t('sign_up.input_fields.firstname.placeholder')}
          value={firstName}
          onChangeText={setFirstName}
          textContentType="name"
        />
        <Spacer />
        <InputField
          label={t('sign_up.input_fields.lastname.label')}
          placeholder={t('sign_up.input_fields.lastname.placeholder')}
          value={lastName}
          onChangeText={setLastName}
          textContentType="familyName"
        />
        <Spacer />
        <InputField
          label={t('sign_up.input_fields.email.label')}
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder={t('sign_up.input_fields.email.placeholder')}
          value={email}
          onChangeText={setEmail}
        />
        <Spacer />
        <InputField
          label={t('sign_up.input_fields.password.label')}
          placeholder={t('sign_up.input_fields.password.placeholder')}
          textContentType="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Spacer />
        <InputField
          label={t('sign_up.input_fields.confirm_pass.label')}
          placeholder={t('sign_up.input_fields.confirm_pass.placeholder')}
          textContentType="password"
          secureTextEntry
          value={confirmPass}
          onChangeText={setConfirmPass}
        />
      </ScrollView>
      <Spacer />
      <Button label={t('sign_up.buttons.sign_up')} onPress={onPressSignUp} />
      <Spacer />
    </View>
  );
};

export default React.memo(SignUpScreenView);
