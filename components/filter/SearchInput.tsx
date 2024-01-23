"use client";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { useQueryParams } from "@/hooks/queryParams";

const SearchInput = () => {
  const [keyword, setKeyword] = useState("");
  const { setQueryParams } = useQueryParams();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    keyword && setQueryParams("keyword", keyword);
  };

  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <Input
          className="grow"
          placeholder="Keywords"
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />
        <Button size="icon">
          <Search size={14} />
        </Button>
      </form>
    </div>
  );
};

export default SearchInput;
