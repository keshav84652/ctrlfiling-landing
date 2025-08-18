import { Assistant } from "./assistant";

export function SectionSix() {
  return (
    <section className="mt-24 mb-12 container" id="assistant">
      <div className="text-center">
        <h4 className="text-4xl mb-4 font-medium">Assistant</h4>
        <p className="max-w-[790px] mx-auto text-center text-sm text-[#878787] mb-12">
          Ask CTRL+Filing anything and get tailored insights into your client data and practice operations. Understand reconciliation patterns, identify process improvements, and streamline your workflow automation.
        </p>

        <div className="w-full flex justify-center">
          <Assistant />
        </div>
      </div>
    </section>
  );
}
