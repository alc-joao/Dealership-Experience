'use client';

import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 21rem;
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  pointer-events: auto;
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
  color: ${({ theme }) => theme.gray};

  font-size: 1.15rem;
  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    transform: translateY(-0.25rem);
    background: rgba(45, 46, 54, 1);
    box-shadow: 0 1rem 2.4rem rgba(0, 0, 0, 0.35);
  }

  &:active {
    transform: translateY(0);
    opacity: 0.78;
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
  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 1rem 2.4rem rgba(0, 0, 0, 0.35);
  }

  &:active {
    transform: translateY(0);
    opacity: 0.78;
  }
`;

export const ButtonIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  object-fit: contain;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.48);
  backdrop-filter: blur(0.8rem);
`;

export const ModalContent = styled.div`
  width: 55rem;
  overflow: hidden;

  border-radius: 1.2rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.1);

  background: rgba(31, 32, 37, 0.9);

  box-shadow:
    0 2.5rem 8rem rgba(0, 0, 0, 0.55),
    inset 0 0.1rem 0 rgba(255, 255, 255, 0.08);

  color: ${({ theme }) => theme.white};
`;

export const ModalHeader = styled.div`
  height: 7.2rem;
  padding: 0 2.8rem;

  display: flex;
  align-items: center;
  gap: 1.4rem;

  background: rgba(31, 32, 37, 0.88);
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.06);
`;

export const ModalStatusIcon = styled.span`
  font-size: 3rem;
  line-height: 1;
  color: ${({ theme }) => theme.greenYellow};
`;

export const ModalTitle = styled.h3`
  font-size: 2.8rem;
  font-weight: 800;
  color: ${({ theme }) => theme.white};
`;

export const ModalBody = styled.div`
  padding: 2.4rem 2.8rem 2.8rem;
`;

export const ModalInfoRow = styled.div`
  display: flex;
  gap: 1.4rem;
  margin-bottom: 2.2rem;

  span {
    font-size: 2.1rem;
    opacity: 0.55;
  }

  p {
    max-width: 43rem;
    font-size: 1.45rem;
    font-weight: 700;
    line-height: 1.35;
    color: rgba(255, 255, 255, 0.48);
  }
`;

export const ModalPriceBox = styled.div`
  height: 5.4rem;
  margin-bottom: 2.8rem;

  border-radius: 999rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  background: rgba(255, 255, 255, 0.055);

  img {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }

  strong {
    font-size: 2.4rem;
    font-weight: 900;
    color: ${({ theme }) => theme.white};
  }
`;

export const ModalActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.8rem;
`;

export const ModalPrimaryButton = styled.button`
  height: 4.2rem;
  border-radius: 999rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};

  font-size: 1.55rem;
  font-weight: 800;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    transform: translateY(-0.18rem);
    box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.36);
  }

  &:active {
    transform: translateY(0);
    opacity: 0.82;
  }
`;

export const ModalSecondaryButton = styled.button`
  height: 4.2rem;
  border-radius: 999rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background: rgba(255, 255, 255, 0.055);
  color: rgba(255, 255, 255, 0.62);

  font-size: 1.55rem;
  font-weight: 800;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    color 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    transform: translateY(-0.18rem);
    background: rgba(255, 255, 255, 0.09);
    color: ${({ theme }) => theme.white};
  }

  &:active {
    transform: translateY(0);
    opacity: 0.82;
  }
`;

export const ModalSuccessMessage = styled.p`
  margin-bottom: 1.8rem;

  color: ${({ theme }) => theme.greenYellow};

  font-size: 1.4rem;
  font-weight: 800;
  text-align: center;
`;
