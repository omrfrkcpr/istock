import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
const AuthImage = ({ image }) => {
  return (
    <Grid
      item
      xs={6}
      sm={7}
      md={8}
      lg={10}
      style={{ margin: "auto", maxWidth: "300px" }}
    >
      <Container>
        <img src={image} alt="img" style={{ width: "100%" }} />
      </Container>
    </Grid>
  );
};

export default AuthImage;
