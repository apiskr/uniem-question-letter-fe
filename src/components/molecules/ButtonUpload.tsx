import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { IconButton, Typography } from "@mui/material";
import { useAlert } from "@/hooks/useAlert";

export const ButtonUpload = () => {
  const { openAlert, Alert } = useAlert();
  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);

  const setValidFile = (fileList: FileList | null): void => {
    if (!fileList || fileList?.length === 0) return;
    if (/image*/.test(fileList[0].type)) setUploadedFile(fileList[0]);
    else openAlert();
  };

  return (
    <>
      <Alert>이미지 파일을 업로드해주세요</Alert>
      <span style={{ display: "flex", alignItems: "center" }}>
        <IconButton component="label">
          <CameraAltIcon color="primary" />
          {/* [Todo] 이미지 정보 */}
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => setValidFile(e.target.files)}
          />
        </IconButton>
        <Typography
          variant="body2"
          sx={{
            width: "20vw",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {uploadedFile?.name}
        </Typography>
      </span>
    </>
  );
};
