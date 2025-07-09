
import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, MapPin, Github, Linkedin, Globe, Edit3, Save, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate full-stack developer with 2+ years of experience building web applications. Love learning new technologies and contributing to open source projects.',
    github: 'johndoe',
    linkedin: 'johndoe',
    website: 'johndoe.dev',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB'],
    experience: 'Mid-level',
    goals: 'Looking to transition into a senior developer role and contribute to meaningful projects.'
  });

  const [editForm, setEditForm] = useState(profile);

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  const handleSkillAdd = (skill: string) => {
    if (skill && !editForm.skills.includes(skill)) {
      setEditForm({
        ...editForm,
        skills: [...editForm.skills, skill]
      });
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    setEditForm({
      ...editForm,
      skills: editForm.skills.filter(skill => skill !== skillToRemove)
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
              <p className="text-gray-600">Manage your personal information and preferences</p>
            </div>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Edit3 className="h-4 w-4 mr-2" />
                Edit Profile
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                    className="text-xl font-bold text-center w-full border border-gray-300 rounded px-2 py-1 mb-2"
                  />
                ) : (
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{profile.name}</h2>
                )}
                <p className="text-gray-600">{profile.experience} Developer</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-3" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                      className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                    />
                  ) : (
                    <span className="text-sm">{profile.email}</span>
                  )}
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-3" />
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editForm.phone}
                      onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                      className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                    />
                  ) : (
                    <span className="text-sm">{profile.phone}</span>
                  )}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-3" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.location}
                      onChange={(e) => setEditForm({...editForm, location: e.target.value})}
                      className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                    />
                  ) : (
                    <span className="text-sm">{profile.location}</span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Social Links</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Github className="h-4 w-4 mr-3 text-gray-600" />
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.github}
                        onChange={(e) => setEditForm({...editForm, github: e.target.value})}
                        className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="GitHub username"
                      />
                    ) : (
                      <a href={`https://github.com/${profile.github}`} className="text-blue-600 hover:underline text-sm">
                        github.com/{profile.github}
                      </a>
                    )}
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-4 w-4 mr-3 text-gray-600" />
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.linkedin}
                        onChange={(e) => setEditForm({...editForm, linkedin: e.target.value})}
                        className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="LinkedIn username"
                      />
                    ) : (
                      <a href={`https://linkedin.com/in/${profile.linkedin}`} className="text-blue-600 hover:underline text-sm">
                        linkedin.com/in/{profile.linkedin}
                      </a>
                    )}
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-3 text-gray-600" />
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.website}
                        onChange={(e) => setEditForm({...editForm, website: e.target.value})}
                        className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="Website URL"
                      />
                    ) : (
                      <a href={`https://${profile.website}`} className="text-blue-600 hover:underline text-sm">
                        {profile.website}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">About Me</h3>
              {isEditing ? (
                <textarea
                  value={editForm.bio}
                  onChange={(e) => setEditForm({...editForm, bio: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 h-24 resize-none"
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
              )}
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {(isEditing ? editForm.skills : profile.skills).map((skill, index) => (
                  <div key={index} className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {skill}
                    {isEditing && (
                      <button
                        onClick={() => handleSkillRemove(skill)}
                        className="ml-2 text-blue-500 hover:text-red-500"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {isEditing && (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Add a skill..."
                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const target = e.target as HTMLInputElement;
                        handleSkillAdd(target.value);
                        target.value = '';
                      }
                    }}
                  />
                </div>
              )}
            </div>

            {/* Goals Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Career Goals</h3>
              {isEditing ? (
                <textarea
                  value={editForm.goals}
                  onChange={(e) => setEditForm({...editForm, goals: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 h-20 resize-none"
                  placeholder="What are your career goals?"
                />
              ) : (
                <p className="text-gray-700 leading-relaxed">{profile.goals}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
