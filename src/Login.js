import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    // Clear fields
    setShowAlert((show) => !show);
    setUserEmail("");
    setUserPassword("");
  };

  const handleShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "5rem",
          }}
        >
          <Avatar sx={{ bgcolor: blue[900], marginBottom: "1rem" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              margin="normal"
              fullWidth
              required
              autoComplete="email"
              placeholder="example@mail.com"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                required
                autoComplete="current-password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      arial-label="toogle password visibility"
                      edge="end"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Box sx={{ textAlign: "center", marginTop: "1rem", width: "100%" }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ width: "40%" }}
              >
                Login
              </Button>
            </Box>

            <Grid container sx={{ marginTop: "2rem" }}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  Need an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>

        {/* <Box
        sx={{ marginTop: "3rem", marginBottom: "3rem", textAlign: "center" }}
      >
        <Typography>
          &copy;{" "}
          <Link href="https://bit.ly/yinkaenoch" rel="">
            Yinka Enoch Adedokun
          </Link>{" "}
          {new Date().getFullYear()}. All rights reserved.
        </Typography>
      </Box> */}
      </Container>

      {showAlert && (
        <Snackbar
          open={showAlert}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={() => setShowAlert((show) => !show)}
        >
          <Alert severity="success" variant="filled" on>
            <AlertTitle>Success</AlertTitle>
            Login attempt successful!
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
