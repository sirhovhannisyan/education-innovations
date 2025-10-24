import { Box, type BoxProps, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

interface ResponsiveImageProps extends Omit<BoxProps, "component"> {
  imageName: string;
  alt: string;
  fallback?: string;
}

const ResponsiveImage = ({
  imageName,
  alt,
  fallback = "/image.png",
  ...boxProps
}: ResponsiveImageProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const [currentFormatIndex, setCurrentFormatIndex] = useState(0);

  const formats = ["png", "jpeg", "jpg"];
  const sizes = isMobile ? "_m" : isTablet ? "_t" : "_d";

  const getImageSrc = () => {
    const format = formats[currentFormatIndex];
    return `/${imageName}${sizes}.${format}`;
  };

  const imageSrc = getImageSrc();

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;

    // Try next format if available
    if (currentFormatIndex < formats.length - 1) {
      setCurrentFormatIndex(currentFormatIndex + 1);
      return;
    }

    // If all formats failed, use fallback
    if (target.src !== fallback) {
      target.src = fallback;
    }
  };

  return (
    <Box
      component="img"
      src={imageSrc}
      alt={alt}
      onError={handleError}
      {...boxProps}
    />
  );
};

export default ResponsiveImage;
