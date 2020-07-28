import VideoModal from "../components/VideoModal";
import React from "react";

export const OPEN_MODAL = "OPEN_MODAL";
export const openModal = (children) => {
  return {
    type: OPEN_MODAL,
    children,
  };
};

export const openVideoModal = (videos) => {
  return {
    type: OPEN_MODAL,
    children: <VideoModal videos={videos} />,
  };
};

export const CLOSE_MODAL = "CLOSE_MODAL";
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const SET_APP_ELEMENT = "SET_APP_ELEMENT";
export const setAppElement = (appElement) => {
  return {
    type: SET_APP_ELEMENT,
    appElement,
  };
};
