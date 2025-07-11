import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../reducers/locationDataSlice';

const LocationsList = ({ onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isContinentListOpen, setIsContinentListOpen] = useState(false);
  const [isCountryListOpen, setIsCountryListOpen] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const dataLocations = useSelector(selectData);
  const continentsData = dataLocations.map(location => location.continent);
  const continentsList = new Set(continentsData);
  const countriesList = dataLocations.map(location => location.country);

  const toggleContinentList = () => {
    setIsContinentListOpen(prevIsOpen => !prevIsOpen);
  };

  const handleContinentClick = continent => {
    setSelectedOption(continent);
    onOptionChange(continent);
    setIsCountryListOpen(true); 
    toggleContinentList();
  };

  const handleCountryClick = country => {
    setSelectedOption(country);
    onOptionChange(country);
    setIsCountryListOpen(false);
    setIsArrowRotated(false);
  };

  const toggleLists = () => {
    if (!isContinentListOpen && !isCountryListOpen) {
      setIsContinentListOpen(true);
      setIsArrowRotated(true);
    } else {
      setIsContinentListOpen(false);
      setIsCountryListOpen(false);
      setIsArrowRotated(false);
    }
  };

  const returnBack = () => {
    if (isCountryListOpen) {
      setIsCountryListOpen(false);
      setIsContinentListOpen(true);
    }
  }

  return (
    <div className='select__container'>
      <div className="select_location">
        <p>{selectedOption ? selectedOption : 'Where ?'}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={`arrow ${isArrowRotated ? '--open' : '--close'}`}
          onClick={toggleLists}
        >
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      </div>
      <ul className={`locations_list ${isContinentListOpen ? '' : 'hide'} `}>
        {Array.from(continentsList).map(continent => (
          <li
            className='location'
            key={continent}
            onClick={() => handleContinentClick(continent)}
          >
            {continent}
          </li>
        ))}
      </ul>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={`arrow-back ${isCountryListOpen ? '' : 'arrow-back--hide'} `}
          onClick={returnBack}
        >
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      <ul className={`locations_list ${isCountryListOpen ? '' : 'hide'} `}>
        {countriesList
          .filter(country => {
            const correspondingContinent = dataLocations.find(location => location.country === country)?.continent;
            return correspondingContinent === selectedOption;
          })
          .map(country => (
            <li
              className='location'
              key={country}
              onClick={() => handleCountryClick(country)}
            >
              {country}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LocationsList;