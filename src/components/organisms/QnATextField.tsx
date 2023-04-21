import React from "react";
import Box from "@mui/material/Box";
import { appColor } from "@/constants/appColor";
import { TextField, TextFieldProps, Typography } from "@mui/material";
import { Empty } from "../atoms";
import { ButtonUpload } from "../molecules/ButtonUpload";

type Props = {} & TextFieldProps;

export const QnATextField = ({ ...props }: Props) => {
  const [textState, setTextState] = React.useState<string>("");
  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // [Todo] 800자 제한 작업하기 + state 관리하기
    if (e.target.value.length > 800) return;
    setTextState(e.target.value);
  };

  return (
    <Box
      component="span"
      sx={{
        width: "100%",
        borderRadius: "8px",
        border: `1px solid ${appColor.border}`,
        "&:hover, &:focus-within": {
          outline: `2px solid ${appColor.border}`,
        },
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        sx={{
          width: "100%",
          ".MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          ".MuiOutlinedInput-root": {
            "&:hover fieldset": {
              border: "none",
            },
          },
        }}
        {...props}
        onChange={onTextChange}
        value={textState}
      />
      <Empty height="5px" />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ButtonUpload />
        <Typography variant="body2">{`${textState.length}/800`}</Typography>
      </div>
    </Box>
  );
};
