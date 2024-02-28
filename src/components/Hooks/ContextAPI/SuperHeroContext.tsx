import React from "react";

// creating the context
export const SuperHeroContext = React.createContext("Captain America"); 

// creating the provider
export const SuperHeroProvider  = SuperHeroContext.Provider

// creating the consumer
export const SuperHeroConsumer = SuperHeroContext.Consumer
