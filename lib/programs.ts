export type Program = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  audience: string;
  duration: string;
  capacity: string;
  highlights: string[];
};

export const ELEMENTARY: Program[] = [
  {
    slug: "robot-coding-1-2",
    title: "라인트레이서 로봇 코딩",
    tag: "1-2학년",
    summary:
      "직관적인 조작으로 코딩이 처음인 저학년도 라인트레이서 로봇을 움직이며 알고리즘 사고를 경험합니다.",
    audience: "초등 1-2학년",
    duration: "40-80분 / 회",
    capacity: "20-30명 / 회",
    highlights: ["블록 코딩", "센서 이해", "팀 미션 주행"],
  },
  {
    slug: "ai-vision-3-4",
    title: "AI 비전 인식 체험",
    tag: "3-4학년",
    summary:
      "이미지 학습 도구로 AI가 사물을 어떻게 인식하는지 직접 데이터셋을 만들어보며 이해합니다.",
    audience: "초등 3-4학년",
    duration: "60-90분 / 회",
    capacity: "20-30명 / 회",
    highlights: ["AI 데이터 학습", "분류 모델 체험", "윤리적 AI 토론"],
  },
  {
    slug: "metaverse-3-4",
    title: "메타버스 진로 탐색",
    tag: "3-4학년",
    summary:
      "메타버스 공간에서 미래 직업 부스를 돌며 흥미와 적성을 자연스럽게 탐색합니다.",
    audience: "초등 3-4학년",
    duration: "60분 / 회",
    capacity: "1인 1기기 권장",
    highlights: ["진로 탐색", "디지털 시민 교육", "맵 자체 제작"],
  },
  {
    slug: "drone-5-6",
    title: "코딩 드론 미션 비행",
    tag: "5-6학년",
    summary:
      "안전 망 안에서 코딩 명령으로 드론을 비행시키고 미션을 해결하며 컴퓨팅 사고력을 키웁니다.",
    audience: "초등 5-6학년",
    duration: "80-120분 / 회",
    capacity: "16-24명 / 회",
    highlights: ["안전 펜스 운영", "미션 챌린지", "팀 대결"],
  },
  {
    slug: "smart-iot-5-6",
    title: "스마트 IoT 메이커",
    tag: "5-6학년",
    summary:
      "센서와 액추에이터로 스마트홈을 만들어보며 사물인터넷의 원리를 체험합니다.",
    audience: "초등 5-6학년",
    duration: "90-120분 / 회",
    capacity: "20명 / 회",
    highlights: ["피지컬 컴퓨팅", "메이커 활동", "발표·전시"],
  },
  {
    slug: "field-trip",
    title: "체험학습 패키지",
    tag: "체험학습",
    summary:
      "한 학교에서 여러 체험을 순환식으로 진행해 하루 만에 다채로운 미래기술을 만나는 체험학습 패키지입니다.",
    audience: "초등 전 학년",
    duration: "반일 / 종일",
    capacity: "60-300명",
    highlights: ["순환식 운영", "강사 다인 배치", "안전 동선 분리"],
  },
];

export const SECONDARY: Program[] = [
  {
    slug: "ai-data-mid",
    title: "AI 데이터 분석 워크숍",
    tag: "중학교",
    summary:
      "노코드 AI 도구로 데이터를 수집·전처리하고 모델을 학습시켜 결과를 해석하는 실습형 워크숍입니다.",
    audience: "중학생",
    duration: "90-120분 / 회",
    capacity: "25-30명",
    highlights: ["노코드 AI", "데이터 리터러시", "팀 프로젝트"],
  },
  {
    slug: "vr-career-mid",
    title: "VR 진로직업 체험",
    tag: "중학교",
    summary:
      "VR로 의료·우주·건축 등 다양한 미래 직업을 가상 환경에서 체험하며 진로 동기를 부여합니다.",
    audience: "중학생",
    duration: "40-60분 / 회",
    capacity: "VR 4-12대 운영",
    highlights: ["진로 동기부여", "체험 후 워크북", "안전 가이드 운영"],
  },
  {
    slug: "robot-engineering-high",
    title: "로봇 엔지니어링 캠프",
    tag: "고등학교",
    summary:
      "제어 알고리즘과 PID, 센서 융합을 다루며 실제 로봇 미션을 설계·튜닝합니다. 진로 포트폴리오용 결과물 산출 가능.",
    audience: "고등학생",
    duration: "120-180분 / 회",
    capacity: "20-24명",
    highlights: ["진로 포트폴리오", "제어공학 기초", "팀 경진"],
  },
  {
    slug: "ai-llm-high",
    title: "생성형 AI 프롬프트 캠프",
    tag: "고등학교",
    summary:
      "LLM 활용 방법과 한계, 환각·편향 이슈를 다루며 진로별 활용 시나리오를 직접 설계합니다.",
    audience: "고등학생",
    duration: "90-120분 / 회",
    capacity: "30명",
    highlights: ["프롬프트 엔지니어링", "AI 윤리", "직무별 활용"],
  },
  {
    slug: "festival-booth-secondary",
    title: "축제·진로의 날 부스 패키지",
    tag: "축제부스",
    summary:
      "동시 다발 체험이 가능한 부스형 운영. 사진 부스·VR·로봇 대결·AI 카메라 등 인기 부스를 모듈식으로 구성합니다.",
    audience: "중·고등학생",
    duration: "반일 / 종일",
    capacity: "300명 이상",
    highlights: ["부스 모듈 조합", "스탬프 운영", "MC·진행 지원"],
  },
];

export const EVENT_BOOTHS = [
  {
    slug: "robot-battle",
    title: "로봇 대결 부스",
    description: "조작 미션 + 미니 토너먼트로 빠른 회전과 참여 몰입을 모두 잡습니다.",
    icon: "robot",
  },
  {
    slug: "vr-zone",
    title: "VR 체험 존",
    description: "VR 4-12대 운영. 학교/축제 규모에 따라 콘텐츠와 좌석을 맞춤 구성합니다.",
    icon: "vr",
  },
  {
    slug: "ai-photo",
    title: "AI 포토 부스",
    description: "AI 스타일 변환 사진 인화. 만족도 1위, 줄이 가장 긴 인기 부스입니다.",
    icon: "camera",
  },
  {
    slug: "drone",
    title: "드론 미션 부스",
    description: "안전 펜스 내 코딩 드론 비행. 단체 체험을 빠른 회전으로 운영합니다.",
    icon: "drone",
  },
  {
    slug: "metaverse",
    title: "메타버스 진로존",
    description: "메타버스에서 미래직업 부스를 가상으로 탐색하는 신개념 부스입니다.",
    icon: "metaverse",
  },
  {
    slug: "maker",
    title: "메이커 미니키트",
    description: "당일 완성형 키트로 학생이 만들어 가져갈 수 있는 결과물 중심 부스입니다.",
    icon: "maker",
  },
];
