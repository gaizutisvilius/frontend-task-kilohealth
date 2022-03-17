import React from 'react';

// MUI
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Title = (props) => {
  const { variant, component, text, span = false, ...otherProps } = props;

  return (
    <TitleRoot
      sx={{
        justifyContent: props.justifyContent,
        span: { color: (theme) => theme.palette.primary.main },
      }}
    >
      <Typography variant={variant} component={component} {...otherProps}>
        {text} {span && span}
      </Typography>
    </TitleRoot>
  );
};

const TitleRoot = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default Title;
