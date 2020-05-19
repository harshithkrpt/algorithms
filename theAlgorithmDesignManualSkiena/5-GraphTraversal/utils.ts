import { Colors } from "./data_schema";
export const complement = (color: Colors) =>
  color === Colors.BLACK ? Colors.WHITE : Colors.BLACK;
