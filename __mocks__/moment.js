import { jest } from "@jest/globals";
const moment = jest.requireActual("moment");

export default (timestamp = 0) => {
  return moment(timestamp);
};
