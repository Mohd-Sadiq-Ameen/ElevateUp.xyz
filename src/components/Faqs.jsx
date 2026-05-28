'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What do you actually offer?',
    answer:
      'We help businesses get more customers using websites, content, social media, video, and automation systems.',
  },
  {
    question: 'Is the growth call really free?',
    answer:
      'Yes. The call is completely free with no obligation.',
  },
  {
    question: 'What happens during the call?',
    answer:
      'We analyze your business, identify growth gaps, and show possible ways to improve customer acquisition.',
  },
  {
    question: 'Who is this for?',
    answer:
      'Business owners, startups, creators, and local businesses looking to grow online consistently.',
  },
  {
    question: 'What if results are slower than expected?',
    answer:
      'If targets are not being met, we continue optimizing and supporting the system at no additional cost.',
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white pt-20 pb-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[#131628]">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Everything you need to know before booking your free growth call.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-gray-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-5 transition-colors duration-200"
                >
                  <h3 className="text-sm sm:text-base font-semibold text-[#131628]">
                    {faq.question}
                  </h3>

                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-[#6F00FF]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm sm:text-base mb-5">
            Ready to get more customers?
          </p>

          <a
            href="/breakdown"
            className="inline-flex items-center justify-center gap-2 bg-[#6F00FF] text-white font-semibold px-6 sm:px-8 py-3 rounded-full hover:bg-[#5800CC] transition-all duration-200 hover:scale-[1.02] shadow-md"
          >
            Book Free Growth Call

            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}