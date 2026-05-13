export const SITE = {
  name: "진로팡",
  brandFull: "찾아가는 미래교육 진로팡",
  description:
    "진로팡은 학교·기관을 직접 찾아가는 미래교육 진로체험 전문기관입니다. 로봇·코딩·AI·메타버스 체험 프로그램, 축제·행사 부스, 대회 운영까지 안전하게 운영합니다.",
  url: "https://www.jinropang.kr",
  phone: "1668-1758",
  phoneE164: "+8216681758",
  kakaoChannel: "https://pf.kakao.com/_jinropang",
  email: "contact@jinropang.kr",
  address: "대한민국 전 지역 학교·기관 출강",
  social: {
    youtube: "https://www.youtube.com/@jinropang",
    instagram: "https://www.instagram.com/jinropang",
    blog: "https://blog.naver.com/jinropang",
  },
  keywords: [
    "진로팡",
    "찾아가는 미래교육",
    "학교 진로체험",
    "로봇 체험 프로그램",
    "코딩 체험학습",
    "AI 체험 부스",
    "메타버스 진로교육",
    "학교 축제 부스",
    "학교 행사 운영",
    "초등 진로체험",
    "중학교 진로체험",
    "고등학교 진로체험",
    "체험학습 업체",
    "진로 체험부스",
    "VR 체험 부스",
    "드론 체험",
  ],
};

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const NAV: NavItem[] = [
  {
    href: "/about",
    label: "진로팡 소개",
    children: [
      { href: "/about", label: "진로팡은" },
      { href: "/about#commitment", label: "약속하는 가치" },
      { href: "/about#contact", label: "오시는 길 · 연락처" },
    ],
  },
  {
    href: "/programs/elementary",
    label: "초등학교",
    children: [
      { href: "/programs/elementary#g12", label: "1-2학년" },
      { href: "/programs/elementary#g34", label: "3-4학년" },
      { href: "/programs/elementary#g56", label: "5-6학년" },
      { href: "/programs/elementary#field-trip", label: "체험학습 패키지" },
    ],
  },
  {
    href: "/programs/secondary",
    label: "중·고등학교",
    children: [
      { href: "/programs/secondary#middle", label: "중학교" },
      { href: "/programs/secondary#high", label: "고등학교" },
      { href: "/programs/secondary#festival", label: "축제 · 진로의 날 부스" },
    ],
  },
  {
    href: "/programs/event",
    label: "행사부스 운영",
    children: [
      { href: "/programs/event#booths", label: "부스 모듈 6종" },
      { href: "/programs/event#operation", label: "행사 운영 절차" },
      { href: "/programs/event#competition", label: "대회 · 경진대회 운영" },
    ],
  },
  {
    href: "/safety",
    label: "안전관리계획",
    children: [
      { href: "/safety#step-01", label: "사전 안전 점검" },
      { href: "/safety#step-03", label: "현장 운영 안전관리" },
      { href: "/safety#step-05", label: "응급상황 대응" },
    ],
  },
  { href: "/reviews", label: "진행후기" },
];
