import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 size-[380px] rounded-full bg-purple-200/60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 size-[380px] rounded-full bg-indigo-200/60 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16 pb-10 sm:pt-20 sm:pb-14">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur">
              <span className="inline-block size-2 rounded-full bg-purple-500" />
              DailyTaskr for iOS
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Plan with intention. Finish with confidence.
            </h1>
            <p className="max-w-2xl text-base text-gray-600 sm:text-lg">
              DailyTaskr is a calm, focused daily planner. Add tasks in seconds, set a time and priority, and get gentle reminders right when you need them. Clean design and subtle haptics keep you motivated without distractions.
            </p>

            <div className="mt-2 flex w-full max-w-md items-center justify-center gap-3">
              <a href="#" className="flex-1 rounded-xl bg-black px-4 py-3 text-white shadow-sm transition hover:opacity-90 active:opacity-80">
                <div className="flex items-center justify-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12.1 6.2c1-.1 2 .4 2.7 1.1.6.6 1 1.4 1 2.3-.9.1-1.8-.3-2.5-1-.6-.6-1.1-1.5-1.2-2.4zM16.8 12.5c0-1.4.6-2.5 1.9-3.3-.7-1-1.7-1.6-2.7-1.7-1.2-.1-2.4.7-3 1.1-.6.4-1.5.8-2.3.9-.8.1-1.8-.3-2.7-.9-1-.6-1.7-1.3-2.3-1.2-1 .1-2 1.1-2.7 2.8C.9 11.8 1.5 15 3 17.3c.6 1 1.3 2 2.3 2 1 0 1.4-.6 2.7-.6 1.3 0 1.7.6 2.7.6 1 0 1.7-1 2.3-2 .4-.6.6-1.1.9-1.8-1.8-.7-2.9-2.1-2.9-3.9z" />
                  </svg>
                  <span className="text-sm font-semibold">Download on App Store</span>
                </div>
              </a>
              <a href="#" className="flex-1 rounded-xl bg-gray-900 px-4 py-3 text-white shadow-sm transition hover:opacity-90 active:opacity-80">
                <div className="flex items-center justify-center gap-2">
                  <svg width="18" height="18" viewBox="30 336.7 120.9 129.2" aria-hidden>
                    <path fill="#fff" d="M76.9 447.8c-6.5 6.2-13.5 5.1-20.4 2.2-7.2-3-13.7-3.2-21.2 0-9.1 3.8-13.9 3-19.9-2.2C-9 427.1-12.1 391 6.4 368.6c6.8-8.2 15.8-12.9 24.9-12.9 10.6 0 17.2 5.2 26 5.2 8.4 0 13.5-5.2 25.7-5.2 9.5 0 19.6 5.2 26.8 14.2-23.5 12.9-19.6 45.8 3.5 55.8-4 10.4-9.9 21.1-19.6 22.1-7.4.7-8.7-4.3-18.2-4.3-9.3 0-11.1 4.3-18.6 4.3-7.8-.1-12.9-7-19.9-14.7z" />
                  </svg>
                  <span className="text-sm font-semibold">Get it on Google Play</span>
                </div>
              </a>
            </div>

            <div className="mt-8 w-full max-w-md">
              <div className="rounded-[2rem] border border-gray-200 bg-white p-2 shadow-md">
                <div className="relative mx-auto aspect-[9/19] w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50">
                  <Image src="/hero-screenshot.png" alt="DailyTaskr app preview" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">What you can do</h2>
          <p className="mt-2 text-gray-600">Plan fast, stay on schedule, and finish more — every day.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">⚡</div>
            <h3 className="font-semibold">Plan fast</h3>
            <p className="mt-1 text-sm text-gray-600">Create tasks quickly with title, time, category, and priority.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">⏰</div>
            <h3 className="font-semibold">Stay on schedule</h3>
            <p className="mt-1 text-sm text-gray-600">Flexible reminders from 0 minutes to 1 day before, plus a custom time picker.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">⭕</div>
            <h3 className="font-semibold">See progress</h3>
            <p className="mt-1 text-sm text-gray-600">A simple progress ring shows how much you’ve completed today.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">📅</div>
            <h3 className="font-semibold">Organize by date</h3>
            <p className="mt-1 text-sm text-gray-600">Browse and select days in the built‑in calendar to plan ahead.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-pink-100 text-pink-600">🎯</div>
            <h3 className="font-semibold">Focus your list</h3>
            <p className="mt-1 text-sm text-gray-600">Filter by all or completed, and sort by time or recency.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">🔔</div>
            <h3 className="font-semibold">Control notifications</h3>
            <p className="mt-1 text-sm text-gray-600">Toggle reminders per task — mute or unmute anytime.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600">🏷️</div>
            <h3 className="font-semibold">Prioritize clearly</h3>
            <p className="mt-1 text-sm text-gray-600">Low / Medium / High tags make urgency obvious at a glance.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-lime-100 text-lime-600">🧩</div>
            <h3 className="font-semibold">Home Screen widgets</h3>
            <p className="mt-1 text-sm text-gray-600">View today’s tasks right on your Home Screen (small and medium).</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">🌿</div>
            <h3 className="font-semibold">Beautiful and readable</h3>
            <p className="mt-1 text-sm text-gray-600">Thoughtful typography, smooth animations, and a soothing interface.</p>
          </div>
        </div>
      </section>

      {/* Screenshots scroller */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-semibold">Peek inside</h2>
          <span className="text-sm text-gray-500">Dummy screenshots</span>
        </div>
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="snap-start shrink-0">
              <div className="relative aspect-[9/19] w-[220px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
                <Image src={`/screenshot-${i}.png`} alt={`DailyTaskr screenshot ${i}`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Loved by early testers</h2>
          <p className="mt-2 text-gray-600">What people say about the experience. Placeholder quotes.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {["I finish tasks faster and feel calmer.", "It’s the only app I actually open daily.", "Beautiful, simple, and surprisingly powerful."].map((quote, idx) => (
            <figure key={idx} className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <Image src="/placeholder-user.jpg" alt="User" width={40} height={40} className="rounded-full border" />
                <figcaption>
                  <div className="text-sm font-semibold">Alex Doe</div>
                  <div className="text-xs text-gray-500">Beta tester</div>
                </figcaption>
              </div>
              <blockquote className="mt-3 text-sm text-gray-700">“{quote}”</blockquote>
            </figure>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="mx-auto max-w-6xl px-4 pb-10 sm:pb-16">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-10">
          <h3 className="text-2xl font-semibold">Privacy‑first</h3>
          <p className="mt-2 text-gray-600">Your data stays on your device. No account, no tracking — just effortless planning that respects your privacy.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-purple-50 to-indigo-50 p-6 text-center shadow-sm sm:p-10">
          <h3 className="text-2xl font-semibold">Get early access to DailyTaskr</h3>
          <p className="mt-2 text-gray-600">Join the waitlist. We’ll send a link when it’s ready.</p>
          <form className="mx-auto mt-5 flex max-w-md gap-2">
            <input type="email" placeholder="you@example.com" className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-purple-500 focus:ring-2" />
            <button type="button" className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700">Notify me</button>
          </form>
          <div className="mt-3 text-xs text-gray-500">No spam. Unsubscribe anytime.</div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 pb-10 text-center text-sm text-gray-500">
        <div className="mx-auto flex items-center justify-center gap-2">
          <Image src="/app-icon.png" alt="DailyTaskr logo" width={18} height={18} />
          <span>DailyTaskr — a calm, focused daily planner</span>
        </div>
      </footer>
    </main>
  )
}
