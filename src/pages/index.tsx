import React from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Stack, Box } from "@mui/material";
import { Empty } from "@/components/atoms";
import Image from "next/image";
import billboard from "/public/billboard.png";
import feature1 from "/public/feature_1.png";
import kakao_login_large_wide from "/public/kakao_login_large_wide.png";
import alt_image from "/public/alt_image.jpeg";

export default function Home() {
  return (
    <MainLayout>
      {/* [Todo] Head 컴포넌트 관리하기 */}
      <MainLayout.Body>
        {/* [Todo] Field 컴포넌트로 빼기 */}
        <Stack sx={{ width: "100%" }} spacing={2}>
          {/* 빌보드 */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              width: "100%",
              height: "700px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              gap: 10,
              alignSelf: "stretch",
            }}
          >
            <Image src={billboard} alt="none" objectFit="cover " fill />
            <Box
              sx={{
                position: "absolute",
                fontWeight: 800,
                fontSize: 28,
                color: "#ffffff",
                lineHeight: "33px",
              }}
            >
              어려운 대학공부,<br></br>유니음에서 찾다
            </Box>
          </Box>
          {/* 기능1 */}
          <Box
            sx={{
              // FeatureContainer
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: " 70px 16px",
              width: "100%",
              backgroundColor: "#ffffff",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                height: "100%",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  // Headline2
                  fontWeight: 800,
                  fontSize: 24,
                  lineHeight: "29px",
                  color: "#000000",
                  margin: "0",
                }}
              >
                시험공부, <br></br> 이미 A+ 받은 선배에게<br></br> 물어보세요
              </Box>
              <Box
                sx={{
                  margin: "0",

                  // body1
                  fontSize: "15px",
                  lineHeight: "18px",
                }}
              >
                과목 관련 질문을 하면 <br></br>
                가장 잘 알고 있는 선배 멘토에게<br></br>
                답변 받을 수 있습니다.
              </Box>

              <Image src={feature1} width="250" alt="none" />
            </Box>
          </Box>
          {/* 기능 2 */}
          <Box
            sx={{
              // FeatureContainer
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              padding: " 70px 16px",
              backgroundColor: "#ffffff",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                height: "657px",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  fontWeight: 800,
                  fontSize: 24,
                  lineHeight: "29px",
                  color: "#000000",
                  margin: "0",
                  textAlign: "right",
                }}
              >
                내가 배운 지식, <br></br>후배에게 원데이 클래스
              </Box>
              <Image src={alt_image} width="250" alt="none" />
              <Box
                sx={{
                  margin: "0",
                  // body1
                  fontSize: "15px",
                  lineHeight: "18px",
                  textAlign: "right",
                }}
              >
                역량 있는 멘토님들의<br></br> 원데이 클래스를 지원해드립니다.
              </Box>
            </Box>
          </Box>
          {/* 회원가입 섹션 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: " 128px 18px",

              // Gray 1
              background: "#F9F9F9",
            }}
          >
            <Box
              sx={{
                // Headline 1
                fontWeight: 800,
                fontSize: 28,
                lineHeight: "33px",
                textAlign: "center",
                // main color
                color: "#1B5BFF",
              }}
            >
              대학생 지식 공유 플랫폼,<br></br>
              유니음
            </Box>
            <Empty height="2rem" />
            {/* 버튼 */}
            <Image src={kakao_login_large_wide} width="300" alt="none" />
          </Box>

          {/* Footer */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "50px 16px",
              width: "100%",
              height: "100%",
              // Gray4
              background: "#000",
              gap: 2,
            }}
          >
            {/* 유니음 관련 텍스트 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "10px 0px",
              }}
            >
              <p
                style={{
                  margin: "0",
                  color: "#ffffff",

                  // body1B
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: 800,
                }}
              >
                유니음
              </p>
              <Empty height="10px" />
              <p
                style={{
                  margin: "0",

                  color: "#ffffff",

                  // body1R
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: 400,
                }}
              >
                카카오톡 문의 @유니음
              </p>
              <Empty height="10px" />

              <p
                style={{
                  margin: "0",
                  color: "#ffffff",

                  // body1R
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: 400,
                }}
              >
                제휴 문의 & 고객 문의
              </p>
              <Empty height="10px" />

              <p
                style={{
                  margin: "0",

                  color: "#ffffff",

                  // body1R
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: 400,
                }}
              >
                dali1174@soongsil.ac.kr
              </p>
            </Box>
            {/* [Todo] 짧은 라인 추가 */}
            <Empty height="10px" />

            {/* 아피스 관련 텍스트 */}
            <Box>
              <p
                style={{
                  margin: "0",
                  color: "#ffffff",
                  // body1R
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: 800,
                }}
              >
                아피스
              </p>
              <p
                style={{
                  margin: "0",
                  color: "#ffffff",
                  // body1R
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: 400,
                }}
              >
                대표자: 황준걸
              </p>
              <Empty height="10px" />

              <p
                style={{
                  margin: "0",

                  color: "#ffffff",

                  // body1R
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: 400,
                }}
              >
                사업자등록번호: 513-22-01792
              </p>
              <Empty height="10px" />

              <p
                style={{
                  margin: "0",

                  color: "#ffffff",

                  // body1R
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: 400,
                }}
              >
                개인정보 관리 책임자: 황준걸
              </p>
              <Empty height="10px" />

              <p
                style={{
                  margin: "0",

                  color: "#ffffff",

                  // body1R
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: 400,
                }}
              >
                서울특별시 동작구 상도로 60가길 2, 201호(상도동)
              </p>
              <Empty height="10px" />
            </Box>
          </Box>
        </Stack>
      </MainLayout.Body>
    </MainLayout>
  );
}
