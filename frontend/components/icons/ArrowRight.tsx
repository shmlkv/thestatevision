import { FiArrowRight } from "react-icons/fi";

export default function ArrowRight({ width = "10" }: { width?: string }) {
  return <FiArrowRight className={`w-${width} h-${width}`} />;
}
