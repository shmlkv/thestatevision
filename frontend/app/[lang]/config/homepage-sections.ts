import { Tv } from "lucide-react";
import {
  BiBookBookmark,
  BiBuildingHouse,
  BiCommentAdd,
  BiGlobe,
  BiLike,
  BiMap
} from "react-icons/bi";



export const textHeroSection = {
  __component: "sections.text-hero",
  title: "EVOLVE WITH US",
  data: {
    title: "VISION",
    heading: "The future's broken. Let's build a new one",
    description:
      "We are a group of technologists, scientists, and policy wonks who are turning Science Fiction into Science Facts. We are building a new kind of government that is more responsive, more transparent, and more accountable to the people and AI. We are a non-partisan, not-for-profit organization dedicated to the public good. Because we're playing the long game.",
  },
};
export const textContent = `# How we want to change the world?

Infinite game theory suggest that the best way to win is to focus on the game, not the other players.
Freedom is being attacked from all sides, and we need to fight back.

`;
export const cookingSection = {
  __component: "sections.cooking",
  title: "WHAT WE'RE COOKING UP?",
  data: [
    {
      id: 1,
      title: "CONGRESS",
      description: `Annual Hitchhiker's Congress
Now in Cyprus, 2-6 Dec 2024`,
      href: "https://congress.futurestate.tv",
      iconName: "BiBuildingHouse",
      buttonText: "RE:WRITE REALITY",
      newTab: true,
    },
    {
      id: 2,
      title: "MEDIA",
      description: `Trying to understand and explain Network State // 2022`,
      href: "https://new.futurestate.tv/en/articles",
      iconName: "Tv",
      buttonText: "WARNING: DEEP RABBIT HOLE",
    },
    {
      id: 3,
      title: "HITCHHIKER'S GUIDE TO THE FUTURE",
      description:
        "12-month Hackathon around the world. A fellowship program for radical ideas and implementations",
      href: "https://congress.futurestate.tv",
      iconName: "BiLike",
      buttonText: "DON'T PANIC, CLICK HERE",
      newTab: true,
    },
    {
      id: 4,
      title: "DECENTRALIZED EVENTS",
      description: "Go to the nearest one or start your chapter",
      href: "https://lu.ma/FUTURE_STATE",
      iconName: "BiGlobe",
      buttonText: "HACK THE PLANET",
    },
    // {
    //   id: 5,
    //   title: "VENTURE BUILDER BATCH",
    //   description: "cause someone's gotta build this",
    //   href: "https://www.bubbleswitch.me",
    //   Icon: BiSolidTrafficBarrier,
    //   buttonText: "Apply now",
    //   newTab: true,
    // },
  ],
};
export const envolveSection = {
  __component: "sections.cooking",
  title: "EVOLVE WITH US",
  data: [
    {
      id: 1,
      title: "Write an article",
      href: "/articles",
      description: "Be part of our collective research",
      iconName: "BiBookBookmark",
      buttonText: "Are you brave enough?",
    },
    {
      id: 2,
      title: "Attend or sponsor our next event",
      href: "/events",
      description: "Host an event in your city",
      iconName: "BiMap",
      buttonText: "Push future forward",
    },
    {
      id: 3,
      title: "Join our community",
      description: "Help us build a better future",
      href: "https://t.me/futurestate_hall",
      iconName: "BiCommentAdd",
      newTab: true,
      buttonText: "Telegram",
    },
  ],
};
export const libertarianArticle = {
  __component: "sections.rich-text",
  content: `## The Future of Governance: A Libertarian Perspective

In an era of rapid technological advancement and global interconnectedness, traditional forms of governance are becoming increasingly obsolete. The future demands a radical reimagining of how societies organize themselves, and libertarian principles offer a compelling vision for this new world.

## Decentralization and Individual Sovereignty

As blockchain technology and decentralized autonomous organizations (DAOs) mature, we're witnessing the emergence of governance systems that prioritize individual sovereignty. These systems allow for:

- Direct participation in decision-making processes
- Transparent and immutable record-keeping
- Reduction of centralized power structures

## AI-Assisted Policy Making

Artificial intelligence will play a crucial role in future governance by:

- Analyzing vast amounts of data to inform policy decisions
- Providing unbiased assessments of proposed legislation
- Optimizing resource allocation based on real-time needs

## Smart Contracts and Voluntary Associations

The concept of smart contracts will revolutionize how individuals interact with each other and with governance structures:

- Automated enforcement of agreements without the need for centralized authority
- Voluntary associations based on shared values and goals
- Reduction of bureaucracy and administrative overhead

## Personal Data Sovereignty

In the future, individuals will have complete control over their personal data:

- Cryptographic protection of sensitive information
- Ability to monetize personal data through secure marketplaces
- Enhanced privacy and security in digital interactions

The path to this libertarian future is not without challenges, but by embracing technological innovation and prioritizing individual liberty, we can create a world of unprecedented freedom and prosperity.`,
};
export const email = {
  __component: "sections.lead-form",
  description:
    " traditional governance is a joke (but you're not laughing)",
  emailPlaceholder: "Enter your email",
  id: 1,
  location: "main page",
  submitButton: { id: 1, text: null, type: "primary" },
  title: "join us if",
};
