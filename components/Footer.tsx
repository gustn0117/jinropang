import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import Logo from "./Logo";
import VisitorCounter from "./VisitorCounter";
import {
  InstagramIcon,
  YoutubeIcon,
  NaverBlogIcon,
  KakaoTalkIcon,
} from "./SocialIcons";

const SOCIALS = [
  { href: SITE.kakaoChannel, label: "카카오톡 채널", Icon: KakaoTalkIcon },
  { href: SITE.social.youtube, label: "유튜브", Icon: YoutubeIcon },
  { href: SITE.social.instagram, label: "인스타그램", Icon: InstagramIcon },
  { href: SITE.social.blog, label: "네이버 블로그", Icon: NaverBlogIcon },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-ink-100 bg-soft-grad lg:mt-28">
      <div className="container-pad grid gap-10 py-14 md:grid-cols-4 lg:py-16">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-md text-[14px] leading-[1.75] text-ink-600">
            {SITE.brandFull}은 학교·기관 대상 로봇·코딩·AI·메타버스 체험
            프로그램과 축제·행사 부스, 대회 운영을 안전하게 진행합니다. 전국
            출강 및 맞춤 견적 상담을 빠르게 안내드립니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={`tel:${SITE.phoneE164}`}
              className="btn-secondary"
              aria-label={`대표번호 ${SITE.phone}`}
            >
              대표번호 {SITE.phone}
            </a>
            <Link href="/contact" className="btn-primary">
              견적 문의하기
            </Link>
          </div>
          <div className="mt-6 flex gap-2">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="grid h-9 w-9 place-items-center rounded-[2px] border border-ink-100 bg-white text-ink-600 transition-colors hover:border-brand-700 hover:bg-brand-50 hover:text-brand-700"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[13px] font-bold uppercase tracking-[0.1em] text-ink-700">
            바로가기
          </h4>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[14px] leading-[1.6] text-ink-600 transition-colors hover:text-brand-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-[14px] leading-[1.6] text-ink-600 transition-colors hover:text-brand-700"
              >
                상담 신청
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[13px] font-bold uppercase tracking-[0.1em] text-ink-700">
            채널
          </h4>
          <ul className="mt-4 space-y-2.5">
            {SOCIALS.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 text-[14px] leading-[1.6] text-ink-600 transition-colors hover:text-brand-700"
                >
                  <Icon className="h-4 w-4 shrink-0 text-ink-400 transition-colors group-hover:text-brand-700" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-100 bg-white">
        <div className="container-pad flex flex-col gap-2 py-5 text-[13px] leading-[1.6] text-ink-700 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-ink-900">
            사업자등록번호 <span className="ml-1 font-bold tabular-nums">390-88-03117</span>
            <span aria-hidden className="mx-2 text-ink-300">|</span>
            <span className="font-medium text-ink-700">진로팡</span>
          </p>
          <div className="flex flex-col gap-1 text-[12px] text-ink-500 sm:items-end">
            <VisitorCounter />
            <p>
              © {new Date().getFullYear()} 진로팡. All rights reserved. · 찾아가는 미래교육 · 전국 학교·기관 출강
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
