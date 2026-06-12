'use client';

import { HeaderIntro } from '@/components/molecules/HeaderIntro';
import { StatsPanel } from '@/components/organisms/StatsPanel';
import { VehicleActions } from '@/components/organisms/VehicleActions';
import { VehicleCarousel } from '@/components/organisms/VehicleCarousel';

import { userBalance } from '@/constants/dealership';
import { useDealership } from '@/hooks/useDealership';

import { Container, Content, TopContent, BottomContent } from './styles';

export default function DealershipTemplate() {
  const {
    activeCategory,
    activeVehicle,
    activeVehicleIndex,
    filteredVehicles,
    handleChangeCategory,
    handleSelectVehicle,
    handleNextVehicle,
    handlePreviousVehicle,
  } = useDealership();

  if (!activeVehicle) {
    return null;
  }

  return (
    <Container>
      <Content>
        <TopContent>
          <HeaderIntro />
          <StatsPanel stats={activeVehicle.stats} />
        </TopContent>

        <VehicleActions userBalance={userBalance} vehicle={activeVehicle} />

        <BottomContent>
          <VehicleCarousel
            vehicles={filteredVehicles}
            activeCategory={activeCategory}
            activeVehicleIndex={activeVehicleIndex}
            onChangeCategory={handleChangeCategory}
            onSelectVehicle={handleSelectVehicle}
            onNextVehicle={handleNextVehicle}
            onPreviousVehicle={handlePreviousVehicle}
          />
        </BottomContent>
      </Content>
    </Container>
  );
}
