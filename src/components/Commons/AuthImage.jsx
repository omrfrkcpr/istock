import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
const AuthImage = ({ image }) => {
  return (
    <Grid item style={{ margin: "auto", maxWidth: "100px" }}>
      <Container>
        <img src={image} alt="img" style={{ width: "100%" }} />
      </Container>
    </Grid>
  );
};

export default AuthImage;
