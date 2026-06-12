'use client';

import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  right: 0;
  bottom: 21rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PriceLabel = styled.p`
  font-size: 1.2rem;
  font-weight: 700;

  color: ${({ theme }) => theme.white};
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin: 0.6rem 0 1.8rem;

  span {
    font-size: 1.45rem;
    font-weight: 800;

    color: ${({ theme }) => theme.white};
  }
`;

export const PriceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Divider = styled.span`
  color: rgba(255, 255, 255, 0.2);
`;

export const Icon = styled.img`
  width: 1.3rem;
  height: 1.3rem;

  object-fit: contain;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const ActionButton = styled.button`
  height: 3.2rem;

  padding: 0 1.8rem;

  border-radius: 999rem;

  display: flex;
  align-items: center;
  gap: 0.7rem;

  background: rgba(31, 32, 37, 0.95);

  font-size: 1.15rem;

  color: ${({ theme }) => theme.gray};

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-0.15rem);
  }
`;

export const TestDriveButton = styled.button`
  height: 3.2rem;

  padding: 0 1.8rem;

  border-radius: 999rem;

  display: flex;
  align-items: center;
  gap: 0.7rem;

  background: ${({ theme }) => theme.white};

  color: ${({ theme }) => theme.black};

  font-size: 1.15rem;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-0.15rem);
  }
`;

export const ButtonIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;

  object-fit: contain;
`;
