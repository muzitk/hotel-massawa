import React from 'react';
import ReactDom from 'react-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';



function ErrorPage() {

  return (
    <Hero>
    <Banner title="404" subtitle="page not found">
      <Link to ="/" className = "btn-pramary"> Return Home</Link>

    </Banner>
    </Hero>

  );
}

export default ErrorPage;
