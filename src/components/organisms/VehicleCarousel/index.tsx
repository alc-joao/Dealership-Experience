'use client';

import { AnimatePresence, motion } from 'framer-motion';

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
  id: number;
  type: string;
  name: string;
  title: string;
  category: string;
  moneyPrice: string;
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

  return (
    <MotionContainer variants={vehicleCarouselAnimation} initial="hidden" animate="visible">
      <VehicleInfo>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVehicle.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
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
            onClick={() => onChangeCategory(item)}
          >
            {item}
          </CategoryButton>
        ))}

        <CarouselHint>
          <button type="button" onClick={onPreviousVehicle}>
            <img src="/svgs/icons/arrow-chevron-left.svg" alt="Anterior" />
          </button>

          <button type="button" onClick={onNextVehicle}>
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
            <VehiclesTrack
              $activeVehicleIndex={activeVehicleIndex}
              $vehiclesLength={vehicles.length}>
              {vehicles.map((vehicle, index) => (
                <MotionVehicleCard
                  key={vehicle.id}
                  custom={index}
                  variants={vehicleCardAnimation}
                  initial="hidden"
                  animate="visible"
                  onClick={() => onSelectVehicle(index)}
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
