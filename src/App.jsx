import React, { useState } from 'react';
import { BookOpen, Sword, Users, Home, Plus, Edit2, Save, X } from 'lucide-react';

const NorthgardWiki = () => {
  const [activeTab, setActiveTab] = useState('clans');
  const [selectedClan, setSelectedClan] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [wikiContent, setWikiContent] = useState({});

  // Initial clan data - this would come from your database
  const clans = [
    { 
      id: 'raven', 
      name: 'Raven', 
      icon: '🦅',
      difficulty: 'Medium',
      playstyle: 'Economic/Military Hybrid'
    },
    { 
      id: 'wolf', 
      name: 'Wolf', 
      icon: '🐺',
      difficulty: 'Easy',
      playstyle: 'Military Aggressive'
    },
    { 
      id: 'stag', 
      name: 'Stag', 
      icon: '🦌',
      difficulty: 'Medium',
      playstyle: 'Economic/Fame'
    },
    { 
      id: 'bear', 
      name: 'Bear', 
      icon: '🐻',
      difficulty: 'Easy',
      playstyle: 'Defensive/Economic'
    },
    { 
      id: 'boar', 
      name: 'Boar', 
      icon: '🐗',
      difficulty: 'Hard',
      playstyle: 'Economic Specialist'
    },
    { 
      id: 'goat', 
      name: 'Goat', 
      icon: '🐐',
      difficulty: 'Medium',
      playstyle: 'Economic/Defensive'
    },
    { 
      id: 'snake', 
      name: 'Snake', 
      icon: '🐍',
      difficulty: 'Hard',
      playstyle: 'Military/Cunning'
    },
    { 
      id: 'dragon', 
      name: 'Dragon', 
      icon: '🐉',
      difficulty: 'Medium',
      playstyle: 'Military/Slavery'
    },
    { 
      id: 'kraken', 
      name: 'Kraken', 
      icon: '🦑',
      difficulty: 'Hard',
      playstyle: 'Economic/Fishing'
    },
    { 
      id: 'horse', 
      name: 'Horse', 
      icon: '🐴',
      difficulty: 'Medium',
      playstyle: 'Trade/Economic'
    },
    { 
      id: 'ox', 
      name: 'Ox', 
      icon: '🐂',
      difficulty: 'Easy',
      playstyle: 'Military/Ancestral'
    },
    { 
  id: 'lion', 
  name: 'Lion', 
  icon: '🦁',
  difficulty: 'Medium',
  playstyle: 'Military/Pride'
},
    { 
      id: 'lynx', 
      name: 'Lynx', 
      icon: '🐱',
      difficulty: 'Hard',
      playstyle: 'Economic/Hunting'
    },
    { 
  id: 'turtle', 
  name: 'Turtle', 
  icon: '🐢',
  difficulty: 'Medium',
  playstyle: 'Defensive/Economic'
},
{ 
  id: 'hippogriff', 
  name: 'Hippogriff', 
  icon: '🦅',
  difficulty: 'Hard',
  playstyle: 'Military/Mobility'
}
  ];
  

  const gameInfo = [
    { id: 'basics', title: 'Game Basics', icon: '📚' },
    { id: 'resources', title: 'Resources', icon: '💎' },
    { id: 'buildings', title: 'Buildings', icon: '🏛️' },
    { id: 'victory', title: 'Victory Conditions', icon: '🏆' },
    { id: 'lore', title: 'Lore Tree', icon: '🌳' }
  ];

  const handleEditWiki = (clanId) => {
    setEditMode(true);
    if (!wikiContent[clanId]) {
      setWikiContent({
        ...wikiContent,
        [clanId]: {
          overview: '',
          strengths: '',
          weaknesses: '',
          earlyGame: '',
          midGame: '',
          lateGame: '',
          tips: ''
        }
      });
    }
  };

  const handleSaveWiki = () => {
    setEditMode(false);
    // Here you would save to your database
    console.log('Saving wiki content:', wikiContent);
  };

  const updateWikiSection = (clanId, section, value) => {
    setWikiContent({
      ...wikiContent,
      [clanId]: {
        ...wikiContent[clanId],
        [section]: value
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">⚔️</div>
              <div>
                <h1 className="text-2xl font-bold text-blue-400">Northgard Database</h1>
                <p className="text-sm text-slate-400">Community Strategy Wiki & Guides</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('clans')}
              className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'clans'
                  ? 'bg-slate-900 text-blue-400 border-b-2 border-blue-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Users size={18} />
              Clans Wiki
            </button>
            <button
              onClick={() => setActiveTab('game')}
              className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'game'
                  ? 'bg-slate-900 text-blue-400 border-b-2 border-blue-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen size={18} />
              Game Wiki
            </button>
            <button
              onClick={() => setActiveTab('guides')}
              className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'guides'
                  ? 'bg-slate-900 text-blue-400 border-b-2 border-blue-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sword size={18} />
              Guides (Coming Soon)
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'clans' && (
          <div className="grid grid-cols-12 gap-6">
            {/* Clan List Sidebar */}
            <div className="col-span-3 bg-slate-800 rounded-lg p-4 h-fit sticky top-6">
              <h2 className="text-lg font-bold mb-4 text-blue-400">Select a Clan</h2>
              <div className="space-y-2">
                {clans.map(clan => (
                  <button
                    key={clan.id}
                    onClick={() => {
                      setSelectedClan(clan);
                      setEditMode(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                      selectedClan?.id === clan.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                    }`}
                  >
                    <span className="text-2xl">{clan.icon}</span>
                    <div className="flex-1">
                      <div className="font-medium">{clan.name}</div>
                      <div className="text-xs opacity-75">{clan.difficulty}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Clan Wiki Content */}
            <div className="col-span-9">
              {selectedClan ? (
                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-6xl">{selectedClan.icon}</span>
                      <div>
                        <h2 className="text-3xl font-bold text-blue-400">{selectedClan.name}</h2>
                        <div className="flex gap-4 mt-2 text-sm">
                          <span className="text-slate-400">Difficulty: <span className="text-white">{selectedClan.difficulty}</span></span>
                          <span className="text-slate-400">Playstyle: <span className="text-white">{selectedClan.playstyle}</span></span>
                        </div>
                      </div>
                    </div>
                    {!editMode ? (
                      <button
                        onClick={() => handleEditWiki(selectedClan.id)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors"
                      >
                        <Edit2 size={16} />
                        Edit Wiki
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={handleSaveWiki}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg flex items-center gap-2 transition-colors"
                        >
                          <Save size={16} />
                          Save
                        </button>
                        <button
                          onClick={() => setEditMode(false)}
                          className="px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded-lg flex items-center gap-2 transition-colors"
                        >
                          <X size={16} />
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {/* Overview Section */}
                    <WikiSection
                      title="Overview"
                      content={wikiContent[selectedClan.id]?.overview}
                      editMode={editMode}
                      onEdit={(val) => updateWikiSection(selectedClan.id, 'overview', val)}
                    />

                    {/* Strengths Section */}
                    <WikiSection
                      title="Strengths"
                      content={wikiContent[selectedClan.id]?.strengths}
                      editMode={editMode}
                      onEdit={(val) => updateWikiSection(selectedClan.id, 'strengths', val)}
                    />

                    {/* Weaknesses Section */}
                    <WikiSection
                      title="Weaknesses"
                      content={wikiContent[selectedClan.id]?.weaknesses}
                      editMode={editMode}
                      onEdit={(val) => updateWikiSection(selectedClan.id, 'weaknesses', val)}
                    />

                    {/* Strategy Sections */}
                    <div className="grid grid-cols-3 gap-4">
                      <WikiSection
                        title="Early Game (Year 800-801)"
                        content={wikiContent[selectedClan.id]?.earlyGame}
                        editMode={editMode}
                        onEdit={(val) => updateWikiSection(selectedClan.id, 'earlyGame', val)}
                        compact
                      />
                      <WikiSection
                        title="Mid Game (Year 802-803)"
                        content={wikiContent[selectedClan.id]?.midGame}
                        editMode={editMode}
                        onEdit={(val) => updateWikiSection(selectedClan.id, 'midGame', val)}
                        compact
                      />
                      <WikiSection
                        title="Late Game (Year 803)"
                        content={wikiContent[selectedClan.id]?.lateGame}
                        editMode={editMode}
                        onEdit={(val) => updateWikiSection(selectedClan.id, 'lateGame', val)}
                        compact
                      />
                    </div>

                    {/* Tips Section */}
                    <WikiSection
                      title="Tips & Tricks"
                      content={wikiContent[selectedClan.id]?.tips}
                      editMode={editMode}
                      onEdit={(val) => updateWikiSection(selectedClan.id, 'tips', val)}
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-slate-800 rounded-lg p-12 text-center">
                  <Users size={64} className="mx-auto text-slate-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-400 mb-2">Select a Clan</h3>
                  <p className="text-slate-500">Choose a clan from the sidebar to view or edit its wiki page</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'game' && (
          <div className="grid grid-cols-4 gap-4">
            {gameInfo.map(section => (
              <button
                key={section.id}
                className="bg-slate-800 hover:bg-slate-700 rounded-lg p-6 text-center transition-colors"
              >
                <div className="text-4xl mb-3">{section.icon}</div>
                <h3 className="font-bold text-lg">{section.title}</h3>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'guides' && (
          <div className="bg-slate-800 rounded-lg p-12 text-center">
            <Sword size={64} className="mx-auto text-slate-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-400 mb-2">Guides Coming Soon</h3>
            <p className="text-slate-500">Phase 2: Build orders and strategy guides will be available here</p>
          </div>
        )}
      </main>
    </div>
  );
};

const WikiSection = ({ title, content, editMode, onEdit, compact }) => {
  return (
    <div className={`bg-slate-700 rounded-lg p-4 ${compact ? '' : ''}`}>
      <h3 className="font-bold text-lg mb-3 text-blue-300">{title}</h3>
      {editMode ? (
        <textarea
          value={content || ''}
          onChange={(e) => onEdit(e.target.value)}
          placeholder={`Add ${title.toLowerCase()} information...`}
          className="w-full bg-slate-800 text-slate-100 rounded p-3 min-h-[120px] border border-slate-600 focus:border-blue-500 focus:outline-none"
        />
      ) : (
        <div className="text-slate-300">
          {content ? (
            <p className="whitespace-pre-wrap">{content}</p>
          ) : (
            <p className="text-slate-500 italic">No content yet. Click "Edit Wiki" to add information.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NorthgardWiki;