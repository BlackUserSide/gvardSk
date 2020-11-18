import React from "react";
import { TContextCatalog } from "./types";

export const CatalogContext = React.createContext<Partial<TContextCatalog>>({});
