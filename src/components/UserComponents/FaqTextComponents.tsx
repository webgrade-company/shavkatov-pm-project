"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title: "What makes MVPBlocks different?",
    content:
      "MVPBlocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS, designed to help you launch your MVPs in record time. No bloated packages, no unnecessary installs—just clean, copyable code to plug right into your next big thing.",
  },
  {
    id: "2",
    title: "How can I customize the components?",
    content:
      "All components are built with Tailwind CSS, making them highly customizable. Simply modify the class names or use our theme variables to match your brand. Components also support both light and dark modes out of the box.",
  },
  {
    id: "3",
    title: "Are MVPBlocks components responsive?",
    content:
      "Absolutely! All components are designed to be fully responsive and work beautifully on all devices, from mobile phones to large desktop screens. We've carefully crafted each component to provide an optimal experience regardless of screen size.",
  },
  {
    id: "4",
    title: "Can I use MVPBlocks for commercial projects?",
    content:
      "Yes, all MVPBlocks components are free to use for both personal and commercial projects. No attribution required—just build and launch your MVP faster than ever before.",
  },
  {
    id: "5",
    title: "How do I get started with MVPBlocks?",
    content:
      "Simply browse our component library, find the components you need, and copy the code into your project. It's that easy! Our documentation provides clear instructions for installation and usage.",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
};

function Faq1() {
  return (
    <section className="py-3 md:py-16">
      <div className="container mx-auto max-w-8xl px-4 md:px-6">
        <motion.div
          className="relative mx-auto max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Decorative gradient */}
          <div className="bg-primary/10 absolute -top-4 -left-4 -z-10 h-72 w-72 rounded-full blur-3xl" />
          <div className="bg-primary/10 absolute -right-4 -bottom-4 -z-10 h-72 w-72 rounded-full blur-3xl" />

          <Accordion
            type="single"
            collapsible
            className="w-full  rounded-xl backdrop-blur-sm"
            defaultValue="0"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={item.id}
                  className={cn(
                    "my-1 overflow-hidden !border-b-1 !border-b-[#BEBEBE] px-2 transition-colors"
                  )}
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className={cn(
                        "group flex flex-1 items-center justify-between gap-4 py-4 text-left text-base font-medium",
                        "hover:text-primary transition-all duration-300 outline-none",
                        "focus-visible:ring-primary/50 focus-visible:ring-2",
                        "data-[state=open]:text-primary"
                      )}
                    >
                      {item.title}
                      <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
                        <PlusIcon
                          size={18}
                          className={cn(
                            "text-primary/70 transition-transform duration-300 ease-out",
                            "group-data-[state=open]:rotate-45"
                          )}
                          style={{ width: "18px", height: "18px" }}
                          aria-hidden="true"
                        />
                      </div>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent
                    className={cn(
                      "text-muted-foreground overflow-hidden pt-0 pb-4",
                      "data-[state=open]:animate-accordion-down",
                      "data-[state=closed]:animate-accordion-up"
                    )}
                  >
                    <div className="border-border/30 border-t pt-3">
                      {item.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

export default Faq1;
