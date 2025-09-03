'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              {/* Version Badge */}
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/20 mb-8">
                ✨ Introducing DailyTaskr v1.1.0
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                DailyTaskr
              </h1>
              
              {/* Subtitle */}
              <p className="mx-auto max-w-3xl text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed">
                A calm, focused daily planner that helps you plan with intention and finish with confidence. 
                Add tasks in seconds, set a time and priority, and get gentle reminders right when you need them.
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a 
                  href="https://apps.apple.com/de/app/dailytaskr/id6751054391?l=en-GB" 
                  className="group flex items-center gap-3 bg-black/80 hover:bg-black text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    src="/apple-store-icon.png" 
                    alt="Download on App Store" 
                    className="w-6 h-6"
                  />
                  Download on App Store
                </a>
                
                <a 
                  href="#" 
                  className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
                >
                  <span className="text-2xl">🤖</span>
                  Get it on Google Play
                </a>
              </div>
              
              {/* Hero Phone Mockup */}
              <div className="relative mx-auto max-w-sm animate-float">
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-300 p-4 rounded-[3rem] shadow-2xl">
                  <div className="relative aspect-[9/19] rounded-[2rem] overflow-hidden">
                    <Image 
                      src="/hero-screenshot.png" 
                      alt="DailyTaskr app preview" 
                      fill 
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                What you can do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Plan fast, stay on schedule, and focus your list with DailyTaskr's powerful features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "⚡", title: "Plan fast", description: "Create tasks quickly with title, time, category, and priority." },
                { icon: "⏰", title: "Stay on schedule", description: "Flexible reminders from 0 minutes to 1 day before, plus custom time picker." },
                { icon: "📊", title: "See progress", description: "A simple progress ring shows how much you've completed today." },
                { icon: "📅", title: "Organize by date", description: "Browse and select days in the built-in calendar to plan ahead." },
                { icon: "🔔", title: "Control notifications", description: "Toggle reminders per task—mute or unmute anytime." },
                { icon: "🎯", title: "Prioritize clearly", description: "Low/Medium/High tags make urgency obvious at a glance." }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Peek inside
              </h2>
              <p className="text-xl text-gray-600">DailyTaskr screenshots</p>
            </div>
            
            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-shrink-0">
                  <div className="relative w-64 aspect-[9/19] rounded-3xl overflow-hidden shadow-2xl">
                    <Image 
                      src={`/screenshot-${i}.png`} 
                      alt={`DailyTaskr screenshot ${i}`} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Privacy-first
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your data stays on your device. No account, no tracking—just effortless planning that respects your privacy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "🔒", title: "Local storage", description: "All your tasks and data stay on your device." },
                { icon: "🚫", title: "No tracking", description: "We don't collect, store, or share your personal information." },
                { icon: "📱", title: "Home Screen widgets", description: "View today's tasks right on your Home Screen in small and medium sizes." }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="text-center group"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Loved by early testers
              </h2>
              <p className="text-xl text-white/90">What people say about the experience.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: "I finish tasks faster and feel calmer.", author: "Alex Doe", role: "Beta tester" },
                { quote: "It's the only app I actually open daily.", author: "Sarah Chen", role: "Beta tester" },
                { quote: "Beautiful, simple, and surprisingly powerful.", author: "Mike Johnson", role: "Beta tester" }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <p className="text-lg text-white/90 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-white/70 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Get early access
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Join the waitlist. We'll send a link when it's ready.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="flex-1 px-6 py-4 rounded-2xl border-0 text-gray-900 font-medium focus:ring-4 focus:ring-white/20 focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="px-8 py-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-2xl transition-colors duration-300"
                >
                  Notify me
                </button>
              </form>
              
              <p className="text-sm text-white/70">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">
                D
              </div>
              <span className="text-white text-lg">DailyTaskr — Privacy-first daily planning</span>
              <a 
                href="/privacy" 
                className="text-white/80 hover:text-white transition-colors duration-300 underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
