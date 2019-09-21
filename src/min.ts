import axios from "axios";

export const minURL = (revision: string) =>
  `https://raw.githubusercontent.com/m-language/m-language/${revision}/m.m`;

export const getMin = async (revision: string) => axios.get(minURL(revision));

export default getMin;
