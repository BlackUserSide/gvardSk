import { Dispatch } from "react";

export type TContextCatalog = {
  actionComponents: Dispatch<ActionType>;
  actionId: number;
};

export type ActionType = {
  id: string;
};
