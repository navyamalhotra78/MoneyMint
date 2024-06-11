import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, googleProvider } from "../../../firebase"; // Import firebase auth instance and Google provider
import { signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";

// @mui/material components
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

// Icons
import { FaGoogle } from "react-icons/fa";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";
import GradientBorder from "examples/GradientBorder";

// Vision UI Dashboard assets
import radialGradient from "assets/theme/functions/radialGradient";
import palette from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgSignIn from "assets/images/signInImage.png";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const history = useHistory();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;
      await setPersistence(auth, persistenceType);
      await signInWithEmailAndPassword(auth, email, password);
      // User signed in successfully
      console.log("User signed in successfully!");
      history.push("/dashboard"); // Redirect to the dashboard or appropriate route
    } catch (error) {
      // Handle errors
      setError("Invalid email or password.");
      console.error("Error signing in:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;
      await setPersistence(auth, persistenceType);
      await signInWithPopup(auth, googleProvider);
      // User signed in with Google successfully
      console.log("User signed in with Google successfully!");
      history.push("/dashboard"); // Redirect to the dashboard or appropriate route
    } catch (error) {
      // Handle errors
      setError(error.message);
      console.error("Error signing in with Google:", error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("User signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <CoverLayout
      title="Nice to see you!"
      color="white"
      description="Enter your email and password to sign in"
      image={bgSignIn}
      top={10}
      padding-top="45px"
    >
      {user ? (
        <VuiBox>
          <VuiTypography variant="h4" color="white">
            You are already signed in!
          </VuiTypography>
          <VuiBox mt={4} mb={1}>
            <VuiButton color="info" fullWidth onClick={handleSignOut}>
              SIGN OUT
            </VuiButton>
          </VuiBox>
        </VuiBox>
      ) : (
        <VuiBox component="form" role="form" onSubmit={handleSignIn}>
          <VuiBox mb={2}>
            <VuiBox mb={1} ml={0.5}>
              <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
                Email
              </VuiTypography>
            </VuiBox>
            <GradientBorder
              minWidth="100%"
              padding="1px"
              borderRadius={borders.borderRadius.lg}
              backgroundImage={radialGradient(
                palette.gradients.borderLight.main,
                palette.gradients.borderLight.state,
                palette.gradients.borderLight.angle
              )}
            >
              <VuiInput
                type="email"
                placeholder="Your email..."
                value={email}
                onChange={handleEmailChange}
                sx={({ typography: { size } }) => ({
                  fontSize: size.sm,
                })}
              />
            </GradientBorder>
          </VuiBox>
          <VuiBox mb={2}>
            <VuiBox mb={1} ml={0.5}>
              <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
                Password
              </VuiTypography>
            </VuiBox>
            <GradientBorder
              minWidth="100%"
              borderRadius={borders.borderRadius.lg}
              padding="1px"
              backgroundImage={radialGradient(
                palette.gradients.borderLight.main,
                palette.gradients.borderLight.state,
                palette.gradients.borderLight.angle
              )}
            >
              <VuiInput
                type="password"
                placeholder="Your password..."
                value={password}
                onChange={handlePasswordChange}
                sx={({ typography: { size } }) => ({
                  fontSize: size.sm,
                })}
              />
            </GradientBorder>
          </VuiBox>
          {error && (
            <VuiTypography color="error" mb={2} ml={0.5} variant="caption" fontWeight="medium">
              {error}
            </VuiTypography>
          )}

          <VuiBox display="flex" alignItems="center">
            <VuiSwitch color="info" checked={rememberMe} onChange={handleSetRememberMe} />
            <VuiTypography
              variant="caption"
              color="white"
              fontWeight="medium"
              onClick={handleSetRememberMe}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Remember me
            </VuiTypography>
          </VuiBox>
          <VuiBox mt={4} mb={1}>
            <VuiButton type="submit" color="info" fullWidth>
              SIGN IN
            </VuiButton>
          </VuiBox>
          <VuiBox mt={3} textAlign="center">
            <VuiTypography variant="button" color="text" fontWeight="regular">
              Don&apos;t have an account?{" "}
              <VuiTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="white"
                fontWeight="medium"
              >
                Sign up
              </VuiTypography>
            </VuiTypography>
          </VuiBox>
          <VuiBox mt={4} mb={1}>
            <VuiButton color="info" fullWidth onClick={handleGoogleSignIn}>
              <Icon as={FaGoogle} w="20px" h="20px" sx={{ mr: 1 }} />
              Sign in with Google
            </VuiButton>
          </VuiBox>
          {error && (
            <VuiBox mt={2}>
              <VuiTypography variant="caption" color="red" fontWeight="medium">
                {error}
              </VuiTypography>
            </VuiBox>
          )}
        </VuiBox>
      )}
    </CoverLayout>
  );
}

export default SignIn;
