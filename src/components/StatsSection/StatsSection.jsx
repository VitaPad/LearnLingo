import { Box, Typography, Grid } from '@mui/material';
import css from './StatsSection.module.css';

function StatsSection({ theme }) {
  const stats = [
    { number: '32,000 +', text: 'Experienced tutors' },
    { number: '300,000 +', text: '5-star tutor reviews' },
    { number: '120 +', text: 'Subjects taught' },
    { number: '200 +', text: 'Tutor nationalities' },
  ];
  return (
    <Box
      className={css.box}
      sx={{
        border: `2px dashed ${theme.palette.primary.main}`,
        padding: { xs: 1, sm: 4 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 1, sm: 3 }}
        justifyContent="center"
        className={css.stats}
      >
        {stats.map((stat, index) => (
          <Grid
            item
            xs={5}
            sm={6}
            /*   xs={12} // Для мобільних пристроїв (ширина повна)
            sm={6}  */ // Для ширини 600px до 768px (2 колонки)
            md={3} // Для ширини більше 768px (4 колонки)
            key={index}
            textAlign="center"
            className={css.container}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              className={css.number}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              {stat.number}
              {/*     <span className="plus">+</span> */}
            </Typography>
            <Typography variant="body1" className={css.text}>
              {stat.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default StatsSection;
