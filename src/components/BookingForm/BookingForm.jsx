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

function BookingFormModal({ open, onClose }) {
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
          maxHeight: '95vh', // Максимальна висота модального вікна
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
          onClick={onClose}
        >
          Book
        </Button>
      </Box>
    </Modal>
  );
}

export default BookingFormModal;
