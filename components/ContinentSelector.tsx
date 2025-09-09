import React from 'react';
import { Continent } from '../types.ts';

interface ContinentSelectorProps {
  selectedContinents: Set<Continent>;
  onToggleContinent: (continent: Continent) => void;
  onStartGame: () => void;
  onSelectAll: () => void;
  canStart: boolean;
}

const continentColors: Record<Continent, string> = {
  [Continent.Asia]: 'bg-red-500 hover:bg-red-600',
  [Continent.Africa]: 'bg-yellow-500 hover:bg-yellow-600',
  [Continent.Europe]: 'bg-blue-500 hover:bg-blue-600',
  [Continent.NorthAmerica]: 'bg-green-500 hover:bg-green-600',
  [Continent.SouthAmerica]: 'bg-purple-500 hover:bg-purple-600',
  [Continent.Oceania]: 'bg-indigo-500 hover:bg-indigo-600',
};

const ContinentCard: React.FC<{
  continent: Continent;
  isSelected: boolean;
  onToggle: (continent: Continent) => void;
}> = ({ continent, isSelected, onToggle }) => {
  const baseClasses = 'p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 flex items-center justify-center';
  const colorClass = continentColors[continent];
  const selectedClasses = isSelected ? 'ring-4 ring-cyan-400 scale-105 shadow-cyan-500/50' : 'ring-2 ring-transparent opacity-70 hover:opacity-100';
  
  return (
    <div
      onClick={() => onToggle(continent)}
      className={`${baseClasses} ${colorClass} ${selectedClasses}`}
      aria-pressed={isSelected}
    >
      <h3 className="text-xl font-bold text-white text-center">{continent}</h3>
    </div>
  );
};

const ContinentSelector: React.FC<ContinentSelectorProps> = ({ selectedContinents, onToggleContinent, onStartGame, onSelectAll, canStart }) => {
  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-2xl w-full text-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-6 text-cyan-300">플레이할 대륙을 선택하세요</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {Object.values(Continent).map(continent => (
          <ContinentCard
            key={continent}
            continent={continent}
            isSelected={selectedContinents.has(continent)}
            onToggle={onToggleContinent}
          />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
         <button
          onClick={onSelectAll}
          className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-200 transform hover:scale-105 shadow-lg"
        >
          {selectedContinents.size === Object.values(Continent).length ? '전체 해제' : '전체 선택'}
        </button>
        <button
          onClick={onStartGame}
          disabled={!canStart}
          className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:hover:scale-100 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:shadow-none enabled:shadow-cyan-500/50"
        >
          게임 시작
        </button>
      </div>
    </div>
  );
};

export default ContinentSelector;