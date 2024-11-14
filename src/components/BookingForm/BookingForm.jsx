import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import css from './BookingForm.module.css';
import { useState } from 'react';

function BookingFormModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    reason: 'Career and business',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Скидання помилки при зміні значення поля
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const validatePhoneNumber = phoneNumber => {
    // Перевірка, щоб номер складався щонайменше з 11 цифр і був числом
    return /^\d{10,}$/.test(phoneNumber);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { fullName: '', email: '', phoneNumber: '' };

    if (!formData.fullName) {
      newErrors.fullName = 'Please enter your full name';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Please enter your email';
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Please enter your phone number';
      valid = false;
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must contain at least 10 digits';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Тут можна відправити дані форми на сервер або виконати інші дії
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '12px',
          padding: '64px',
          maxHeight: '95vh',
          overflowY: 'auto',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography className={css.h2} variant="h4" component="h2" gutterBottom>
          Book trial lesson
        </Typography>
        <Typography
          className={css.text}
          variant="body2"
          color="textSecondary"
          paragraph
        >
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </Typography>

        {/* Радіо-кнопки для вибору причини навчання */}
        <Typography className={css.h4} variant="body1" gutterBottom>
          What is your main reason for learning English?
        </Typography>
        <RadioGroup name="reason" defaultValue="Career and business">
          <FormControlLabel
            className={css.label}
            value="Career and business"
            control={<Radio />}
            label="Career and business"
          />
          <FormControlLabel
            className={css.label}
            value="Lesson for kids"
            control={<Radio />}
            label="Lesson for kids"
          />
          <FormControlLabel
            className={css.label}
            value="Living abroad"
            control={<Radio />}
            label="Living abroad"
          />
          <FormControlLabel
            className={css.label}
            value="Exams and coursework"
            control={<Radio />}
            label="Exams and coursework"
          />
          <FormControlLabel
            className={css.label}
            value="Culture, travel or hobby"
            control={<Radio />}
            label="Culture, travel or hobby"
          />
        </RadioGroup>
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={Boolean(errors.fullName)}
          helperText={errors.fullName}
          sx={{
            mt: 5,
            '& fieldset': {
              borderRadius: '16px',
            },
          }}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          sx={{
            mt: 2,
            '& fieldset': {
              borderRadius: '16px',
            },
          }}
        />
        <TextField
          label="Phone number"
          fullWidth
          margin="normal"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={Boolean(errors.phoneNumber)}
          helperText={errors.phoneNumber}
          sx={{
            mt: 2,
            '& fieldset': {
              borderRadius: '16px',
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            marginTop: 2,
            paddingY: 2,
            borderRadius: '16px',
            textTransform: 'none',
            fontFamily: 'Roboto',
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: '28px',
            letterSpacing: '-0.02em',
            textAlign: 'left',
          }}
          /*        onClick={onClose} */
          onClick={handleSubmit}
        >
          Book
        </Button>
      </Box>
    </Modal>
  );
}

export default BookingFormModal;
