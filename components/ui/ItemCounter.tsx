import { FC } from "react";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import { Box, IconButton, Typography } from "@mui/material";

interface Props {
  currentValue: number;
  maxValue: number;
  updatedQuantity: (newValue: number) => void;
}

export const ItemCounter: FC<Props> = ({ currentValue, updatedQuantity, maxValue }) => {
  const addOrRemove = (value: number) => {
    updatedQuantity(Math.min(Math.max(currentValue + value, 1), maxValue));
  };

  return (
    <Box display='flex' alignItems='center'>
      <IconButton onClick={() => addOrRemove(-1)}>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}> {currentValue} </Typography>
      <IconButton onClick={() => addOrRemove(+1)}>
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
};
