import { Button } from '@mui/material';

export default function LoadMoreBtn({ onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={theme => ({
        color: '#121417',
        cursor: 'pointer',
        borderRadius: '12px',
        padding: '12px 24px', // Базові відступи для мобільних
        marginTop: '0px', // Менший відступ для мобільних
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
        },
        '&:focus': {
          backgroundColor: theme.palette.primary.main,
        },
        textTransform: 'none',
        fontFamily: 'Roboto',
        fontSize: '16px', // Менший розмір шрифту для мобільних
        fontWeight: 700,
        lineHeight: '24px', // Зменшений line-height
        letterSpacing: '-0.02em',
        textAlign: 'center', // Вирівнювання тексту
        [theme.breakpoints.up('sm')]: {
          padding: '16px 40px', // Відступи для планшетів
          marginTop: '12px', // Збільшення відступу для планшетів
          fontSize: '18px', // Збільшений розмір шрифту
          lineHeight: '28px',
        },
        [theme.breakpoints.up('md')]: {
          paddingLeft: '48px', // Для комп'ютерів (вже є в стилях)
          paddingRight: '48px',
          paddingTop: '16px',
          paddingBottom: '16px',
          marginTop: '32px',
        },
      })}
    >
      Load more
    </Button>
  );
}
