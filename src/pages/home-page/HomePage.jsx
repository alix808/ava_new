import React from 'react';
import Provider from '../../comps/provider/Provider';
import SectionOne from '../../comps/section-one/SectionOne';
import SectionTwo from '../../comps/section-two/SectionTwo';

const HomePage = () => {
  return (
    <div>
      <Provider />
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default HomePage;
