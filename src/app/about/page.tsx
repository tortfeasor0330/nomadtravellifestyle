import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Globe, Award, Heart, Leaf } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = { title: 'About Us' };

const team = [
  { name: 'Elena Vasquez', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80', bio: '20+ years in luxury travel. Former National Geographic expedition leader.' },
  { name: 'Marcus Chen', role: 'Head of Experiences', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', bio: 'Designed over 500 tours across 80 countries. Expert in cultural immersion.' },
  { name: 'Aisha Okonkwo', role: 'Lead Travel Guide – Africa', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80', bio: 'Born and raised in Nairobi. Expert naturalist and wildlife guide with 15 years\' experience.' },
  { name: 'James Whitfield', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: 'Ensures every trip runs seamlessly with his decade of logistics expertise.' },
  { name: 'Sofia Andreou', role: 'Lead Guide – Mediterranean', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', bio: 'Greek archaeologist turned travel guide. Author of "Eating Through Greece".' },
  { name: 'Kenji Tanaka', role: 'Lead Guide – Asia', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', bio: 'Fluent in 4 languages. Former diplomat turned passionate storyteller of Asian cultures.' },
];

const values = [
  { icon: Globe, title: 'Authentic Experiences', desc: 'We design tours that connect you with real local life, not tourist facades.' },
  { icon: Heart, title: 'Community First', desc: 'We partner with local businesses and communities, ensuring tourism benefits those who host us.' },
  { icon: Leaf, title: 'Sustainable Tourism', desc: 'We minimize our environmental footprint and contribute to conservation efforts at every destination.' },
  { icon: Award, title: 'Excellence Always', desc: 'We hold ourselves to the highest standards in service, safety, and experience quality.' },
];

const milestones = [
  { year: '2010', title: 'Founded', desc: 'NomadTravel was founded in San Francisco with a mission to redefine group travel.' },
  { year: '2013', title: '1,000 Travelers', desc: 'We hit 1,000 happy travelers with tours across 15 countries.' },
  { year: '2016', title: 'Best Tour Operator Award', desc: 'Named Best Boutique Tour Operator by Travel + Leisure Magazine.' },
  { year: '2018', title: 'Sustainability Pledge', desc: 'Became certified carbon-neutral and partnered with 10 conservation organizations.' },
  { year: '2021', title: '10,000 Travelers', desc: 'Expanded to 60 destinations and celebrated 10,000 satisfied travelers.' },
  { year: '2025', title: 'Global Leader', desc: '15,000+ travelers, 120+ tours, and recognized as a global leader in sustainable adventure travel.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About NomadTravel"
        subtitle="Our Story"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80"
      />

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80"
              alt="NomadTravel Team"
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm font-medium mt-1">Years of Adventure</div>
            </div>
          </div>
          <div>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title mb-5">Travel Is Our Passion.<br />Your Experience Is Our Purpose.</h2>
            <p className="text-slate-600 mb-5 leading-relaxed">
              NomadTravel was born from a simple belief: travel has the power to transform lives. Founded in 2010 by Elena Vasquez after a life-changing journey through Southeast Asia, we set out to create travel experiences that go deeper than the surface.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Today, we&apos;re a team of 45 passionate travel professionals, local guides, and cultural experts spread across 20 countries. Every single member of our team is a passionate traveler who has personally experienced the destinations we sell.
            </p>
            <ul className="space-y-3 mb-8">
              {['Small groups — max 16 travelers', 'Handpicked local guides & experts', '100% carbon-neutral since 2018', 'Guaranteed departure on all tours'].map((i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={18} className="text-amber-500 shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <Link href="/tours" className="btn-primary">
              Explore Our Tours <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 text-center shadow-md hover:shadow-xl transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon size={26} className="text-amber-500" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '15,000+', label: 'Happy Travelers' },
              { value: '120+', label: 'Tour Packages' },
              { value: '60+', label: 'Countries' },
              { value: '4.9★', label: 'Average Rating' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{s.value}</div>
                <div className="text-slate-300 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <span className="section-label">Our Journey</span>
          <h2 className="section-title">15 Years of Creating Magic</h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-xl shadow-md p-5 border border-slate-100 inline-block text-left md:max-w-xs">
                    <h3 className="font-bold text-slate-800">{m.title}</h3>
                    <p className="text-slate-500 text-sm mt-1">{m.desc}</p>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-amber-500 text-white font-bold rounded-full shadow-lg shrink-0 text-sm">
                  {m.year}
                </div>
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">The People Behind Your Journey</span>
            <h2 className="section-title">Meet Our Team</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-800 text-lg">{member.name}</h3>
                  <p className="text-amber-500 text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-slate-500 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-amber-100 text-lg mb-8">Join over 15,000 travelers who have trusted NomadTravel with their adventure of a lifetime.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/tours" className="bg-white text-amber-600 hover:bg-amber-50 font-semibold px-8 py-3.5 rounded-full transition-colors inline-flex items-center gap-2">
              Browse Tours <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold px-8 py-3.5 rounded-full transition-colors">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
