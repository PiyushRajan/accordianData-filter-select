import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { lightenColor, darkenColor, getRandomHexColor } from "../utils";

const CustomAccordion = ({
  api,
  link,
  category,
  description,
  auth,
  https,
  cors,
}) => {
  const randomColor = getRandomHexColor();
  const lightRandomColor = lightenColor(randomColor, 0.8); // Adjust the factor to control lightness
  const darkRandomColor = darkenColor(randomColor, 0.8);

  return (
    <Accordion allowToggle>
      <AccordionItem backgroundColor={lightRandomColor} mb={"10px"}>
        <h2>
          <AccordionButton>
            <Box flex="1" display={"flex"}>
              <Box
                display={"flex"}
                gap={"20px"}
                width={"70%"}
                alignItems={"center"}
              >
                <Text
                  backgroundColor={darkRandomColor}
                  borderRadius={"3px"}
                  color={"#fff"}
                  fontWeight={700}
                  p={"6px 6px"}
                >
                  {category}
                </Text>
                <Text>{link}</Text>
                <Text>{api}</Text>
              </Box>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel backgroundColor={"white"}>
          <Text>{`Description: ${description}`}</Text>
          <Text>{`Auth: ${auth}`}</Text>
          <Text>{`HTTPS: ${https}`}</Text>
          <Text>{`CORS: ${cors}`}</Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

CustomAccordion.propTypes = {
  api: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  auth: PropTypes.string.isRequired,
  https: PropTypes.bool.isRequired,
  cors: PropTypes.string.isRequired,
};

export default CustomAccordion;
