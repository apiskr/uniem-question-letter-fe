import React from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Button } from "@mui/material";
import { Empty } from "@/components/atoms";
import { QnATextField } from "@/components/organisms/QnATextField";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { ButtonSelect } from "@/components/atoms";

export default function Question() {
  // [Todo] 버튼 깜빡임 해결하기
  // [Todo] 버튼 CSS 가끔 적용 안되는 문제 해결하기
  return (
    <MainLayout>
      <MainLayout.Body>
        <SectionLayout title="질문 내용">
          <QnATextField multiline rows={8} placeholder="질문 내용을 입력해주세요." />
        </SectionLayout>
        <Empty height="2rem" />
        <SectionLayout title="질문 분류">
          <ButtonSelect>학과</ButtonSelect>
          <ButtonSelect>과목</ButtonSelect>
          <ButtonSelect>학년</ButtonSelect>
          <Button>ddd</Button>
        </SectionLayout>
      </MainLayout.Body>
    </MainLayout>
  );
}
