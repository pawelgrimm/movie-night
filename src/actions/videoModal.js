export const openModal = (videos = []) => {
  return {
    type: "OPEN_MODAL",
    videos,
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};
