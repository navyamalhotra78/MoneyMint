// @mui material components
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

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
