export const finishes = [
  { id: 'gold', name: 'Champagne Gold', swatch: 'linear-gradient(135deg,#8f6538,#ead09b 48%,#8b6339)', image: '/images/elevator-cabin-base.png', door: 'linear-gradient(105deg,#6e4b2c,#d0aa70 42%,#745032 72%,#c79b5e)', metal: '#b68b50' },
  { id: 'steel', name: 'Brushed Steel', swatch: 'linear-gradient(110deg,#7d8587,#e8e9e5 48%,#767d7e)', image: '/images/cabin-steel.png', door: 'linear-gradient(105deg,#666d6d 0%,#aeb4b3 28%,#d7d9d6 48%,#858b8a 72%,#bcc0be 100%)', metal: '#aeb4b3' },
  { id: 'black', name: 'Matte Black', swatch: 'linear-gradient(135deg,#101313,#484b49)', image: '/images/cabin-black.png', door: 'linear-gradient(110deg,#0d0f0f,#363a39 45%,#141717)', metal: '#444948' },
  { id: 'walnut', name: 'Walnut', swatch: 'repeating-linear-gradient(80deg,#432718 0,#795038 5px,#51301f 9px)', image: '/images/cabin-walnut.png', door: 'linear-gradient(100deg,#382217,#6f472f 28%,#4a2c1c 53%,#7a5035 78%,#3a2317)', metal: '#9a7046' },
  { id: 'ivory', name: 'Ivory Stone', swatch: 'linear-gradient(125deg,#d8d1c1,#f1ecdf 55%,#bbb19e)', image: '/images/cabin-ivory.png', door: 'linear-gradient(120deg,#bcb4a4,#eee8dc 45%,#c7beae 72%,#e5ded0)', metal: '#c1a370' },
]

export const lightTemperatures = [
  { id: 'warm', name: 'Warm', color: '#ffd28f', tint: 'rgba(255,185,92,.24)' },
  { id: 'neutral', name: 'Neutral', color: '#fff3d8', tint: 'rgba(255,241,216,.17)' },
  { id: 'cool', name: 'Cool', color: '#d9efff', tint: 'rgba(187,224,255,.18)' },
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
