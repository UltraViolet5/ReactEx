import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useRef, useState } from "react";

type Props = {
  onSearch: (query: string) => void;
};

const SearchForm = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");
  // const query = useRef("");

  return (
    <form onSubmit={() => onSearch(query)}>
      <div className="p-inputgroup flex-1">
        <InputText
          placeholder="Album search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          // onChange={(e) => (query.current = e.target.value)}
        />

        <Button label="Search" type="submit" />
        {/* <Button label="Search" onClick={() => onSearch(query.current)} /> */}
      </div>
    </form>
  );
};

export default SearchForm;
