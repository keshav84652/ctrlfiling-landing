import { InfiniteMovingCards } from "@/components/infinite-moving-cards";

const testimonials = [
  {
    name: "Sarah Martinez, CPA",
    handle: "Martinez & Associates CPAs",
    quote: "CTRL+Filing has transformed our practice efficiency. We're processing 3x more client documents with 60% less manual work. The ROI was evident within the first month - our team can now focus on high-value advisory services instead of data entry.",
  },
  {
    name: "Michael Chen, EA",
    handle: "Chen Tax Services",
    quote: "The AI document processing is incredibly accurate and saves us 15-20 hours per week during tax season. At $49/month, it pays for itself in just the first few client files we process. Our clients love the faster turnaround times too.",
  },
  {
    name: "Jennifer Thompson, CPA",
    handle: "Thompson Accounting Group",
    quote: "We've grown our client base by 40% since implementing CTRL+Filing without adding staff. The automated workflows and client portal have streamlined our entire process. Best investment we've made in our practice technology.",
  },
  {
    name: "Robert Davis, CPA, CFE",
    handle: "Davis & Partners LLP",
    quote: "The integration with our tax software alone saves us 10 hours per week. CTRL+Filing has eliminated the bottleneck in our document processing pipeline. Our profit margins have improved significantly while maintaining accuracy.",
  },
  {
    name: "Lisa Park, CPA",
    handle: "Park Financial Services",
    quote: "As a solo practitioner, CTRL+Filing gives me the capabilities of a larger firm. The AI validation catches errors I might miss, and the client portal keeps everyone organized. It's like having an assistant that never sleeps.",
  },
  {
    name: "David Wilson, EA, CTRS",
    handle: "Wilson Tax Solutions",
    quote: "The time savings are remarkable - what used to take 2 hours per client now takes 20 minutes. We've been able to take on 25% more clients without sacrificing quality. Our hourly rate effectively doubled for document processing work.",
  },
  {
    name: "Amanda Rodriguez, CPA",
    handle: "Rodriguez Accounting Services",
    quote: "CTRL+Filing's accuracy and speed have impressed our clients so much that we've received 8 new referrals in the past quarter. The professional client experience it provides makes us look like a much larger firm.",
  },
  {
    name: "James Miller, CPA, MST",
    handle: "Miller Tax & Advisory",
    quote: "The compliance reporting features and audit trails have made our year-end reviews seamless. We've reduced our review time by 50% while maintaining our quality standards. It's transformed how we approach client work.",
  },
  {
    name: "Karen Lee, CPA",
    handle: "Lee & Associates",
    quote: "For a growing firm, the scalability is perfect. We started with the Solo plan and upgraded as we grew. The platform has supported our expansion from 3 to 15 team members without missing a beat.",
  },
  {
    name: "Maria Garcia, CPA, CFF",
    handle: "Garcia Financial Consulting",
    quote: "Client satisfaction has never been higher. The real-time updates and transparent process through the client portal have eliminated most status calls. Our clients feel more confident in our services than ever before.",
  },
];

export function Testimonials() {
  return (
    <div className="relative pb-22">
      <h3 className="text-4xl mb-8 font-medium">What people say</h3>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slower" />
    </div>
  );
}
