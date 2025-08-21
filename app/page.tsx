'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .hero {
          padding: 80px 0;
          text-align: center;
          color: white;
        }
        
        .hero h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        
        .version-tag {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 0.9rem;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .hero p {
          font-size: 1.3rem;
          max-width: 600px;
          margin: 0 auto 40px;
          opacity: 0.9;
        }
        
        .app-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }
        
        .app-button {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(0,0,0,0.8);
          color: white;
          padding: 15px 25px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .app-button:hover {
          background: rgba(0,0,0,0.9);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        
        .phone-mockup {
          max-width: 300px;
          margin: 0 auto;
          position: relative;
        }
        
        .phone-frame {
          background: linear-gradient(145deg, #f0f0f0, #cacaca);
          border-radius: 35px;
          padding: 15px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        .phone-screen {
          border-radius: 25px;
          overflow: hidden;
          aspect-ratio: 9/19;
          position: relative;
        }
        
        .section {
          background: white;
          padding: 80px 0;
        }
        
        .section h2 {
          font-size: 2.8rem;
          text-align: center;
          margin-bottom: 20px;
          color: #2d3748;
          font-weight: 700;
        }
        
        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 60px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-top: 40px;
        }
        
        .feature-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05);
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }
        
        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #2d3748;
          font-weight: 600;
        }
        
        .feature-card p {
          color: #666;
          line-height: 1.6;
        }
        
        .screenshots-section {
          background: #f8fafc;
          padding: 80px 0;
        }
        
        .screenshots-container {
          display: flex;
          gap: 30px;
          overflow-x: auto;
          padding: 20px 0;
          scroll-snap-type: x mandatory;
        }
        
        .screenshot {
          flex: 0 0 220px;
          scroll-snap-align: start;
        }
        
        .screenshot-frame {
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 9/19;
          position: relative;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }
        
        .testimonials {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 80px 0;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 40px;
        }
        
        .testimonial {
          background: rgba(255,255,255,0.1);
          padding: 30px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .testimonial-quote {
          font-size: 1.1rem;
          margin-bottom: 20px;
          font-style: italic;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
        }
        
        .cta-section {
          background: white;
          padding: 80px 0;
          text-align: center;
        }
        
        .cta-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 60px 40px;
          border-radius: 25px;
          color: white;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .cta-box h3 {
          font-size: 2.2rem;
          margin-bottom: 15px;
          font-weight: 700;
        }
        
        .cta-box p {
          font-size: 1.1rem;
          margin-bottom: 30px;
          opacity: 0.9;
        }
        
        .email-form {
          display: flex;
          gap: 15px;
          max-width: 400px;
          margin: 0 auto;
          flex-wrap: wrap;
        }
        
        .email-input {
          flex: 1;
          padding: 15px 20px;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          min-width: 250px;
        }
        
        .notify-button {
          background: rgba(0,0,0,0.8);
          color: white;
          border: none;
          padding: 15px 25px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .notify-button:hover {
          background: rgba(0,0,0,1);
        }
        
        .footer {
          background: #2d3748;
          color: white;
          padding: 40px 0;
          text-align: center;
        }
        
        .footer-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }
        
        .logo {
          width: 30px;
          height: 30px;
          background: #667eea;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .hero p {
            font-size: 1.1rem;
          }
          
          .app-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .email-form {
            flex-direction: column;
          }
          
          .email-input {
            min-width: auto;
          }
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="fade-in">
              <div className="version-tag">
                ✨ Introducing DailyTaskr v1.1.0
              </div>
              <h1>DailyTaskr</h1>
              <p>
                A calm, focused daily planner that helps you plan with intention and finish with confidence. 
                Add tasks in seconds, set a time and priority, and get gentle reminders right when you need them.
              </p>
              
              <div className="app-buttons">
                <a href="#" className="app-button">
                  <span>🍎</span>
                  Download on App Store
                </a>
                <a href="#" className="app-button">
                  <span>🤖</span>
                  Get it on Google Play
                </a>
              </div>

              <div className="phone-mockup float">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <Image 
                      src="/hero-screenshot.png" 
                      alt="DailyTaskr app preview" 
                      fill 
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="container">
            <h2>What you can do</h2>
            <p className="section-subtitle">
              Plan fast, stay on schedule, and focus your list with DailyTaskr's powerful features.
            </p>
            
            <div className="features-grid">
              <div className="feature-card fade-in">
                <span className="feature-icon">⚡</span>
                <h3>Plan fast</h3>
                <p>Create tasks quickly with title, time, category, and priority.</p>
              </div>
              
              <div className="feature-card fade-in">
                <span className="feature-icon">⏰</span>
                <h3>Stay on schedule</h3>
                <p>Flexible reminders from 0 minutes to 1 day before, plus custom time picker.</p>
              </div>
              
              <div className="feature-card fade-in">
                <span className="feature-icon">📊</span>
                <h3>See progress</h3>
                <p>A simple progress ring shows how much you've completed today.</p>
              </div>
              
              <div className="feature-card fade-in">
                <span className="feature-icon">📅</span>
                <h3>Organize by date</h3>
                <p>Browse and select days in the built-in calendar to plan ahead.</p>
              </div>
              
              <div className="feature-card fade-in">
                <span className="feature-icon">🔔</span>
                <h3>Control notifications</h3>
                <p>Toggle reminders per task—mute or unmute anytime.</p>
              </div>
              
              <div className="feature-card fade-in">
                <span className="feature-icon">🎯</span>
                <h3>Prioritize clearly</h3>
                <p>Low/Medium/High tags make urgency obvious at a glance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="screenshots-section">
          <div className="container">
            <h2>Peek inside</h2>
            <p className="section-subtitle">DailyTaskr screenshots</p>
            
            <div className="screenshots-container">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="screenshot">
                  <div className="screenshot-frame">
                    <Image 
                      src={`/screenshot-${i}.png`} 
                      alt={`DailyTaskr screenshot ${i}`} 
                      fill 
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="section">
          <div className="container">
            <h2>Privacy-first</h2>
            <p className="section-subtitle">
              Your data stays on your device. No account, no tracking—just effortless planning that respects your privacy.
            </p>
            
            <div className="features-grid">
              <div className="feature-card fade-in">
                <span className="feature-icon">🔒</span>
                <h3>Local storage</h3>
                <p>All your tasks and data stay on your device.</p>
              </div>
              
              <div className="feature-card fade-in">
                <span className="feature-icon">🚫</span>
                <h3>No tracking</h3>
                <p>We don't collect, store, or share your personal information.</p>
              </div>
              
              <div className="feature-card fade-in">
                <span className="feature-icon">📱</span>
                <h3>Home Screen widgets</h3>
                <p>View today's tasks right on your Home Screen in small and medium sizes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <div className="container">
            <h2>Loved by early testers</h2>
            <p className="section-subtitle">
              What people say about the experience.
            </p>
            
            <div className="testimonials-grid">
              <div className="testimonial">
                <p className="testimonial-quote">
                  "I finish tasks faster and feel calmer."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div>
                    <div style={{fontWeight: 600}}>Alex Doe</div>
                    <div style={{opacity: 0.8, fontSize: '0.9rem'}}>Beta tester</div>
                  </div>
                </div>
              </div>
              
              <div className="testimonial">
                <p className="testimonial-quote">
                  "It's the only app I actually open daily."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div>
                    <div style={{fontWeight: 600}}>Sarah Chen</div>
                    <div style={{opacity: 0.8, fontSize: '0.9rem'}}>Beta tester</div>
                  </div>
                </div>
              </div>
              
              <div className="testimonial">
                <p className="testimonial-quote">
                  "Beautiful, simple, and surprisingly powerful."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div>
                    <div style={{fontWeight: 600}}>Mike Johnson</div>
                    <div style={{opacity: 0.8, fontSize: '0.9rem'}}>Beta tester</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-box">
              <h3>Get early access</h3>
              <p>Join the waitlist. We'll send a link when it's ready.</p>
              
              <form className="email-form">
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="email-input"
                />
                <button type="submit" className="notify-button">
                  Notify me
                </button>
              </form>
              
              <p style={{fontSize: '0.9rem', marginTop: '15px', opacity: 0.8}}>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="logo">D</div>
              <span>DailyTaskr — Privacy-first daily planning</span>
              <a href="/privacy" className="text-white hover:text-gray-300 transition-colors ml-4">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
