'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2.3rem;
`;

export const WelcomeText = styled.p`
  font-size: 2rem;
  font-weight: 500;
  opacity: 70%;
  letter-spacing: 0.05rem;

  color: ${({ theme }) => theme.white};
`;

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  padding-top: 0.5rem;
  letter-spacing: 0.06rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
`;
