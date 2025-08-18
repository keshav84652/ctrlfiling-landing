import { CtaLink } from "./cta-link";

export function SectionFour() {
  return (
    <section className="flex justify-between space-y-12 lg:space-y-0 lg:space-x-8 flex-col lg:flex-row overflow-hidden mb-12 relative">
      <div className="border border-border lg:w-1/2 dark:bg-[#121212] p-8 flex flex-col justify-center group relative">
        <h4 className="font-medium text-xl md:text-2xl mb-4">Client Workflow Automation</h4>

        <p className="text-[#878787] mb-6 text-sm">
          Streamline client interactions with branded portals, automated status updates, and intelligent task routing. Keep clients informed while reducing your administrative burden.
        </p>

        <div className="flex flex-col space-y-2">
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
            <span className="text-primary">Branded client portals</span>
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
            <span className="text-primary">Automated progress notifications</span>
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
            <span className="text-primary">Secure document sharing</span>
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
            <span className="text-primary">Task assignment & routing</span>
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
            <span className="text-primary">Deadline tracking & reminders</span>
          </div>
        </div>

        <div className="mt-6">
          <CtaLink text="Automate client workflows" />
        </div>
      </div>

      <div className="border border-border lg:w-1/2 dark:bg-[#121212] p-8 flex flex-col justify-center group relative">
        <h4 className="font-medium text-xl md:text-2xl mb-4">AI Review & Validation</h4>
        
        <p className="text-[#878787] mb-6 text-sm">
          AI validates calculations, flags anomalies, and generates review notes automatically. Navigate tax files with auto-generated bookmarks and intelligent organization.
        </p>

        <div className="flex flex-col space-y-2">
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
            <span className="text-primary">Automated calculation validation</span>
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
            <span className="text-primary">Anomaly detection & flagging</span>
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
            <span className="text-primary">Auto-generated bookmarks</span>
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
            <span className="text-primary">Intelligent file organization</span>
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
            <span className="text-primary">Review note generation</span>
          </div>
        </div>

        <div className="mt-6">
          <CtaLink text="Accelerate review process" />
        </div>
      </div>
    </section>
  );
}