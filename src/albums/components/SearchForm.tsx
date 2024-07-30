import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useRef, useState } from "react";

type Props = {
  onSearch: (query?: string) => void;
};

const SearchForm = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");
  // const query = useRef("");

  return (
    <div>
      <div className="p-inputgroup flex-1">
        <InputText
          placeholder="Album search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          // onChange={(e) => (query.current = e.target.value)}
        />

        <Button label="Search" onClick={() => onSearch(query)} />
        {/* <Button label="Search" onClick={() => onSearch(query.current)} /> */}
      </div>
    </div>
  );
};

export default SearchForm;
