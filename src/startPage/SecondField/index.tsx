import { Box, Typography } from "@mui/material";
import NumberShort from "../numberShort";
import { FC } from "react";

interface SecondField {
  numberShort: number[];
  setNumberShort: React.Dispatch<React.SetStateAction<number[]>>;
}

const SecondField: FC<SecondField> = ({ numberShort, setNumberShort }) => {
  return (
    <>
      <Typography
        sx={{
          width: "14vw",
          height: "2.2vh",
          fontFamily: "Roboto",
          fontSize: "1.1rem",
          fontWeight: "400",
          lineHeight: "1.25rem",
          textAlign: "left",
        }}
      >
        {"Поле 2"}
        <Typography
          display={"inline-block"}
          sx={{
            marginLeft: "1rem",
            fontFamily: "Roboto",
            fontSize: "0.88rem",
            fontWeight: "300",
            lineHeight: "1.25rem",
          }}
        >
          {"Отметьте 1 число."}
        </Typography>
      </Typography>
      <Box sx={{ width: "14.4vw", height: "6.3vh" }}>
        <NumberShort
          numberShort={numberShort}
          setNumberShort={setNumberShort}
        />
      </Box>
    </>
  );
};

export default SecondField;