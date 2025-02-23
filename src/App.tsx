import React, { useState } from 'react';
import { Search, Users, Briefcase, MessageSquare, Star, Shield, Building2, Hammer, Wrench, Paintbrush, Truck, TreePine, Power, HardHat } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
  userType: 'user' | 'admin' | 'employer' | 'worker';
}

function AuthModal({ isOpen, onClose, type, userType }: AuthModalProps) {
  if (!isOpen) return null;

  const userTypeDisplay = {
    user: 'User',
    admin: 'Admin',
    employer: 'Employer',
    worker: 'Worker'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">
          {type === 'login' ? 'Log In' : 'Sign Up'} as {userTypeDisplay[userType]}
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          {type === 'signup' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>
              {userType === 'worker' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" multiple>
                    <option value="construction">Construction</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical</option>
                    <option value="carpentry">Carpentry</option>
                    <option value="painting">Painting</option>
                    <option value="landscaping">Landscaping</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple skills</p>
                </div>
              )}
              {userType === 'employer' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
              )}
            </>
          )}
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            {type === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function ServiceCard({ icon: Icon, title }: { icon: React.ElementType, title: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
      <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-primary-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-primary-50 p-3 rounded-full">
          <Icon className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 ml-4">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function App() {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'signup'; userType: 'user' | 'admin' | 'employer' | 'worker' }>({
    isOpen: false,
    type: 'login',
    userType: 'user'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <HardHat className="w-8 h-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LabourLink</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setAuthModal({ isOpen: true, type: 'login', userType: 'user' })}
                className="text-gray-600 hover:text-gray-900"
              >
                Log In
              </button>
              <button
                onClick={() => setAuthModal({ isOpen: true, type: 'signup', userType: 'user' })}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Sign Up
              </button>
              <button
                onClick={() => setAuthModal({ isOpen: true, type: 'login', userType: 'admin' })}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Admin
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-32" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Gateway to Skilled Labor Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Connect with verified professionals for all your labor needs. From construction to home maintenance, 
              find the right skilled workers for any job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setAuthModal({ isOpen: true, type: 'signup', userType: 'employer' })}
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors transform hover:-translate-y-1 duration-300 shadow-lg"
              >
                Hire Workers
              </button>
              <button 
                onClick={() => setAuthModal({ isOpen: true, type: 'signup', userType: 'worker' })}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:-translate-y-1 duration-300 shadow-lg"
              >
                Find Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We offer a wide range of professional labor services to meet all your needs
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <ServiceCard icon={Building2} title="Construction" />
            <ServiceCard icon={Wrench} title="Plumbing" />
            <ServiceCard icon={Power} title="Electrical" />
            <ServiceCard icon={TreePine} title="Landscaping" />
            <ServiceCard icon={Paintbrush} title="Painting" />
            <ServiceCard icon={Hammer} title="Carpentry" />
            <ServiceCard icon={Truck} title="Moving" />
            <ServiceCard icon={Users} title="General Labor" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Why Choose LabourLink?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We provide the most reliable and efficient way to connect workers with opportunities
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Search}
              title="Smart Matching"
              description="Our advanced algorithm matches you with the perfect workers based on skills, location, and availability."
            />
            <FeatureCard
              icon={Shield}
              title="Secure Platform"
              description="End-to-end encrypted messaging and secure payment protection for peace of mind."
            />
            <FeatureCard
              icon={Star}
              title="Verified Reviews"
              description="Authentic ratings and reviews from real clients to help you make informed decisions."
            />
            <FeatureCard
              icon={MessageSquare}
              title="Easy Communication"
              description="Built-in chat system for seamless coordination between clients and workers."
            />
            <FeatureCard
              icon={Users}
              title="Background Checked"
              description="All workers undergo thorough verification for your safety and security."
            />
            <FeatureCard
              icon={Building2}
              title="Project Management"
              description="Powerful tools to manage projects of any size, from small repairs to large construction."
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Get started with LabourLink in three simple steps
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Account</h3>
              <p className="text-gray-600">Sign up as a worker or employer in minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Match</h3>
              <p className="text-gray-600">Browse workers or jobs in your area</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Working</h3>
              <p className="text-gray-600">Connect and get the job done</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <HardHat className="w-6 h-6 text-primary-400" />
                <span className="ml-2 text-xl font-bold">LabourLink</span>
              </div>
              <p className="text-gray-400">Bridging the gap between skilled workers and opportunities.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Construction</li>
                <li>Plumbing</li>
                <li>Electrical</li>
                <li>Carpentry</li>
                <li>Painting</li>
                <li>Landscaping</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>How It Works</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@labourlink.com</li>
                <li>+91 7878908193</li>
                <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
                <li>24/7 Emergency Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LabourLink (Team Akshay). All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        type={authModal.type}
        userType={authModal.userType}
      />
    </div>
  );
}

export default App;