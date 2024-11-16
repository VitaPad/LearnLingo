import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import css from './LogInModal.module.css';
import { loginUser } from '../../services/authService';
import { useState } from 'react';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

function LogInModal({ open, handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = async () => {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!emailRegex.test(email)) {
      setEmailError('Email format is incorrect');
      return;
    }

    if (password.length < 6) {
      setPasswordError('Password must contain at least 6 characters');
      return;
    }

    try {
      const user = await loginUser(email, password);
      toast.success('Login successful! Welcome!');
      handleClose();
    } catch (error) {
      error(error.message);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{ backdropFilter: 'blur(4px)' }}
    >
      <Box sx={style} className={css.modal}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          sx={{
            fontFamily: 'Roboto',
            fontSize: '40px',
            fontWeight: 500,
            lineHeight: '48px',
            letterSpacing: '-0.02em',
            textAlign: 'left',
          }}
        >
          Log In
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
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </Typography>

        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={{
            mt: 5,
            '& fieldset': {
              borderRadius: '12px',
            },
          }}
        />
        {emailError && (
          <Typography color="error" sx={{ mt: 2 }}>
            {emailError}
          </Typography>
        )}
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          sx={{
            mt: 2.25,
            '& fieldset': {
              borderRadius: '12px',
            },
          }}
        />
        {passwordError && (
          <Typography color="error" sx={{ mt: 2 }}>
            {passwordError}
          </Typography>
        )}
        <Button
          onClick={handleLogin}
          variant="contained"
          color="primary"
          fullWidth
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
          Log In
        </Button>
      </Box>
    </Modal>
  );
}
export default LogInModal;
