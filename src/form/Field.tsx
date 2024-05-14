import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  SelectChangeEvent,
} from "@mui/material";
import { FieldType, FieldConfig, OnDataChangeEvent } from "./types";

interface FieldProps {
  name: string;
  config: FieldConfig;
  value: string | boolean;
  onDataChange: (e: OnDataChangeEvent) => void;
}

const Field: React.FC<FieldProps> = ({ name, config, value, onDataChange }) => {
  const { type, label, itemsource } = config;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onDataChange(e);
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    onDataChange({
      target: {
        name: event.target.name,
        value: event.target.value,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  switch (type) {
    case FieldType.TEXTFIELD:
      return (
        <TextField
          name={name}
          label={label}
          value={value as string}
          onChange={handleInputChange}
          fullWidth
        />
      );
    case FieldType.SELECT:
      return (
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select
            name={name}
            label={label}
            value={value as string}
            onChange={handleSelectChange}
          >
            {itemsource?.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    case FieldType.CHECKBOX:
      return (
        <FormControlLabel
          control={
            <Checkbox
              name={name}
              checked={value as boolean}
              onChange={handleInputChange}
            />
          }
          label={label}
        />
      );
    case FieldType.RADIOBUTTON:
      return (
        <FormControl component="fieldset">
          <RadioGroup
            name={name}
            value={value as string}
            onChange={handleInputChange}
          >
            {itemsource?.map((item) => (
              <FormControlLabel
                key={item}
                value={item}
                control={<Radio />}
                label={item}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    default:
      return null;
  }
};

export default Field;
