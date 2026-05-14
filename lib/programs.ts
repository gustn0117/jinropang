export type Program = {
  slug: string;
  title: string;
  category: "elementary" | "secondary";
  /** elementary 한정: 학년 그룹 / 체험학습 패키지 */
  group?: "g12" | "g36" | "trip";
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

/* ===== 초등 체험학습 패키지 ===== */
const ELEMENTARY_TRIP: Program[] = [
  {
    slug: "four-legged-robot",
    title: "4족보행 로봇",
    category: "elementary",
    group: "trip",
    duration: "체험학습 패키지",
    capacity: "현장 운영",
    description:
      "사족보행 로봇의 다양한 움직임을 직접 체험하며 미래 로봇 기술을 경험합니다.",
    image: "/programs/elementary/trip/four-legged-robot.png",
  },
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
    slug: "pop-drone-bingo",
    title: "팝드론 빙고",
    category: "elementary",
    group: "trip",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "드론을 조종하여 빙고 미션을 완성하며 재미있는 드론 게임을 체험 활동입니다.",
    image: "/programs/elementary/trip/pop-drone-bingo.png",
  },
  {
    slug: "instant-photo",
    title: "즉석 포토",
    category: "elementary",
    group: "trip",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "촬영과 즉석 출력 체험을 통해 행사 속 특별한 순간을 추억으로 기록할 수 있습니다.",
    image: "/programs/elementary/trip/instant-photo.jpg",
  },
  {
    slug: "drone-simulator",
    title: "드론 시뮬레이터",
    category: "elementary",
    group: "trip",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "가상 비행 환경에서 드론을 조종하며 드론 비행 시뮬레이션 콘텐츠를 통해 조작 기술과 가상 주행 환경을 경험합니다.",
    image: "/programs/elementary/trip/drone-simulator.jpg",
  },
  {
    slug: "pinball-tennis",
    title: "핀볼 테니스",
    category: "elementary",
    group: "trip",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "공의 움직임에 맞춰 플레이하며 반응형 스포츠 콘텐츠를 활용하여 순발력과 타이밍 플레이를 경험해 볼 수 있습니다.",
    image: "/programs/elementary/trip/pinball-tennis.jpg",
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

/* ===== 중·고등 교육 프로그램 ===== */
export const SECONDARY: Program[] = [
  {
    slug: "robot-engineering",
    title: "로봇공학자 체험",
    category: "secondary",
    duration: "100분(2교시)~",
    capacity: "20-30명",
    description:
      "로봇의 구조와 제어 원리를 이해하고 로봇 개조 및 전략 활동을 통해 공학적 사고와 문제 해결 능력을 기릅니다.",
    image: "/programs/secondary/robot-engineering.jpg",
  },
  {
    slug: "autonomous-driving",
    title: "자율주행 전문가 체험",
    category: "secondary",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "자율주행 기술의 구조와 알고리즘을 이해하고 다양한 주행 미션을 수행하며 스마트 모빌리티 기술을 경험합니다.",
    image: "/programs/secondary/autonomous-driving.jpg",
  },
  {
    slug: "wearable",
    title: "웨어러블 로봇 체험",
    category: "secondary",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "웨어러블 로봇의 동작 원리와 센서 제어 기술을 이해하고 미래 의료·재활 산업과의 연계를 탐구합니다.",
    image: "/programs/secondary/wearable.jpg",
  },
  {
    slug: "game-developer",
    title: "게임개발자 체험",
    category: "secondary",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "게임 기획과 프로그래밍 구조를 이해하고 인터랙션 요소를 활용한 콘텐츠 제작 과정을 경험합니다.",
    image: "/programs/secondary/game-developer.png",
  },
  {
    slug: "metaverse-vr",
    title: "메타버스(VR) 체험",
    category: "secondary",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "VR 콘텐츠 제작 도구를 활용하여 가상현실 환경을 설계하고 인터랙션 요소를 구현합니다.",
    image: "/programs/secondary/metaverse-vr.jpg",
  },
  {
    slug: "metaverse-ar",
    title: "메타버스(AR) 체험",
    category: "secondary",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "AR 콘텐츠 제작 도구를 활용하여 현실과 가상이 결합된 인터랙션 환경을 구현합니다.",
    image: "/programs/secondary/metaverse-ar.jpg",
  },
  {
    slug: "iot",
    title: "IoT 사물인터넷 체험",
    category: "secondary",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "IoT 시스템과 음성 제어 기술을 활용하여 스마트 기기 제어 환경을 직접 구현합니다.",
    image: "/programs/secondary/iot.jpg",
  },
  {
    slug: "ai-boardgame",
    title: "인공지능 보드게임 체험",
    category: "secondary",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "인공지능의 의사결정 구조와 데이터 활용 방식을 보드게임 활동을 통해 이해합니다.",
    image: "/programs/secondary/ai-boardgame.jpg",
  },
  {
    slug: "generative-ai",
    title: "생성형 AI 체험",
    category: "secondary",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "생성형 AI의 작동 원리와 프롬프트 설계 과정을 이해하고 이미지 및 영상 콘텐츠를 제작합니다.",
    image: "/programs/secondary/generative-ai.jpg",
  },
  {
    slug: "drone",
    title: "드론 체험",
    category: "secondary",
    duration: "80분(2교시)",
    capacity: "20-30명",
    description:
      "드론의 구조와 비행 제어 원리를 이해하고 다양한 주행 미션과 항공 기술을 경험합니다.",
    image: "/programs/secondary/drone.jpg",
  },
];

/* ===== 행사부스 / 축제 (event 페이지에서 사용) ===== */
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
  return `/programs/secondary/${p.slug}`;
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

export const ELEMENTARY_GROUP_LABEL: Record<ElementaryGroupSegment, string> = {
  "12": "1-2학년",
  "36": "3-6학년",
  trip: "체험학습 패키지",
};
