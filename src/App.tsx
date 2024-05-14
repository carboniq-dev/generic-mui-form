import React from "react";
import { Container } from "@mui/material";
import Form from "./form/Form";
import { PersonalDataForm, personalDataConfig } from "./config";

const App: React.FC = () => {
  const handleSave = (formData: PersonalDataForm) => {
    alert(JSON.stringify(formData));
  };

  return (
    <Container maxWidth="xs">
      <Form<PersonalDataForm>
        config={personalDataConfig}
        title={"Personal Data"}
        onSave={handleSave}
      />
    </Container>
  );
};

export default App;
