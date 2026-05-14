"use client";

import { useMemo, useState } from "react";

const TYPES = [
  "초등 체험학습",
  "초등 진로체험",
  "중·고 진로의 날",
  "축제 부스",
  "대회 운영",
  "기타 기관 행사",
];

export default function ContactForm() {
  const [type, setType] = useState(TYPES[0]);
  const [school, setSchool] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [count, setCount] = useState("");
  const [date, setDate] = useState("");
  const [memo, setMemo] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const mailto = useMemo(() => {
    const body = [
      `[ 진로팡 견적·상담 신청 ]`,
      `프로그램 유형: ${type}`,
      `기관/학교명: ${school}`,
      `담당자: ${name}`,
      `연락처: ${phone}`,
      `대상 학년: ${grade}`,
      `예상 인원: ${count}`,
      `희망 일정: ${date}`,
      ``,
      `요청 사항:`,
      memo,
    ].join("\n");
    const subject = `[견적 문의] ${school || "(미입력)"} - ${type}`;
    return `mailto:contact@jinropang.kr?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [type, school, name, phone, grade, count, date, memo]);

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        window.location.href = mailto;
      }}
    >
      <fieldset>
        <legend className="text-[13px] leading-[1.3] font-semibold text-ink-900">
          어떤 운영을 원하시나요?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {TYPES.map((t) => (
            <label
              key={t}
              className={`cursor-pointer rounded-[2px] border px-3.5 py-2 text-[13px] leading-[1.2] font-semibold transition-colors ${
                type === t
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-ink-100 bg-white text-ink-700 hover:border-brand-400"
              }`}
            >
              <input
                type="radio"
                name="type"
                value={t}
                checked={type === t}
                onChange={(e) => setType(e.target.value)}
                className="sr-only"
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="기관/학교명"
          required
          value={school}
          onChange={setSchool}
          placeholder="예: 진로초등학교"
        />
        <Field
          label="담당자 성함"
          required
          value={name}
          onChange={setName}
          placeholder="예: 홍길동 교사"
        />
        <Field
          label="연락 가능한 번호"
          required
          value={phone}
          onChange={setPhone}
          placeholder="예: 010-1234-5678"
          type="tel"
        />
        <Field
          label="희망 일정"
          value={date}
          onChange={setDate}
          placeholder="예: 2025-06-12 / 미정"
        />
        <Field
          label="대상 학년"
          value={grade}
          onChange={setGrade}
          placeholder="예: 초 5-6학년 / 중 1학년"
        />
        <Field
          label="예상 인원"
          value={count}
          onChange={setCount}
          placeholder="예: 80명 / 부스 전 학생"
        />
      </div>

      <div>
        <label className="text-[13px] leading-[1.3] font-semibold text-ink-900">
          요청사항 / 운영 목적
        </label>
        <textarea
          rows={5}
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          placeholder="운영 목적, 예산 범위, 선호 프로그램, 공간 정보 등을 자유롭게 적어주세요."
          className="mt-2 w-full rounded-[3px] border border-ink-100 bg-white p-4 text-[14px] leading-[1.7] outline-none transition placeholder:text-ink-300 focus:border-brand-500 focus:shadow-ring"
        />
      </div>

      <label className="flex items-start gap-2 text-[13px] leading-[1.6] text-ink-500">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-0.5"
          required
        />
        <span>
          개인정보 수집·이용에 동의합니다. 견적·상담 안내 목적으로만 사용하며,
          관련 법령에 따라 안전하게 관리합니다.
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-2">
        <button type="submit" className="btn-primary" disabled={!agree}>
          견적 문의 보내기
        </button>
        <a
          href="http://pf.kakao.com/_XNtWG/chat"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          카카오톡 1:1 문의
        </a>
        <a href="tel:+8216681758" className="btn-ghost">
          전화 1668-1758
        </a>
      </div>

      {submitted && (
        <p className="rounded-[3px] bg-brand-50 p-4 text-[13px] leading-[1.7] text-brand-800">
          메일 앱이 열렸습니다. 보내주시면 평일 30분 이내 1차 회신을 드립니다.
          메일이 어려우시면 카카오톡 또는 전화로 편하게 연락 주세요.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[13px] leading-[1.3] font-semibold text-ink-900">
        {label}
        {required && <span className="ml-1 text-brand-600">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-[3px] border border-ink-100 bg-white px-4 py-3 text-[14px] leading-[1.4] outline-none transition placeholder:text-ink-300 focus:border-brand-500 focus:shadow-ring"
      />
    </label>
  );
}
