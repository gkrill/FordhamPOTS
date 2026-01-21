import { User } from 'lucide-react';

interface StudentProfileProps {
  student: {
    name: string;
    major: string;
    year: string;
    quote: string;
  };
}

export function StudentProfile({ student }: StudentProfileProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-maroon-200 hover:border-maroon-400">
      <div className="w-20 h-20 bg-gradient-to-br from-maroon-900 to-maroon-700 rounded-full flex items-center justify-center mx-auto mb-6">
        <User className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
        {student.name}
      </h3>
      <p className="text-maroon-900 font-semibold text-center mb-1">
        {student.major}
      </p>
      <p className="text-gray-600 text-center mb-4">
        {student.year}
      </p>
      <div className="pt-4 border-t border-maroon-200">
        <p className="text-gray-700 italic text-center">
          "{student.quote}"
        </p>
      </div>
    </div>
  );
}