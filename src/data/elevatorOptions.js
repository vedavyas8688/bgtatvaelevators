export const finishes = [
  { id: 'gold', name: 'Champagne Gold', swatch: 'linear-gradient(135deg,#2D4F6E,#F7E1A2 48%,#2D4F6E)', image: '/images/elevator-cabin-base.png', door: 'linear-gradient(105deg,#2D4F6E,#D5B17A 42%,#2D4F6E 72%,#D5B17A)', metal: '#D5B17A' },
  { id: 'steel', name: 'Brushed Steel', swatch: 'linear-gradient(110deg,#D5B17A,#F5F3EC 48%,#2D4F6E)', image: '/images/cabin-steel.png', door: 'linear-gradient(105deg,#2D4F6E 0%,#D5B17A 28%,#F5F3EC 48%,#D5B17A 72%,#F7E1A2 100%)', metal: '#D5B17A' },
  { id: 'black', name: 'Matte Black', swatch: 'linear-gradient(135deg,#2D4F6E,#2D4F6E)', image: '/images/cabin-black.png', door: 'linear-gradient(110deg,#2D4F6E,#2D4F6E 45%,#2D4F6E)', metal: '#2D4F6E' },
  { id: 'walnut', name: 'Walnut', swatch: 'repeating-linear-gradient(80deg,#2D4F6E 0,#2D4F6E 5px,#2D4F6E 9px)', image: '/images/cabin-walnut.png', door: 'linear-gradient(100deg,#2D4F6E,#2D4F6E 28%,#2D4F6E 53%,#2D4F6E 78%,#2D4F6E)', metal: '#2D4F6E' },
  { id: 'ivory', name: 'Ivory Stone', swatch: 'linear-gradient(125deg,#F7E1A2,#F5F3EC 55%,#D5B17A)', image: '/images/cabin-ivory.png', door: 'linear-gradient(120deg,#D5B17A,#F5F3EC 45%,#D5B17A 72%,#F5F3EC)', metal: '#D5B17A' },
]

export const lightTemperatures = [
  { id: 'warm', name: 'Warm', color: '#F7E1A2', tint: 'rgba(213,177,122,.24)' },
  { id: 'neutral', name: 'Neutral', color: '#F5F3EC', tint: 'rgba(245,243,236,.17)' },
  { id: 'cool', name: 'Cool', color: '#F5F3EC', tint: 'rgba(245,243,236,.18)' },
]

export const lightStyles = [
  { id: 'spots', name: 'Ceiling Spots' },
  { id: 'perimeter', name: 'Perimeter Glow' },
  { id: 'vertical', name: 'Vertical Light Strips' },
]

export const doors = [
  { id: 'center', name: 'Center Opening' },
  { id: 'side', name: 'Side Opening' },
  { id: 'glass', name: 'Glass' },
]

export const panels = [
  { id: 'classic', name: 'Classic Buttons' },
  { id: 'touch', name: 'Touch Panel' },
  { id: 'minimal', name: 'Minimal Backlit' },
]

export const presets = [
  { name: 'Golden Elegance', finish: 'gold', temperature: 'warm', lightStyle: 'spots', brightness: 82, door: 'center', panel: 'classic' },
  { name: 'Modern Minimal', finish: 'steel', temperature: 'neutral', lightStyle: 'vertical', brightness: 72, door: 'side', panel: 'touch' },
  { name: 'Dark Signature', finish: 'black', temperature: 'warm', lightStyle: 'perimeter', brightness: 48, door: 'glass', panel: 'minimal' },
]

export const defaultDesign = { finish: 'gold', temperature: 'warm', lightStyle: 'perimeter', brightness: 72, door: 'center', panel: 'classic', doorsOpen: true }
