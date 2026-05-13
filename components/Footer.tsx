import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-100 bg-soft-grad">
      <div className="container-pad grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-md text-[14px] leading-[1.75] text-ink-500">
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
              신청서 작성
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm leading-[1.3] font-bold text-ink-900">
            바로가기
          </h4>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[14px] leading-[1.6] text-ink-500 hover:text-brand-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-[14px] leading-[1.6] text-ink-500 hover:text-brand-700"
              >
                상담 신청
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm leading-[1.3] font-bold text-ink-900">
            채널
          </h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={SITE.kakaoChannel}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] leading-[1.6] text-ink-500 hover:text-brand-700"
              >
                카카오톡 채널 1:1 문의
              </a>
            </li>
            <li>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] leading-[1.6] text-ink-500 hover:text-brand-700"
              >
                유튜브
              </a>
            </li>
            <li>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] leading-[1.6] text-ink-500 hover:text-brand-700"
              >
                인스타그램
              </a>
            </li>
            <li>
              <a
                href={SITE.social.blog}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] leading-[1.6] text-ink-500 hover:text-brand-700"
              >
                네이버 블로그
              </a>
            </li>
            <li>
              <a
                href="/assets/jinropang-brochure.pdf"
                className="text-[14px] leading-[1.6] text-ink-500 hover:text-brand-700"
              >
                회사 소개서 PDF
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-100">
        <div className="container-pad flex flex-col gap-2 py-6 text-[12px] leading-[1.6] text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 진로팡. All rights reserved.</p>
          <p>찾아가는 미래교육 · 진로체험 전문기관 · 전국 학교·기관 출강</p>
        </div>
      </div>
    </footer>
  );
}
