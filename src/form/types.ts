import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";

export enum FieldType {
  CHECKBOX,
  SELECT,
  TEXTFIELD,
  RADIOBUTTON,
}

export interface FieldConfig {
  type: FieldType;
  label: string;
  text?: string;
  itemsource?: string[];
  checked?: boolean;
}

export type FieldConfiguration<T> = {
  [K in keyof T]: FieldConfig;
};

export type OnDataChangeEvent =
  | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | SelectChangeEvent<string>;
