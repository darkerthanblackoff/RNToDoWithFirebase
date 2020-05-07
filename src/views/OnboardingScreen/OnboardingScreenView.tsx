import React, { MutableRefObject } from 'react';
import { View, ImageSourcePropType } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { OnboardingContent, Spacer, Button } from '../../components';
import OnboardingFooter from '../../assets/svg/OnboardingFooter';
import { styles, screenWidth } from './styles';

interface OnboardingScreenViewProps {
  page: number;
  data: { title: string; subTitle: string; image: ImageSourcePropType }[];
  nextBtnLabel: string;
  carouselRef: MutableRefObject<any>;
  setPage: (value: number) => void;
  getFooterColor: () => string;
  onNextPress: () => void;
}

const OnboardingScreenView = (props: OnboardingScreenViewProps) => {
  const {
    page,
    setPage,
    getFooterColor,
    data,
    nextBtnLabel,
    carouselRef,
    onNextPress,
  } = props;

  return (
    <View style={styles.container}>
      <Spacer />
      <Carousel
        data={data}
        ref={carouselRef}
        renderItem={({ item }) => (
          <OnboardingContent
            style={styles.content}
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={setPage}
      />
      <Pagination dotsLength={data.length} activeDotIndex={page} />
      <OnboardingFooter style={styles.footer} fill={getFooterColor()}>
        <View style={styles.footerContent}>
          <Button
            labelStyle={styles.nextBtnLabel}
            label={nextBtnLabel}
            color="#FFF"
            onPress={onNextPress}
          />
        </View>
      </OnboardingFooter>
    </View>
  );
};

export default React.memo(OnboardingScreenView);
