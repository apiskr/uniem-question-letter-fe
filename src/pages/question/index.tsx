import React from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Stack, Button, Typography } from "@mui/material";
import { Empty } from "@/components/atoms";
import { QnATextField } from "@/components/organisms/QnATextField";

export default function Question() {
  // [Todo] 피그마 컬러 theme 적용하기
  // [Todo] 피그마 ui 작업하기
  return (
    <MainLayout>
      <MainLayout.Body>
        <Stack sx={{ width: "90%" }} spacing={2}>
          <Empty height="0.1rem" />
          <Typography variant="h3">질문 내용</Typography>
          {/* [Todo] Input스타일링 없애고 Box안에다가 구현해야 할 듯 */}
          <QnATextField multiline rows={8} placeholder="질문 내용을 입력해주세요." />
        </Stack>
        <Empty height="2rem" />
        <Stack sx={{ width: "90%" }} spacing={2}>
          <Typography variant="h3">질문 분류</Typography>
          <Button>학과</Button>
          <Button>과목</Button>
          <Button>학년</Button>
        </Stack>
      </MainLayout.Body>
    </MainLayout>
  );
}
