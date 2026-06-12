'use client';

import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background-image: url('/imgs/backgrounds/dealership-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 3.2rem;

  @media (max-width: 1366px) {
    padding: 2.4rem;
  }
`;

export const Content = styled.section`
  position: relative;

  width: 100%;
  height: 100%;
`;

export const TopContent = styled.div`
  position: absolute;

  top: 3.7rem;
  z-index: 5;
`;

export const BottomContent = styled.div`
  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;
