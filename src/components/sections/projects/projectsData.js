export const projectFilters = [
  "All",
  "Residential",
  "Panoramic",
  "Commercial",
  "Modernisation",
];

const projectList = [
  [
    "lakeview-private-residence",
    "Lakeview Private Residence",
    "North Bengaluru",
    "2026",
    "Panoramic",
    "/images/unique/glass-panoramic-elevator-1d3341e7.webp",
    "A transparent three-level elevator designed as the light-filled centrepiece of a contemporary home.",
    ["3 stops", "Glass cabin", "MRL system"],
  ],
  [
    "the-courtyard-house",
    "The Courtyard House",
    "Whitefield",
    "2026",
    "Residential",
    "/images/unique/social-elevator-1-b3569529.webp",
    "A warm residential elevator composed around stone, timber and quiet everyday movement.",
    ["4 stops", "6 person", "Bespoke cabin"],
  ],
  [
    "aurelia-business-centre",
    "Aurelia Business Centre",
    "CBD Bengaluru",
    "2026",
    "Commercial",
    "/images/unique/elevator-lobby-luxe-d29f47c2.webp",
    "A refined twin-elevator arrival experience planned for clarity, capacity and high daily traffic.",
    ["12 stops", "Twin bank", "Destination controls"],
  ],
  [
    "walnut-house-elevator",
    "Walnut House Elevator",
    "Indiranagar",
    "2025",
    "Residential",
    "/images/unique/walnut-elevator-cabin-df303f53.webp",
    "A compact home elevator with fluted walnut, warm perimeter light and restrained bronze details.",
    ["3 stops", "Timber interior", "Compact plan"],
  ],
  [
    "sky-court-villa",
    "Sky Court Villa",
    "Sarjapur",
    "2025",
    "Panoramic",
    "/images/unique/social-elevator-3-4837a051.webp",
    "A cylindrical glass lift that preserves long interior views across a double-height living space.",
    ["4 stops", "Curved glass", "Scenic travel"],
  ],
  [
    "meridian-grand-lobby",
    "Meridian Grand Lobby",
    "Hebbal",
    "2025",
    "Commercial",
    "/images/unique/service-elevator-design-db993d01.webp",
    "An elegant lobby and cabin language created for a premium mixed-use development.",
    ["16 stops", "13 person", "High traffic"],
  ],
  [
    "heritage-tower-renewal",
    "Heritage Tower Renewal",
    "Jayanagar",
    "2025",
    "Modernisation",
    "/images/unique/service-modernisation-0edf0086.webp",
    "A phased upgrade improving reliability, controls, door performance and cabin character.",
    ["Controls", "Doors", "Cabin renewal"],
  ],
  [
    "ivory-penthouse",
    "Ivory Penthouse",
    "Sadashivanagar",
    "2024",
    "Residential",
    "/images/unique/cabin-ivory-71de6928.webp",
    "A calm, tonal cabin continuing the soft material palette of a private penthouse.",
    ["5 stops", "Ivory panels", "Integrated light"],
  ],
  [
    "horizon-glass-house",
    "Horizon Glass House",
    "Devanahalli",
    "2024",
    "Panoramic",
    "/images/unique/social-elevator-5-f42f9f24.webp",
    "A panoramic home elevator connecting living levels without interrupting daylight or views.",
    ["4 stops", "Full glass", "Villa specification"],
  ],
];

const supportingImages = {
  Residential: [
    "/images/unique/cabin-ivory-e4188b09.webp",
    "/images/unique/walnut-elevator-cabin-bf346a3d.webp",
  ],
  Panoramic: [
    "/images/unique/social-elevator-3-61a17671.webp",
    "/images/unique/social-elevator-5-bcd1068a.webp",
  ],
  Commercial: [
    "/images/unique/service-elevator-design-183d3b90.webp",
    "/images/unique/elevator-lobby-luxe-80376bd7.webp",
  ],
  Modernisation: [
    "/images/unique/modernisation-before-premium-4945d7a1.webp",
    "/images/unique/modernisation-after-premium-d957e01c.webp",
  ],
};

export const projects = projectList.map(
  ([slug, title, location, year, type, image, brief, details]) => ({
    slug,
    title,
    location,
    year,
    type,
    image,
    brief,
    details,
    gallery: supportingImages[type],
    challenge:
      type === "Modernisation"
        ? "Upgrade an active building without allowing the work to disrupt everyday access, while bringing an ageing system up to a more dependable standard."
        : "Resolve circulation, structure and cabin character as one architectural decision—not as a mechanical addition made late in the project.",
    response:
      type === "Panoramic"
        ? "We coordinated the glass enclosure, sightlines and drive system early, keeping the structure visually light while protecting comfort and service access."
        : type === "Commercial"
          ? "Capacity, arrival flow and material durability were developed together, creating an intuitive experience that remains composed through daily use."
          : type === "Modernisation"
            ? "The renewal was sequenced in clear phases, combining new controls and door equipment with a quieter, more resolved cabin environment."
            : "Proportions, finishes, lighting and controls were developed around the interior palette so the elevator feels naturally embedded in the home.",
    outcome:
      "A calm, dependable journey with every visible detail aligned to the surrounding architecture and every technical decision planned for long-term care.",
  }),
);

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
