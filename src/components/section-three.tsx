"use client";

import { CtaLink } from "@/components/cta-link";
import { motion } from "framer-motion";
import reconciliationWizard from "public/images/screenshots/reconciliation-wizard.png";
import { DynamicImage } from "./dynamic-image";

export function SectionThree() {
  return (
    <section className="relative mb-12 group">
      <div className="border border-border container dark:bg-[#121212] overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[50%] p-8 flex flex-col justify-center">
            <h3 className="font-medium text-xl md:text-2xl mb-4">
              Automated Reconciliation
            </h3>

            <p className="text-[#878787] md:mb-4 text-sm">
              Generate formatted reconciliation sheets automatically using previous year data and custom templates. AI creates client-specific workflows, identifies year-over-year changes, and ensures precise schedule-to-return integration.
            </p>

            <div className="flex flex-col space-y-2">
              <div className="flex space-x-2 items-center mt-8 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={13}
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M6.55 13 .85 7.3l1.425-1.425L6.55 10.15 15.725.975 17.15 2.4 6.55 13Z"
                  />
                </svg>
                <span className="text-primary">
                  Auto-generated reconciliation sheets
                </span>
              </div>
              <div className="flex space-x-2 items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={13}
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M6.55 13 .85 7.3l1.425-1.425L6.55 10.15 15.725.975 17.15 2.4 6.55 13Z"
                  />
                </svg>
                <span className="text-primary">
                  Previous year data integration
                </span>
              </div>

              <div className="flex space-x-2 items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={13}
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M6.55 13 .85 7.3l1.425-1.425L6.55 10.15 15.725.975 17.15 2.4 6.55 13Z"
                  />
                </svg>
                <span className="text-primary">
                  Custom template creation
                </span>
              </div>

              <div className="flex space-x-2 items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={13}
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M6.55 13 .85 7.3l1.425-1.425L6.55 10.15 15.725.975 17.15 2.4 6.55 13Z"
                  />
                </svg>
                <span className="text-primary">
                  Year-over-year change detection
                </span>
              </div>

              <div className="flex space-x-2 items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={13}
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M6.55 13 .85 7.3l1.425-1.425L6.55 10.15 15.725.975 17.15 2.4 6.55 13Z"
                  />
                </svg>
                <span className="text-primary">Schedule-to-return tying</span>
              </div>
            </div>

            <div className="mt-6">
              <CtaLink text="Streamline reconciliation process" />
            </div>
          </div>

          <div className="lg:w-[50%] p-8 flex items-center justify-center">
            <img
              src={reconciliationWizard.src}
              alt="Reconciliation Wizard Interface"
              className="w-full h-auto object-contain rounded-lg shadow-lg max-w-[700px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
