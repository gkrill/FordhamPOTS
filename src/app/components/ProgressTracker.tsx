import { TrendingUp } from 'lucide-react';

interface ProgressTrackerProps {
  currentAmount: number;
  goalAmount: number;
  donorCount: number;
  pizzaSpotsLeft: number;
}

export function ProgressTracker({ currentAmount, goalAmount, donorCount, pizzaSpotsLeft }: ProgressTrackerProps) {
  const percentage = Math.min((currentAmount / goalAmount) * 100, 100);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-maroon-900">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-8 h-8 text-maroon-900" />
        <h3 className="text-3xl font-bold text-gray-900">Campaign Progress</h3>
      </div>

      <div className="space-y-6">
        {/* Progress Bar */}
        <div>
          <div className="flex justify-between items-end mb-3">
            <div>
              <div className="text-4xl font-bold text-maroon-900">
                ${currentAmount.toLocaleString()}
              </div>
              <div className="text-gray-600 text-lg">
                raised of ${goalAmount.toLocaleString()} goal
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">
                {percentage.toFixed(0)}%
              </div>
              <div className="text-gray-600">complete</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <div
              className="bg-gradient-to-r from-maroon-900 to-maroon-700 h-full transition-all duration-500 ease-out rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-maroon-900 mb-1">
              {donorCount}
            </div>
            <div className="text-gray-600">Donors</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 text-center border-2 border-yellow-400">
            <div className="text-3xl font-bold text-orange-600 mb-1">
              {pizzaSpotsLeft}
            </div>
            <div className="text-gray-700 font-semibold">Pizza Party Spots Left!</div>
          </div>
        </div>

        {/* Pizza Party Alert */}
        {pizzaSpotsLeft <= 10 && pizzaSpotsLeft > 0 && (
          <div className="bg-orange-100 border-2 border-orange-500 rounded-lg p-4 animate-pulse">
            <p className="text-orange-900 font-bold text-center">
              ⚡ Only {pizzaSpotsLeft} spots remaining for the pizza party! First come, first served!
            </p>
          </div>
        )}

        {pizzaSpotsLeft === 0 && (
          <div className="bg-red-100 border-2 border-red-500 rounded-lg p-4">
            <p className="text-red-900 font-bold text-center">
              🍕 Pizza party spots are full! But your donation still helps POTS!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
