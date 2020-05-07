import React, { useState, useCallback, useRef } from 'react';

import Carousel from 'react-native-snap-carousel';

import OnboardingScreenView from './OnboardingScreenView';

const data = [
  {
    title: 'Welcome to aking',
    subTitle: 'Whats going to happen tomorrow?',
    image: require('../../assets/png/undraw_events_2p66.png'),
  },
  {
    title: 'Work happens',
    subTitle: 'Get notified when work happens.',
    image: require('../../assets/png/undraw_superhero_kguv.png'),
  },
  {
    title: 'Tasks and assign',
    subTitle: 'Task and assign them to colleagues.',
    image: require('../../assets/png/undraw_analysis_4jis.png'),
  },
];

const OnboardingScreenContainer = () => {
  const [page, setPage] = useState<number>(0);
  const carouselRef = useRef<Carousel>(null);
  const getFooterColor = useCallback(() => {
    switch (page) {
      case 1:
        return '#6074F9';
      case 2:
        return '#8560F9';
      default:
        return '#F96060';
    }
  }, [page]);
  const onNextPress = useCallback(() => {
    carouselRef.current.snapToNext();
  }, [carouselRef]);

  return (
    <OnboardingScreenView
      page={page}
      data={data}
      carouselRef={carouselRef}
      nextBtnLabel={page === data.length - 1 ? 'Get Started' : 'Next'}
      setPage={setPage}
      getFooterColor={getFooterColor}
      onNextPress={onNextPress}
    />
  );
};

export default OnboardingScreenContainer;
