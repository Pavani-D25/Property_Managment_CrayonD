// import React from "react";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableRow from "@mui/material/TableRow";
// import Divider from "@mui/material/Divider";
// import TableHead from "@mui/material/TableHead";

// const QuotationSummary = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
   
//         width: "380px",
//         height: "57vh",
//         bgcolor: "white",
//         borderRadius: "2px",
//         padding: "16px",
        

//         boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
//         backgroundColor: "#f5f7fa",
       
//       }}
//     >
//       {/* Table for Main Content */}
//       <Box sx={{ flexGrow: 1 }}>
//         <TableContainer>
//           <Table size="small" aria-label="quotation details" padding="12px">
//             <TableHead>
//               <TableRow>
//                 <TableCell
//                   sx={{
//                     fontSize: "10px",
//                     color: "#6B7280",
//                     fontWeight: "500",
//                     padding: "8px 0",
                    
//                   }}
//                 >
//                   DESCRIPTION
//                 </TableCell>
//                 <TableCell
//                   align="left"
//                   sx={{
//                     fontSize: "10px",
//                     color: "#6B7280",
//                     fontWeight: "500",
//                     padding: "8px 0",
                 
//                   }}
//                 >
//                   QTY
//                 </TableCell>
//                 <TableCell
//                   align="right"
//                   sx={{
//                     fontSize: "10px",
//                     color: "#6B7280",
//                     fontWeight: "500",
//                     padding: "8px 0",
                   
//                   }}
//                 >
//                   AMOUNT
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {/* Total Amount Row */}
//               <TableRow padding="12px">
//                 <TableCell
//                   sx={{
//                     fontSize: "12px",
//                     color: "rgb(120,130,143)",
//                     borderBottom: "none",
//                     padding: "8px 0",
              
//                   }}
//                 >
//                   Total Amount
//                 </TableCell>
//                 <TableCell
//                   align="left" // Left align
//                   sx={{
//                     fontSize: "12px",
//                    color:"black",
//                     borderBottom: "none",
//                     padding: "8px 0",
//                      fontWeight:"bold"
                   
//                   }}
//                 >
//                   3
//                 </TableCell>
//                 <TableCell
//                   align="right"
//                   sx={{
                
//                     fontSize: "12px",
//                     color: "black",
//                     borderBottom: "none",
//                     padding: "8px 0",
//                      fontWeight:"bold"
                    
//                   }}
//                 >
//                   $ 3,600.00
//                 </TableCell>
//               </TableRow>

//               {/* Total Discount Row */}
//               <TableRow padding="12px">
//                 <TableCell
//                   sx={{
//                     fontSize: "12px",
//                     color: "rgb(120,130,143)",
//                     borderBottom: "none",
//                     padding: "8px 0",
                
                    
//                   }}
//                 >
//                   Total Discount
//                 </TableCell>
//                 <TableCell
//                   align="left" // Left align
//                   sx={{
//                     fontSize: "12px",
//                     color: "black",
//                     borderBottom: "none",
//                     padding: "8px 0",
//                      fontWeight:"bold"
                    
//                   }}
//                 >
//                   10%
//                 </TableCell>
//                 <TableCell
//                   align="right"
//                   sx={{
//                     fontSize: "12px",
//                     borderBottom: "none",
//                     padding: "8px 0",
                
//                      fontWeight:"bold"
//                   }}
//                 >
//                   - $ 100.00
//                 </TableCell>
//               </TableRow>
//               {/* Divider below Total Discount */}
//               <TableRow>
//                 <TableCell colSpan={3} sx={{ padding: 0 ,height:"0.01px"}}>
//                   <Divider height="0.5px" />
//                 </TableCell>
//               </TableRow>

//               {/* Total Refundable Row */}
//               <TableRow>
//                 <TableCell
//                   sx={{
//                     fontSize: "12px",
//                     color: "rgb(120,130,143)",
//                     borderBottom: "none",
//                     padding: "12px 0",

                
               
//                   }}
//                 >
//                   Total Refundable
//                 </TableCell>
//                 <TableCell
//                   align="left" // Left align
//                   sx={{
//                     fontSize: "12px",
//                     color: "black",
//                     borderBottom: "none",
//                     padding: "8px 0",
//                      fontWeight:"bold"
         
//                   }}
//                 >
//                   0%
//                 </TableCell>
//                 <TableCell
//                   align="right"
//                   sx={{
              
//                     fontSize: "12px",
//                     color: "#1F2937",
//                     borderBottom: "none",
//                     padding: "12px 0",
//                      fontWeight:"bold"
                 
//                   }}
//                 >
//                   $ 0
//                 </TableCell>
//               </TableRow>
//               {/* Divider below Total Refundable */}
//               <TableRow>
//                 {/* <TableCell colSpan={3} sx={{ padding: 0,  }}>
//                   <Divider />
//                 </TableCell> */}

//                 <TableCell colSpan={3} sx={{ padding: "0" ,height:"0.01px"}}>
//                   <Divider  height="0.5px" />
//                 </TableCell>
//               </TableRow>

//               {/* Total Tax Row */}
//               <TableRow>
//                 <TableCell
//                   sx={{
//                     fontSize: "12px",
//                     color: "rgb(120,130,143)",
//                     borderBottom: "none",
//                     padding: "12px 0",
                    
                   
//                   }}
//                 >
//                   Total Tax
//                 </TableCell>
//                 <TableCell
//                   align="left" // Left align
//                   sx={{
//                     fontSize: "12px",
//                     color: "black",
//                     borderBottom: "none",
//                     padding: "8px 0",
//                     fontWeight:"bold"
                   
//                   }}
//                 >
//                   18%
//                 </TableCell>
//                 <TableCell
//                   align="right"
//                   sx={{
                    
//                     fontSize: "12px",
//                     color: "#1F2937",
//                     borderBottom: "none",
//                     padding: "8px 0",
//                      fontWeight:"bold"
      
//                   }}
//                 >
//                   $ 648.00
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell colSpan={3} sx={{ padding: 0 }}>
//                   <Divider height={"0.5px"} />
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>

//       <Box>
//         {/* Divider */}
//         <Divider sx={{ marginY: 2 }} />

//         <Box
//           display="flex"
//           justifyContent="space-between"
//           sx={{
//             fontWeight: "bold",
//             fontSize: "16px",
//             color: "#1F2937", // Darker shade for the final amount
//           }}
//         >
//           <Box>Quote Amount</Box>
//           <Box>$ 4,148.00</Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default QuotationSummary;



import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';
import TableHead from '@mui/material/TableHead';

const QuotationSummary = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '340px', // Adjusted for a compact look
        height: '57vh', // Incorporating height from the first code
        bgcolor: 'white',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f5f7fa',
        fontFamily: 'Nunito Sans', // Common font used in the second version
      }}
    >
      {/* Table for Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        <TableContainer>
          <Table size="small" aria-label="quotation details">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: '10px',
                    color: '#6B7280',
                    fontWeight: '600',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                  }}
                >
                  DESCRIPTION
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: '10px',
                    color: '#6B7280',
                    fontWeight: '600',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                  }}
                >
                  QTY
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: '10px',
                    color: '#6B7280',
                    fontWeight: '600',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                  }}
                >
                  AMOUNT
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Total Amount Row */}
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    color: '#6B7280',
                    borderBottom: 'none',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                    fontWeight: 'bold',
                  }}
                >
                  Total Amount
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: '14px',
                    color: '#6B7280',
                    borderBottom: 'none',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                  }}
                >
                  3
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '14px',
                    color: '#1F2937',
                    borderBottom: 'none',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                  }}
                >
                  $ 3,600.00
                </TableCell>
              </TableRow>

              {/* Total Discount Row */}
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    color: '#6B7280',
                    borderBottom: 'none',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                    fontWeight: 'bold',
                  }}
                >
                  Total Discount
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: '14px',
                    color: '#6B7280',
                    borderBottom: 'none',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                  }}
                >
                  10%
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: '14px',
                    borderBottom: 'none',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                  }}
                >
                  - $ 100.00
                </TableCell>
              </TableRow>

              {/* Divider below Total Discount */}
              <TableRow>
                <TableCell colSpan={3} sx={{ padding: '0' }}>
                  <Divider />
                </TableCell>
              </TableRow>

              {/* Total Refundable Row */}
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    color: '#6B7280',
                    borderBottom: 'none',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                    fontWeight: 'bold',
                  }}
                >
                  Total Refundable
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: '14px',
                    color: '#6B7280',
                    borderBottom: 'none',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                  }}
                >
                  0%
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '14px',
                    color: '#1F2937',
                    borderBottom: 'none',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                  }}
                >
                  $ 0
                </TableCell>
              </TableRow>

              {/* Divider below Total Refundable */}
              <TableRow>
                <TableCell colSpan={3} sx={{ padding: '0' }}>
                  <Divider />
                </TableCell>
              </TableRow>

              {/* Total Tax Row */}
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    color: '#6B7280',
                    borderBottom: 'none',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                    fontWeight: 'bold',
                  }}
                >
                  Total Tax
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: '14px',
                    color: '#6B7280',
                    borderBottom: 'none',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                  }}
                >
                  18%
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '14px',
                    color: '#1F2937',
                    borderBottom: 'none',
                    padding: '8px 0',
                    fontFamily: 'Nunito Sans',
                  }}
                >
                  $ 648.00
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={3} sx={{ padding: '0' }}>
                  <Divider />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        {/* Divider */}
        <Divider sx={{ marginY: 2 }} />

        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#1F2937', // Darker shade for the final amount
          }}
        >
          <Box>Quote Amount</Box>
          <Box>$ 4,148.00</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuotationSummary;
