import { useState, useEffect } from "react";
import { ChakraProvider, Box, HStack, Center, Skeleton } from "@chakra-ui/react";
import CustomAccordion from "./components/Accordion";
import axios from "axios";
import FilterBar from "./components/FilterBar";

const entries = [
  {
    API: "AdoptAPet",
    Description: "Resource to help get pets adopted",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "yes",
    Link: "https://www.adoptapet.com/public/apis/pet_list.html",
    Category: "Animals",
  },
  {
    API: "Axolotl",
    Description: "Collection of axolotl pictures and facts",
    Auth: "",
    HTTPS: true,
    Cors: "no",
    Link: "https://theaxolotlapi.netlify.app/",
    Category: "Animals",
  },
  {
    API: "Cat Facts",
    Description: "Daily cat facts",
    Auth: "",
    HTTPS: true,
    Cors: "no",
    Link: "https://alexwohlbruck.github.io/cat-facts/",
    Category: "Animals",
  },
  {
    API: "Cataas",
    Description: "Cat as a service (cats pictures and gifs)",
    Auth: "",
    HTTPS: true,
    Cors: "no",
    Link: "https://cataas.com/",
    Category: "Animals",
  },
  {
    API: "Cats",
    Description: "Pictures of cats from Tumblr",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "no",
    Link: "https://docs.thecatapi.com/",
    Category: "Animals",
  },
  {
    API: "AnimeNewsNetwork",
    Description: "Anime industry news",
    Auth: "",
    HTTPS: true,
    Cors: "yes",
    Link: "https://www.animenewsnetwork.com/encyclopedia/api.php",
    Category: "Anime"
},
{
    API: "Colormind",
    Description: "Color scheme generator",
    Auth: "",
    HTTPS: false,
    Cors: "unknown",
    Link: "http://colormind.io/api-access/",
    Category: "Art & Design"
},
{
  API: "The Graph",
  Description: "Indexing protocol for querying networks like Ethereum with GraphQL",
  Auth: "apiKey",
  HTTPS: true,
  Cors: "unknown",
  Link: "https://thegraph.com",
  Category: "Blockchain"
}
];

const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.publicapis.org/entries");
        setData(response?.data?.entries);
        // setData(entries);
        setError(null);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(
    (item) =>
      (selectedCategory === "All" || item.Category === selectedCategory) &&
      item?.API.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const uniqueCategories = [...new Set(data.map((item) => item.Category))];

  return (
    <ChakraProvider>
      <Box p={4}>
        <HStack mb={"40px"} justifyContent={"center"}>
          <FilterBar
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            setSearchQuery={setSearchQuery}
            setSelectedCategory={setSelectedCategory}
            uniqueCategories={uniqueCategories}
          />
        </HStack>
        <Skeleton>
        {error ? (
          <Center>Error: {error.message}</Center>
        ) : (
          filteredData?.map((item, index) => (
            <CustomAccordion
              key={index}
              api={item.API}
              link={item.Link}
              category={item.Category}
              description={item.Description}
              auth={item.Auth}
              https={item.HTTPS}
              cors={item.Cors}
            />
          ))
        )}
        </Skeleton>
      </Box>
    </ChakraProvider>
  );
};

export default App;
