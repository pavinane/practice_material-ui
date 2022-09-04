import { AccessTime } from "@mui/icons-material";
import {
  Box,
  Grid,
  Paper,
  Rating,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { ImageDatas } from "../data/ImgData";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: "13px",
          },
        },
        {
          props: {
            variant: "span",
          },
          style: {
            fontSize: "12px",
            color: "blue",
          },
        },
      ],
    },
  },
});

const TourCard = () => {
  return (
    <Grid container spacing={5} justifyContent="center">
      <ThemeProvider theme={theme}>
        {ImageDatas.map((item) => {
          return (
            <Grid item sx={{ xs: 8 }} sm={6} md={3}>
              <Paper elevation={10}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: "100px" }}
                />
                <Box p={1}>
                  <Typography variant="subtitle1" component="h2">
                    {item.title}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AccessTime sx={{ width: 12.5 }} />
                    <Typography variant="body2" component="h2" marginLeft={0.5}>
                      {item.time}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    marginTop={2}
                    justifyContent="space-between"
                  >
                    <Rating
                      name="read-only"
                      value={item.value}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <Typography variant="body2" component="h2">
                      {item.value}
                    </Typography>
                    <Typography variant="span" component="h5" marginLeft={2.5}>
                      {item.review}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="subtitle1"
                  component="h3"
                  marginLeft={1.5}
                  paddingBottom={2}
                >
                  {item.price}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
