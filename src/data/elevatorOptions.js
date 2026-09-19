export const finishes = [
  { id: 'gold', name: 'Champagne Gold', swatch: 'linear-gradient(135deg,#0F2B45,#EB9B34 48%,#0F2B45)', image: '/images/elevator-cabin-base.png', door: 'linear-gradient(105deg,#0F2B45,#EB9B34 42%,#0F2B45 72%,#EB9B34)', metal: '#EB9B34' },
  { id: 'steel', name: 'Brushed Steel', swatch: 'linear-gradient(110deg,#EB9B34,#F5F3EC 48%,#0F2B45)', image: '/images/cabin-steel.png', door: 'linear-gradient(105deg,#0F2B45 0%,#EB9B34 28%,#F5F3EC 48%,#EB9B34 72%,#EB9B34 100%)', metal: '#EB9B34' },
  { id: 'black', name: 'Matte Black', swatch: 'linear-gradient(135deg,#0F2B45,#0F2B45)', image: '/images/cabin-black.png', door: 'linear-gradient(110deg,#0F2B45,#0F2B45 45%,#0F2B45)', metal: '#0F2B45' },
  { id: 'walnut', name: 'Walnut', swatch: 'repeating-linear-gradient(80deg,#0F2B45 0,#0F2B45 5px,#0F2B45 9px)', image: '/images/cabin-walnut.png', door: 'linear-gradient(100deg,#0F2B45,#0F2B45 28%,#0F2B45 53%,#0F2B45 78%,#0F2B45)', metal: '#0F2B45' },
  { id: 'ivory', name: 'Ivory Stone', swatch: 'linear-gradient(125deg,#EB9B34,#F5F3EC 55%,#EB9B34)', image: '/images/cabin-ivory.png', door: 'linear-gradient(120deg,#EB9B34,#F5F3EC 45%,#EB9B34 72%,#F5F3EC)', metal: '#EB9B34' },
]

export const lightTemperatures = [
  { id: 'warm', name: 'Warm', color: '#EB9B34', tint: 'rgba(235,155,52,.24)' },
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
