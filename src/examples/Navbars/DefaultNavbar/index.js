import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";
import breakpoints from "assets/theme/base/breakpoints";
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function DefaultNavbar({ transparent, light, action }) {
  const { borderCol } = colors;
  const { borderWidth } = borders;
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    window.addEventListener("resize", displayMobileNavbar);
    displayMobileNavbar();
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const location = useLocation();

  // Define the sign-up route as an absolute path
  const signUpRoute = '/authentication/sign-up';
  const signInRoute = '/authentication/sign-in';
  
  // Conditionally render the "Sign Up" and "Sign In" links based on the current route
  const renderSignUpLink = location.pathname !== signUpRoute;
  const renderSignInLink = location.pathname !== signInRoute;

  return (
    <Container>
      <VuiBox
        py={2}
        px={{ xs: transparent ? 4 : 3, sm: transparent ? 2 : 3, lg: transparent ? 0 : 3 }}
        my={2}
        border={`${borderWidth[1]} solid ${borderCol.navbar}`}
        width="calc(100% - 48px)"
        borderRadius="xl"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left="50%"
        zIndex={3}
        maxWidth="1044px"
        sx={({ palette: { gradients }, functions: { linearGradient } }) => ({
          backgroundColor: linearGradient(
            gradients.navbar.main,
            gradients.navbar.state,
            gradients.navbar.deg
          ),
          backdropFilter: "blur(42px)",
          transform: "translate(-50%, 0px)",
        })}
      >
        <VuiBox component={Link} to="/" py={transparent ? 1.5 : 0.75} lineHeight={1}>
          <VuiTypography
            variant="button"
            textGradient={false}
            color="white"
            fontSize={25}
            letterSpacing={2}
            fontWeight="medium"
            sx={{
              margin: "0 auto",
            }}
          >
            MoneyMint
          </VuiTypography>
        </VuiBox>
        <VuiBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
          <DefaultNavbarLink icon="donut_large" name="dashboard" route="/dashboard" />
          <DefaultNavbarLink icon="person" name="profile" route="/profile" />
          {renderSignUpLink && (
            <Link to="/authentication/sign-up">
              <DefaultNavbarLink
                icon="account_circle"
                name="Sign Up"
                route="/authentication/sign-up"
              />
            </Link>
          )}
          {renderSignInLink && (
            <Link to="/authentication/sign-in">
              <DefaultNavbarLink
                icon="key"
                name="Sign In"
                route="/authentication/sign-in"
              />
            </Link>
          )}
          <DefaultNavbarLink icon="logout" name="log out" />
        </VuiBox>
        {action &&
          (action.type === "internal" ? (
            <VuiBox display={{ xs: "none", lg: "inline-block" }}>
              <VuiButton
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
              >
                {action.label}
              </VuiButton>
            </VuiBox>
          ) : (
            <VuiBox display={{ xs: "none", lg: "inline-block" }}>
              <VuiButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color={action.color ? action.color : "info"}
                sx={({ typography: { size }, functions: { pxToRem } }) => ({
                  fontSize: pxToRem(size.sm),
                })}
              >
                {action.label}
              </VuiButton>
            </VuiBox>
          ))}
        <VuiBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon
            sx={({ palette: { white } }) => ({
              color: white.main,
            })}
            fontSize="default"
          >
            {mobileNavbar ? "close" : "menu"}
          </Icon>
        </VuiBox>
      </VuiBox>
      {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />}
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
