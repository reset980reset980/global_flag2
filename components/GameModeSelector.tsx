import React from 'react';
import { GameMode } from '../types.ts';

interface GameModeSelectorProps {
  onSelectMode: (mode: GameMode) => void;
  onShowLeaderboard: () => void;
}

const GameModeSelector: React.FC<GameModeSelectorProps> = ({ onSelectMode, onShowLeaderboard }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">게임 모드를 선택하세요</h2>
        <p className="text-slate-400">두 가지 퀴즈 중 하나를 선택해 주세요</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* 국기 → 나라 모드 */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
             onClick={() => onSelectMode(GameMode.FLAG_TO_COUNTRY)}>
          <div className="text-center">
            <div className="text-6xl mb-4 group-hover:animate-bounce">🏁</div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">국기 맞추기</h3>
            <p className="text-slate-300 text-sm mb-4">
              국기를 보고 나라 이름을 맞춰보세요
            </p>
            <div className="bg-slate-700 rounded-lg p-3 text-xs text-slate-400">
              <p>• 국기 이미지 제공</p>
              <p>• 4개 선택지 중 정답 선택</p>
              <p>• 시각적 학습 효과</p>
            </div>
          </div>
        </div>

        {/* 나라 → 수도 모드 */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
             onClick={() => onSelectMode(GameMode.COUNTRY_TO_CAPITAL)}>
          <div className="text-center">
            <div className="text-6xl mb-4 group-hover:animate-bounce">🏛️</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">수도 맞추기</h3>
            <p className="text-slate-300 text-sm mb-4">
              나라 이름을 보고 수도를 맞춰보세요
            </p>
            <div className="bg-slate-700 rounded-lg p-3 text-xs text-slate-400">
              <p>• 나라 이름 제공</p>
              <p>• 수도 이름 맞추기</p>
              <p>• 지리 지식 향상</p>
            </div>
          </div>
        </div>
      </div>

      {/* 리더보드 버튼 */}
      <div className="text-center">
        <button
          onClick={onShowLeaderboard}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>🏆 리더보드</span>
        </button>
      </div>
    </div>
  );
};

export default GameModeSelector;