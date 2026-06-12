'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalStatusIcon,
  ModalTitle,
  ModalBody,
  ModalInfoRow,
  ModalPriceBox,
  ModalActions,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from './styles';

import { vehicleHeroContent } from './constants';
import { vehicleHeroAnimation } from './animations';

type Vehicle = {
  name: string;
  cardPrice: string;
  diamondPrice: string;
  exclusive: boolean;
};

type VehicleActionsProps = {
  userBalance: {
    money: string;
    diamonds: string;
  };
  vehicle: Vehicle;
};

type ModalType = 'purchase' | 'testDrive' | '';

const MotionContainer = motion(Container);

export function VehicleActions({ userBalance, vehicle }: VehicleActionsProps) {
  const [modalType, setModalType] = useState<ModalType>('');

  const isPurchase = modalType === 'purchase';

  const modalTitle = isPurchase ? 'Confirmação' : 'Agendar test drive';

  const modalText = isPurchase
    ? `O senhor(a) deseja comprar o veículo ${vehicle.name}, clique na ação abaixo para confirmar compra.`
    : `O senhor(a) deseja agendar um test drive com o veículo ${vehicle.name}, clique na ação abaixo para confirmar.`;

  const vehiclePrice = vehicle.exclusive ? vehicle.diamondPrice : vehicle.cardPrice;
  const priceIcon = vehicle.exclusive
    ? vehicleHeroContent.icons.diamond
    : vehicleHeroContent.icons.money;

  return (
    <>
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
          <ActionButton type="button" onClick={() => setModalType('purchase')}>
            <ButtonIcon src={vehicleHeroContent.icons.bag} alt="" />
            {vehicleHeroContent.acquireButtonLabel}
          </ActionButton>

          <TestDriveButton type="button" onClick={() => setModalType('testDrive')}>
            <ButtonIcon src={vehicleHeroContent.icons.steering} alt="" />
            {vehicleHeroContent.testDriveButtonLabel}
          </TestDriveButton>
        </ButtonsRow>
      </MotionContainer>

      <AnimatePresence>
        {modalType && (
          <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalType('')}
          >
            <ModalContent
              as={motion.div}
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <ModalHeader>
                <ModalStatusIcon>✓</ModalStatusIcon>
                <ModalTitle>{modalTitle}</ModalTitle>
              </ModalHeader>

              <ModalBody>
                <ModalInfoRow>
                  <span>ⓘ</span>
                  <p>{modalText}</p>
                </ModalInfoRow>

                <ModalPriceBox>
                  <img src={priceIcon} alt="" />
                  <strong>{vehiclePrice}</strong>
                </ModalPriceBox>

                <ModalActions>
                  <ModalPrimaryButton type="button" onClick={() => setModalType('')}>
                    <span>✓</span>
                    Confirmar
                  </ModalPrimaryButton>

                  <ModalSecondaryButton type="button" onClick={() => setModalType('')}>
                    <span>×</span>
                    Cancelar
                  </ModalSecondaryButton>
                </ModalActions>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
}
