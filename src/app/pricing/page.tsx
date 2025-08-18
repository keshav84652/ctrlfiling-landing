import { Testimonials } from "@/components/testimonials";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import { Button } from "@/ui/button";
import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Midday's pricing",
};

export default function Page() {
  return (
    <>
      <div className="container">
        <div>
          <div className="flex items-center flex-col text-center relative">
            <h1 className="mt-24 font-medium text-center text-5xl mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-md text-muted-foreground mb-12 max-w-2xl">
              Choose the plan that's right for you with our 30-day money back guarantee.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mt-8">
              {/* Solo Practice Plan */}
              <div className="flex flex-col p-8 border bg-background h-full">
                <h2 className="text-xl mb-2 text-left">Solo Practice</h2>
                <div className="mt-4 flex items-baseline">
                  <span className="text-[40px] font-medium tracking-tight">
                    $29
                  </span>
                  <span className="ml-1 text-2xl font-medium">/mo</span>
                </div>
                <p className="mt-4 text-[#878787] text-left text-sm">
                  For individual CPAs and small practices.
                </p>

                <div className="mt-8 flex-grow">
                  <h3 className="text-xs font-medium uppercase tracking-wide text-left text-[#878787] font-mono">
                    INCLUDING
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">
                        100 documents per month with AI
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">Advanced AI document processing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">Full workflow automation suite</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">Advanced reconciliation & matching</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">AI review & validation with audit trails</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">Multi-client portal management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">Tax software integration & exports</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">AI Assistant (1000 queries/month)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm font-bold">Single user</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 border-t-[1px] border-border pt-8">
                  <Link href="https://cal.com/keshav-kasat/30min" target="_blank">
                    <Button
                      variant="outline"
                      className="w-full h-12 border border-primary"
                    >
                      Get Solo Plan
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Team Plan */}
              <div className="flex flex-col p-8 border border-primary bg-background relative h-full">
                <div className="absolute top-0 right-0 mr-4 mt-4 rounded-full text-[#878787] text-[9px] font-normal border px-2 py-1 font-mono">
                  Most Popular
                </div>
                <h2 className="text-xl text-left mb-2">Team</h2>
                <div className="mt-4 flex items-baseline">
                  <span className="text-[40px] font-medium tracking-tight">
                    $49
                  </span>
                  <span className="ml-1 text-2xl font-medium">/mo /user</span>
                </div>
                <p className="mt-4 text-[#878787] text-left text-sm">
                  For growing accounting firms with multiple team members.
                </p>

                <div className="mt-8 flex-grow">
                  <h3 className="text-xs font-medium uppercase tracking-wide text-left text-[#878787] font-mono">
                    INCLUDING
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">
                        100 documents per month with AI
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">Advanced AI document processing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">Full workflow automation suite</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">Advanced reconciliation & matching</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">AI review & validation with audit trails</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">Multi-client portal management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">Tax software integration & exports</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm">AI Assistant (1000 queries/month)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-sm font-bold">Unlimited team members</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 border-t border-border pt-8">
                  <Link href="https://cal.com/keshav-kasat/30min" target="_blank">
                    <Button className="w-full h-12">Get Team Plan</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-4 flex w-full max-w-5xl items-center justify-between">
              <p className="mt-4 text-xs text-muted-foreground font-mono">
30-day money back guarantee (No questions asked)
              </p>

              <p className="mt-4 text-xs text-muted-foreground font-mono hidden md:block">
                Need more? Feel free to{" "}
                <Link href="/support" className="underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-[800px] mt-32">
          <div>
            <div className="text-center">
              <h4 className="text-4xl">Frequently asked questions</h4>
            </div>

            <Accordion type="single" collapsible className="w-full mt-10 mb-48">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="truncate">Which tax software does CTRL+Filing integrate with?</span>
                </AccordionTrigger>
                <AccordionContent>
                  CTRL+Filing currently integrates with CCH Axcess. We're actively working on adding support for Lacerte, ProSeries, and Drake based on client needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How accurate is the AI document processing?
                </AccordionTrigger>
                <AccordionContent>
                  Our AI achieves 100% accuracy in document recognition and data extraction. If the confidence is not enough, our software flags for human review so that you can check any flagged items before final processing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is my client data secure and compliant?</AccordionTrigger>
                <AccordionContent>
                  Yes, CTRL+Filing meets industry-standard security requirements with bank-level encryption, regular security audits, and compliance with professional accounting standards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <span className="truncate max-w-[300px] md:max-w-full">
                    What are your data privacy & security policies?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  We take data privacy very seriously and implement
                  state-of-the-art security measures to protect your data. We
                  encrypt data at rest, and sensitive data on row level. We also
                  support 2FA authentication.
                  <Link href="/policy" className="ml-1 underline">
                    Read our privacy policy
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <span className="truncate max-w-[300px] md:max-w-full">
                    Can I cancel my subscription at any time?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel your subscription at any time. If you cancel within the first month, we offer a full money-back guarantee. Otherwise, you will still be able to use CTRL+Filing until the end of your billing period.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  <span className="truncate max-w-[300px] md:max-w-full">
                    I have more questions about CTRL+Filing. How can I get in
                    touch?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Sure, we're happy to answer any questions you might have. Just
                  send us an email at{" "}
                  <a href="mailto:support@ctrlfiling.com" className="underline">
                    support@ctrlfiling.com
                  </a>{" "}
                  or{" "}
                  <a href="https://cal.com/keshav-kasat/30min" target="_blank" className="underline">
                    schedule a call with our founders
                  </a>{" "}
                  and we'll get back to you as soon as possible.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <Testimonials />
    </>
  );
}
