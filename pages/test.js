import { Box } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "./me.jpg",
  },
  {
    original: "./friends.jpg",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
  },
];

export default function test() {
  return (
    <Box maxH={"300px"} overflow="-moz-hidden-unscrollable">
      <ImageGallery
        items={images}
        originalHeight="10vh"
        showPlayButton={false}
        showThumbnails={false}
        showFullscreenButton={false}
      />
    </Box>
  );
}
