'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { playSound } from '@/utils/audio';

import {
  Container,
  VehicleInfo,
  VehicleType,
  VehicleName,
  CategoriesWrapper,
  CategoryButton,
  CarouselHint,
  VehiclesContainer,
  VehiclesAnimationWrapper,
  VehiclesTrack,
  VehicleCard,
  VehicleImage,
  VehicleFooter,
  Icon,
} from './styles';

import { categories, vehicleCarouselContent } from './constants';
import { vehicleCarouselAnimation, vehicleCardAnimation } from './animations';

type Vehicle = {
  id: string;
  type: string;
  name: string;
  title: string;
  category: string;
  diamondPrice: string;
  cardPrice: string;
  image: string;
  exclusive: boolean;
};

type VehicleCarouselProps = {
  vehicles: Vehicle[];
  activeCategory: string;
  activeVehicleIndex: number;
  onChangeCategory: (category: string) => void;
  onSelectVehicle: (index: number) => void;
  onNextVehicle: () => void;
  onPreviousVehicle: () => void;
};

const MotionContainer = motion(Container);
const MotionVehicleCard = motion(VehicleCard);
const MotionVehiclesAnimationWrapper = motion(VehiclesAnimationWrapper);

export function VehicleCarousel({
  vehicles,
  activeCategory,
  activeVehicleIndex,
  onChangeCategory,
  onSelectVehicle,
  onNextVehicle,
  onPreviousVehicle,
}: VehicleCarouselProps) {
  const activeVehicle = vehicles[activeVehicleIndex] ?? vehicles[0];

  if (!activeVehicle) {
    return null;
  }

  function handleSelectVehicle(index: number) {
    playSound('/audio/click.mp3', 0.25);
    onSelectVehicle(index);
  }

  function handlePrevious() {
    playSound('/audio/click.mp3', 0.25);
    onPreviousVehicle();
  }

  function handleNext() {
    playSound('/audio/click.mp3', 0.25);
    onNextVehicle();
  }

  function handleCategory(category: string) {
    playSound('/audio/click.mp3', 0.25);
    onChangeCategory(category);
  }

  return (
    <MotionContainer variants={vehicleCarouselAnimation} initial="hidden" animate="visible">
      <VehicleInfo>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVehicle.id}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
          >
            <VehicleType>{activeVehicle.category}</VehicleType>
            <VehicleName>{activeVehicle.title}</VehicleName>
          </motion.div>
        </AnimatePresence>
      </VehicleInfo>

      <CategoriesWrapper>
        {categories.map((item) => (
          <CategoryButton
            key={item}
            type="button"
            $active={activeCategory === item}
            onClick={() => handleCategory(item)}
          >
            {item}
          </CategoryButton>
        ))}

        <CarouselHint>
          <button type="button" onClick={handlePrevious}>
            <img src="/svgs/icons/arrow-chevron-left.svg" alt="Anterior" />
          </button>

          <button type="button" onClick={handleNext}>
            <img src="/svgs/icons/arrow-chevron-right.svg" alt="Próximo" />
          </button>

          <p>{vehicleCarouselContent.hint}</p>
        </CarouselHint>
      </CategoriesWrapper>

      <VehiclesContainer>
        <AnimatePresence mode="wait">
          <MotionVehiclesAnimationWrapper
            key={activeCategory}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <VehiclesTrack $activeVehicleIndex={activeVehicleIndex} $vehiclesLength={vehicles.length}>
              {vehicles.map((vehicle, index) => (
                <MotionVehicleCard
                  key={vehicle.id}
                  custom={index}
                  variants={vehicleCardAnimation}
                  initial="hidden"
                  animate="visible"
                  tabIndex={-1}
                  onClick={() => handleSelectVehicle(index)}
                  $exclusive={vehicle.exclusive}
                  $active={activeVehicleIndex === index}
                >
                  <span>
                    {vehicle.exclusive ? (
                      <>
                        <strong>Exclusivo</strong>
                        VIP
                      </>
                    ) : (
                      vehicle.type
                    )}
                  </span>

                  <VehicleImage src={vehicle.image} alt={vehicle.name} />

                  <VehicleFooter>
                    <h3>{vehicle.name}</h3>

                    <p>
                      <Icon
                        src={
                          vehicle.exclusive
                            ? vehicleCarouselContent.icons.diamond
                            : vehicleCarouselContent.icons.money
                        }
                        alt=""
                      />

                      {vehicle.cardPrice}
                    </p>
                  </VehicleFooter>
                </MotionVehicleCard>
              ))}
            </VehiclesTrack>
          </MotionVehiclesAnimationWrapper>
        </AnimatePresence>
      </VehiclesContainer>
    </MotionContainer>
  );
}
