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
      }}
    >
      <Grid container spacing={4} justifyContent="center" className={css.stats}>
        {stats.map((stat, index) => (
          <Grid
            item
            xs={12}
            sm={3}
            key={index}
            textAlign="center"
            className={css.container}
          >
            <Typography variant="h5" fontWeight="bold" className={css.number}>
              {stat.number}
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
