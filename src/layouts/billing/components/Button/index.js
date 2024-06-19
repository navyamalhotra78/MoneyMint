// @mui/material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";

// Button component
function Button() {
  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/run-shiny'); // Backend server URL
      if (response.ok) {
        const data = await response.json();
        const shinyPort = data.shinyPort;
        window.open(`http://127.0.0.1:${shinyPort}`, '_blank'); // Open Shiny app with dynamic port
      } else {
        console.error('Failed to start Shiny app');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
          Open Shiny App
        </VuiButton>
      </VuiBox>
    </Card>
  );
}

export default Button;
