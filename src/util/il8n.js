import { getil8nData } from "../services/getFakeApiData";

export function il8n(str) {
  return getil8nData()[str];
}
