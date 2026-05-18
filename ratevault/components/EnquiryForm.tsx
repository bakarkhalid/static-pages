'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyzF0HnJqQMo5_D1K-DGjrYzT4dYca3Ht-okNPVLdSNEhsbimxg8mXyG2Et17GUnw/exec';

const AMOUNT_OPTIONS = [
  '$50,000 - $100,000',
  '$100,000 - $250,000',
  '$250,000 - $500,000',
  '$500,000+',
];
const TERM_OPTIONS = ['6 Months', '1 Year', '2 Years', '3 Years', '4 Years', '5 Years'];
const READY_OPTIONS = ['Immediately', 'Within 14 Days', 'Within a Month', 'One Month+'];

type DropdownField = 'amount' | 'term' | 'ready';
type StepOneField = DropdownField;
type StepTwoField = 'fullname' | 'email' | 'phone';

type Values = Record<DropdownField | StepTwoField, string>;

const initialValues: Values = {
  amount: '',
  term: '',
  ready: '',
  fullname: '',
  email: '',
  phone: '',
};

export function EnquiryForm() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [openDropdown, setOpenDropdown] = useState<DropdownField | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Element | null;
      if (target && target.closest('.dropdown')) return;
      setOpenDropdown(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenDropdown(null);
    }
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  function selectOption(field: DropdownField, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: false }));
    setOpenDropdown(null);
  }

  function toggleDropdown(field: DropdownField, e: React.MouseEvent) {
    e.stopPropagation();
    setOpenDropdown((curr) => (curr === field ? null : field));
  }

  function updateField(field: StepTwoField, val: string) {
    setValues((v) => ({ ...v, [field]: val }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: false }));
  }

  function handleNext() {
    const newErrors: Partial<Record<StepOneField, boolean>> = {};
    (['amount', 'term', 'ready'] as DropdownField[]).forEach((f) => {
      if (!values[f]) newErrors[f] = true;
    });
    setErrors((prev) => ({ ...prev, ...newErrors }));
    if (Object.keys(newErrors).length === 0) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Partial<Record<StepTwoField, boolean>> = {};
    if (!values.fullname.trim()) newErrors.fullname = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) newErrors.email = true;
    const phRaw = values.phone.replace(/[\s()-]/g, '').replace(/^0/, '').replace(/^\+?61/, '');
    if (!/^[234678]\d{8}$/.test(phRaw)) newErrors.phone = true;
    setErrors((prev) => ({ ...prev, ...newErrors }));
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const payload = {
        name: values.fullname.trim(),
        email: values.email.trim(),
        phone: '+61 ' + phRaw,
        investment_amount: values.amount,
        preferred_term: values.term,
        ready_to_invest: values.ready,
      };

      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok && (data.success === true || data.success === 'true')) {
        router.push('/thanks');
      } else {
        setErrorMessage(
          data.message ||
            data.error ||
            "Sorry, we couldn't send your enquiry. Please try again, or email us directly."
        );
        setSubmitting(false);
      }
    } catch (err) {
      console.error('Form submit error:', err);
      setErrorMessage(
        'Network error — please try again, or email us directly at info@ratevault.org.'
      );
      setSubmitting(false);
    }
  }

  return (
    <form id="enquiryForm" onSubmit={handleSubmit} noValidate>
      {/* Step 1 */}
      <div className={`form-step ${step === 1 ? 'active' : ''}`}>
        <div className="step-head">
          <h3>Compare Deposit Rates Now</h3>
          <p className="step-sub">Get Your Exclusive Rates Ready In 60 Seconds</p>
        </div>

        <div className="step-pills">
          <span>Free comparison</span>
          <span className="pill-dot" aria-hidden="true">&middot;</span>
          <span>No obligation</span>
          <span className="pill-dot" aria-hidden="true">&middot;</span>
          <span>Secure &amp; confidential</span>
        </div>

        <div className="dropdowns">
          <Dropdown
            field="amount"
            label="How Much Are You Willing To Invest?"
            options={AMOUNT_OPTIONS}
            value={values.amount}
            isOpen={openDropdown === 'amount'}
            error={!!errors.amount}
            onToggle={(e) => toggleDropdown('amount', e)}
            onSelect={(v) => selectOption('amount', v)}
          />
          <Dropdown
            field="term"
            label="What Is Your Ideal Investment Term?"
            options={TERM_OPTIONS}
            value={values.term}
            isOpen={openDropdown === 'term'}
            error={!!errors.term}
            onToggle={(e) => toggleDropdown('term', e)}
            onSelect={(v) => selectOption('term', v)}
          />
          <Dropdown
            field="ready"
            label="When Are You Ready To Invest?"
            options={READY_OPTIONS}
            value={values.ready}
            isOpen={openDropdown === 'ready'}
            error={!!errors.ready}
            onToggle={(e) => toggleDropdown('ready', e)}
            onSelect={(v) => selectOption('ready', v)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary btn-next"
          onClick={handleNext}
        >
          NEXT
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        <InvestorsFooter />
      </div>

      {/* Step 2 */}
      <div className={`form-step ${step === 2 ? 'active' : ''}`}>
        <div className="step-head">
          <h3>Compare Deposit Rates Now</h3>
          <p className="step-sub">Get Your Exclusive Rates Ready In 60 Seconds</p>
        </div>

        <div className="step-pills">
          <span>Free comparison</span>
          <span className="pill-dot" aria-hidden="true">&middot;</span>
          <span>No obligation</span>
          <span className="pill-dot" aria-hidden="true">&middot;</span>
          <span>Secure &amp; confidential</span>
        </div>

        {errorMessage && (
          <div className="form-error show">⚠ {errorMessage}</div>
        )}

        <div className={`field field-plain ${errors.fullname ? 'error' : ''}`}>
          <input
            type="text"
            id="fullname"
            name="name"
            placeholder="Full Name"
            autoComplete="name"
            value={values.fullname}
            onChange={(e) => updateField('fullname', e.target.value)}
          />
          <div className="field-err">Please enter your full name.</div>
        </div>
        <div className={`field field-plain ${errors.email ? 'error' : ''}`}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            value={values.email}
            onChange={(e) => updateField('email', e.target.value)}
          />
          <div className="field-err">Please enter a valid email address.</div>
        </div>
        <div className={`field field-plain ${errors.phone ? 'error' : ''}`}>
          <div className="phone-input">
            <span className="phone-prefix" aria-hidden="true">
              <span className="phone-prefix-cc" role="img" aria-label="Australia">
                <svg
                  viewBox="0 0 30 15"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <rect width="30" height="15" fill="#00247d" />
                  <path d="M0 0 L15 7.5 M0 7.5 L15 0" stroke="#fff" strokeWidth="1.6" />
                  <path d="M0 0 L15 7.5 M0 7.5 L15 0" stroke="#cf142b" strokeWidth="0.8" />
                  <path d="M7.5 0 V7.5 M0 3.75 H15" stroke="#fff" strokeWidth="2.4" />
                  <path d="M7.5 0 V7.5 M0 3.75 H15" stroke="#cf142b" strokeWidth="1.2" />
                  <circle cx="7.5" cy="11.5" r="1.3" fill="#fff" />
                  <circle cx="22" cy="3.5" r="0.9" fill="#fff" />
                  <circle cx="25.5" cy="7.5" r="0.8" fill="#fff" />
                  <circle cx="20" cy="9" r="0.8" fill="#fff" />
                  <circle cx="23" cy="11.5" r="0.8" fill="#fff" />
                  <circle cx="26.5" cy="12" r="0.5" fill="#fff" />
                </svg>
              </span>
              +61
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="412 345 678"
              inputMode="numeric"
              autoComplete="tel-national"
              value={values.phone}
              onChange={(e) => updateField('phone', e.target.value)}
            />
          </div>
          <div className="field-err">
            Please enter a valid Australian number (9 digits, e.g. 412 345 678).
          </div>
        </div>

        <div className="step-actions">
          <button
            type="button"
            className="btn btn-back"
            onClick={() => setStep(1)}
            disabled={submitting}
          >
            Back
          </button>
          <button type="submit" className="btn btn-primary btn-next" disabled={submitting}>
            {submitting ? 'Sending…' : (
              <>
                GET MY RATES
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>
        </div>

        <InvestorsFooter />
      </div>
    </form>
  );
}

function Dropdown({
  field,
  label,
  options,
  value,
  isOpen,
  error,
  onToggle,
  onSelect,
}: {
  field: DropdownField;
  label: string;
  options: string[];
  value: string;
  isOpen: boolean;
  error: boolean;
  onToggle: (e: React.MouseEvent) => void;
  onSelect: (value: string) => void;
}) {
  const filled = !!value;
  return (
    <div
      className={`dropdown ${isOpen ? 'open' : ''} ${filled ? 'filled' : ''} ${error ? 'error' : ''}`}
      data-field={field}
    >
      <button type="button" className="dropdown-toggle" onClick={onToggle}>
        <span className="dropdown-label">{value || label}</span>
        <svg
          className="caret"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <ul className="dropdown-menu" role="listbox" onClick={(e) => e.stopPropagation()}>
        <li className="dropdown-menu-head" aria-hidden="true">
          {label}
        </li>
        {options.map((opt) => (
          <li
            key={opt}
            role="option"
            aria-selected={value === opt}
            className={value === opt ? 'selected' : ''}
            onClick={() => onSelect(opt)}
          >
            {opt}
          </li>
        ))}
      </ul>
      <div className="field-err">Please choose an option.</div>
    </div>
  );
}

function InvestorsFooter() {
  return (
    <div className="step-investors">
      <div className="avatars">
        <span className="avatar" style={{ background: '#0A2540' }}>JM</span>
        <span className="avatar" style={{ background: '#163961' }}>SL</span>
        <span className="avatar" style={{ background: '#1f4a7a' }}>KW</span>
      </div>
      <div className="investors-text">
        <strong>11,750+</strong> investors compared rates this week
      </div>
    </div>
  );
}
