import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import css from './RegisterModal.module.css';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

export default function RegisterModal({ open, handleClose, setUserName }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async e => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Оновлюємо профіль користувача, щоб додати ім'я
      await updateProfile(user, { displayName: name });
      setUserName(name);
      handleClose();
      console.log('User registered:', userCredential.user);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ backdropFilter: 'blur(4px)' }}
    >
      <Box className={css.modal} sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          component="h2"
          variant="h5"
          sx={{
            fontFamily: 'Roboto',
            fontSize: '40px',
            fontWeight: 500,
            lineHeight: '48px',
            letterSpacing: '-0.02em',
            textAlign: 'left',
          }}
        >
          Registration
        </Typography>
        <Typography
          id="modal-description"
          sx={{
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '22px',
            letterSpacing: '-0.02em',
            textAlign: 'left',
            paddingTop: '20px',
            color: 'rgba(18, 20, 23, 0.8)',
          }}
        >
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </Typography>
        <Box component="form" onSubmit={handleRegister} /* sx={{ mt: 3 }} */>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="name"
            label="Name"
            type="text"
            id="text"
            autoComplete="current-password"
            value={name}
            sx={{
              marginTop: '40px',
              marginBottom: '0px',
              '& fieldset': {
                borderRadius: '12px',
              },
            }}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            sx={{
              marginTop: '18px',
              marginBottom: '0px',
              '& fieldset': {
                borderRadius: '12px',
              },
            }}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            sx={{
              marginTop: '18px',
              marginBottom: '0px',
              '& fieldset': {
                borderRadius: '12px',
              },
            }}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={css.button}
            sx={theme => ({
              borderRadius: '12px',
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
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
