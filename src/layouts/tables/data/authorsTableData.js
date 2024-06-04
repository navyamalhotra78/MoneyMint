// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

// Images
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";
import avatar5 from "assets/images/avatar5.png";
import avatar6 from "assets/images/avatar6.png";

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

function Function({ amt }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="caption" fontWeight="medium" color="white">
      ₹ {amt}
      </VuiTypography>
    </VuiBox>
  );
}

export default {
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
        <VuiBadge
          variant="standard"
          badgeContent="Paid"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      due: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          23/04/18
        </VuiTypography>
      )
    },
    {
      name: <Author name="Car Loan Installment" />,
      amount: <Function amt="10000" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Pending"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      due: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          11/01/19
        </VuiTypography>
      )
    },
    {
      name: <Author name="Car Loan Installment"/>,
      amount: <Function amt="10000" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Paid"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      due: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          19/09/17
        </VuiTypography>
      )
    }
  ],
};
