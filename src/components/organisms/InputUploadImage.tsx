import React from "react";
import { Typography } from "@mui/material";
import { appColor } from "@/constants/appColor";
import { Empty } from "../atoms";
import { useAlert } from "@/hooks/useAlert";

type Props = {
  screen: Screen | null;
  uploadedFile: File | null;
  setUploadedFile: React.Dispatch<React.SetStateAction<File | null>>;
};

export const InputUploadImage = ({ screen, uploadedFile, setUploadedFile }: Props) => {
  const { openAlert, Alert } = useAlert();

  const setValidFile = (fileList: FileList | null): void => {
    if (!fileList || fileList?.length === 0) return;
    if (/image*/.test(fileList[0].type)) setUploadedFile(fileList[0]);
    else openAlert();
  };

  return (
    <>
      {/* [Todo] 에러 인터페이스 만들기 */}
      <Alert>이미지 파일을 업로드해주세요</Alert>
      <label
        style={{
          borderRadius: "0.5rem",
          outline: `1px solid ${appColor.border}`,
          height: screen?.availHeight! * 0.1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <UploadUI file={uploadedFile} />
        <input type="file" hidden onChange={(e) => setValidFile(e.target.files)} />
      </label>
    </>
  );
};

const UploadUI = ({ file }: { file: File | null }) => {
  return (
    <>
      <Typography
        variant="body1"
        color={appColor.border}
        sx={{
          width: "100%",
          paddingX: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {/* [Todo] 사진 미리보기 구현하기 */}
        {!file ? "사진 업로드" : `업로드 : ${file.name}`}
      </Typography>
      <Empty height="1rem" />
    </>
  );
};
