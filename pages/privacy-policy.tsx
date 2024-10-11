export default function PrivacyPolicy() {
  return (
    <section id="privacy-policy" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Privacy Policy
        {/* <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span> */}
      </h2>

      <div className="w-10/12">
        <p className="text-primary">Effective Date: August 5</p>
        <p className="mt-2">
          This Privacy Policy governs the privacy practices of MaxFocus
          Extension ("the Extension"). This policy outlines how we collect, use,
          and protect the information obtained from users of the Extension.
        </p>

        <h3 className="text-xl font-bold mt-4">
          Information Collection and Usage:
        </h3>

        <p className="mt-2">
          The Extension does not collect or store any personal or identifiable
          information from its users. We do not collect any browsing history,
          personal data, or any other user-related information.
        </p>

        <h3 className="text-xl font-bold mt-4">Non-Personal Information:</h3>

        <p className="mt-2">
          The Extension may collect non-personal information, such as aggregated
          usage statistics, device information, and technical data, to improve
          the performance, functionality, and user experience of the Extension.
          This information is collected and analyzed in a manner that does not
          identify individual users.
        </p>

        <h3 className="text-xl font-bold mt-4">Data Security:</h3>

        <p className="mt-2">
          We are committed to protecting the security of any information
          transmitted or received through the Extension. While we take
          reasonable measures to safeguard data, please note that no method of
          transmission or storage over the internet is 100% secure. We cannot
          guarantee absolute security of data.
        </p>

        <h3 className="text-xl font-bold mt-4">Children's Privacy:</h3>

        <p className="mt-2">
          The Extension is not intended for use by individuals under the age of
          13. We do not knowingly collect personal information from children. If
          we become aware that personal information has been inadvertently
          collected from a child under 13, we will take immediate steps to
          delete that information from our records.
        </p>

        <h3 className="text-xl font-bold mt-4">
          Changes to the Privacy Policy:
        </h3>

        <p className="mt-2">
          We reserve the right to modify this Privacy Policy at any time. Any
          changes will be effective immediately upon posting the revised policy
          in the Extension. We encourage users to review the Privacy Policy
          periodically for any updates.
        </p>

        <h3 className="text-xl font-bold mt-4">Contact Us:</h3>

        <p className="mt-2">
          If you have any questions, concerns, or suggestions regarding this
          Privacy Policy or the practices of the Extension, please contact us at
          maoxiaoke@outlook.com.
        </p>

        <p className="mt-2">
          By using the Extension, you signify your acceptance of this Privacy
          Policy. If you do not agree with this policy, please refrain from
          using the Extension.
        </p>
      </div>

      {/* <Accordion type="single" collapsible className="w-full AccordionRoot"> */}
      {/* {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))} */}
      {/* </Accordion> */}
    </section>
  )
}
