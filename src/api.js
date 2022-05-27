import axios from "axios";

export const getData = async () => {
  const res = await axios("https://landingpage.sercair.com/api/V1/device/all");

  return res.data.data;
};
