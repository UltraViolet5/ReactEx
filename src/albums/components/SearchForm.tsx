import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useRef, useState } from "react";
import { useDebounceEffect } from "./useDebounceEffect";

type Props = { query: string; onSearch: (query: string) => void };

const SearchForm = ({ onSearch, query: parentQuery }: Props) => {
  const [query, setQuery] = useState(parentQuery);

  useEffect(() => setQuery(parentQuery), [parentQuery]);

  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  useDebounceEffect(() => {
    if (parentQuery !== query) onSearch(query);
  }, [query]);

  return (
    <form onSubmit={submit}>
      <div className="p-inputgroup flex-1">
        <InputText
          placeholder="Album search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Button label="Search" type="submit" />
      </div>
    </form>
  );
};

export default SearchForm;
