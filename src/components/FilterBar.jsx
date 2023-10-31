import { Input, Select, HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";

const FilterBar = ({ searchQuery, selectedCategory, setSearchQuery, setSelectedCategory, uniqueCategories }) => {
  return (
    <HStack width={"50%"}>
      <Input
        placeholder="Search Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </HStack>
  );
};

FilterBar.propTypes = {
    searchQuery: PropTypes.string,
    selectedCategory: PropTypes.string,
    setSearchQuery: PropTypes.func,
    setSelectedCategory: PropTypes.func,
    uniqueCategories: PropTypes.arrayOf(PropTypes.string),
  };

export default FilterBar;
