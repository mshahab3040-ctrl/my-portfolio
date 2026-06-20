<section className="min-h-screen flex items-center py-20">
  <div className="container mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-8 items-stretch">

      {/* Left Side */}
      <div className="flex flex-col gap-6 h-full">
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>

          <div className="space-y-4">
            <div className="p-2 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">EMAIL</p>
              <p className="font-semibold">shahabmian17@gmail.com</p>
            </div>

            <div className="p-4 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">PHONE</p>
              <p className="font-semibold">+92 370 4100700</p>
            </div>

            <div className="p-4 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">LOCATION</p>
              <p className="font-semibold">Bahawalpur, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 flex-1">
          <h3 className="text-xl font-bold mb-3">
            Open For Opportunities
          </h3>

          <p className="text-gray-400">
            Available for freelance projects, internships,
            full-stack web development, React applications,
            and UI/UX collaborations.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="glass-card p-8 h-full">
        <h3 className="text-2xl font-bold mb-6">
          Send a Message
        </h3>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded-xl bg-transparent border border-white/10"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 rounded-xl bg-transparent border border-white/10"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 rounded-xl bg-transparent border border-white/10"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-2 rounded-xl bg-transparent border border-white/10"
          />

          <button
            className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  </div>
</section>