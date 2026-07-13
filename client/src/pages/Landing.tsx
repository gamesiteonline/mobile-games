import { useState } from 'react';
import { Download, Smartphone, Zap, Users, Sparkles } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Landing() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-md">
              <span className="text-sm font-semibold text-cyan-300">🎮 Mobile Gaming Revolution</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Gamesiteonline Mobile
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Download thousands of premium mobile games. APKs, IPAs, and more. All in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => navigate('/games')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1"
            >
              <Download className="inline mr-2 w-5 h-5" />
              Browse Games
            </button>
            <button
              onClick={() => navigate('/guides')}
              className="px-8 py-4 rounded-xl bg-slate-700/50 backdrop-blur text-white font-bold text-lg border border-slate-600 hover:border-cyan-500 transition-all transform hover:-translate-y-1"
            >
              <Sparkles className="inline mr-2 w-5 h-5" />
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur border border-slate-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-sm text-slate-400">Mobile Games</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-sm text-slate-400">Free Downloads</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-sm text-slate-400">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose Us?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'All Formats',
                description: 'APK, IPA, OBB - All mobile game formats supported'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'High-speed downloads with no external redirects'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Join thousands of gamers and share reviews'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700 hover:border-cyan-500 transition-all group"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Download?</h2>
            <p className="text-slate-300 mb-8">Start exploring our massive collection of mobile games today.</p>
            <button
              onClick={() => navigate('/games')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1"
            >
              Explore Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-4">© 2026 Gamesiteonline. All rights reserved.</p>
          <p className="text-sm">Fahad • Tanzania • Mobile Gaming Collection</p>
        </div>
      </footer>
    </div>
  );
}
