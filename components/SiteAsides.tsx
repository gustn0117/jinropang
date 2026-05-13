import Link from "next/link";
import { SITE } from "@/lib/site";
import {
  InstagramIcon,
  YoutubeIcon,
  NaverBlogIcon,
  KakaoTalkIcon,
  PhoneIcon,
} from "./SocialIcons";

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LeftAside() {
  return (
    <aside className="flex flex-col rounded-[3px] border border-ink-100 bg-soft-grad p-6 lg:self-start">
      <p className="section-eyebrow">전국 학교·기관 출강</p>
      <p className="mt-3 text-[19px] font-bold leading-[1.32] text-ink-900">
        학교로 찾아가는
        <br />
        미래교육 진로팡
      </p>
      <p className="mt-3.5 text-[14px] leading-[1.75] text-ink-700">
        학교 일정·대상 학년·운영 목적에 맞춰 최적의 체험 프로그램과 부스를
        제안해 드립니다.
      </p>
      <Link href="/contact" className="btn-primary mt-5 w-full">
        신청서 작성
        <Arrow />
      </Link>
      <p className="mt-2.5 text-center text-[12px] leading-[1.4] text-ink-500">
        평일 30분 이내 1차 회신
      </p>
    </aside>
  );
}

const ICON_CLS = "h-[18px] w-[18px]";

const LINKS = [
  {
    href: SITE.social.instagram,
    label: "인스타그램",
    sub: "바로가기",
    external: true,
    icon: <InstagramIcon className={ICON_CLS} />,
  },
  {
    href: SITE.social.youtube,
    label: "유튜브",
    sub: "바로가기",
    external: true,
    icon: <YoutubeIcon className={ICON_CLS} />,
  },
  {
    href: SITE.social.blog,
    label: "네이버 블로그",
    sub: "바로가기",
    external: true,
    icon: <NaverBlogIcon className="h-4 w-4" />,
  },
  {
    href: SITE.kakaoChannel,
    label: "카카오톡 채널",
    sub: "1:1 문의하기",
    external: true,
    icon: <KakaoTalkIcon className={ICON_CLS} />,
  },
  {
    href: `tel:${SITE.phoneE164}`,
    label: "대표번호",
    sub: SITE.phone,
    external: false,
    icon: <PhoneIcon className="h-[17px] w-[17px]" />,
  },
];

export function RightAside() {
  return (
    <aside className="flex flex-col gap-2.5 lg:self-start">
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
          className="group flex items-center gap-3 rounded-[3px] border border-ink-100 bg-white px-3.5 py-3 transition-colors hover:border-brand-700"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[2px] bg-ink-50 text-ink-700 transition-colors group-hover:bg-brand-50 group-hover:text-brand-700">
            {l.icon}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[13.5px] font-semibold leading-[1.3] text-ink-900">
              {l.label}
            </span>
            <span className="block text-[11.5px] leading-[1.3] text-ink-500">
              {l.sub}
            </span>
          </span>
        </a>
      ))}
      <Link
        href="/contact"
        className="mt-1 inline-flex items-center justify-between gap-2 rounded-[3px] bg-brand-700 px-4 py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-brand-800"
      >
        무료 상담 신청
        <Arrow />
      </Link>
    </aside>
  );
}
