import { Users, Mail, Phone } from 'lucide-react';
import Seo from '../components/Seo';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  image?: string;
  bio?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Vishnu Sharan P',
    role: 'Founder & Owner',
    email: 'vishnu@abiman.com',
    phone: '+91 XXXXX XXXXX',
    bio: 'Founder of Abiman & Company with vision to provide premium quality briquettes globally.'
  },
  {
    id: '2',
    name: 'Nikil Pranav V',
    role: 'Executive Director',
    email: 'nikil@abiman.com',
    phone: '+91 XXXXX XXXXX',
    bio: 'Manages operations and ensures quality standards across all production processes.'
  },
];

export default function OurTeamPage() {
  const keywords = [
    'coconut shell charcoal',
    'coconut shell charcoal manufacturers',
    'coconut shell charcoal briquettes',
    'shisha briquettes',
    'hookah charcoal',
  ];

  const seo = {
    title: 'Our Team — Abiman & Company',
    description: 'Meet the team behind our premium coconut shell charcoal briquettes manufacturing and export operations.',
    keywords,
    url: typeof window !== 'undefined' ? `${window.location.origin}/our-team` : undefined,
  };
  return (
    <div className="bg-zinc-950 pt-20">
      <Seo {...seo} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-amber-900/30 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 text-sm font-medium">Our Team</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">Meet Our Dedicated Team</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our experienced team is committed to delivering premium quality briquettes and exceptional service to our global partners.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-amber-600 transition-colors">
                {/* Team Member Image Placeholder */}
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                <p className="text-zinc-400 text-sm mb-4">{member.bio}</p>
                
                {/* Contact Info */}
                <div className="space-y-2 border-t border-zinc-800 pt-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-amber-600" />
                    <a href={`mailto:${member.email}`} className="text-zinc-300 hover:text-amber-500 text-sm">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-amber-600" />
                    <a href={`tel:${member.phone}`} className="text-zinc-300 hover:text-amber-500 text-sm">
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Photos Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Team at Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-amber-600 transition-colors">
                  <div className="w-full h-48 bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center">
                    <span className="text-white text-sm">Team Photo {index}</span>
                  </div>
                  <p className="text-zinc-300 text-sm p-3 text-center">Replace with team image</p>
                </div>
              ))}
            </div>
            <p className="text-zinc-400 text-center text-sm mt-4">
              📁 Add images to: <span className="text-amber-600 font-mono">public/images/team/</span>
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Team Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((index) => (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                  <div className="w-full h-64 bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center">
                    <span className="text-white text-lg">Team Video {index}</span>
                  </div>
                  <p className="text-zinc-300 text-sm p-3 text-center">Replace with video or embed link</p>
                </div>
              ))}
            </div>
            <p className="text-zinc-400 text-center text-sm mt-4">
              📁 Add videos to: <span className="text-amber-600 font-mono">public/videos/</span>
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-zinc-900 border border-amber-900/30 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-bold text-white mb-4">📸 How to Add Team Photos & Videos</h3>
            <div className="space-y-3 text-zinc-300">
              <p><span className="text-amber-600 font-semibold">Team Photos:</span> Add image files to <span className="bg-zinc-950 px-2 py-1 rounded text-amber-500 font-mono">public/images/team/</span></p>
              <p><span className="text-amber-600 font-semibold">Gallery Photos:</span> Add image files to <span className="bg-zinc-950 px-2 py-1 rounded text-amber-500 font-mono">public/images/gallery/</span></p>
              <p><span className="text-amber-600 font-semibold">Videos:</span> Add video files to <span className="bg-zinc-950 px-2 py-1 rounded text-amber-500 font-mono">public/videos/</span></p>
              <p className="text-sm text-zinc-400 mt-4">Supported formats: JPG, PNG, GIF for images | MP4, WebM for videos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
