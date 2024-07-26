import React from 'react';
import ProfileLinks from '../../components/ProfileLinks';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
          Hello! I&apos;m Ali Tayeb, a passionate high school student interested in Machine Learning, Reticular Chemistry, Data Analysis, and Web Development.
      </p>
      <p className="mb-4">
          I&apos;ve worked in the Research Institute of King Fahd University of Petroleum and Minerals to develop novel polymers and frameworks for CO2 Capture, and Electrochemical CO2 Reduction Reaction.
        I&apos;ve also worked in developing Machine Learning algorithms to predict the CO2 Capacity of Porous Organic Polymers. 
      </p>
      <p className="mb-4">
          When I&apos;m not in the lab, I&apos;m probably speedcubing! My journey started in 2017, and my love has grown ever since. I&apos;ve competed in 1 competition, but hope to compete more in the upcoming future.
        
      </p>
      <p>
        Some of my other interests include Anime, Chess, and reading! 
      </p>
      <ProfileLinks />
    </div>
  );
}