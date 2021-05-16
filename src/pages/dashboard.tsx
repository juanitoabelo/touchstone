import React from 'react';
import { Card, CardBody } from '@paljs/ui/Card';
import { ButtonLink } from '@paljs/ui/Button';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/SEO';

const ErrorStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  small {
    margin-bottom: 3rem;
  }
  h1 {
    margin-bottom: 0.5rem;
    text-align: left;
  }
  a {
    max-width: 20rem;
  }
`;

const Home = () => {
  return (
    <>
    <div className="content-wrapper px-4 py-4">
      <SEO title="Home" />
      <Card>
        <CardBody>
        <h1>TO DO ITEMS</h1>
          <ErrorStyle>
            <h1>TO DO ITEMS</h1>
            <small>The page you were looking for doesn&apos;t exist</small>
            
          </ErrorStyle>
        </CardBody>
      </Card>

    </div>
    </>
  );
};
export default Home;