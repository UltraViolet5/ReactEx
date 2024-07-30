import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React from "react";

type Props = {};

const SearchForm = (props: Props) => {
  return (
    <div>
      <div className="p-inputgroup flex-1">
        <InputText placeholder="Album search..." />
        <Button label="Search" />
      </div>
    </div>
  );
};

export default SearchForm;
