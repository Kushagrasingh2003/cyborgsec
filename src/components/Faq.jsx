import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = ({ question, answer }) => {
  return (
    <div className="bg-white mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      
      <Accordion type="single" collapsible className="w-full md:px-5">
        <AccordionItem value="item-1" className="px-5">
          <AccordionTrigger className="font-semibold text-lg text-left">
            {question}
          </AccordionTrigger>
          <AccordionContent className="-mt-1">
            {answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
