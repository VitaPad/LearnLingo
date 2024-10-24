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
import { AuthProvider } from '../../auth/AuthProvider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

function LogInModal({ open, handleClose }) {
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
          sx={{
            mt: 5,
            '& fieldset': {
              borderRadius: '12px',
            },
          }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          sx={{
            mt: 2.25,
            '& fieldset': {
              borderRadius: '12px',
            },
          }}
        />
        <Button
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
        <AuthProvider />
      </Box>
    </Modal>
  );
}
export default LogInModal;
