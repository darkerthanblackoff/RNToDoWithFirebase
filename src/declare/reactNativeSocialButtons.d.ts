declare module 'react-native-social-buttons' {
  import { Component } from 'react';
  import { ViewStyle, ImageStyle, TextStyle } from 'react-native';

  interface SocialButtonProps {
    buttonViewStyle?: ViewStyle;
    logoStyle?: ImageStyle;
    textStyle?: TextStyle;
    buttonText?: string;
    onPress: () => void;
  }

  export class GoogleSocialButton extends Component<SocialButtonProps> {}
  export class GitHubSocialButton extends Component<SocialButtonProps> {}
  export class FacebookSocialButton extends Component<SocialButtonProps> {}
  export class InstagramSocialButton extends Component<SocialButtonProps> {}
  export class AmazonSocialButton extends Component<SocialButtonProps> {}
  export class LinkedInSocialButton extends Component<SocialButtonProps> {}
  export class MicrosoftSocialButton extends Component<SocialButtonProps> {}
  export class TwitterSocialButton extends Component<SocialButtonProps> {}
}
