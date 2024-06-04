// @mui material components
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";

export default {
  columns: [
    { name: "item", align: "left" },
    { name: "cost", align: "left" },
    { name: "category", align: "left" },
  ],

  rows: [
    {
      item: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium" mx="-15px">
            Dress
          </VuiTypography>
        </VuiBox>
      ),
      cost: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          ₹2,000
        </VuiTypography>
      ),
      category: (
        <VuiTypography variant="button" color="white" fontWeight="medium" mx="20px">
          Personal
        </VuiTypography>
      ),
    },
    {
      item: (
        <VuiBox display="flex" alignItems="center" mx="-15px">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Lunch
          </VuiTypography>
        </VuiBox>
      ),
      cost: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          ₹3,000
        </VuiTypography>
      ),
      category: (
        <VuiTypography variant="button" color="white" fontWeight="medium" mx="20px">
          Personal
        </VuiTypography>
      )
    },
    {
      item: (
        <VuiBox display="flex" alignItems="center" mx="-15px">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
           Eye Clinic
          </VuiTypography>
        </VuiBox>
      ),
      cost: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          ₹1,800
        </VuiTypography>
      ),
      category: (
        <VuiTypography variant="button" color="white" fontWeight="medium" mx="20px">
          Medical
        </VuiTypography>
      )
    }
  ],
};
