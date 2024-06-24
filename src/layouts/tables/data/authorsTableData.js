import React, { useState } from "react";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Dropdown component for Paid/Unpaid status
function StatusDropdown({ initialStatus, onUpdateStatus }) {
  const [status, setStatus] = useState(initialStatus);

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus); // Update local state
    onUpdateStatus(newStatus); // Notify parent component
  };

  // CSS style for the select element
  const selectStyle = {
    border: "none",
    outline: "none",
    background: "transparent", // Transparent background
    color: "white", // White text color
    fontFamily: "inherit",
    cursor: "pointer",
    padding: "8px", // Add padding for better spacing
  };

  // CSS style for the options within the select element
  const optionStyle = {
    background: "transparent", // Blue background color for options
    color: "black", // White text color for options
  };

  return (
    <VuiBox display="inline-block" position="relative">
      <select
        value={status}
        onChange={handleStatusChange}
        style={selectStyle}
      >
        <option value="Paid" style={optionStyle}>Paid</option>
        <option value="Pending" style={optionStyle}>Pending</option>
      </select>
    </VuiBox>
  );
}

// Author component (unchanged)
function Author({ name }) {
  return (
    <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="button" color="white" fontWeight="medium">
          {name}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

// Function component for displaying amount (unchanged)
function Function({ amt }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="caption" fontWeight="medium" color="white">
        ₹ {amt}
      </VuiTypography>
    </VuiBox>
  );
}

// Main data structure with columns and rows (updated with StatusDropdown usage)
const data = {
  columns: [
    { name: "name", align: "left" },
    { name: "amount", align: "left" },
    { name: "status", align: "center" },
    { name: "due", align: "center" }
  ],
  rows: [
    {
      name: <Author name="Car Loan Installment" />,
      amount: <Function amt="10000" />,
      status: (
        <StatusDropdown
          initialStatus="Paid"
          onUpdateStatus={(newStatus) => console.log("Updated status:", newStatus)}
        />
      ),
      due: <VuiTypography variant="caption" color="white" fontWeight="medium">23/04/18</VuiTypography>
    },
    {
      name: <Author name="Car Loan Installment" />,
      amount: <Function amt="10000" />,
      status: (
        <StatusDropdown
          initialStatus="Pending"
          onUpdateStatus={(newStatus) => console.log("Updated status:", newStatus)}
        />
      ),
      due: <VuiTypography variant="caption" color="white" fontWeight="medium">11/01/19</VuiTypography>
    },
    {
      name: <Author name="Car Loan Installment" />,
      amount: <Function amt="10000" />,
      status: (
        <StatusDropdown
          initialStatus="Paid"
          onUpdateStatus={(newStatus) => console.log("Updated status:", newStatus)}
        />
      ),
      due: <VuiTypography variant="caption" color="white" fontWeight="medium">19/09/17</VuiTypography>
    }
  ]
};

export default data;
