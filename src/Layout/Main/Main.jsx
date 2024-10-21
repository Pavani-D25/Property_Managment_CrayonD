import React from 'react';
import { Box ,Button} from '@mui/material';
import LeadDetails from '../../components/LeadDetails/LeadDetails';
import UnitDetails from '../../components/LeadDetails/UnitDetails';
import Sidebar from '../../components/Sidebar/Sidebar';
import QuotationSummary from '../../components/LeadDetails/QuotationSummary';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import SecondaryNavBar from '../../components/SecondaryNavBar/SecondaryNavBar'; // Make sure to import your SecondaryNavBar component
import MainContent from '../../components/MainContent/MainContent';

function Main() {
  return (
    <Box>
      <TopNavBar />
      <Box sx={{ display: 'flex',backgroundColor:"rgb(246,248,250)" }}>
        <Sidebar /> {/* Render the Sidebar on the left */}
        
        <Box
          sx={{
            flexGrow: 1, 
            display: 'flex',       
            flexDirection: 'column', 
            
          }}
        >
          <SecondaryNavBar /> 
          <Box
            sx={{
              flexGrow: 1,     
              display: 'flex',     
           
              //  backgroundColor:'red',    
               alignItems:"center",
               height:"80vh",
               justifyContent:"center"
                  
            }}
          >
           <MainContent />
          </Box>
         
        </Box>
      </Box>
    </Box>
  );
}

export default Main;
