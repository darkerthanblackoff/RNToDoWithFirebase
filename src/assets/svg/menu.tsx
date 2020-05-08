import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={223.48} height={223.48} viewBox="0 0 223.48 223.48" {...props}>
      <Path d="M124.96.003h98.521v98.505H124.96zM0 .003h98.512v98.505H0zM0 124.964h98.512v98.514H0zM124.96 124.964h98.521v98.514H124.96z" />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
