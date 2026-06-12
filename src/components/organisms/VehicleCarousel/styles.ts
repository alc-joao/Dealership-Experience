'use client';

import styled from 'styled-components';

export const Container = styled.div``;

export const VehicleInfo = styled.div`
  margin-bottom: 2.4rem;
  min-height: 5.7rem;
`;

export const VehicleType = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.gray};
  margin-bottom: 0.5rem;
`;

export const VehicleName = styled.h2`
  font-size: 3.2rem;
  line-height: 1;
  letter-spacing: 0.35rem;
  color: ${({ theme }) => theme.white};
`;

export const CategoriesWrapper = styled.div`
  position: relative;
  height: 4.5rem;
  background: #333337;
  border-radius: 1.6rem 1.6rem 0 0;
  padding: 0.8rem 1rem 0;
  display: flex;
  gap: 0.7rem;
`;

export const CategoryButton = styled.button<{ $active: boolean }>`
  min-width: 9.5rem;
  height: 2.5rem;
  border-radius: 0.35rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.08);
  font-size: 1.1rem;
  background: ${({ theme, $active }) => ($active ? theme.gray : 'transparent')};
  color: ${({ theme, $active }) => ($active ? theme.black : 'rgba(255, 255, 255, 0.35)')};

  transform: ${({ $active }) => ($active ? 'translateY(-0.08rem)' : 'translateY(0)')};

  box-shadow: ${({ $active }) =>
    $active ? '0 0.6rem 1.8rem rgba(0, 0, 0, 0.18)' : 'none'};

  transition:
    background 0.28s ease,
    color 0.28s ease,
    transform 0.28s ease,
    box-shadow 0.28s ease;

  &:hover {
    transform: translateY(-0.1rem);
    color: ${({ theme, $active }) => ($active ? theme.black : theme.white)};
  }
`;

export const CarouselHint = styled.div`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.8rem;

  button {
    font-size: 2rem;
    line-height: 1;
    color: ${({ theme }) => theme.gray};
    transition: 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.white};
    }
  }

  p {
    font-size: 1.15rem;
    font-weight: 700;
    color: ${({ theme }) => theme.white};
  }
`;

export const VehiclesContainer = styled.div`
  height: 15rem;
  background: #333337;
  border-radius: 0 0 1.4rem 1.4rem;
  padding: 0 1.2rem 1.2rem;
  overflow: hidden;
`;

export const VehiclesAnimationWrapper = styled.div`
  width: 100%;
`;

export const VehiclesTrack = styled.div<{
  $activeVehicleIndex: number;
  $vehiclesLength: number;
}>`
  display: flex;
  gap: 1rem;

  transform: translateX(
    ${({ $activeVehicleIndex, $vehiclesLength }) => {
      const cardWidth = 32.5;
      const visibleCards = 5;
      const maxOffset = Math.max($vehiclesLength - visibleCards, 0);
      const currentOffset = Math.min(Math.max($activeVehicleIndex - 4, 0), maxOffset);

      return `-${currentOffset * cardWidth}rem`;
    }}
  );

  transition: transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const VehicleCard = styled.div<{
  $exclusive: boolean;
  $active: boolean;
}>`
  position: relative;
  min-width: 31.5rem;
  height: 14.4rem;
  border-radius: 0.45rem;
  overflow: hidden;

  border: 0.1rem solid
    ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.45)' : 'rgba(255, 255, 255, 0.08)')};

  background: ${({ theme, $active }) => ($active ? theme.gray : '#333337')};
  cursor: pointer;

  transform: ${({ $active }) =>
    $active ? 'translateY(-0.2rem) scale(1.006)' : 'translateY(0) scale(1)'};

  &:hover {
    transform: translateY(-0.2rem) scale(1.006);
  }

  box-shadow: ${({ $active }) => ($active ? '0 1.6rem 4rem rgba(0, 0, 0, 0.32)' : 'none')};

  transition:
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.35s ease,
    background 0.35s ease;

  &:hover {
    transform: translateY(-0.1rem) scale(1.002);
    box-shadow: 0 1.2rem 3rem rgba(0, 0, 0, 0.24);
  }

  span {
    position: relative;
    z-index: 2;
    display: block;
    padding: 1.2rem 1.4rem 0;
    font-size: 1.25rem;
    font-weight: 800;
    white-space: pre-line;

    color: ${({ theme, $exclusive, $active }) => {
      if ($exclusive && $active) return theme.black;
      if ($exclusive || $active) return theme.radicalRed;
      return theme.white;
    }};

    strong {
      display: block;
      color: ${({ theme }) => theme.radicalRed};
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 3.4rem;
    width: 2rem;
    height: 2rem;

    background: radial-gradient(
      circle at 100% 0,
      transparent 2rem,
      ${({ theme, $exclusive, $active }) =>
          $exclusive || $active ? theme.radicalRed : theme.greenYellow}
        0
    );

    z-index: 1;
  }
`;

export const VehicleImage = styled.img`
  position: absolute;
  left: 50%;
  top: 3.1rem;
  transform: translateX(-50%);
  width: 20.2rem;
  height: 7.6rem;
  object-fit: contain;
`;

export const VehicleFooter = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  height: 3.4rem;
  background: #222428;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1.25rem;
    font-weight: 800;
    color: ${({ theme }) => theme.gray};
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    opacity: 70%;
    font-size: 1.25rem;
    font-weight: 800;
    color: ${({ theme }) => theme.white};

    img {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const Icon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  object-fit: contain;
`;
