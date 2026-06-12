'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { vehicles } from '@/constants/dealership';
import type { Vehicle } from '@/types/vehicle';

const ALL_CATEGORY = 'Competitivos';

export function useDealership() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [activeVehicleIndex, setActiveVehicleIndex] = useState(0);

  const filteredVehicles = useMemo<Vehicle[]>(() => {
    if (activeCategory === ALL_CATEGORY) {
      return vehicles;
    }

    return vehicles.filter((vehicle) => vehicle.category === activeCategory);
  }, [activeCategory]);

  const activeVehicle = filteredVehicles[activeVehicleIndex] ?? filteredVehicles[0];

  const handleSelectVehicle = useCallback((index: number) => {
    setActiveVehicleIndex(index);
  }, []);

  const handleChangeCategory = useCallback((category: string) => {
    setActiveCategory(category);
    setActiveVehicleIndex(0);
  }, []);

  const handleNextVehicle = useCallback(() => {
    if (!filteredVehicles.length) return;

    setActiveVehicleIndex((currentIndex) =>
      currentIndex === filteredVehicles.length - 1 ? 0 : currentIndex + 1
    );
  }, [filteredVehicles.length]);

  const handlePreviousVehicle = useCallback(() => {
    if (!filteredVehicles.length) return;

    setActiveVehicleIndex((currentIndex) =>
      currentIndex === 0 ? filteredVehicles.length - 1 : currentIndex - 1
    );
  }, [filteredVehicles.length]);

  useEffect(() => {
    function handleKeyboard(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') handleNextVehicle();
      if (event.key === 'ArrowLeft') handlePreviousVehicle();
    }

    window.addEventListener('keydown', handleKeyboard);

    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [handleNextVehicle, handlePreviousVehicle]);

  return {
    activeCategory,
    activeVehicle,
    activeVehicleIndex,
    filteredVehicles,
    handleChangeCategory,
    handleSelectVehicle,
    handleNextVehicle,
    handlePreviousVehicle,
  };
}
