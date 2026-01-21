import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { DonationCard } from "@/app/components/DonationCard";
import { StudentProfile } from "@/app/components/StudentProfile";
import { ProgressTracker } from "@/app/components/ProgressTracker";
import { Heart, Users, DollarSign, Pizza } from "lucide-react";

export default function App() {
  const students = [
    {
      name: "Catherine Risley",
      major: "Business Administration",
      year: "Senior",
      quote:
        "Every donation makes a real difference in our Bronx community.",
    },
    {
      name: "Gavin Krill",
      major: "Marketing",
      year: "Junior",
      quote:
        "POTS has been serving our neighbors for years. Let's help them continue.",
    },
    {
      name: "Kaichao Shang",
      major: "Finance",
      year: "Senior",
      quote:
        "Together, we can fight hunger and build a stronger community.",
    },
  ];

  // Mock data for progress tracking
  const fundraisingData = {
    currentAmount: 0,
    goalAmount: 300,
    donorCount: 0,
    pizzaSpotsLeft: 8, // First come first serve for pizza party
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px] bg-gradient-to-br from-maroon-900 to-maroon-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Fordham Gabelli School of Business
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Students Fighting Hunger
            <br />
            in the Bronx
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white/90">
            Join three Fordham students in supporting POTS (Part
            of the Solution) — a vital resource providing meals
            and services to our Bronx neighbors in need.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#donate"
              className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center gap-2 shadow-lg text-lg"
            >
              <Heart className="w-5 h-5" />
              Donate $5 Now
            </a>
            <a
              href="#about"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-maroon-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-maroon-900 mb-2">
                $5
              </div>
              <div className="text-gray-600">Per Donation</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-maroon-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-maroon-900 mb-2">
                100%
              </div>
              <div className="text-gray-600">Goes to POTS</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-maroon-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pizza className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-maroon-900 mb-2">
                Pizza Party
              </div>
              <div className="text-gray-600">
                First Come First Serve
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracker Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ProgressTracker {...fundraisingData} />
        </div>
      </section>

      {/* About POTS Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-maroon-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-maroon-900 mb-6">
                About POTS (Part of the Solution)
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Since 1982, POTS has been a beacon of hope in
                  the Bronx, providing nutritious meals,
                  supportive services, and dignity to our
                  neighbors experiencing food insecurity.
                </p>
                <p>
                  Located in the South Bronx, POTS serves
                  hundreds of meals daily and operates emergency
                  food programs, helping individuals and
                  families get back on their feet.
                </p>
                <p className="font-semibold text-maroon-900">
                  Your $5 donation helps provide meals, pantry
                  supplies, and essential services to those who
                  need it most in our community.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-maroon-900">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1686479037314-88bc3732de16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGFudHJ5JTIwaGVscGluZ3xlbnwxfHx8fDE3Njg5NjM3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community food pantry helping others"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bronx Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-maroon-900">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676140943501-4ff60ff78695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9ueCUyMG5ldyUyMHlvcmslMjBjaXR5fGVufDF8fHx8MTc2ODk2NDk5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="The Bronx community"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-maroon-900 mb-6">
                Supporting Our Bronx Community
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  The Bronx is home to vibrant neighborhoods and
                  resilient communities. As Fordham students,
                  we're proud to be part of this borough and
                  committed to giving back to our neighbors.
                </p>
                <p>
                  POTS has been a cornerstone of support for
                  Bronx families facing food insecurity, and
                  we're honored to help continue their mission.
                </p>
                <div className="bg-maroon-50 border-l-4 border-maroon-900 p-4 rounded">
                  <p className="font-semibold text-maroon-900">
                    Every dollar raised stays right here in the
                    Bronx, helping our neighbors when they need
                    it most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section className="py-20 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet the Fordham Gabelli Students
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Three passionate students committed to making a
              difference in the Bronx community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {students.map((student, index) => (
              <StudentProfile key={index} student={student} />
            ))}
          </div>
        </div>
      </section>

      {/* Pizza Party Incentive Section */}
      <section className="py-20 bg-maroon-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758272134276-a793f8090ccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY4OTYzOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pizza party celebration"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">
                Join Us for a Pizza Party! 🍕
              </h2>
              <div className="space-y-4 text-lg text-white/90">
                <div className="bg-yellow-400 text-gray-900 p-4 rounded-lg font-bold text-center mb-6">
                  ⚡ FIRST COME, FIRST SERVE ⚡
                </div>
                <p>
                  As a thank you for supporting POTS, donors get
                  exclusive access to our appreciation pizza
                  party with the Fordham Gabelli team!
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Free pizza and refreshments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>
                      Meet fellow donors and community
                      supporters
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>
                      Learn more about POTS and our impact
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>
                      Limited spots available - don't miss out!
                    </span>
                  </li>
                </ul>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mt-6">
                  <p className="font-semibold text-xl">
                    Only {fundraisingData.pizzaSpotsLeft} spots
                    remaining!
                  </p>
                  <p className="text-white/80 mt-2">
                    Donate now to secure your spot at the party!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section
        id="donate"
        className="py-20 bg-gradient-to-br from-maroon-50 to-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 mb-4">
              Make Your $5 Donation
            </h2>
            <p className="text-xl text-gray-600">
              100% of your donation goes directly to POTS in the
              Bronx
            </p>
          </div>
          <DonationCard
            pizzaSpotsLeft={fundraisingData.pizzaSpotsLeft}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                About This Campaign
              </h3>
              <p className="text-gray-400">
                This fundraising initiative is organized by
                Fordham University Gabelli School of Business
                students in partnership with POTS (Part of the
                Solution) to support the Bronx community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                POTS Contact
              </h3>
              <p className="text-gray-400">
                2759 Webster Avenue
                <br />
                Bronx, NY 10458
                <br />
                Learn more at potsbronx.org
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              © 2026 Fordham Gabelli POTS Fundraiser. All
              donations benefit Part of the Solution.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}