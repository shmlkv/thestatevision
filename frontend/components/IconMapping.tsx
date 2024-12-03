"use client";
import { Tv } from "lucide-react";
import {
  BiBookBookmark,
  BiBuildingHouse,
  BiCommentAdd,
  BiGlobe,
  BiLike,
  BiMap,
} from "react-icons/bi";

const iconComponents: { [key: string]: React.ComponentType<any> } = {
  BiBookBookmark,
  BiBuildingHouse,
  BiCommentAdd,
  BiGlobe,
  BiLike,
  BiMap,
  Tv,
};

interface IconMappingProps {
  iconName: string;
  className?: string;
}

export default function IconMapping({ iconName, className = "" }: IconMappingProps) {
  const IconComponent = iconComponents[iconName];

  if (!IconComponent) {
    console.warn(`Icon ${iconName} not found`);
    return null;
  }

  return <IconComponent className={className} />;
}
