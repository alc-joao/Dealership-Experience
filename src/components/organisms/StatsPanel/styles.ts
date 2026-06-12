'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 27.9rem;
  height: 30.6rem;
  background: rgba(31, 32, 37, 0.86);
  backdrop-filter: blur(2rem);
  border-radius: 1.5rem;
  overflow: hidden;
`;

export const StatsTitle = styled.h2`
  height: 4.9rem;

  padding: 0 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.06);
  font-size: 1.7rem;
  font-weight: 800;

  color: ${({ theme }) => theme.white};

  img {
    width: 1.7rem;
    height: 1.7rem;

    object-fit: contain;
  }
`;

export const StatItem = styled.div`
  padding: 1.6rem 1.9rem 0.9rem;
`;

export const StatHeader = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1.05rem;

  span {
    font-size: 1.64rem;
    font-weight: 100;

    color: ${({ theme }) => theme.white};

    &:last-child {
      color: rgba(255, 255, 255, 0.18);
      font-size: 1.4rem;
    }
  }
`;

export const StatBar = styled.div`
  width: 100%;
  height: 0.5rem;
  border-radius: 5rem;
  background: rgba(255, 255, 255, 0.16);
  overflow: hidden;
`;

export const StatProgress = styled.div<{ $percentage: number }>`
  width: ${({ $percentage }) => $percentage}%;
  height: 100%;
  border-radius: 5rem;
  background: ${({ theme }) => theme.white};
  transition: width 0.5s ease;
`;
