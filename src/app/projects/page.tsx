import React from 'react';
import Link from 'next/link';

const projects = [
  { id: 1, title: 'Tennis Game Outcome Predictor', description: 'Predicts the outcome of a tennis match based on the input of 2 players (94% accuracy)', github: 'https://github.com/alityb/Tennis-Game-Outcome-Predictor' },
  { id: 2, title: 'NBA Shot Analyzer (2019-2024)', description: 'Implements a Python Script for an SQL database to answer queries', github: 'https://github.com/alityb/NBA-Shot-Analyzer' },
  { id: 3, title: 'Stephen Curry Shot Predictor', description: 'Predicts the outcome of a Stephen Curry shot based on input (64% accuracy)', github: 'https://github.com/alityb/Stephen-Curry-Shot-Predictor' },
  { id: 4, title: 'Speed Arithmetic Game', description: 'You will be given 2 numbers ranging from 1-100, inclusive. You will be given a score based on how many you have solved right. Negative and decimal solutions were omitted.', github: 'https://github.com/alityb/Speed-Arithmetic-Game' },
  { id: 5, title: 'Pomodoro Application with a Task Manager', description: 'Complete your tasks efficiently using the Pomodoro technique!', github: 'https://github.com/alityb/Pomodoro-Application-with-Task-Manager' },
  { id: 6, title: 'NBA MVP Predictor', description: 'This projects aims at predicting the 2024 MVP by the All-Star break. The code has been run on every season after 2012, and has successfully predicted the MVP 80% of the time.', github: 'https://github.com/alityb/NBA-2024-MVP-Predictor' },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link href={project.github} key={project.id} target="_blank" rel="noopener noreferrer">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}