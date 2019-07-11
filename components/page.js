import Head from 'next/head';
import { withRouter } from 'next/router';
import React from 'react';

import { dateTime } from '../utils/date-format';
import titleStyle from '../utils/title-style';

import GlobalStyle from './GlobalStyle';

const Page = ({ children, date, description, image, title = 'Pavan Prakash', keywords, router }) => {
  const domain = 'https://pavanprakash.ml';
  const formattedTitle = titleStyle(title);
  const url = router && router.asPath ? router.asPath : undefined;
  const canonical = url && url === '/' ? domain : domain + url;
  const featuredImage = domain + image;

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {description && <meta content={description} name="description" />}
        {keywords && <meta content={keywords} name="keywords" />}
        <meta content="follow, index" name="robots" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        {url && <link href={canonical} rel="canonical" />}
        <meta content="en_US" property="og:locale" />
        <meta content={formattedTitle} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={url} property="og:url" />
        {featuredImage && (
          <>
            <meta content={featuredImage} property="og:image" />
            <meta content={description} property="og:image:alt" />
          </>
        )}
        {date && (
          <>
            <meta content="article" property="og:type" />
            <meta content={dateTime(date)} property="article:published_time" />
          </>
        )}
      </Head>
      <GlobalStyle />
      {children}
    </>
  );
};

export default withRouter(Page);
