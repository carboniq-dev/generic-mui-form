# Generic MUI Form

This code contains a reusable and customizable form component built with React, Typescript and Material-UI. It allows you to dynamically generate forms based on a configuration object.

## Features

- Dynamic form generation from a configuration object
- Supports various field types: TextField, Select, Checkbox, and RadioButton
- Type-safe configuration to ensure keys match the form data interface
- Handles form state and data changes internally
- Customizable field labels and default values

## Usage

1. Define field types and configurations.
2. Create the form configuration object.
3. Add the form to your view and set the required properties.

## Example

### Config

```js
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
```

### Form

```js
<Form<PersonalDataForm>
  config={personalDataConfig}
  title={"Personal Data"}
  onSave={handleSave}
/>
```
