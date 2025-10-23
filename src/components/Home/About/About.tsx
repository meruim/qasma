import { AboutPreview } from "./About-Preview";
import { GraduationCap, Users, Briefcase } from "lucide-react";

export const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen">
      <div className="w-full flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              About the App
            </h1>
            <div className="w-20 h-1 bg-primary"></div>
          </div>

          {/* What the App Does */}
          <section className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our appointment app simplifies the way students, teachers, and
              staff manage consultations and meetings. Whether you need academic
              support, want to schedule office hours, or coordinate department
              meetings, our platform makes it effortless. Book appointments in
              just a few clicks and get automatic reminders so nothing falls
              through the cracks.
            </p>
          </section>

          {/* Who It's For */}
          <section className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
              Who It's For
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Students
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Book appointments with teachers and advisors easily. Get
                    academic support when you need it.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Teachers
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Manage your consultation hours efficiently. Let students
                    book time slots that work for you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Staff
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Coordinate meetings and appointments across departments
                    seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* App Preview */}
          <AboutPreview />
        </div>
      </div>
    </div>
  );
};
