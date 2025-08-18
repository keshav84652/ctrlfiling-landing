"use client";

import { Button } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { Icons } from "@/ui/icons";
import { useState } from "react";
import { type Story, StoryCard } from "./story-card";

const stories = [
  {
    id: 1,
    title: "AI document processing has reduced our prep time by 75%",
    description:
      "CTRL+Filing's AI automatically categorizes and processes client documents, saving us 15-20 hours per week during tax season.",
    name: "Sarah Mitchell, CPA",
    company: "Mitchell & Associates",
    country: "Texas",
    src: "",
    content: [
      {
        type: "heading",
        content:
          "Mitchell & Associates is a mid-sized CPA firm specializing in tax preparation and small business accounting services.",
      },
      {
        type: "question",
        content:
          "What specific challenges were you facing in document management before using CTRL+Filing?",
      },
      {
        type: "paragraph",
        content:
          "Every tax season, we were drowning in client documents. W-2s, 1099s, receipts, bank statements - everything came in different formats and needed manual sorting. Our team spent countless hours just organizing paperwork before we could even start the actual tax work. It was incredibly inefficient and stressful.",
      },
      {
        type: "question",
        content:
          "How has CTRL+Filing impacted your practice's efficiency?",
      },
      {
        type: "paragraph",
        content:
          "The AI document processing has been a game-changer. CTRL+Filing automatically categorizes and extracts data from client documents with 99% accuracy. What used to take our team 15-20 hours per week now takes maybe 3-4 hours. We can focus on actual tax strategy and client consultation instead of data entry.",
      },
      {
        type: "question",
        content:
          "What features do you find most valuable for your practice?",
      },
      {
        type: "paragraph",
        content:
          "The automated workflow integration with our tax software is incredible. Documents flow seamlessly from client upload to our tax preparation system. The client portal also keeps everything organized and accessible, which our clients love. They can track their document status in real-time.",
      },
    ],
  },
  {
    id: 2,
    title:
      "Our client communication has never been more professional",
    description:
      "The automated client updates and document requests have transformed how we interact with our clients throughout tax season.",
    name: "Robert Chen, CPA",
    company: "Chen Tax Services",
    country: "California",
    src: "",
    content: [
      {
        type: "heading",
        content:
          "Chen Tax Services provides comprehensive tax preparation and planning services for individuals and small businesses in the Bay Area.",
      },
      {
        type: "question",
        content:
          "What communication challenges did you face before CTRL+Filing?",
      },
      {
        type: "paragraph",
        content:
          "Client communication was always our biggest bottleneck. Chasing down missing documents, sending status updates, answering the same questions repeatedly - it consumed so much time. Clients would call constantly asking about their return status, and we didn't have a good system to keep them informed.",
      },
      {
        type: "question",
        content:
          "How has the platform improved your client relationships?",
      },
      {
        type: "paragraph",
        content:
          "CTRL+Filing's automated communication system has been transformative. Clients receive automatic updates when we receive their documents, when processing starts, and when their return is ready. The AI-powered document request system sends personalized reminders for missing items. Our client satisfaction scores have increased dramatically.",
      },
      {
        type: "question",
        content:
          "What impact has this had on your practice operations?",
      },
      {
        type: "paragraph",
        content:
          "We've reduced client phone calls by 60% because everyone knows exactly where their return stands. This has freed up our staff to handle more complex client needs and take on additional clients. The professional presentation through the client portal has also helped us attract higher-value clients who appreciate the modern approach.",
      },
    ],
  },
  {
    id: 3,
    title: "Seamless integration with our existing tax software",
    description:
      "CTRL+Filing works perfectly with our ProSystem fx and Drake software, creating a unified workflow that's revolutionized our practice.",
    name: "Jennifer Rodriguez, EA",
    company: "Rodriguez Tax & Accounting",
    country: "Florida",
    src: "",
    content: [
      {
        type: "heading",
        content:
          "Rodriguez Tax & Accounting serves over 500 individual and business clients with comprehensive tax preparation, bookkeeping, and consulting services.",
      },
      {
        type: "question",
        content:
          "What integration challenges were you facing with your existing software?",
      },
      {
        type: "paragraph",
        content:
          "We were using multiple disconnected systems - one for client communication, another for document processing, and our tax software for preparation. Data had to be manually transferred between systems, leading to errors and wasted time. We needed something that could tie everything together seamlessly.",
      },
      {
        type: "question",
        content:
          "How has CTRL+Filing's integration capabilities helped your practice?",
      },
      {
        type: "paragraph",
        content:
          "The integration with our ProSystem fx and Drake software is flawless. Client data flows automatically from document intake through tax preparation without any manual intervention. The API connections mean everything stays synchronized in real-time. It's like having one unified system instead of multiple tools fighting each other.",
      },
      {
        type: "question",
        content:
          "What efficiency gains have you seen?",
      },
      {
        type: "paragraph",
        content:
          "We've eliminated virtually all manual data entry errors and reduced our processing time per return by 40%. The automated workflows mean junior staff can handle complex document organization tasks that previously required senior preparers. This has allowed us to take on 30% more clients without adding staff.",
      },
    ],
  },
  {
    id: 4,
    title:
      "The practice management features have streamlined our entire operation",
    description:
      "From client onboarding to final delivery, CTRL+Filing manages our entire tax preparation workflow with intelligent automation and insights.",
    name: "Michael Thompson, CPA",
    company: "Thompson & Partners CPA",
    country: "Illinois",
    src: "",
    content: [
      {
        type: "heading",
        content:
          "Thompson & Partners CPA is a full-service accounting firm providing tax preparation, audit, and advisory services to mid-market businesses and high-net-worth individuals.",
      },
      {
        type: "question",
        content:
          "What practice management challenges were you experiencing?",
      },
      {
        type: "paragraph",
        content:
          "Managing client deadlines, tracking return status, allocating staff resources, and monitoring profitability was a constant struggle. We were using spreadsheets and sticky notes to track everything. During busy season, things would slip through the cracks, and we had no real visibility into our practice metrics.",
      },
      {
        type: "question",
        content:
          "How has CTRL+Filing transformed your practice management?",
      },
      {
        type: "paragraph",
        content:
          "The practice management dashboard gives us real-time visibility into every aspect of our operation. We can see which returns are behind schedule, which clients haven't submitted documents, and how our staff utilization looks. The automated workflow assignment ensures work is distributed efficiently based on complexity and staff availability.",
      },
      {
        type: "question",
        content:
          "What business insights have you gained?",
      },
      {
        type: "paragraph",
        content:
          "The analytics have been eye-opening. We can now track profitability per client, identify our most efficient workflows, and spot bottlenecks before they become problems. This data has helped us optimize our pricing and service offerings. We've increased our profit margins by 25% while improving client satisfaction.",
      },
    ],
  },
];


export default function SectionStories() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <Dialog>
      <div className="relative mt-20 pb-20">
        <div className="w-full h-full flex items-center flex-col z-10 relative">
          <h2 className="text-[56px] text-center font-medium mt-12">
            See How Leading Firms Save Time and Grow Smarter
          </h2>
          <div className="flex mt-20 -space-x-4">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`transform ${
                  index % 2 === 0 ? "rotate-3" : "-rotate-3"
                } ${
                  index % 2 === 0 ? "translate-y-3" : "-translate-y-3"
                } hover:z-10 hover:-translate-y-5 transition-all duration-300`}
              >
                <DialogTrigger asChild>
                  <div onClick={() => setSelectedStory(story)}>
                    <StoryCard {...story} />
                  </div>
                </DialogTrigger>
              </div>
            ))}
          </div>
        </div>

        <div className="dotted-bg w-[calc(100vw+1400px)] h-full absolute top-0 -left-[1200px] z-0" />
      </div>

      <DialogContent className="max-w-[550px] !p-6 pt-10 max-h-[calc(100vh-200px)] overflow-y-auto">
        <DialogHeader className="sr-only">
          <DialogTitle>{selectedStory?.title}</DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div>
              <p>{selectedStory?.name}</p>
              <div className="flex items-center gap-2 text-[#878787]">
                <p className="text-sm">{selectedStory?.company}</p>
                {selectedStory?.country && (
                  <>
                    •<p className="text-sm">{selectedStory?.country}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {selectedStory?.content?.map((item, index) =>
            item.type === "heading" ? (
              <h2 key={index.toString()} className="text-2xl font-medium">
                {item.content}
              </h2>
            ) : (
              <div
                key={index.toString()}
                className={item.type === "question" ? "text-[#878787]" : ""}
              >
                {item.content}
              </div>
            ),
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
