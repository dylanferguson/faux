type ImageProps = {
  src: string;
  alt?: string;
};

export const Image = ({ src, alt = "" }: ImageProps) => (
  <img className="rounded-lg" loading="lazy" alt={alt} src={src} />
);
