import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const SEO = (props) => {
  const { title, meta, lang } = props;

  return (
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: 'Kilo.Health product website',
        },
      ].concat(meta)}
    ></Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
