import React from 'react';

import LinkedInIcon from 'assets/images/linked_in.svg';
import GitHubIcon from 'assets/images/github.svg';
import EmailIcon from 'assets/images/email.svg';

import SocialLink from './social-link';
import SocialListItem from './social-list-item';

const Social = () => (
  <nav>
    <ul>
      <SocialListItem>
        <SocialLink href="https://github.com/draconiandev" title="GitHub">
          <GitHubIcon />
          {'GitHub'}
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink href="https://www.linkedin.com/in/pavanprakash21/" title="LinkedIn">
          <LinkedInIcon />
          {'LinkedIn'}
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink href="mailto:pavanprakash21@gmail.com/" title="Email">
          <EmailIcon />
          {'Email'}
        </SocialLink>
      </SocialListItem>
    </ul>
  </nav>
);

export default Social;
