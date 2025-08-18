import ticTieSlayer from "public/images/screenshots/tic-tie-slayer.png";
import { CtaLink } from "./cta-link";

export function SectionTwo() {
  return (
    <section className="border border-border container dark:bg-[#121212] overflow-hidden mb-12 group">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[50%] flex flex-col justify-center p-8 relative">
          <h3 className="font-medium text-xl md:text-2xl mb-4">
            Smart Document Processing
          </h3>

          <p className="text-[#878787] mb-8 text-sm">
            AI automatically recognizes, categorizes, and extracts data from tax documents. No more manual sorting - your team focuses on analysis, not data entry. From chaos to organized in seconds.
          </p>

          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2 items-center ">
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
              <span className="text-primary text-sm">AI document recognition & classification</span>
            </div>

            <div className="flex space-x-2 items-center">
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
              <span className="text-primary text-sm">Automatic data extraction & validation</span>
            </div>

            <div className="flex space-x-2 items-center">
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
              <span className="text-primary text-sm">OCR for handwritten documents</span>
            </div>

            <div className="flex space-x-2 items-center">
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
              <span className="text-primary text-sm">Real-time error detection</span>
            </div>

            <div className="flex space-x-2 items-center">
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
              <span className="text-primary text-sm">Direct export to tax software</span>
            </div>
          </div>

          <div className="absolute bottom-6 left-8">
            <CtaLink text="Automate document processing" />
          </div>
        </div>

        <div className="lg:w-[50%] p-8 flex items-center justify-center">
          <img
            src={ticTieSlayer.src}
            alt="Smart Document Processing Interface with auto-generated bookmarks"
            className="w-full h-auto object-contain rounded-lg shadow-lg max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
}
