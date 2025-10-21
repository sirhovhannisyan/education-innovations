import { Box, type BoxProps, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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

  const getImageSrc = () => {
    if (isMobile) {
      return `/${imageName}-m.png`;
    } else if (isTablet) {
      return `/${imageName}-t.png`;
    } else {
      return `/${imageName}-d.png`;
    }
  };

  const imageSrc = getImageSrc();

  return (
    <Box
      component="img"
      src={imageSrc}
      alt={alt}
      onError={(e) => {
        // Fallback to default image if the responsive image doesn't exist
        const target = e.target as HTMLImageElement;
        if (target.src !== fallback) {
          target.src = fallback;
        }
      }}
      {...boxProps}
    />
  );
};

export default ResponsiveImage;
