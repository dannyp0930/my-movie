import React, { useEffect, useRef, useState, KeyboardEvent } from "react";
import { Navbar, NavbarLink, SearchButton, SearchInput } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target as Node)
      ) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchInputRef]);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        alert("검색어를 입력하세요");
      } else {
        navigate("/search", { state: e.target.value });
      }
    }
  }

  return (
    <Navbar>
      <NavbarLink to="/">Home</NavbarLink>
      <div ref={searchInputRef}>
        {showSearch ? (
          <SearchInput
            onKeyDown={handleKeyDown}
            placeholder="제목을 검색하세요"
          />
        ) : (
          <SearchButton onClick={() => setShowSearch(true)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
          </SearchButton>
        )}
      </div>
    </Navbar>
  );
}

export default Navigation;
