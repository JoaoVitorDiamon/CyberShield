import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons'; 

interface ScoreData {
  username: string;
  score: number;
  horaPontuacao: string;
}

const CardTable = () => {
  const [data, setData] = useState<ScoreData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://9fb7-189-29-146-118.ngrok-free.app/Scores", {
          method: "GET",
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });

        const data: ScoreData[] = await response.json();

        const sortedData = data.sort((a, b) => {
          const timeToSeconds = (time: string) => {
            const [hours, minutes, seconds] = time.split(':').map(Number);
            return hours * 3600 + minutes * 60 + seconds;
          };
          return timeToSeconds(a.horaPontuacao) - timeToSeconds(b.horaPontuacao);
        });

        setData(sortedData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const getTrophyIcon = (index: number) => {
    if (index === 0) return <FontAwesomeIcon icon={faTrophy} style={{ color: '#FFD700' }} />;
    if (index === 1) return <FontAwesomeIcon icon={faTrophy} style={{ color: '#C0C0C0' }} />;
    if (index === 2) return <FontAwesomeIcon icon={faTrophy} style={{ color: '#CD7F32' }} />;
    return null;
  };

  const limitedData = data.slice(0, 10);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="grid gap-4">
        {limitedData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between p-4 ${
              index < 3
                ? 'bg-n-11'
                : 'bg-transparent border-2 border-n-11 text-n-2'
            } rounded-md`}
          >
            <h4 className="font-code text-center text-xl md:text-base w-full md:w-1/5 mb-2 md:mb-0">
              {getTrophyIcon(index) || `${index + 1}º Lugar`}
            </h4>
            <h3 className={`font-code w-full md:w-2/5 text-center md:text-left text-base md:text-sm mb-2 md:mb-0`}>
              {item.username}
            </h3>
            <h3 className={`font-code w-full md:w-1/5 text-center text-base md:text-sm mb-2 md:mb-0`}>
              Pontos: {item.score}
            </h3>
            <h3 className={`font-code w-full md:w-1/5 text-center text-base md:text-sm`}>
              Tempo: {item.horaPontuacao}
            </h3>
          </div>
        ))}
        <button className='font-code text-center mt-4'>
          <a href="/">Voltar ao Início</a>
        </button>
      </div>
    </div>
  );
};

export default CardTable;
