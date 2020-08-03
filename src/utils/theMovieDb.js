const availableSizes = {
  backdrop_sizes: [300, 780, 1280],
  poster_sizes: [92, 154, 185, 342, 500, 780],
};

export const getImageUrl = (type, image_width, file_path) => {
  let file_size;
  const typeKey = type + "_sizes";
  if (availableSizes.hasOwnProperty(typeKey)) {
    file_size = availableSizes[typeKey].find((size) => size >= image_width);
  }
  file_size = file_size ? "w" + file_size : "original";

  return `https://image.tmdb.org/t/p/${file_size}${file_path}`;
};

export const formatReleaseYear = (releaseDate) => {
  return releaseDate?.split("-")[0] || "";
};
