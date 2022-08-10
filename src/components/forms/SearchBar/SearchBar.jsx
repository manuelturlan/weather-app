import React, { useState } from "react";
import { Form, InputButton, InputText } from "./SearchBar.styles";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(input)
        setInput('');
      }}
    >
      <InputText  type="text" value={input} placeholder="Buscar ciudad..." onChange={(e) => setInput(e.target.value)}></InputText>
      <InputButton type="submit" value="Agregar"></InputButton>
    </Form>
  );
};

export default SearchBar;
