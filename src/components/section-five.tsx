import taxprepBot from "public/images/screenshots/taxprep-bot.png";
import { CtaLink } from "./cta-link";

export function SectionFive() {
  return (
    <section className="border border-border container dark:bg-[#121212] overflow-hidden mb-12 group">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[40%] p-8 flex flex-col justify-center relative">
          <h3 className="font-medium text-xl md:text-2xl mb-4">
            Tax Software Integration
          </h3>

          <p className="text-[#878787] mb-6 text-sm">
            Seamlessly export processed data to your tax preparation software. Our intelligent integration framework ensures accurate, formatted data transfer that eliminates manual entry and reduces errors across your tax workflow.
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
              <span className="text-primary text-sm">CCH Axcess direct integration</span>
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
              <span className="text-primary text-sm">Standardized CSV/Excel export formats</span>
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
              <span className="text-primary text-sm">Custom field mapping & validation</span>
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
              <span className="text-primary text-sm">API-ready architecture for any platform</span>
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
              <span className="text-primary text-sm">Batch processing & error detection</span>
            </div>
          </div>

          <div className="absolute bottom-6 left-8">
            <CtaLink text="Connect your tax software" />
          </div>
        </div>

        <div className="lg:w-[60%] p-8 flex items-center justify-center">
          <img
            src={taxprepBot.src}
            alt="Tax Software Integration Interface"
            className="w-full h-auto object-contain rounded-lg shadow-lg max-w-[350px]"
          />
        </div>
      </div>
    </section>
  );
}
