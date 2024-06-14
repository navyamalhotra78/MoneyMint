import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import colors from "assets/theme/base/colors";

function MiniStatisticsCard({ bgColor, title, count, percentage, icon, direction }) {
  const { info } = colors;
  const [isEditing, setIsEditing] = useState(false);
  const [editableCount, setEditableCount] = useState(count);
  const [editablePercentage, setEditablePercentage] = useState(percentage.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Implement save logic here
    setIsEditing(false);
  };

  const handleCountChange = (e) => {
    setEditableCount(e.target.value);
  };

  const handlePercentageChange = (e) => {
    setEditablePercentage(e.target.value);
  };

  const isNextBillDueDate = title.text === "Next Bill Due Date";

  return (
    <Card sx={{ padding: "17px" }}>
      <VuiBox>
        <VuiBox>
          <Grid container alignItems="center">
            {direction === "left" ? (
              <Grid item>
                <VuiBox
                  bgColor={info}
                  color="#fff"
                  width="3rem"
                  height="3rem"
                  borderRadius="lg"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  {icon.component}
                </VuiBox>
              </Grid>
            ) : null}
            <Grid item xs={8}>
              <VuiBox ml={direction === "left" ? 2 : 0} lineHeight={1}>
                <VuiTypography
                  variant="caption"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                  {title.text}
                </VuiTypography>
                <VuiBox display="flex" alignItems="center">
                  {isEditing && !isNextBillDueDate ? (
                    <TextField
                      variant="standard"
                      value={editableCount}
                      onChange={handleCountChange}
                      InputProps={{ style: { color: "white" } }}
                      autoFocus
                    />
                  ) : (
                    <VuiTypography variant="subtitle1" fontWeight="bold" color="white">
                      {editableCount}
                    </VuiTypography>
                  )}
                  {!isNextBillDueDate && (
                    <IconButton
                      onClick={isEditing ? handleSave : handleEdit}
                      size="small"
                      style={{ marginLeft: 8, color: "grey" }}
                    >
                      <Icon fontSize="small">
                        {isEditing ? "check" : "edit"}
                      </Icon>
                    </IconButton>
                  )}
                </VuiBox>
                <VuiTypography variant="button" color={percentage.color} fontWeight="bold">
                  {editablePercentage}
                </VuiTypography>
              </VuiBox>
            </Grid>
            {direction === "right" ? (
              <Grid item xs={4}>
                <VuiBox
                  bgColor="#0075FF"
                  color="white"
                  width="3rem"
                  height="3rem"
                  marginLeft="auto"
                  borderRadius="lg"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  <Icon fontSize="small" color="inherit">
                    {icon.component}
                  </Icon>
                </VuiBox>
              </Grid>
            ) : null}
          </Grid>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of MiniStatisticsCard
MiniStatisticsCard.defaultProps = {
  bgColor: "white",
  title: {
    fontWeight: "medium",
    text: "",
  },
  percentage: {
    color: "success",
    text: "",
  },
  direction: "right",
};

// Typechecking props for the MiniStatisticsCard
MiniStatisticsCard.propTypes = {
  bgColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  title: PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    component: PropTypes.node.isRequired,
  }).isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
};

export default MiniStatisticsCard;
