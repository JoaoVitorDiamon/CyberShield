import React from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon, StarIcon } from '@heroicons/react/24/solid';

const rankings = [
  {username: 'Jogador1', score: 1500, time: '2m 15s'},
  {username: 'Jogador2', score: 1400, time: '2m 30s' },
];

const Ranking = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-10 border border-gray-200">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Ranking dos Jogadores</h1>
      <div className="space-y-4">
        {rankings.map((rank, index) => (
          <motion.div
            key={index}
            className={`flex items-center p-4 border border-gray-300 rounded-lg shadow-md transition-transform ${index === 0 ? 'bg-yellow-50' :
              index === 1 ? 'bg-gray-50' : 'bg-slate-50'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="mr-4">
            </div>
            <div className="flex-grow">
              <p className="text-xl font-semibold text-gray-900">{rank.username}</p>
              <p className="text-gray-700">Pontuação: <span className="font-bold">{rank.score}</span></p>
              <p className="text-gray-700">Tempo: <span className="font-bold">{rank.time}</span></p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
