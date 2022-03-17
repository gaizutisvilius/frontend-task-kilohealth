import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// MUI
import { Box, Grid, Typography } from '@mui/material';

// Custom components
import Title from '../../Title';
import CustomButton from '../../CustomButton';
import ProgramPlanCard from './ProgramPlanCard';

// Assets
import PaymentSecurityImage from '../../../assets/images/payment_security.png';

const planDetails = [
  {
    planType: '6 month plan',
    monthlyPrice: 9.99,
    price: 59.94,
    priceDiscount: 119.94,
    billingPeriod: 'billed every 6 months',
  },
  {
    planType: '3 month plan',
    monthlyPrice: 14.99,
    price: 44.97,
    priceDiscount: 59.97,
    billingPeriod: 'billed every 3 months',
  },
  {
    planType: '1 month plan',
    monthlyPrice: 19.99,
    price: null,
    priceDiscount: null,
    billingPeriod: 'Billed monthly',
  },
];

const ProgramPlan = (props) => {
  const [activePlan, setActivePlan] = useState(0);

  return (
    <Box>
      <Title
        variant='h3'
        text='Choose your plan and get'
        span={<span>7 days free trial</span>}
        justifyContent='flex-start'
      />
      <Grid container spacing={1} sx={{ mb: 2, mt: 1.5 }}>
        {planDetails.map((item, i) => (
          <Grid key={i} item md={12} xs={12}>
            <ProgramPlanCard
              index={i}
              active={activePlan === i ? 'true' : undefined}
              setActive={setActivePlan}
              badge={i === 0 ? 'true' : undefined}
              badgeContent='Save 50%'
              planType={item.planType}
              monthlyPrice={item.monthlyPrice}
              price={item.price}
              priceDiscount={item.priceDiscount}
              billingPeriod={item.billingPeriod}
            />
          </Grid>
        ))}
      </Grid>
      <CustomButton text='Get your plan' fullWidth />
      <Box sx={{ mt: 2, textAlign: 'center', lineHeight: '18px' }}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <Typography variant='caption'>
              Your free trial will automatically become a paid subscription on
              the 8th day after you begin your trial. To cancel your
              subscription, please contact us at least 24 hours before the end
              of the trial period.
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography
              variant='caption'
              sx={{ a: { color: (theme) => theme.palette.secondary.main } }}
            >
              By choosing a payment method you agree to the{' '}
              <Link to='/terms'>T&Cs</Link> and{' '}
              <Link to='/policy'>Privacy Policy</Link>
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <img src={PaymentSecurityImage} alt='payment-security-options' />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProgramPlan;
