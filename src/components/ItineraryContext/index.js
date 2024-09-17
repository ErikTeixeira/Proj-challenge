import React, { createContext, useState, useContext } from 'react';

const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
  const [itineraries, setItineraries] = useState([]);
  const [updateCounter, setUpdateCounter] = useState(0); // Novo estado

  const addItinerary = (newItinerary) => {
    setItineraries([...itineraries, { id: Date.now(), data: newItinerary }]);
  };

  const deleteItinerary = (index) => {
    const updatedItineraries = [...itineraries];
    updatedItineraries.splice(index, 1);
    setItineraries(updatedItineraries);
    setUpdateCounter(updateCounter + 1); // Incrementa o contador após a exclusão
  };

  return (
    <ItineraryContext.Provider value={{ itineraries, addItinerary, deleteItinerary, updateCounter }}> 
      {children}
    </ItineraryContext.Provider>
  );
};

export const useItineraries = () => {
  return useContext(ItineraryContext);
};