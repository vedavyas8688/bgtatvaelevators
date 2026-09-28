export const featuredPost = {
  id: 'elevators-modern-architecture',
  title: 'Elevators as an Essential Part of Modern Architecture',
  excerpt: 'Great vertical mobility does more than connect floors. It shapes arrival, movement and the character of an entire building.',
  image: '/images/unique/elevator-lobby-luxe-689c0a81.webp',
  category: 'Architecture',
  date: 'September 19, 2026',
  author: 'BG Tatva Elevators',
  initials: 'BG',
  href: '/blog/elevators-modern-architecture',
}

const articleRecords = [
  ['Sustainable Materials for Smarter Elevators', 'How considered metals, timber finishes and efficient systems create cabins that are refined, durable and responsible.', '/images/unique/service-cabin-interiors-b3616bcc.webp', 'Materials', 'September 12, 2026', 'BG Tatva Elevators', 'BG'],
  ['The Power of Light in Elevator Design', 'A practical look at how layered lighting changes comfort, proportion and the passenger experience.', '/images/unique/walnut-elevator-cabin-090a2828.webp', 'Design', 'August 28, 2026', 'BG Tatva Elevators', 'BG'],
  ['Why Panoramic Elevators Transform a Space', 'Glass elevators bring movement into the architecture while keeping interiors open, bright and connected.', '/images/unique/glass-panoramic-elevator-202ecfd4.webp', 'Architecture', 'August 10, 2026', 'BG Tatva Elevators', 'BG'],
  ['A Guide to Modernising an Existing Lift', 'The essential upgrades that improve reliability, efficiency, safety and the visual character of an older elevator.', '/images/unique/service-modernisation-f4236092.webp', 'Modernisation', 'July 22, 2026', 'BG Tatva Elevators', 'BG'],
  ['Designing a Residential Elevator That Feels at Home', 'Material, scale and detail choices that allow vertical mobility to sit naturally within a private residence.', '/images/unique/elevator-lobby-luxe-549ab0fd.webp', 'Residential', 'July 04, 2026', 'BG Tatva Elevators', 'BG'],
  ['Inside the Craft of a Bespoke Cabin', 'From the first material board to final installation, discover the details behind a tailored elevator interior.', '/images/unique/cabin-ivory-30a9ef45.webp', 'Craftsmanship', 'June 18, 2026', 'BG Tatva Elevators', 'BG'],
  ['Choosing the Right Elevator for a Private Residence', 'A clear guide to capacity, travel, space planning and the details that shape everyday comfort.', '/images/unique/social-elevator-1-936b6475.webp', 'Residential', 'June 02, 2026', 'BG Tatva Elevators', 'BG'],
  ['Why Early Elevator Planning Creates Better Buildings', 'How early coordination protects space, simplifies structure and creates more natural circulation.', '/images/unique/service-elevator-design-5ab47910.webp', 'Planning', 'May 20, 2026', 'BG Tatva Elevators', 'BG'],
  ['Warm Metals and Their Place in Modern Cabins', 'Bronze, brass and champagne finishes bring depth and quiet luxury to contemporary elevators.', '/images/unique/social-elevator-4-833739e9.webp', 'Materials', 'May 04, 2026', 'BG Tatva Elevators', 'BG'],
  ['Creating a Calm and Quiet Elevator Journey', 'Thoughtful engineering, acoustic planning and material choices improve comfort on every floor.', '/images/unique/cabin-ivory-3f7c6274.webp', 'Experience', 'April 19, 2026', 'BG Tatva Elevators', 'BG'],
  ['The Architectural Value of a Glass Elevator', 'Transparency can preserve daylight, strengthen visual connections and make movement feel lighter.', '/images/unique/social-elevator-3-9055323d.webp', 'Architecture', 'April 03, 2026', 'BG Tatva Elevators', 'BG'],
  ['Elevator Controls Designed for Everyday Clarity', 'Good interfaces combine intuitive placement, legibility and carefully considered illumination.', '/images/unique/elevator-cabin-base-4f5bb966.webp', 'Technology', 'March 18, 2026', 'BG Tatva Elevators', 'BG'],
  ['How Cabin Proportions Influence Comfort', 'Ceiling height, panel rhythm, mirrors and light can make compact interiors feel composed and open.', '/images/unique/cabin-steel-c0fd99ce.webp', 'Design', 'March 02, 2026', 'BG Tatva Elevators', 'BG'],
  ['A Practical Introduction to Elevator Maintenance', 'Understand preventive care, service intervals and the small checks that protect long-term reliability.', '/images/unique/service-modernisation-a95b8ded.webp', 'Maintenance', 'February 16, 2026', 'BG Tatva Elevators', 'BG'],
  ['Designing Elevator Lobbies as Places of Arrival', 'Lighting, thresholds, signage and material continuity can turn a functional lobby into a welcome.', '/images/unique/elevator-lobby-luxe-ce00e6ad.webp', 'Interiors', 'February 01, 2026', 'BG Tatva Elevators', 'BG'],
  ['What to Know Before Adding an Elevator to an Existing Home', 'The essential questions around position, structure, access and construction planning.', '/images/unique/social-elevator-2-08fe5fe0.webp', 'Renovation', 'January 18, 2026', 'BG Tatva Elevators', 'BG'],
  ['Layered Lighting for Richer Cabin Interiors', 'Combine indirect, vertical and functional light to reveal materials without creating glare.', '/images/unique/walnut-elevator-cabin-a86e83c4.webp', 'Lighting', 'January 04, 2026', 'BG Tatva Elevators', 'BG'],
  ['Machine-Room-Less Elevators Explained', 'A practical overview of space efficiency, planning considerations and suitable applications.', '/images/unique/glass-panoramic-elevator-0f98ea29.webp', 'Engineering', 'December 18, 2025', 'BG Tatva Elevators', 'BG'],
  ['Five Details That Make an Elevator Feel Bespoke', 'From control panels to reveals, discover the small decisions that create a tailored result.', '/images/unique/service-cabin-interiors-840492a3.webp', 'Craftsmanship', 'December 02, 2025', 'BG Tatva Elevators', 'BG'],
  ['Planning Accessible Vertical Movement at Home', 'Cabin size, clear openings and intuitive controls help create dignified, independent movement.', '/images/unique/cabin-black-80321ada.webp', 'Accessibility', 'November 16, 2025', 'BG Tatva Elevators', 'BG'],
  ['A Material Guide to Durable Elevator Flooring', 'Compare stone, tile and resilient finishes for weight, maintenance, grip and visual continuity.', '/images/unique/cabin-walnut-9ec20284.webp', 'Materials', 'November 01, 2025', 'BG Tatva Elevators', 'BG'],
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
