import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

function ProfileInfoCard({ title, description, info, social }) {
  const [editableInfo, setEditableInfo] = useState(info);
  const [isEditing, setIsEditing] = useState(false);
  const { size } = typography;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableInfo({ ...editableInfo, [name]: value });
  };

  const handleSave = () => {
    // Here you can handle the save functionality
    console.log("Saved info: ", editableInfo);
    setIsEditing(false);
  };

  const renderItems = Object.keys(editableInfo).map((label, key) => (
    <VuiBox key={label} display="flex" py={1} pr={2}>
      <VuiTypography variant="button" color="text" fontWeight="regular" textTransform="capitalize">
        {label}: &nbsp;
      </VuiTypography>
      {isEditing ? (
        <TextField
          variant="standard"
          name={label}
          value={editableInfo[label]}
          onChange={handleChange}
          InputProps={{ style: { color: "white" } }}
        />
      ) : (
        <VuiTypography variant="button" fontWeight="regular" color="white">
          &nbsp;{editableInfo[label]}
        </VuiTypography>
      )}
    </VuiBox>
  ));

  const renderSocial = social.map(({ link, icon, color }) => (
    <VuiBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.xl}
      color="white"
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </VuiBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox display="flex" mb="14px" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          {title}
        </VuiTypography>
        <Button onClick={() => setIsEditing(!isEditing)} variant="contained" color="primary">
          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </VuiBox>
      <VuiBox>
        <VuiBox mb={2} lineHeight={1}>
          <VuiTypography variant="button" color="text" fontWeight="regular">
            {description}
          </VuiTypography>
        </VuiBox>
        <VuiBox opacity={0.3}>
          <Divider />
        </VuiBox>
        <VuiBox>{renderItems}</VuiBox>
        <VuiBox display="flex" py={1} pr={2} color="white">
          <VuiTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
            social: &nbsp;
          </VuiTypography>
          {renderSocial}
        </VuiBox>
        {isEditing && (
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        )}
      </VuiBox>
    </Card>
  );
}

ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfileInfoCard;
