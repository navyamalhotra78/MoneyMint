//async function fetchTransactions() {
    
  //     if (user) {
  //       const q = query(collection(db, `users/${user.uid}/transactions`));
  //       const querySnapshot = await getDocs(q);
  //       let transactionsArray = [];
  //       querySnapshot.forEach((doc) => {
  //         // doc.data() is never undefined for query doc snapshots
  //         transactionsArray.push(doc.data());
  //       });
  //       setTransactions(transactionsArray);
  //       console.log(transactionsArray);
  //       console.log("Transactions Fetched!");
  //     }
  //   }


// // @mui material components
// import Icon from "@mui/material/Icon";

// // Vision UI Dashboard React components
// import VuiBox from "components/VuiBox";
// import VuiTypography from "components/VuiTypography";

// export default {
//   columns: [
//     { name: "category", align: "left" },
//     { name: "cost", align: "left" },
//   ],

//   rows: [
//     {
//       category: (
//         <VuiBox display="flex" alignItems="center">
//           <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium" mx="-15px">
//             Expense
//           </VuiTypography>
//         </VuiBox>
//       ),
//       cost: (
//         <VuiTypography variant="button" color="white" fontWeight="medium">
//           ₹1,000
//         </VuiTypography>
//       ),
      
//     },
//     {
//       category: (
//         <VuiBox display="flex" alignItems="center" mx="-15px">
//           <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
//             Income
//           </VuiTypography>
//         </VuiBox>
//       ),
//       cost: (
//         <VuiTypography variant="button" color="white" fontWeight="medium">
//           ₹50,000
//         </VuiTypography>
//       ),
     
//     },
    
//   ],
// };

import React from "react";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

const generateRows = (transactions) => {
  return transactions.map((transaction) => ({
    category: (
      <VuiBox display="flex" alignItems="center">
        <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium" mx="-15px">
          {transaction.type}
        </VuiTypography>
      </VuiBox>
    ),
    cost: (
      <VuiTypography variant="button" color="white" fontWeight="medium">
        ₹{transaction.amount}
      </VuiTypography>
    ),
  }));
};

export default (transactions) => ({
  columns: [
    { name: "category", align: "left" },
    { name: "cost", align: "left" },
  ],
  rows: generateRows(transactions),
});
