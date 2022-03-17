import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './index.css';

// MUI
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

// Custom hooks
import useWindowSize from '../../../hooks/useWindowSize';

// Custom components
import Title from '../../Title';
import Testimonial from './Testimonial';
import CustomButton from '../../CustomButton';

// Assets
import UserImage1 from '../../../assets/images/user_1.png';
import UserImage2 from '../../../assets/images/user_2.png';
import UserImage3 from '../../../assets/images/user_3.png';

const programUsers = [
  {
    name: 'Emily',
    age: 28,
    address: 'Delaware, NJ',
    rating: 5,
    photo: UserImage1,
    story:
      'I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.',
  },
  {
    name: 'Kylie',
    age: 40,
    address: 'Los Angeles',
    rating: 5,
    photo: UserImage2,
    story:
      'I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.',
  },
  {
    name: 'Jesica',
    age: 51,
    address: 'San Francisco, CA',
    rating: 5,
    photo: UserImage3,
    story:
      'I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.',
  },
];

const carouselResponsiveness = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const CheckoutTestimonialsSection = () => {
  const winsize = useWindowSize();

  return (
    <SectionRoot>
      <Box
        sx={{
          maxWidth: '989px',
          m: '0 auto',
        }}
      >
        <Title variant='h3' text='Hear success stories from our clients' />

        {winsize.width <= 600 ? (
          // Display carousel
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={carouselResponsiveness}
            showDots={true}
            autoPlay={false}
            keyBoardControl={true}
            // infinite={true}
            containerClass='carousel-container'
            dotListClass='custom-dot-list-style'
            removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
          >
            {programUsers.map(
              ({ name, age, address, rating, photo, story }, i) => (
                <Testimonial
                  key={i}
                  name={name}
                  age={age}
                  address={address}
                  rating={rating}
                  photo={photo}
                  story={story}
                />
              )
            )}
          </Carousel>
        ) : (
          // Display grid
          <Grid container spacing={2} sx={{ mt: 3 }}>
            {programUsers.map(
              ({ name, age, address, rating, photo, story }, i) => (
                <Grid
                  key={i}
                  item
                  md={4}
                  sm={6}
                  xs={12}
                  sx={{ minHeight: '607px' }}
                >
                  <Testimonial
                    name={name}
                    age={age}
                    address={address}
                    rating={rating}
                    photo={photo}
                    story={story}
                  />
                </Grid>
              )
            )}
          </Grid>
        )}
        <Box
          sx={{
            my: 6,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CustomButton
            text='Get my plan'
            fullWidth
            sx={{
              width: (theme) => theme.breakpoints.up('sm') && '343px',
              height: '56px',
            }}
          />
        </Box>
      </Box>
    </SectionRoot>
  );
};

const SectionRoot = styled('section')(() => ({
  width: '100%',
}));

export default CheckoutTestimonialsSection;
