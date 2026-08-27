import Image from "next/image";

type IllustrationProps = {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
};

/**
 * Renders an image when `src` is provided; otherwise reserves the same
 * footprint with an empty pane so layout doesn't shift once real art
 * lands in public/images/exceed-career/**.
 */
export default function Illustration({
  src,
  alt,
  className,
  sizes,
  priority,
  objectPosition = "center",
}: IllustrationProps) {
  if (!src) {
    return (
      <div
        className={className}
        style={{ background: "transparent" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      style={{ objectFit: "contain", objectPosition }}
    />
  );
}
