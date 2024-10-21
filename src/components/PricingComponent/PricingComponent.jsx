




import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  Divider,
  Badge,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Primary from './Primary/Primary'; // Assuming you still need Primary

const PricingTable = () => {
  const [dialogOpen, setDialogOpen] = useState(false); // Manage dialog open/close
  const [currentItem, setCurrentItem] = useState(null);

  const pricingItems = [
    { number: '01', title: 'Primary', bgcolor: '#FFE8E8', color: '#b3776d', component: Primary },
    { number: '02', title: 'Secondary', bgcolor: '#F0E9FF', color: '#896db3', component: Primary },
    { number: '03', title: 'One Time Charges', bgcolor: '#E7F8F8', color: '#6dafb3', component: Primary },
    { number: '04', title: 'Refundables', bgcolor: '#F9F1F1', color: '#6d80b3', component: Primary },
    { number: '05', title: 'Inventory Item', bgcolor: '#FFF9E3', color: '#b3a16d', component: Primary },
    { number: '06', title: 'Parking Slot', bgcolor: '#FFECEC', color: '#b3776d', component: Primary },
  ];

  const handleItemClick = (item) => {
    setCurrentItem(item);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setCurrentItem(null);
  };

  // Function to render the selected component with props
  const renderSelectedComponent = () => {
    if (currentItem) {
      const SelectedComponent = currentItem.component;
      return (
        <SelectedComponent
          bgColor={currentItem.bgcolor}
          color={currentItem.color}
          title={currentItem.title}
          onClose={handleCloseDialog}
        />
      );
    }
    return null;
  };

  return (
    <>
      {/* Pricing Table List */}
      <Dialog open={true} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontFamily: "Nunito Sans" }}>
          Pricing Table
          <IconButton
            aria-label="close"
            onClick={() => setDialogOpen(false)} // Close dialog on click
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <List>
          {pricingItems.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                backgroundColor: item.bgcolor,
                borderRadius: 2,
                my: 1,
                px: 2,
                width: '390px',
                height: '70px',
                boxSizing: 'border-box',
                marginLeft: '25px',
                marginRight: '25px',
                marginBottom: '10px',
                fontFamily: "Nunito Sans",
                cursor: 'pointer',
              }}
              onClick={() => handleItemClick(item)}
            >
              <ListItemIcon>
                <Badge
                  badgeContent={item.number}
                  overlap="circular"
                  sx={{
                    mr: 1,
                    ml: 3,
                    '& .MuiBadge-badge': {
                      backgroundColor: item.color,
                      color: '#fff',
                      fontWeight: 'light',
                      width: '23px',
                      height: '23px',
                      borderRadius: '50%',
                      fontSize: '10px',
                      fontFamily: "Nunito Sans",
                    }
                  }}
                />
              </ListItemIcon>
              
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontSize: '14px',
                  fontWeight: 'medium',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: item.color,
                  fontFamily: "Nunito Sans",
                }}
              />
              <InfoOutlinedIcon sx={{ color: '#dddde4', paddingRight: '10px', fontSize: '20px' }} />
              <KeyboardArrowRightIcon sx={{ color: item.color }} />
            </ListItem>
          ))}
        </List>
      </Dialog>

      {/* Component Dialog */}
      {dialogOpen && (
        <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{currentItem?.title}</Typography>
            <IconButton onClick={handleCloseDialog} sx={{ position: "absolute", right: "10px" }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {renderSelectedComponent()} {/* Render the corresponding component with props */}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default PricingTable;
