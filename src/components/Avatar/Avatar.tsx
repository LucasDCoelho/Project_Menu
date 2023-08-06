import Image, { ImageProps } from "next/image";

interface AvatarProps extends ImageProps{
  src: string,
  alt: string,
  height?: number,
  width?: number,
}
export function Avatar({
  src,
  alt,
  height,
  width,
  ...rest
}: AvatarProps){
  return(
    <>
      <Image 
        src={src}
        alt={alt}
        height={height}
        width={width}
        {...rest}
      />
    </>
  );
}