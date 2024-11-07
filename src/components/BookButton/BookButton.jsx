import { Button } from '@mui/material';
import { useState } from 'react';
import BookingFormModal from '../BookingForm/BookingForm';

function BookButton() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <>
      <Button
        sx={theme => ({
          color: ' #121417',
          borderRadius: '12px',
          paddingLeft: '48px',
          paddingRight: '48px',
          paddingTop: '16px',
          paddingBottom: '16px',
          marginTop: '40px',
          backgroundColor: theme.palette.primary.light,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
          '&:focus': {
            backgroundColor: theme.palette.primary.main,
          },
          textTransform: 'none',
          fontFamily: 'Roboto',
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: '28px',
          letterSpacing: '-0.02em',
          textAlign: 'left',
        })}
        onClick={handleOpenModal}
      >
        Book trial lesson
      </Button>

      {/* Модальне вікно з формою */}
      <BookingFormModal open={openModal} onClose={handleCloseModal} />
    </>
  );
}

export default BookButton;
