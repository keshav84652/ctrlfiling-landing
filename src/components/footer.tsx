"use client";

import { LogoLarge } from "@/components/logo-large";
import { SubscribeInput } from "@/components/subscribe-input";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { StatusWidget } from "./status-widget";

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleFeatureClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Check if we're already on the home page
    if (pathname === '/') {
      // If on home page, just scroll to features
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If on another page, navigate to home first, then scroll
      router.push('/?scrollTo=features');
    }
  };

  return (
    <footer className="border-t-[1px] border-border px-4 md:px-6 pt-6 md:pt-8 bg-[#fff] dark:bg-[#0C0C0C] overflow-hidden md:max-h-[820px]">
      <div className="container">
        <div className="flex justify-between items-center border-border border-b-[1px] pb-6 md:pb-8 mb-8">
          <Link href="/">
            <img src="/ctrlfiling-logo.svg" alt="CTRL+Filing" className="h-16 w-auto" />
          </Link>

          <span className="font-normal md:text-2xl text-right">
            Manage your practice smarter.
          </span>
        </div>

        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:w-6/12 justify-between leading-8">
            <div>
              <span className="font-medium">Features</span>
              <ul>
                <li className="transition-colors text-[#878787]">
                  <Link href="/#features" onClick={handleFeatureClick}>Document Processing</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/#features" onClick={handleFeatureClick}>Automated Reconciliation</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/#features" onClick={handleFeatureClick}>Workflow Automation</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/#features" onClick={handleFeatureClick}>AI Review & Validation</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/#features" onClick={handleFeatureClick}>Tax Software Integration</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/pricing">Pricing</Link>
                </li>
              </ul>
            </div>

            <div>
              <span>Support</span>
              <ul>
                <li className="transition-colors text-[#878787]">
                  <a href="mailto:keshav@ctrlfiling.com">Contact Support</a>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/policy">Privacy Policy</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="md:w-6/12 flex mt-8 md:mt-0 md:justify-end">
            <div className="flex md:items-end flex-col">
              <div className="md:mr-0 mt-auto mr-auto">
                <StatusWidget />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h5 className="dark:text-[#161616] text-[#F4F4F3] text-[240px] leading-none text-center pointer-events-none">
        CTRL+Filing
      </h5>
    </footer>
  );
}
