


import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
  Box,
  Dialog,
  DialogContent,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import HotelIcon from "@mui/icons-material/Hotel";
import { GoHome } from "react-icons/go";
import { LuBath } from "react-icons/lu";
import AddIcon from "@mui/icons-material/Add";
import Dropdown from "../Dropdown/Dropdown";
import Amenities from "../Amenities/Amenities";
import PricingComponent from "../PricingComponent/PricingComponent";
import Utilities from "../Utilities/Utilities";
import Discount2 from "../Discount/RemoveComponent";
import house from "../../assets/house.jpg"; // Adjust the image path as necessary

const unitsData = [
  {
    id: 1,
    name: "Jumeirah Estate",
    price: "$900.00",
    description: "Golf Estate",
    sqrFt: 2000,
    img: house,
    hotelCount: 3,
    bedCount: 3,
    homeCount: "2BHK",
  },
  {
    id: 2,
    name: "Burj Khalifa",
    price: "$1,200.00",
    description: "Downtown Dubai",
    sqrFt: 2500,
    img: house,
    hotelCount: 2,
    bedCount: 2,
    homeCount: "2BHK",
  },
  {
    id: 3,
    name: "Palm Jumeirah",
    price: "$1,800.00",
    description: "Palm Island",
    sqrFt: 2500,
    img: house,
    hotelCount: 4,
    bedCount: 3,
    homeCount: "2BHK",
  },
  {
    id: 4,
    name: "Dubai Marina",
    price: "$1,500.00",
    description: "Dubai Marina",
    sqrFt: 2500,
    img: house,
    hotelCount: 3,
    bedCount: 3,
    homeCount: "2BHK",
  },
  {
    id: 5,
    name: "Dubai Marina",
    price: "$1,500.00",
    description: "Dubai Marina",
    sqrFt: 2500,
    img: house,
    hotelCount: 3,
    bedCount: 3,
    homeCount: "2BHK",
  },
];

const UnitDetails = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const dropdownOptions = [
    "Add Pricing Component",
    "Add Amenities",
    "Add Utilities",
    "Add Discount",
    "Remove Component",
  ];

  const handleDropdownToggle = (event) => {
    setShowDropDown((prev) => !prev);
    setAnchorEl(event.currentTarget);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (
      option === "Add Pricing Component" ||
      option === "Add Amenities" ||
      option === "Add Utilities" ||
      option === "Add Discount"
    ) {
      setDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedOption(null);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
        padding: "10px",
        overflowY: "auto",
        maxHeight: "58vh",
      }}
    >
      {unitsData.map((unit) => (
        <Card
          key={unit.id}
          sx={{
            width: "220px",
            height: "260px",
            borderRadius: 2,
            boxShadow: 3,
            border: "1px solid #e0e0e0",
            fontFamily: "Nunito Sans",
          }}
        >
          <Box sx={{ position: "relative", padding: "10px" }}>
            <CardMedia
              component="img"
              image={unit.img}
              alt={unit.name}
              sx={{
                height: "100px",
                width: "198px",
                borderRadius: "5px",
              }}
            />
            <IconButton
              aria-label="delete"
              color="error"
              sx={{
                position: "absolute",
                top: 15,
                right: 15,
                width: 24,
                height: 24,
                backgroundColor: "#fff",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              <DeleteOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
          <CardContent sx={{ paddingBottom: "8px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: "15px", fontFamily: "Nunito Sans" }}
              >
                {unit.name}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#1c1c1c",
                  fontSize: "1rem",
                  fontFamily: "Nunito Sans",
                }}
              >
                {unit.price}
              </Typography>
            </Box>
            <Typography
              color="text.secondary"
              sx={{
                marginBottom: 1,
                fontSize: "12px",
                fontFamily: "Nunito Sans",
              }}
            >
              {unit.description} • {unit.sqrFt} sqft
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                marginTop: 1,
                color: "#757575",
                fontFamily: "Nunito Sans",
              }}
            >
              <HotelIcon fontSize="small" /> {unit.hotelCount}
              <LuBath fontSize="small" /> {unit.bedCount}
              <GoHome fontSize="small" /> {unit.homeCount}
            </Box>
          </CardContent>
          <CardActions
            sx={{
              justifyContent: "center",
              paddingTop: "4px",
              paddingBottom: "10px",
            }}
          >
            <Button
              onClick={handleDropdownToggle}
              variant="text"
              color="primary"
              sx={{
                textTransform: "none",
                color: "#007bff",
                fontFamily: "Nunito Sans",
              }}
            >
              <AddIcon fontSize="small" sx={{ mr: 1 }} />
              Customize
            </Button>
          </CardActions>
        </Card>
      ))}

      {showDropDown && (
        <Dropdown sx={{            fontFamily: "Nunito Sans",
        }}
          setShowDropDown={() => setShowDropDown(false)}
          options={dropdownOptions}
          anchorEl={anchorEl}
          onOptionSelect={handleOptionSelect}
        />
      )}

      {selectedOption === "Add Pricing Component" && (
        <Dialog sx={{            fontFamily: "Nunito Sans",
        }} open={dialogOpen} onClose={handleCloseDialog}>
          <DialogContent>
            <PricingComponent />
          </DialogContent>
        </Dialog>
      )}

      {selectedOption  === "Add Amenities" && (
        <Dialog sx={{            fontFamily: "Nunito Sans",
        }} open={dialogOpen} onClose={handleCloseDialog}>
          <DialogContent>
            <Amenities close={handleCloseDialog} />
          </DialogContent>
        </Dialog>
      )}

      {selectedOption === "Add Utilities" && (
        <Dialog sx={{            fontFamily: "Nunito Sans",
        }}open={dialogOpen} onClose={handleCloseDialog}>
          <DialogContent>
            <Utilities close={handleCloseDialog} />
          </DialogContent>
        </Dialog>
      )}

      {selectedOption === "Remove Component" && (
        <Dialog sx={{            fontFamily: "Nunito Sans",
        }} open={dialogOpen} onClose={handleCloseDialog}>
          <Discount2 close={handleCloseDialog} />
        </Dialog>
      )}
    </Box>
  );
};

export default UnitDetails;
