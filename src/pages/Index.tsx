
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedLegislation from '@/components/home/FeaturedLegislation';
import ResourceHighlights from '@/components/home/ResourceHighlights';
import CommunitySection from '@/components/home/CommunitySection';
import VolunteerOpportunities from '@/components/home/VolunteerOpportunities';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedLegislation />
      <ResourceHighlights />
      <CommunitySection />
      <VolunteerOpportunities />
    </Layout>
  );
};

export default Index;
