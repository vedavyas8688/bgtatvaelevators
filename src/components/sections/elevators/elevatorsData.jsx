import { LuBuilding2, LuHouse, LuMoveUp, LuRefreshCw } from "react-icons/lu";

export const elevatorTypes = [
  {
    name: "Home Elevators",
    kicker: "Effortless movement at home",
    title: "Designed around the way you live.",
    description:
      "Quiet, refined vertical mobility for Bengaluru villas, duplexes and private residences, coordinated to feel natural within the architecture.",
    image: "/images/unique/social-elevator-1-27f16541.webp",
    icon: LuHouse,
    points: [
      "Compact architectural integration",
      "Tailored cabin materials and lighting",
      "Comfortable, intuitive everyday use",
    ],
    details: [
      ["Ideal for", "Villas and private residences"],
      ["Design character", "Warm, personal and integrated"],
      ["Planning focus", "Space, comfort and interior continuity"],
    ],
  },
  {
    name: "Panoramic Elevators",
    kicker: "Architecture in motion",
    title: "A clearer connection between every level.",
    description:
      "Glass elevators preserve daylight and visual openness while turning movement into a memorable feature for atriums and statement homes.",
    image: "/images/unique/glass-panoramic-elevator-6734e569.webp",
    icon: LuMoveUp,
    points: [
      "Expansive glass configurations",
      "Minimal visual interruption",
      "Designed around views and daylight",
    ],
    details: [
      ["Ideal for", "Atriums and statement architecture"],
      ["Design character", "Transparent, light and expressive"],
      ["Planning focus", "Structure, views and heat exposure"],
    ],
  },
  {
    name: "Commercial Elevators",
    kicker: "Reliable movement at scale",
    title: "Performance that supports the building.",
    description:
      "Considered solutions for Bengaluru offices, hospitality and mixed-use developments, planned around traffic, capacity and dependable operation.",
    image: "/images/unique/elevator-lobby-luxe-d0210136.webp",
    icon: LuBuilding2,
    points: [
      "Planned for frequent daily use",
      "Clear, accessible passenger interfaces",
      "Coordinated lobby and cabin design",
    ],
    details: [
      ["Ideal for", "Offices, hospitality and mixed use"],
      ["Design character", "Durable, clear and representative"],
      ["Planning focus", "Traffic, capacity and uptime"],
    ],
  },
  {
    name: "Modernisation",
    kicker: "Renewed performance and character",
    title: "Move forward without starting over.",
    description:
      "Targeted upgrades improve reliability, safety, controls, doors, energy performance and cabin design while working with existing infrastructure.",
    image: "/images/unique/service-modernisation-2b268bbb.webp",
    icon: LuRefreshCw,
    points: [
      "Condition-led upgrade planning",
      "Controls, drives, doors and fixtures",
      "Complete cabin and lighting renewal",
    ],
    details: [
      ["Ideal for", "Existing and ageing elevator systems"],
      ["Design character", "Renewed, efficient and purposeful"],
      ["Planning focus", "Condition, downtime and upgrade value"],
    ],
  },
];

export const cabinStyles = [
  [
    "Walnut warmth",
    "Rich timber, warm light and bronze details.",
    "/images/unique/walnut-elevator-cabin-eac67c9d.webp",
  ],
  [
    "Ivory calm",
    "Soft tonal panels with quiet, even illumination.",
    "/images/unique/cabin-ivory-583aef31.webp",
  ],
  [
    "Contemporary steel",
    "Crisp metallic surfaces with a precise modern rhythm.",
    "/images/unique/cabin-steel-37cf4a7c.webp",
  ],
  [
    "Midnight character",
    "Dark finishes, focused lighting and a dramatic presence.",
    "/images/unique/cabin-black-85f6dd14.webp",
  ],
];
