'use client';

import { motion } from 'framer-motion';

import {
  Container,
  PriceLabel,
  PriceRow,
  PriceItem,
  Divider,
  Icon,
  ButtonsRow,
  ActionButton,
  TestDriveButton,
  ButtonIcon,
} from './styles';

import { vehicleHeroContent } from './constants';
import { vehicleHeroAnimation } from './animations';

type VehicleActionsProps = {
  userBalance: {
    money: string;
    diamonds: string;
  };
};

const MotionContainer = motion(Container);

export function VehicleActions({ userBalance }: VehicleActionsProps) {
  return (
    <MotionContainer variants={vehicleHeroAnimation} initial="hidden" animate="visible">
      <PriceLabel>{vehicleHeroContent.priceLabel}</PriceLabel>

      <PriceRow>
        <PriceItem>
          <Icon src={vehicleHeroContent.icons.money} alt="" />
          <span>{userBalance.money}</span>
        </PriceItem>

        <Divider>|</Divider>

        <PriceItem>
          <Icon src={vehicleHeroContent.icons.diamond} alt="" />
          <span>{userBalance.diamonds}</span>
        </PriceItem>
      </PriceRow>

      <ButtonsRow>
        <ActionButton>
          <ButtonIcon src={vehicleHeroContent.icons.bag} alt="" />
          {vehicleHeroContent.acquireButtonLabel}
        </ActionButton>

        <TestDriveButton>
          <ButtonIcon src={vehicleHeroContent.icons.steering} alt="" />
          {vehicleHeroContent.testDriveButtonLabel}
        </TestDriveButton>
      </ButtonsRow>
    </MotionContainer>
  );
}
