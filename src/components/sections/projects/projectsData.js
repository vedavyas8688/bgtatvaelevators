export const projectFilters = ['All', 'Residential', 'Panoramic', 'Commercial', 'Modernisation']

const projectList = [
  ['lakeview-private-residence', 'Lakeview Private Residence', 'North Bengaluru', '2026', 'Panoramic', '/images/glass-panoramic-elevator.webp', 'A transparent three-level elevator designed as the light-filled centrepiece of a contemporary home.', ['3 stops', 'Glass cabin', 'MRL system']],
  ['the-courtyard-house', 'The Courtyard House', 'Whitefield', '2026', 'Residential', '/images/social-elevator-1.webp', 'A warm residential elevator composed around stone, timber and quiet everyday movement.', ['4 stops', '6 person', 'Bespoke cabin']],
  ['aurelia-business-centre', 'Aurelia Business Centre', 'CBD Bengaluru', '2026', 'Commercial', '/images/elevator-lobby-luxe.webp', 'A refined twin-elevator arrival experience planned for clarity, capacity and high daily traffic.', ['12 stops', 'Twin bank', 'Destination controls']],
  ['walnut-house-elevator', 'Walnut House Elevator', 'Indiranagar', '2025', 'Residential', '/images/walnut-elevator-cabin.webp', 'A compact home elevator with fluted walnut, warm perimeter light and restrained bronze details.', ['3 stops', 'Timber interior', 'Compact plan']],
  ['sky-court-villa', 'Sky Court Villa', 'Sarjapur', '2025', 'Panoramic', '/images/social-elevator-3.webp', 'A cylindrical glass lift that preserves long interior views across a double-height living space.', ['4 stops', 'Curved glass', 'Scenic travel']],
  ['meridian-grand-lobby', 'Meridian Grand Lobby', 'Hebbal', '2025', 'Commercial', '/images/service-elevator-design.webp', 'An elegant lobby and cabin language created for a premium mixed-use development.', ['16 stops', '13 person', 'High traffic']],
  ['heritage-tower-renewal', 'Heritage Tower Renewal', 'Jayanagar', '2025', 'Modernisation', '/images/service-modernisation.webp', 'A phased upgrade improving reliability, controls, door performance and cabin character.', ['Controls', 'Doors', 'Cabin renewal']],
  ['ivory-penthouse', 'Ivory Penthouse', 'Sadashivanagar', '2024', 'Residential', '/images/cabin-ivory.webp', 'A calm, tonal cabin continuing the soft material palette of a private penthouse.', ['5 stops', 'Ivory panels', 'Integrated light']],
  ['horizon-glass-house', 'Horizon Glass House', 'Devanahalli', '2024', 'Panoramic', '/images/social-elevator-5.webp', 'A panoramic home elevator connecting living levels without interrupting daylight or views.', ['4 stops', 'Full glass', 'Villa specification']],
]

const supportingImages = {
  Residential: ['/images/cabin-ivory.webp', '/images/walnut-elevator-cabin.webp'],
  Panoramic: ['/images/social-elevator-3.webp', '/images/social-elevator-5.webp'],
  Commercial: ['/images/service-elevator-design.webp', '/images/elevator-lobby-luxe.webp'],
  Modernisation: ['/images/modernisation-before-premium.webp', '/images/modernisation-after-premium.webp'],
}

export const projects = projectList.map(([slug, title, location, year, type, image, brief, details]) => ({
  slug,
  title,
  location,
  year,
  type,
  image,
  brief,
  details,
  gallery: supportingImages[type],
  challenge: type === 'Modernisation'
    ? 'Upgrade an active building without allowing the work to disrupt everyday access, while bringing an ageing system up to a more dependable standard.'
    : 'Resolve circulation, structure and cabin character as one architectural decision—not as a mechanical addition made late in the project.',
  response: type === 'Panoramic'
    ? 'We coordinated the glass enclosure, sightlines and drive system early, keeping the structure visually light while protecting comfort and service access.'
    : type === 'Commercial'
      ? 'Capacity, arrival flow and material durability were developed together, creating an intuitive experience that remains composed through daily use.'
      : type === 'Modernisation'
        ? 'The renewal was sequenced in clear phases, combining new controls and door equipment with a quieter, more resolved cabin environment.'
        : 'Proportions, finishes, lighting and controls were developed around the interior palette so the elevator feels naturally embedded in the home.',
  outcome: 'A calm, dependable journey with every visible detail aligned to the surrounding architecture and every technical decision planned for long-term care.',
}))

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
