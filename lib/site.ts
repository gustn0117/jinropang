export const SITE = {
  name: "진로팡",
  brandFull: "찾아가는 미래교육 진로팡",
  // 검색엔진 권장 — 80자 이내 (2026-05 네이버 웹마스터도구 가이드)
  description:
    "진로팡은 전국 학교·기관에 출강하는 미래교육 진로체험 기관. 로봇·코딩·AI 체험을 안전하게 운영합니다.",
  // 본문·소개용 긴 설명 (필요 시 사용)
  descriptionLong:
    "진로팡은 학교·기관을 직접 찾아가는 미래교육 진로체험 전문기관입니다. 로봇·코딩·AI·메타버스 체험 프로그램, 축제·행사 부스, 대회 운영까지 안전하게 운영합니다.",
  url: "https://www.jinropang.co.kr",
  phone: "1668-1758",
  phoneE164: "+8216681758",
  kakaoChannel: "http://pf.kakao.com/_XNtWG/chat",
  email: "contact@jinropang.co.kr",
  address: "대한민국 전 지역 학교·기관 출강",
  social: {
    youtube: "https://www.youtube.com/@jinropang",
    instagram: "https://www.instagram.com/jinro_pang",
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

export type NavLink = { href: string; label: string };
export type NavGroup = { heading: string; href?: string; items: NavLink[] };
export type NavChild = NavLink | NavGroup;
export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export function isNavGroup(c: NavChild): c is NavGroup {
  return (c as NavGroup).items !== undefined;
}

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
      {
        heading: "교육 프로그램",
        href: "/programs/elementary",
        items: [
          { href: "/programs/elementary#g12", label: "1-2학년" },
          { href: "/programs/elementary#g36", label: "3-6학년" },
        ],
      },
      { href: "/programs/elementary#trip", label: "체험학습 패키지" },
      { href: "/programs/elementary#science", label: "과학체험부스" },
      { href: "/programs/elementary#magic", label: "과학마술공연" },
    ],
  },
  {
    href: "/programs/secondary",
    label: "중·고등학교",
    children: [
      { href: "/programs/secondary#middle", label: "교육 프로그램" },
      { href: "/programs/secondary#festival", label: "축제 · 진로의 날 부스" },
      { href: "/programs/secondary#magic", label: "과학마술공연" },
    ],
  },
  {
    href: "/programs/event",
    label: "행사부스 운영",
    children: [
      { href: "/programs/event#booths", label: "축제행사부스" },
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
  { href: "/qna", label: "Q&A" },
];
