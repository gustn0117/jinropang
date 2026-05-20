export type Program = {
  slug: string;
  title: string;
  category: "elementary" | "secondary" | "event";
  /** elementary: 학년 그룹 / 체험학습 · event: tier 기반 */
  group?: "g12" | "g36" | "trip" | "festival";
  /** event 한정 — 체험부스 고급형 / 일반형 */
  tier?: "premium" | "standard";
  duration: string;
  capacity: string;
  description: string;
  image: string;
};

/* ===== 초등 1-2학년 ===== */
const ELEMENTARY_12: Program[] = [
  {
    slug: "robot-engineering",
    title: "로봇공학자 체험",
    category: "elementary",
    group: "g12",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "로봇을 직접 조립하고 움직여보며 센서와 모터의 원리를 쉽고 재미있게 이해합니다.",
    image: "/programs/elementary/12/robot-engineering.jpg",
  },
  {
    slug: "wearable",
    title: "웨어러블 로봇 체험",
    category: "elementary",
    group: "g12",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "로봇을 직접 착용하고 움직여보며 사람의 힘을 보조하는 미래 기술을 체험합니다.",
    image: "/programs/elementary/12/wearable.jpg",
  },
  {
    slug: "ozobot",
    title: "오조봇(언플러그드 코딩) 체험",
    category: "elementary",
    group: "g12",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "색깔 선과 코드를 따라 움직이는 로봇으로 코딩의 기본 원리를 경험하고, 색상 패턴을 활용하여 로봇의 움직임을 제어하며 알고리즘 사고 과정을 학습합니다.",
    image: "/programs/elementary/12/ozobot.jpg",
  },
  {
    slug: "kamibot",
    title: "카미봇(언플러그드 코딩) 체험",
    category: "elementary",
    group: "g12",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "명령어 순서에 따라 로봇을 제어하며 다양한 미션을 수행하면서 코딩의 기초를 경험합니다.",
    image: "/programs/elementary/12/kamibot.jpg",
  },
  {
    slug: "3d-pen",
    title: "3D펜 체험",
    category: "elementary",
    group: "g12",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "3D펜으로 다양한 모양을 만들며 평면이 입체로 변하는 과정을 체험합니다.",
    image: "/programs/elementary/12/3d-pen.jpg",
  },
];

/* ===== 초등 3-6학년 ===== */
const ELEMENTARY_36: Program[] = [
  {
    slug: "robot-engineering",
    title: "로봇공학자 체험",
    category: "elementary",
    group: "g36",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "센서와 모터를 활용하여 로봇을 제어하고 다양한 미션을 수행하며 문제 해결 과정을 학습합니다.",
    image: "/programs/elementary/36/robot-engineering.jpg",
  },
  {
    slug: "autonomous-driving",
    title: "자율주행 전문가 체험",
    category: "elementary",
    group: "g36",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "센서를 활용하여 경로를 인식하고 움직이는 과정을 통해 자율주행 시스템의 원리를 학습합니다.",
    image: "/programs/elementary/36/autonomous-driving.jpg",
  },
  {
    slug: "wearable",
    title: "웨어러블 로봇 체험",
    category: "elementary",
    group: "g36",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "웨어러블 로봇의 구조와 움직임 보조 원리를 체험하며 로봇 기술의 활용 방법을 학습합니다.",
    image: "/programs/elementary/36/wearable.jpg",
  },
  {
    slug: "game-developer",
    title: "게임 개발자 체험",
    category: "elementary",
    group: "g36",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "게임의 규칙과 동작 구조를 설계하며 논리적인 게임 제작 과정을 학습합니다.",
    image: "/programs/elementary/36/game-developer.jpg",
  },
  {
    slug: "metaverse-vr",
    title: "메타버스(VR) 체험",
    category: "elementary",
    group: "g36",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "가상 공간 속에 다양한 요소를 배치하며 메타버스 환경 제작 과정을 경험합니다.",
    image: "/programs/elementary/36/metaverse-vr.jpg",
  },
  {
    slug: "metaverse-ar",
    title: "메타버스(AR) 체험",
    category: "elementary",
    group: "g36",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "현실 공간에 3D 오브젝트를 배치하며 증강현실 콘텐츠 제작 과정을 체험합니다.",
    image: "/programs/elementary/36/metaverse-ar.jpg",
  },
  {
    slug: "iot",
    title: "IoT 사물인터넷 체험",
    category: "elementary",
    group: "g36",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "내가 만든 버튼과 목소리로 앱과 센서를 활용하여 기기를 제어하며 사물인터넷의 연결 구조를 학습합니다.",
    image: "/programs/elementary/36/iot.jpg",
  },
  {
    slug: "ai-boardgame",
    title: "인공지능 보드게임 체험",
    category: "elementary",
    group: "g36",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "게임 속 전략과 규칙을 활용하여 다양한 선택을 경험하면서 인공지능의 판단 방식을 체험합니다.",
    image: "/programs/elementary/36/ai-boardgame.jpg",
  },
  {
    slug: "generative-ai",
    title: "생성형 AI 체험",
    category: "elementary",
    group: "g36",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "프롬프트를 입력하여 AI로 이미지를 생성하고 다양한 콘텐츠 제작 과정을 경험합니다.",
    image: "/programs/elementary/36/generative-ai.jpg",
  },
  {
    slug: "drone",
    title: "드론 체험",
    category: "elementary",
    group: "g36",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "드론을 직접 조종하며 비행 원리와 방향 제어 과정을 체험합니다.",
    image: "/programs/elementary/36/drone.jpg",
  },
];

/* ===== 초등 체험학습 패키지 (팝드론 빙고게임은 행사부스 고급형으로 이동되어 제외 · 4족보행 로봇 제거 · 사용자 순서 반영) ===== */
const ELEMENTARY_TRIP: Program[] = [
  {
    slug: "smart-robot-pet",
    title: "스마트 로봇 펫",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "사족보행 로봇의 다양한 움직임을 직접 체험하며 미래 로봇 기술을 경험합니다.",
    image: "/programs/elementary/trip/smart-robot-pet.png",
  },
  {
    slug: "dinosaur-alive",
    title: "공룡이 살아있다",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "실제 공룡처럼 움직이는 사족보행 로봇을 체험하며 생동감 있는 로봇 콘텐츠를 즐겨볼 수 있습니다.",
    image: "/programs/elementary/trip/dinosaur-alive.png",
  },
  {
    slug: "robot-soccer",
    title: "로봇축구",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "로봇을 활용하여 전략과 조작을 통해 로봇 축구 경기를 하며 실감형 로봇 콘텐츠를 경험합니다.",
    image: "/programs/elementary/trip/robot-soccer.jpg",
  },
  {
    slug: "ar-archery",
    title: "AR 양궁",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "증강현실 기술이 적용된 양궁 콘텐츠를 통해 몰입형 스포츠 활동을 경험합니다.",
    image: "/programs/elementary/trip/ar-archery.jpg",
  },
  {
    slug: "ict-running",
    title: "ICT 러닝",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "신체 움직임에 따라 변화하는 디지털 콘텐츠를 체험하며 ICT 기술의 원리를 체험해 볼 수 있습니다.",
    image: "/programs/elementary/trip/ict-running.jpg",
  },
  {
    slug: "robot-racing",
    title: "로봇 레이싱",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "로봇을 직접 조종하여 레이싱 경주를 즐기며 속도감 있는 로봇 체험을 경험합니다.",
    image: "/programs/elementary/trip/robot-racing.jpg",
  },
  {
    slug: "pop-touch",
    title: "팝 터치",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "화면에 나타나는 목표를 빠르게 터치하며 순발력 게임을 활동합니다.",
    image: "/programs/elementary/trip/pop-touch.jpg",
  },
  {
    slug: "ai-omok",
    title: "인공지능 오목",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "AI 기반 오목 시스템과 대결하며 AI의 판단 방식과 전략 플레이를 경험합니다.",
    image: "/programs/elementary/trip/ai-omok.jpg",
  },
  /* ----- 이하 기존 순서 ----- */
  {
    slug: "basketball",
    title: "농구",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "로봇을 직접 조종하여 농구 미션을 수행하며 방향 제어와 조작 원리를 체험합니다.",
    image: "/programs/elementary/trip/basketball.jpg",
  },
  {
    slug: "motion-recognition",
    title: "모션인식",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "몸의 움직임에 따라 반응하는 스포츠 게임을 즐기며 실감형 콘텐츠를 체험합니다.",
    image: "/programs/elementary/trip/motion-recognition.jpg",
  },
  {
    slug: "cube-maze",
    title: "큐브 미로찾기",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "큐브 위에 나타나는 AR 미로를 움직이며 증강현실 콘텐츠를 재미있게 체험합니다.",
    image: "/programs/elementary/trip/cube-maze.jpg",
  },
  {
    slug: "balance-snowboard",
    title: "밸런스 스노우보드",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "몸의 균형을 조절하며 스노우보드 게임을 즐기고 실감형 스포츠를 체험합니다.",
    image: "/programs/elementary/trip/balance-snowboard.jpg",
  },
  {
    slug: "ar-shooting",
    title: "AR 사격",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "증강현실 기술이 적용된 화면 속 표적을 조준하며 실감나는 AR 사격 게임을 체험합니다.",
    image: "/programs/elementary/trip/ar-shooting.jpg",
  },
  {
    slug: "robot-ssireum",
    title: "로봇 씨름",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "로봇을 직접 조종하여 상대를 밀어내는 박진감 있는 씨름 경기를 체험합니다.",
    image: "/programs/elementary/trip/robot-ssireum.jpg",
  },
  {
    slug: "robot-curling",
    title: "로봇 컬링",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "로봇을 조종하여 목표 지점에 스톤을 보내며 전략형 스포츠 콘텐츠를 경험합니다.",
    image: "/programs/elementary/trip/robot-curling.jpg",
  },
  {
    slug: "ar-cube-solve",
    title: "AR 큐브 솔브",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "AR 기술이 적용된 큐브솔브 콘텐츠를 통해 실시간 인터랙션과 문제 해결 활동을 경험합니다.",
    image: "/programs/elementary/trip/ar-cube-solve.jpg",
  },
  {
    slug: "instant-photo",
    title: "즉석 포토",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "촬영과 즉석 출력 체험을 통해 행사 속 특별한 순간을 추억으로 기록할 수 있습니다.",
    image: "/programs/elementary/trip/instant-photo.jpg",
  },
  {
    slug: "drone-simulator",
    title: "드론 시뮬레이터",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "가상 비행 환경에서 드론을 조종하며 드론 비행 시뮬레이션 콘텐츠를 통해 조작 기술과 가상 주행 환경을 경험합니다.",
    image: "/programs/elementary/trip/drone-simulator.jpg",
  },
  {
    slug: "pinball-tennis",
    title: "핀볼 테니스",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "공의 움직임에 맞춰 플레이하며 반응형 스포츠 콘텐츠를 활용하여 순발력과 타이밍 플레이를 경험해 볼 수 있습니다.",
    image: "/programs/elementary/trip/pinball-tennis.jpg",
  },
  {
    slug: "ar-glass-archery",
    title: "AR 글라스 양궁",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "AR 글라스를 활용한 몰입형 양궁 콘텐츠를 통해 증강현실 스포츠를 경험할 수 있습니다.",
    image: "/programs/elementary/trip/ar-glass-archery.jpg",
  },
];

export const ELEMENTARY: Program[] = [
  ...ELEMENTARY_12,
  ...ELEMENTARY_36,
  ...ELEMENTARY_TRIP,
];

export const ELEMENTARY_GROUPS = {
  g12: ELEMENTARY_12,
  g36: ELEMENTARY_36,
  trip: ELEMENTARY_TRIP,
};

/* ===== 중·고등 교육 프로그램 (소요시간 전체 90-100분(2교시)로 통일) ===== */
const SECONDARY_DURATION = "90-100분(2교시)";

export const SECONDARY: Program[] = [
  {
    slug: "robot-engineering",
    title: "로봇공학자 체험",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "로봇의 구조와 제어 원리를 이해하고 로봇 개조 및 전략 활동을 통해 공학적 사고와 문제 해결 능력을 기릅니다.",
    image: "/programs/secondary/robot-engineering.jpg",
  },
  {
    slug: "autonomous-driving",
    title: "자율주행 전문가 체험",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "자율주행 기술의 구조와 알고리즘을 이해하고 다양한 주행 미션을 수행하며 스마트 모빌리티 기술을 경험합니다.",
    image: "/programs/secondary/autonomous-driving.jpg",
  },
  {
    slug: "wearable",
    title: "웨어러블 로봇 체험",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "웨어러블 로봇의 동작 원리와 센서 제어 기술을 이해하고 미래 의료·재활 산업과의 연계를 탐구합니다.",
    image: "/programs/secondary/wearable.jpg",
  },
  {
    slug: "game-developer",
    title: "게임개발자 체험",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "게임 기획과 프로그래밍 구조를 이해하고 인터랙션 요소를 활용한 콘텐츠 제작 과정을 경험합니다.",
    image: "/programs/secondary/game-developer.png",
  },
  {
    slug: "metaverse-vr",
    title: "메타버스(VR) 체험",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "VR 콘텐츠 제작 도구를 활용하여 가상현실 환경을 설계하고 인터랙션 요소를 구현합니다.",
    image: "/programs/secondary/metaverse-vr.jpg",
  },
  {
    slug: "metaverse-ar",
    title: "메타버스(AR) 체험",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "AR 콘텐츠 제작 도구를 활용하여 현실과 가상이 결합된 인터랙션 환경을 구현합니다.",
    image: "/programs/secondary/metaverse-ar.jpg",
  },
  {
    slug: "iot",
    title: "IoT 사물인터넷 체험",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "IoT 시스템과 음성 제어 기술을 활용하여 스마트 기기 제어 환경을 직접 구현합니다.",
    image: "/programs/secondary/iot.jpg",
  },
  {
    slug: "ai-boardgame",
    title: "인공지능 보드게임 체험",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "인공지능의 의사결정 구조와 데이터 활용 방식을 보드게임 활동을 통해 이해합니다.",
    image: "/programs/secondary/ai-boardgame.jpg",
  },
  {
    slug: "generative-ai",
    title: "생성형 AI 체험",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "생성형 AI의 작동 원리와 프롬프트 설계 과정을 이해하고 이미지 및 영상 콘텐츠를 제작합니다.",
    image: "/programs/secondary/generative-ai.jpg",
  },
  {
    slug: "drone",
    title: "드론 체험",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "드론의 구조와 비행 제어 원리를 이해하고 다양한 주행 미션과 항공 기술을 경험합니다.",
    image: "/programs/secondary/drone.jpg",
  },
  /* ===== 신규 추가 (PDF 0518) ===== */
  {
    slug: "app-dev",
    title: "앱 개발",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "앱 개발의 기본 구조와 작동 원리를 이해하고, 사용자 입력과 기능 구현 과정을 통해 소프트웨어 개발 개념을 학습할 수 있습니다.",
    image: "/programs/secondary/app-dev.png",
  },
  {
    slug: "3d-design",
    title: "3D설계",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "도형을 조합하여 입체 구조를 만들어 보면서 디지털 설계 과정을 학습 및 이해할 수 있습니다.",
    image: "/programs/secondary/3d-design.png",
  },
  {
    slug: "3d-pen-maker",
    title: "3D펜 메이커",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "선을 쌓아 구조를 만드는 과정을 통해 창의적 설계 능력을 학습할 수 있습니다.",
    image: "/programs/secondary/3d-pen-maker.jpg",
  },
  {
    slug: "physical-computing",
    title: "피지컬 컴퓨팅",
    category: "secondary",
    duration: SECONDARY_DURATION,
    capacity: "20-30명",
    description:
      "아두이노를 활용하여 회로 구성과 센서 제어의 기본 원리를 이해할 수 있습니다.",
    image: "/programs/secondary/physical-computing.jpg",
  },
];

/* ===== 행사부스 운영 — 체험부스 고급형 / 일반형 ===== */
const EVENT_PREMIUM: Program[] = [
  {
    slug: "smart-robot-pet",
    title: "스마트 로봇 펫",
    category: "event",
    tier: "premium",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "사족보행 로봇의 다양한 움직임을 직접 체험하며 미래 로봇 기술을 경험합니다.",
    image: "/programs/event/smart-robot-pet.png",
  },
  {
    slug: "dinosaur-alive",
    title: "공룡이 살아있다",
    category: "event",
    tier: "premium",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "실제 공룡처럼 움직이는 사족보행 로봇을 체험하며 생동감 있는 로봇 콘텐츠를 즐겨볼 수 있습니다.",
    image: "/programs/event/dinosaur-alive.png",
  },
  {
    slug: "pop-drone-bingo",
    title: "팝드론 빙고게임",
    category: "event",
    tier: "premium",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "드론을 조종하여 빙고 미션을 완성하며 재미있는 드론 게임을 체험하는 활동입니다.",
    image: "/programs/event/pop-drone-bingo.png",
  },
  {
    slug: "drone-claw",
    title: "드론 인형 뽑기",
    category: "event",
    tier: "premium",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "드론에 장착된 집게를 조종해 목표 지점의 인형을 집어 올리는 드론 체험 프로그램입니다.",
    image: "/programs/event/drone-claw.png",
  },
  {
    slug: "vr-experience",
    title: "실감형 VR 체험",
    category: "event",
    tier: "premium",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "가상현실 장비를 통해 다양한 가상 환경 속 게임 콘텐츠를 즐기는 몰입형 체험 활동입니다.",
    image: "/programs/event/vr-experience.png",
  },
  {
    slug: "real-motion-racing",
    title: "리얼 모션 레이싱",
    category: "event",
    tier: "premium",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "차량 모션 시뮬레이터를 통해 실제 차량의 움직임을 구현한 프로그램으로 현실감 있는 드라이빙 경험을 체험할 수 있습니다.",
    image: "/programs/event/real-motion-racing.png",
  },
  {
    slug: "pop-drone-simulation",
    title: "팝 드론 시뮬레이션",
    category: "event",
    tier: "premium",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "드론 시뮬레이터를 이용해 화면 속 드론을 조종하고 빙고 미션을 완성하는 드론 체험 프로그램입니다.",
    image: "/programs/event/pop-drone-simulation.png",
  },
  {
    slug: "ar-hologram",
    title: "미디어 아트 AR 홀로그램",
    category: "event",
    tier: "premium",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "공중에 떠 있는 홀로그램 콘텐츠 체험으로 가상 이미지와 현실 공간이 결합된 디지털 콘텐츠를 관찰하고 상호작용 하는 활동입니다.",
    image: "/programs/event/ar-hologram.png",
  },
];

const EVENT_STANDARD: Program[] = [
  {
    slug: "ai-omok",
    title: "인공지능 오목",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "AI 기반 오목 시스템과 대결하며 AI의 판단 방식과 전략 플레이를 경험합니다.",
    image: "/programs/event/ai-omok.jpg",
  },
  {
    slug: "ar-archery",
    title: "AR 양궁",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "증강현실 기술이 적용된 양궁 콘텐츠를 통해 몰입형 스포츠 활동을 경험합니다.",
    image: "/programs/event/ar-archery.jpg",
  },
  {
    slug: "ict-running",
    title: "ICT 러닝",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "신체 움직임에 따라 변화하는 디지털 콘텐츠를 체험하며 ICT 기술의 원리를 체험해 볼 수 있습니다.",
    image: "/programs/event/ict-running.jpg",
  },
  {
    slug: "robot-soccer",
    title: "로봇 축구",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "로봇을 활용하여 전략과 조작을 통해 로봇 축구 경기를 하며 실감형 로봇 콘텐츠를 경험합니다.",
    image: "/programs/event/robot-soccer.jpg",
  },
  {
    slug: "balance-snowboard",
    title: "밸런스 스노우보드",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "몸의 균형을 조절하며 스노우보드 게임을 즐기고 실감형 스포츠를 체험합니다.",
    image: "/programs/event/balance-snowboard.jpg",
  },
  {
    slug: "motion-recognition",
    title: "모션인식 스포츠",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "몸의 움직임에 따라 반응하는 스포츠 게임을 즐기며 실감형 콘텐츠를 체험합니다.",
    image: "/programs/event/motion-recognition.jpg",
  },
  {
    slug: "pinball-tennis",
    title: "IoT 핀볼 테니스",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "공의 움직임에 맞춰 플레이하며 반응형 스포츠 콘텐츠를 활용하여 순발력과 타이밍 플레이를 경험해 볼 수 있습니다.",
    image: "/programs/event/pinball-tennis.jpg",
  },
  {
    slug: "robot-racing",
    title: "로봇 레이싱",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "로봇을 직접 조종하여 레이싱 경주를 즐기며 속도감 있는 로봇 체험을 경험합니다.",
    image: "/programs/event/robot-racing.jpg",
  },
  {
    slug: "pop-touch",
    title: "팝 터치",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "화면에 나타나는 목표를 빠르게 터치하며 순발력 게임을 즐기는 활동입니다.",
    image: "/programs/event/pop-touch.jpg",
  },
  {
    slug: "ar-shooting",
    title: "AR 사격",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "증강현실 기술이 적용된 화면 속 표적을 조준하며 실감나는 AR 사격 게임을 체험합니다.",
    image: "/programs/event/ar-shooting.jpg",
  },
  {
    slug: "brain-spider",
    title: "뇌파 스파이더 챌린지",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "뇌파 센서를 통해 사용자의 집중도를 인식하고 로봇을 움직여 달리기 경주를 펼치는 체험형 프로그램입니다.",
    image: "/programs/event/brain-spider.jpg",
  },
  {
    slug: "ar-racing",
    title: "AR 증강현실 레이싱",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "AR 기술을 활용해 실제 트랙 위에서 캐릭터 카트를 조종하며 레이싱을 즐기는 프로그램입니다.",
    image: "/programs/event/ar-racing.png",
  },
  {
    slug: "cube-maze",
    title: "AR 큐브 미로찾기",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "큐브 위에 나타나는 AR 미로를 움직이며 증강현실 콘텐츠를 재미있게 체험합니다.",
    image: "/programs/event/cube-maze.jpg",
  },
  {
    slug: "drone-simulator",
    title: "드론 시뮬레이터",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "가상 비행 환경에서 드론을 조종하며 드론 비행 시뮬레이션 콘텐츠를 통해 조작 기술과 가상 주행 환경을 경험합니다.",
    image: "/programs/event/drone-simulator.jpg",
  },
  {
    slug: "robot-curling",
    title: "로봇 컬링",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "로봇을 조종하여 목표 지점에 스톤을 보내며 전략형 스포츠 콘텐츠를 경험합니다.",
    image: "/programs/event/robot-curling.jpg",
  },
  {
    slug: "basketball",
    title: "로봇 농구",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "로봇을 직접 조종하여 농구 미션을 수행하며 방향 제어와 조작 원리를 체험합니다.",
    image: "/programs/event/basketball.jpg",
  },
  {
    slug: "robot-ssireum",
    title: "로봇 배틀",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "로봇을 직접 조종하여 상대를 밀어내는 박진감 있는 로봇 배틀 경기를 체험합니다.",
    image: "/programs/event/robot-ssireum.jpg",
  },
  {
    slug: "3d-pen-booth",
    title: "3D펜 체험",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "3D펜을 이용해 입체 작품을 직접 제작해보는 체험 프로그램으로 자체 제작 팬던트를 이용하여 진행합니다.",
    image: "/programs/event/3d-pen-booth.jpg",
  },
  {
    slug: "gyro-bowling",
    title: "자이로 볼링",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "스마트폰의 자이로 센서를 활용한 인터랙티브 볼링 콘텐츠를 경험해 보는 볼링 체험 프로그램입니다.",
    image: "/programs/event/gyro-bowling.png",
  },
  {
    slug: "robot-golf",
    title: "로봇 골프",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "로봇을 조종해 공을 홀컵에 넣는 프로그램으로 로봇 제어 기술과 스포츠의 정확성을 함께 경험해 볼 수 있습니다.",
    image: "/programs/event/robot-golf.jpg",
  },
  {
    slug: "instant-photo",
    title: "즉석포토박스",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "촬영과 즉석 출력 체험을 통해 행사 속 특별한 순간을 추억으로 기록할 수 있습니다.",
    image: "/programs/event/instant-photo.jpg",
  },
  {
    slug: "ar-cube-solve",
    title: "AR 큐브 솔브",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "AR 기술이 적용된 큐브솔브 콘텐츠를 통해 실시간 인터랙션과 문제 해결 활동을 경험합니다.",
    image: "/programs/event/ar-cube-solve.jpg",
  },
  {
    slug: "ar-glass-archery",
    title: "AR 글라스 양궁",
    category: "event",
    tier: "standard",
    duration: "현장 운영",
    capacity: "축제·행사부스",
    description:
      "AR 글라스를 활용한 몰입형 양궁 콘텐츠를 통해 증강현실 스포츠를 경험할 수 있습니다.",
    image: "/programs/event/ar-glass-archery.jpg",
  },
];

export const EVENT_PROGRAMS: Program[] = [...EVENT_PREMIUM, ...EVENT_STANDARD];

export const EVENT_GROUPS = {
  premium: EVENT_PREMIUM,
  standard: EVENT_STANDARD,
};

/** 중·고등 #festival 섹션 — 동일한 행사부스 데이터 공유 */
export const SECONDARY_FESTIVAL: Program[] = EVENT_PROGRAMS;

/* ===== Helpers ===== */
export type ElementaryGroupSegment = "12" | "36" | "trip";

export function groupToSegment(g?: Program["group"]): ElementaryGroupSegment {
  return g === "g12" ? "12" : g === "g36" ? "36" : "trip";
}
export function segmentToGroup(s: string): Program["group"] | undefined {
  if (s === "12") return "g12";
  if (s === "36") return "g36";
  if (s === "trip") return "trip";
  return undefined;
}
export function programHref(p: Program): string {
  if (p.category === "elementary") {
    return `/programs/elementary/${groupToSegment(p.group)}/${p.slug}`;
  }
  if (p.category === "secondary") {
    return `/programs/secondary/${p.slug}`;
  }
  return `/programs/event/${p.slug}`;
}

/** 행사부스 프로그램 — 카드/상세에서 표시되는 타이틀 (이름 옆 (고급형)/(일반형) 표기) */
export function displayTitle(p: Program): string {
  if (p.tier === "premium") return `${p.title} (고급형)`;
  if (p.tier === "standard") return `${p.title} (일반형)`;
  return p.title;
}

export function findElementaryProgram(
  segment: string,
  slug: string,
): Program | undefined {
  const group = segmentToGroup(segment);
  if (!group) return undefined;
  return ELEMENTARY.find((p) => p.group === group && p.slug === slug);
}
export function findSecondaryProgram(slug: string): Program | undefined {
  return SECONDARY.find((p) => p.slug === slug);
}
export function findEventProgram(slug: string): Program | undefined {
  return EVENT_PROGRAMS.find((p) => p.slug === slug);
}

export const ELEMENTARY_GROUP_LABEL: Record<ElementaryGroupSegment, string> = {
  "12": "1-2학년",
  "36": "3-6학년",
  trip: "체험학습 패키지",
};
