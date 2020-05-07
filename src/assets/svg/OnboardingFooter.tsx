import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';

import { rem } from '../../utils';

interface OnboardingFooterProps extends SvgProps {
  children?: React.ReactNode;
}

function SvgComponent(props: OnboardingFooterProps) {
  return (
    <View>
      <Svg
        width={rem(375)}
        height={rem(270)}
        viewBox="0 0 375 270"
        fill="none"
        {...props}
      >
        <Path
          opacity={0.2}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M316.592 37.185s-102.877 29.052-191.325-7.337C36.819-6.542-2.036 33.189-28.838 18.596c-26.801-14.593-2.882 283.1-2.882 283.1L253.652 344l85.228-42.304L356 131.232l-39.408-94.047z"
          fill={props.fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.26 25.433s112.932 31.87 210.026-8.048C307.379-22.534 350.032 21.05 379.454 5.04c29.421-16.008 3.163 310.553 3.163 310.553L69.352 362l-93.558-46.406L-43 128.6.26 25.433z"
          fill={props.fill}
        />
      </Svg>
      {props.children && props.children}
    </View>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
