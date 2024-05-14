import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Field from "./Field";
import { FieldConfiguration, OnDataChangeEvent } from "./types";

interface FormProps<T> {
  config: FieldConfiguration<T>;
  title: string;
  onSave: (formData: T) => void;
}

type FormValue = string | boolean;

export type FormDataState = {
  [key: string]: FormValue;
};

const Form = <T,>({ config, title, onSave }: FormProps<T>) => {
  const [formData, setFormData] = React.useState<FormDataState>(() =>
    Object.keys(config).reduce((acc: FormDataState, key) => {
      acc[key] =
        config[key as keyof T].text || config[key as keyof T].checked || "";
      return acc;
    }, {})
  );

  const onDataChangeHandler = (e: OnDataChangeEvent) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const newValue: FormValue =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : (value as string);
    setFormData((prevFormData: FormDataState) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const saveFormDataHandler = () => {
    onSave(formData as T);
  };

  return (
    <Stack mt={2} spacing={2}>
      {title && (
        <Typography variant="h5" component="h5" gutterBottom pb={1}>
          {title}
        </Typography>
      )}
      {Object.keys(config).map((key) => (
        <Field
          key={key}
          name={key}
          config={config[key as keyof T]}
          value={formData[key]}
          onDataChange={onDataChangeHandler}
        />
      ))}
      <Button variant="contained" color="primary" onClick={saveFormDataHandler}>
        Save
      </Button>
    </Stack>
  );
};

export default Form;
