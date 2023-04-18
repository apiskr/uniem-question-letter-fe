import React from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Stack, TextField, Typography } from "@mui/material";
import { InputUploadImage } from "@/components/organisms/InputUploadImage";
import { useWindowScreen } from "@/hooks/useWindowScreen";
import { Empty } from "@/components/atoms";

export default function Question() {
  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);
  const { screen } = useWindowScreen();

  return (
    <MainLayout>
      {/* [Todo] Head 컴포넌트 관리하기 */}
      <MainLayout.Body>
        {/* [Todo] Field 컴포넌트로 빼기 */}
        <Stack sx={{ width: "90%" }} spacing={2}>
          <Typography variant="h3">질문 내용</Typography>
          <TextField sx={{ width: "100%" }} />
          <InputUploadImage
            screen={screen}
            uploadedFile={uploadedFile}
            setUploadedFile={setUploadedFile}
          />
        </Stack>
        <Empty height="2rem" />
        <Stack sx={{ width: "90%" }} spacing={2}>
          <Typography variant="h3">질문 분류</Typography>
          <TextField sx={{ width: "100%" }} placeholder="학과" />
          <TextField sx={{ width: "100%" }} placeholder="과목" />
          <TextField sx={{ width: "100%" }} placeholder="학년" />
        </Stack>
      </MainLayout.Body>
    </MainLayout>
  );
}
