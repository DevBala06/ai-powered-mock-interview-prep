'use client'
import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const useCursor = () => {
  return useContext(CursorContext);
};

export const CursorProvider = ({ children }) => {
  const [cursorRef, setCursorRef] = useState(null);
  // const [text, settext] = useState(null)

  return (
    <CursorContext.Provider value={{ cursorRef, setCursorRef }}>
      {children}
    </CursorContext.Provider>
  );
};
