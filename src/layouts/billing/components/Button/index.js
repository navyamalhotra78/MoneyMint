// @mui/material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Button component
function Button() {
  const handleClick = () => {
    const url = "https://www.example.com"; // Change this to the desired URL
    window.open(url, '_blank');
  };

  return (
    <Card id="open-button-card" sx={{ height: "100%" }}>
      <VuiBox display="flex" justifyContent="center" alignItems="center" height="100%">
        <VuiButton
          variant="contained"
          color="info"
          size="medium"
          onClick={handleClick}
          sx={{ borderRadius: '8px' }}
        >
          Open New Tab
        </VuiButton>
      </VuiBox>
    </Card>
  );
}

export default Button;
