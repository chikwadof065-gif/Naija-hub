import { Theme } from "@/components/Theme";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";
import { 
  FaLightbulb, 
  FaCalculator, 
  FaUserFriends, 
  FaExclamationTriangle,
  FaCheckCircle,
  FaQuoteLeft
} from "react-icons/fa";

export default function Home() {
  const stats = [
    { label: "Verified Business Models", value: "150+" },
    { label: "Experienced Mentors", value: "500+" },
    { label: "Aspiring Founders Helped", value: "12,000+" },
    { label: "Average Startup Cost Saved", value: "₦250k" },
  ];

  const features = [
    {
      icon: <FaCalculator className="text-3xl" style={{ color: Theme.primary }} />,
      title: "Real Startup Costs",
      description: "Get transparent breakdown of capital needed for registration, equipment, shop rents, and initial inventory in Nigeria."
    },
    {
      icon: <FaExclamationTriangle className="text-3xl" style={{ color: Theme.primary }} />,
      title: "Pitfalls & Challenges",
      description: "Learn about power issues, logistics hurdles, supply chain shocks, and regulatory hurdles before putting your money on the line."
    },
    {
      icon: <FaUserFriends className="text-3xl" style={{ color: Theme.primary }} />,
      title: "Direct Founder Connect",
      description: "Chat with seasoned Nigerian business owners who have already navigated the market you are planning to enter."
    },
    {
      icon: <FaLightbulb className="text-3xl" style={{ color: Theme.primary }} />,
      title: "Step-by-Step Execution",
      description: "Access tailored roadmaps covering everything from CAC registration to finding your first 100 Nigerian customers."
    }
  ];

  const trendingIdeas = [
    {
      title: "Logistics & Delivery Fleet",
      category: "Transport & Services",
      estCost: "₦1.2M - ₦3.5M",
      payback: "6 - 9 Months",
      riskLevel: "Medium",
      description: "Operating last-mile dispatch services for social media vendors and e-commerce brands in major cities."
    },
    {
      title: "Solar Installation & Retailing",
      category: "Clean Energy",
      estCost: "₦800K - ₦2.5M",
      payback: "4 - 7 Months",
      riskLevel: "Low to Medium",
      description: "Providing alternative power setups and inverter maintenance for homes and small businesses."
    },
    {
      title: "Cold Room & Agro-Storage",
      category: "Agribusiness",
      estCost: "₦2.0M - ₦5.0M",
      payback: "8 - 12 Months",
      riskLevel: "Medium",
      description: "Preserving perishable agricultural goods in key urban food hubs across South-West and Northern regions."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Explore Tested Ideas",
      desc: "Browse through hundreds of vetted business breakdowns with realistic capital, ROI timelines, and operational requirements."
    },
    {
      num: "02",
      title: "Review Case Studies",
      desc: "Read real stories from Nigerian business owners detailing their initial setup mistakes, hidden costs, and key success factors."
    },
    {
      num: "03",
      title: "Connect with Mentors",
      desc: "Book 1-on-1 advisory sessions or join group Q&A calls with founders who run the exact business you want to launch."
    }
  ];

  const mentors = [
    {
      name: "Chidimma Okonkwo",
      role: "Founder, FreshBites Catering",
      location: "Lagos, Nigeria",
      experience: "7+ Years in Food Services",
      quote: "Understanding local market sourcing saved me millions in food wastage during my first year."
    },
    {
      name: "Babatunde Adeleke",
      role: "CEO, ExpressWay Haulage",
      location: "Ibadan, Nigeria",
      experience: "10+ Years in Logistics",
      quote: "Never buy new vehicles for a fresh dispatch business. Start lean and scale through partnerships."
    },
    {
      name: "Aminu Bello",
      role: "Co-Founder, Sahel Tech Solutions",
      location: "Kano, Nigeria",
      experience: "5+ Years in POS & Agent Banking",
      quote: "Location and trust are everything in agency banking. Pick your spot before investing a single Naira."
    }
  ];

  return (
    <main className="min-h-dvh bg-neutral-950 text-neutral-100">
      {/* Hero Section */}
      <section className="bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover min-h-dvh">
        <div className="bg-black/50 min-h-dvh flex items-center justify-center">
          <div className="text-white md:w-2/3 mx-auto md:py-20 p-5 flex items-center justify-center flex-col gap-10 max-md:pt-16">
            <h1 className="font-extrabold text-5xl max-md:text-4xl uppercase text-center tracking-tight leading-tight">
              Think Big. <span style={{ color: Theme.secondary }}>Grow Bigger!</span>
            </h1>
            <p className="text-2xl max-md:text-lg text-center font-light leading-relaxed text-neutral-200">
              Naija Venture Hub is a platform that connects aspiring entrepreneurs
              with experienced business owners who share practical advice,
              real-life experiences, challenges, startup costs, and lessons
              learned to help beginners make informed decisions before starting
              their own businesses in Nigeria.
            </p>
            <div className="flex items-center gap-5 max-md:flex-col max-md:w-full">
              <Link 
                href="/signup" 
                style={{ backgroundColor: Theme.primary }} 
                className="text-white font-semibold px-8 py-3 text-xl rounded-full max-md:w-full max-md:text-center transition-opacity hover:opacity-90"
              >
                Get Started
              </Link>
              <Link 
                href="#trending-ideas" 
                className="font-semibold px-8 py-3 text-xl rounded-full flex items-center gap-2 border border-neutral-200 max-md:w-full max-md:text-center justify-center hover:bg-white/10 transition-colors"
              >
                Trending Ideas <TiArrowRight className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-neutral-800 bg-neutral-900 py-10 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-extrabold" style={{ color: Theme.secondary }}>
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-neutral-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition / Features */}
      <section className="py-20 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
            Why Start With <span style={{ color: Theme.secondary }}>Naija Venture Hub</span>?
          </h2>
          <p className="text-neutral-400 text-lg">
            Avoid costly mistakes by leveraging real data and insights from entrepreneurs who have built businesses on Nigerian soil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className="bg-neutral-900/80 border border-neutral-800 p-8 rounded-2xl flex gap-5 items-start hover:border-neutral-700 transition-all"
            >
              <div 
                className="p-4 rounded-xl shrink-0" 
                style={{ backgroundColor: Theme.secondary }}
              >
                {feat.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">{feat.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Ideas */}
      <section id="trending-ideas" className="py-20 px-5 bg-neutral-900/50 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2">
                Trending <span style={{ color: Theme.secondary }}>Venture Ideas</span>
              </h2>
              <p className="text-neutral-400 text-lg">
                Explore popular, high-demand business opportunities in Nigeria right now.
              </p>
            </div>
            <Link 
              href="/#trending-ideas" 
              className="font-semibold text-lg flex items-center gap-1 hover:underline"
              style={{ color: Theme.secondary }}
            >
              View All Ideas <TiArrowRight className="text-xl" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trendingIdeas.map((idea, idx) => (
              <div 
                key={idx} 
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all"
              >
                <div>
                  <span 
                    className="text-xs uppercase font-semibold tracking-wider px-3 py-1 rounded-full text-black inline-block mb-4"
                    style={{ backgroundColor: Theme.secondary }}
                  >
                    {idea.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{idea.title}</h3>
                  <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                    {idea.description}
                  </p>
                </div>

                <div className="border-t border-neutral-800 pt-4 flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Est. Startup Capital:</span>
                    <span className="font-semibold text-white">{idea.estCost}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Payback Period:</span>
                    <span className="font-semibold text-white">{idea.payback}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Risk Level:</span>
                    <span className="font-semibold text-white">{idea.riskLevel}</span>
                  </div>
                  <Link 
                    href="/#trending-ideas" 
                    className="mt-4 w-full text-center font-semibold py-2.5 rounded-xl text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: Theme.primary }}
                  >
                    Read Full Blueprint
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
            How <span style={{ color: Theme.secondary }}>It Works</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Three simple steps to transition from idea validation to launch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-neutral-900/60 border border-neutral-800 p-8 rounded-2xl relative flex flex-col gap-4"
            >
              <span 
                className="text-4xl font-black opacity-30 absolute top-6 right-6"
                style={{ color: Theme.secondary }}
              >
                {step.num}
              </span>
              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Mentors */}
      <section id="featured-mentors" className="py-20 px-5 bg-neutral-900/50 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
              Learn From <span style={{ color: Theme.secondary }}>Real Operators</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Hear directly from people running profitable businesses in Nigeria today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((m, idx) => (
              <div 
                key={idx} 
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col justify-between"
              >
                <div className="flex flex-col gap-4">
                  <FaQuoteLeft style={{ color: Theme.secondary }} className="text-2xl" />
                  <p className="text-neutral-300 italic text-sm leading-relaxed">
                    "{m.quote}"
                  </p>
                </div>
                <div className="border-t border-neutral-800 pt-4 mt-6 flex flex-col">
                  <span className="font-bold text-white text-lg">{m.name}</span>
                  <span className="text-xs" style={{ color: Theme.secondary }}>{m.role}</span>
                  <span className="text-xs text-neutral-500 mt-1">{m.location} • {m.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="py-20 px-5 max-w-6xl mx-auto">
        <div 
          className="rounded-3xl p-10 md:p-16 text-center flex flex-col items-center gap-6 relative overflow-hidden"
          style={{ backgroundColor: Theme.primary }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl leading-tight uppercase">
            Ready to Build Your Business with Confidence?
          </h2>
          <p className="text-neutral-200 text-lg max-w-xl font-light">
            Join thousands of Nigerian entrepreneurs getting real-life practical insights before making major investments.
          </p>
          <Link 
            href="/signup" 
            className="font-bold text-lg px-10 py-4 rounded-full text-black transition-transform hover:scale-105"
            style={{ backgroundColor: Theme.secondary }}
          >
            Create Your Account Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950 py-12 px-5 text-neutral-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 max-md:text-center">
            <span className="text-xl font-bold text-white uppercase tracking-wider">
              Naija Venture Hub
            </span>
            <p className="text-xs text-neutral-500">
              Empowering Nigerian Entrepreneurs through Real Experiences.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/#trending-ideas" className="hover:text-white transition-colors">Venture Directory</Link>
            <Link href="/#featured-mentors" className="hover:text-white transition-colors">Find a Mentor</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <span className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Naija Venture Hub. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}