"use client";

import React, { useState, forwardRef } from "react";
import Image, { ImageProps } from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LuxuryImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export const LuxuryImage = forwardRef<HTMLImageElement, LuxuryImageProps>(
  ({ src, alt, fallbackSrc = siteConfig.fallbackImageUrl, className, ...props }, ref) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [isError, setIsError] = useState(false);

    const handleError = () => {
      if (!isError) {
        setImgSrc(fallbackSrc);
        setIsError(true);
      }
    };

    return (
      <Image
        ref={ref}
        src={imgSrc}
        alt={alt || "Royal Stay luxury asset"}
        onError={handleError}
        className={cn("transition-opacity duration-300", className)}
        loading={props.priority ? undefined : "lazy"}
        {...props}
      />
    );
  }
);

LuxuryImage.displayName = "LuxuryImage";

export default LuxuryImage;
