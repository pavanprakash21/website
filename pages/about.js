import React from 'react';
import styled from 'styled-components';

import { heading } from '../styles/mixins';
import { spacing } from '../styles/vars';
import Footer from '../components/footer';
import H3 from '../components/elements/H3';
import Main from '../components/elements/main';
import Nav from '../components/nav';
import Page from '../components/page';
import Social from '../components/social/social';

const AboutTitle = styled.h3`
  ${heading} color: #2e2e2e;
  font-size: 2.5em;
  margin-bottom: ${spacing.large};
`;

const description =
  'Full-stack engineer with experience in scalability, best practices and design. Currently inventing the future of home shopping at Brillio.';

const About = () => (
  <Page description={description} title={'Pavan Prakash - About Me'}>
    <Nav />
    <Main>
      <AboutTitle>{'About Me'}</AboutTitle>
      <p>
        {`Born and raised in Mysore, I'm currently living in Bangalore and working as a Software Engineer at Brillio.`}
      </p>
      <p>{'I enjoy all things technology, football, and music.'}</p>
      <H3>{'Contact'}</H3>
      <Social />
    </Main>
    <Footer />
  </Page>
);

export default About;
