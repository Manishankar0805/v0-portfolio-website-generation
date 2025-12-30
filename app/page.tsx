"use client"

import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Hello, I'm <span className="text-blue-500">Manishankar</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Computer Science student at <span className="font-semibold">SRM Easwari Engineering College</span> with
            interests in
            <span className="text-blue-500 font-medium"> Network Security</span>,
            <span className="text-blue-500 font-medium"> Prompt Analysis</span>, and
            <span className="text-blue-500 font-medium"> AI-based systems</span>.
          </p>

          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg">
            Get Resume
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="px-4 py-16 md:py-24 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 border-l-4 border-blue-500 pl-6">
            About Me
          </h2>

          <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
            <p>
              I am a Computer Science student from SRM Easwari Engineering College with a strong interest in
              cybersecurity, networking fundamentals, and artificial intelligence. I enjoy working as a Prompt Analyst
              by designing and optimizing AI prompts and building real-world projects.
            </p>

            <p>
              I am also having a strong interest in learning Japanese language, which I am pursuing alongside my
              technical studies to broaden my cultural understanding and communication skills.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-16 md:py-24 flex justify-center bg-white/50">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 border-l-4 border-blue-500 pl-6">
            Projects
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">HR AI Bot</h3>
              <p className="text-slate-600">AI-powered HR assistant for employee and HR-related queries</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Smart Travel Planner</h3>
              <p className="text-slate-600">
                Intelligent travel planning system that helps users create personalized itineraries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16 md:py-24 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 border-l-4 border-blue-500 pl-6">
            Skills & Interests
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Programming Languages</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• C</li>
                <li>• C++</li>
                <li>• Python</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Web Development</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• HTML</li>
                <li>• CSS</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Database</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• MySQL</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Specializations</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Network Security & Cybersecurity Fundamentals</li>
                <li>• Prompt Analyst – AI Prompt Design & Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 md:py-24 flex justify-center bg-white/50">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 border-l-4 border-blue-500 pl-6">
            Contact
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-700">
              <span className="text-blue-500 font-semibold">📧</span>
              <a href="mailto:shankarmani0805@gmail.com" className="hover:text-blue-500 transition-colors">
                shankarmani0805@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <span className="text-blue-500 font-semibold">🔗</span>
              <a
                href="https://www.linkedin.com/in/mani-shankar-732255328/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <span className="text-blue-500 font-semibold">💻</span>
              <a
                href="https://github.com/Manishankar0805"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-slate-900 text-slate-400 text-center text-sm border-t border-slate-200">
        <p>© 2025 Manishankar. All rights reserved.</p>
      </footer>
    </main>
  )
}
