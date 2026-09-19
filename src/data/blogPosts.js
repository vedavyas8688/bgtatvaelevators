export const featuredPost = {
  id: 'elevators-modern-architecture',
  title: 'Elevators as an Essential Part of Modern Architecture',
  excerpt: 'Great vertical mobility does more than connect floors. It shapes arrival, movement and the character of an entire building.',
  image: '/images/elevator-lobby-luxe.png',
  category: 'Architecture',
  date: 'September 19, 2026',
  author: 'BG Tatva Editorial',
  initials: 'BG',
  href: '/blog/elevators-modern-architecture',
}

const articleRecords = [
  ['Sustainable Materials for Smarter Elevators', 'How considered metals, timber finishes and efficient systems create cabins that are refined, durable and responsible.', '/images/service-cabin-interiors.png', 'Materials', 'September 12, 2026', 'BG Tatva Editorial', 'BG'],
  ['The Power of Light in Elevator Design', 'A practical look at how layered lighting changes comfort, proportion and the passenger experience.', '/images/walnut-elevator-cabin.png', 'Design', 'August 28, 2026', 'Design Studio', 'DS'],
  ['Why Panoramic Elevators Transform a Space', 'Glass elevators bring movement into the architecture while keeping interiors open, bright and connected.', '/images/glass-panoramic-elevator.png', 'Architecture', 'August 10, 2026', 'BG Tatva Editorial', 'BG'],
  ['A Guide to Modernising an Existing Lift', 'The essential upgrades that improve reliability, efficiency, safety and the visual character of an older elevator.', '/images/service-modernisation.png', 'Modernisation', 'July 22, 2026', 'Service Studio', 'SS'],
  ['Designing a Residential Elevator That Feels at Home', 'Material, scale and detail choices that allow vertical mobility to sit naturally within a private residence.', '/images/elevator-lobby-luxe.png', 'Residential', 'July 04, 2026', 'Design Studio', 'DS'],
  ['Inside the Craft of a Bespoke Cabin', 'From the first material board to final installation, discover the details behind a tailored elevator interior.', '/images/cabin-ivory.png', 'Craftsmanship', 'June 18, 2026', 'BG Tatva Editorial', 'BG'],
  ['Choosing the Right Elevator for a Private Residence', 'A clear guide to capacity, travel, space planning and the details that shape everyday comfort.', '/images/social-elevator-1.png', 'Residential', 'June 02, 2026', 'BG Tatva Editorial', 'BG'],
  ['Why Early Elevator Planning Creates Better Buildings', 'How early coordination protects space, simplifies structure and creates more natural circulation.', '/images/service-elevator-design.png', 'Planning', 'May 20, 2026', 'Design Studio', 'DS'],
  ['Warm Metals and Their Place in Modern Cabins', 'Bronze, brass and champagne finishes bring depth and quiet luxury to contemporary elevators.', '/images/social-elevator-4.png', 'Materials', 'May 04, 2026', 'Design Studio', 'DS'],
  ['Creating a Calm and Quiet Elevator Journey', 'Thoughtful engineering, acoustic planning and material choices improve comfort on every floor.', '/images/cabin-ivory.png', 'Experience', 'April 19, 2026', 'BG Tatva Editorial', 'BG'],
  ['The Architectural Value of a Glass Elevator', 'Transparency can preserve daylight, strengthen visual connections and make movement feel lighter.', '/images/social-elevator-3.png', 'Architecture', 'April 03, 2026', 'BG Tatva Editorial', 'BG'],
  ['Elevator Controls Designed for Everyday Clarity', 'Good interfaces combine intuitive placement, legibility and carefully considered illumination.', '/images/elevator-cabin-base.png', 'Technology', 'March 18, 2026', 'Engineering Studio', 'ES'],
  ['How Cabin Proportions Influence Comfort', 'Ceiling height, panel rhythm, mirrors and light can make compact interiors feel composed and open.', '/images/cabin-steel.png', 'Design', 'March 02, 2026', 'Design Studio', 'DS'],
  ['A Practical Introduction to Elevator Maintenance', 'Understand preventive care, service intervals and the small checks that protect long-term reliability.', '/images/service-modernisation.png', 'Maintenance', 'February 16, 2026', 'Service Studio', 'SS'],
  ['Designing Elevator Lobbies as Places of Arrival', 'Lighting, thresholds, signage and material continuity can turn a functional lobby into a welcome.', '/images/elevator-lobby-luxe.png', 'Interiors', 'February 01, 2026', 'Design Studio', 'DS'],
  ['What to Know Before Adding an Elevator to an Existing Home', 'The essential questions around position, structure, access and construction planning.', '/images/social-elevator-2.png', 'Renovation', 'January 18, 2026', 'BG Tatva Editorial', 'BG'],
  ['Layered Lighting for Richer Cabin Interiors', 'Combine indirect, vertical and functional light to reveal materials without creating glare.', '/images/walnut-elevator-cabin.png', 'Lighting', 'January 04, 2026', 'Design Studio', 'DS'],
  ['Machine-Room-Less Elevators Explained', 'A practical overview of space efficiency, planning considerations and suitable applications.', '/images/glass-panoramic-elevator.png', 'Engineering', 'December 18, 2025', 'Engineering Studio', 'ES'],
  ['Five Details That Make an Elevator Feel Bespoke', 'From control panels to reveals, discover the small decisions that create a tailored result.', '/images/service-cabin-interiors.png', 'Craftsmanship', 'December 02, 2025', 'BG Tatva Editorial', 'BG'],
  ['Planning Accessible Vertical Movement at Home', 'Cabin size, clear openings and intuitive controls help create dignified, independent movement.', '/images/cabin-black.png', 'Accessibility', 'November 16, 2025', 'BG Tatva Editorial', 'BG'],
  ['A Material Guide to Durable Elevator Flooring', 'Compare stone, tile and resilient finishes for weight, maintenance, grip and visual continuity.', '/images/cabin-walnut.png', 'Materials', 'November 01, 2025', 'Design Studio', 'DS'],
]

export const blogPosts = articleRecords
  .map(([title, excerpt, image, category, date, author, initials], index) => ({
    id: `article-${index + 1}`,
    title,
    excerpt,
    image,
    category,
    date,
    author,
    initials,
    href: `/blog#article-${index + 1}`,
  }))
  .sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime())

// Keep every surface (the journal and the homepage insight panel) on the same
// source of truth. Sorting here means a newly-added, correctly dated post will
// automatically move into the homepage's latest-three selection.
export const latestArticles = [featuredPost, ...blogPosts].sort(
  (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime(),
)
