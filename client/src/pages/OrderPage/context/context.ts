import React from "react";
import { TOrderContext } from "./type";

export const OrderContext = React.createContext<Partial<TOrderContext>>({});
