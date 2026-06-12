'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { playSound } from '@/utils/audio';

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
  ModalVehicleImage,
  ModalVehicleName,
  ModalInfoRow,
  ModalPriceBox,
  ModalActions,
  ModalPrimaryButton,
  ModalSecondaryButton,
  ModalSuccessMessage,
} from './styles';

import { vehicleHeroContent } from './constants';
import { vehicleHeroAnimation } from './animations';

type Vehicle = {
  name: string;
  title: string;
  cardPrice: string;
  diamondPrice: string;
  image: string;
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
  const [success, setSuccess] = useState(false);

  const isPurchase = modalType === 'purchase';

  const modalTitle = isPurchase ? 'Confirmação' : 'Test Drive';

  const modalText = isPurchase
    ? 'Deseja confirmar a aquisição deste veículo?'
    : 'Deseja iniciar uma experiência de test drive com este veículo?';

  const modalButtonLabel = isPurchase ? 'Confirmar compra' : 'Iniciar test drive';

  const successMessage = isPurchase
    ? 'Veículo adquirido com sucesso.'
    : 'Test drive iniciado com sucesso.';

  const vehiclePrice = vehicle.exclusive ? vehicle.diamondPrice : vehicle.cardPrice;

  const formattedVehiclePrice = vehicle.exclusive
    ? `${vehiclePrice} diamantes`
    : `R$ ${vehiclePrice}`;

  const priceIcon = vehicle.exclusive
    ? vehicleHeroContent.icons.diamond
    : vehicleHeroContent.icons.money;

  function handleOpenModal(type: ModalType) {
    playSound('/audio/click.mp3', 0.25);
    setModalType(type);
  }

  function handleCloseModal() {
    playSound('/audio/click.mp3', 0.18);
    setModalType('');
    setSuccess(false);
  }

  function handleConfirm() {
    playSound('/audio/success.mp3', 0.4);
    setSuccess(true);

    setTimeout(() => {
      setModalType('');
      setSuccess(false);
    }, 1600);
  }

  useEffect(() => {
    if (!modalType) return;

    function handleKeyboard(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleCloseModal();
      }

      if (event.key === 'Enter') {
        handleConfirm();
      }
    }

    window.addEventListener('keydown', handleKeyboard);

    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [modalType]);

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
          <ActionButton type="button" onClick={() => handleOpenModal('purchase')}>
            <ButtonIcon src={vehicleHeroContent.icons.bag} alt="" />
            {vehicleHeroContent.acquireButtonLabel}
          </ActionButton>

          <TestDriveButton type="button" onClick={() => handleOpenModal('testDrive')}>
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
            onClick={handleCloseModal}
          >
            <ModalContent
              as={motion.div}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <ModalHeader>
                <ModalStatusIcon>{isPurchase ? '✓' : '◈'}</ModalStatusIcon>
                <ModalTitle>{modalTitle}</ModalTitle>
              </ModalHeader>

              <ModalBody>
                <ModalVehicleImage src={vehicle.image} alt={vehicle.name} />
                <ModalVehicleName>{vehicle.title}</ModalVehicleName>

                <ModalInfoRow>
                  <span>ⓘ</span>
                  <p>{modalText}</p>
                </ModalInfoRow>

                <ModalPriceBox>
                  <img src={priceIcon} alt="" />
                  <strong>{formattedVehiclePrice}</strong>
                </ModalPriceBox>

                {success && <ModalSuccessMessage>✓ {successMessage}</ModalSuccessMessage>}

                <ModalActions>
                  <ModalPrimaryButton type="button" onClick={handleConfirm}>
                    <span>✓</span>
                    {modalButtonLabel}
                  </ModalPrimaryButton>

                  <ModalSecondaryButton type="button" onClick={handleCloseModal}>
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
