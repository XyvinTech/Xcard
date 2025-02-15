import React from "react";
import Select from "react-select";
import Box from "@mui/material/Box";

const StyledSelect = ({
  placeholder,
  isDisabled,
  options,
  onChange,
  value,
  isMulti,
}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: "auto",
      padding: "3px",
      border: "1px solid #A7A7A7",
      borderRadius: "6px",
      backgroundColor: "#292929",
      color: "#000000",
      boxShadow: state.isFocused ? "0 0 0 2px #fff" : "none",
      cursor: "pointer",
      "&:hover": {
        borderColor: "#A7A7A7",
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#000" : "transparent",
      color: state.isFocused ? "#ffffff" : "#fff",
      cursor: "pointer",
      ":active": {
        backgroundColor: "#000",
      },
    }),
    menu: (provided) => ({
      ...provided,
      position: "absolute",
      backgroundColor: "#292929",
      color: "#ffffff",
      fontSize: "14px",

      zIndex: 1000,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: isDisabled ? "#a0a0a0" : "#fff",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#8E8E8E",
      fontSize: "14px",
    }),
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      <Select
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        value={value}
        isMulti={isMulti}
        isDisabled={isDisabled}
        styles={customStyles}
      />
    </Box>
  );
};

export default StyledSelect;
