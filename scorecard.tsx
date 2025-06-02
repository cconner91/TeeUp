import React from 'react';

interface Player {
  id: string;
  name: string;
  scores: (number | null)[];
}

interface ScorecardProps {
  players: Player[];
  handicaps: number[]; // Array of 18 numbers, one per hole
  onScoreChange: (playerId: string, holeIndex: number, newScore: number) => void;
}

const Scorecard: React.FC<ScorecardProps> = ({ players, handicaps, onScoreChange }) => {
  const holes = Array.from({ length: 18 }, (_, i) => i + 1);

  const getTotalScore = (scores: (number | null)[]) =>
    scores.reduce((sum, score) => sum + (score ?? 0), 0);

  return (
    <div className="overflow-auto p-4 bg-gray-100 min-h-screen">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg">
        <div className="p-4 border-b text-center text-xl font-semibold bg-green-600 text-white rounded-t-xl">
          Golf Scorecard
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-2 border text-left">Player</th>
                {holes.map((hole) => (
                  <th key={hole} className="p-2 border text-center">
                    {hole}
                  </th>
                ))}
                <th className="p-2 border text-center">Total</th>
              </tr>
              <tr className="bg-gray-50 text-xs text-gray-500">
                <th className="p-2 border text-left">Handicap</th>
                {handicaps.map((hcp, idx) => (
                  <td key={idx} className="p-1 border text-center">
                    {hcp}
                  </td>
                ))}
                <td className="p-1 border text-center">–</td>
              </tr>
            </thead>

            <tbody>
              {players.map((player) => (
                <tr key={player.id} className="hover:bg-gray-50">
                  <td className="p-2 border font-medium">{player.name}</td>
                  {holes.map((_, holeIndex) => (
                    <td key={holeIndex} className="p-1 border text-center">
                      <input
                        type="number"
                        min="1"
                        max="15"
                        value={player.scores[holeIndex] ?? ''}
                        onChange={(e) =>
                          onScoreChange(player.id, holeIndex, parseInt(e.target.value, 10) || 0)
                        }
                        className="w-12 text-center border rounded"
                      />
                    </td>
                  ))}
                  <td className="p-1 border text-center font-semibold">
                    {getTotalScore(player.scores)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Scorecard;
