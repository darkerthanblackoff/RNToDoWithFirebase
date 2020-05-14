import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Header, InputField, Button } from '../../components';
import { styles } from './styles';

interface SignInScreenViewProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (pwd: string) => void;
  resetPass: () => void;
  onLogInPress: () => void;
}

const SignInScreenView = (props: SignInScreenViewProps) => {
  const { t } = useTranslation();
  const {
    email,
    password,
    setEmail,
    setPassword,
    resetPass,
    onLogInPress,
  } = props;

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        title={t('sign_in.title')}
        subTitle={t('sign_in.sub_title')}
      />
      <View style={styles.sigInForm}>
        <InputField
          style={styles.emailField}
          label={t('sign_in.input_fields.email.label')}
          textContentType="emailAddress"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholder={t('sign_in.input_fields.email.placeholder')}
        />
        <InputField
          label={t('sign_in.input_fields.password.label')}
          value={password}
          onChangeText={setPassword}
          placeholder={t('sign_in.input_fields.password.placeholder')}
          secureTextEntry
        />
        <Text onPress={resetPass} style={styles.text}>
          {t('sign_in.buttons.forgot_pass')}
        </Text>
      </View>
      <Button label={t('sign_in.buttons.log_in')} onPress={onLogInPress} />
    </View>
  );
};

export default React.memo(SignInScreenView);
