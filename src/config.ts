import { FieldConfiguration, FieldType } from "./form/types";

export interface PersonalDataForm {
  email: string;
  country: string;
  gender: string;
  subscribe: boolean;
}

export const personalDataConfig: FieldConfiguration<PersonalDataForm> = {
  email: {
    type: FieldType.TEXTFIELD,
    label: "Email",
    text: "",
  },
  country: {
    type: FieldType.SELECT,
    label: "Country",
    text: "",
    itemsource: ["Country A", "Country B", "Country C"],
  },
  gender: {
    type: FieldType.RADIOBUTTON,
    label: "Gender",
    text: "",
    itemsource: ["Male", "Female", "Other"],
  },
  subscribe: {
    type: FieldType.CHECKBOX,
    label: "Subscribe to newsletter",
    checked: true,
  },
};
