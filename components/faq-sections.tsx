'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqSections = [
  {
    category: "General Questions about YILSA Machines",
    questions: [
      {
        question: "Where are YILSA machines manufactured?",
        answer: "Except for electrical and electronic parts, all components are manufactured in-house."
      },
      {
        question: "What kind of technical support is offered?",
        answer: "Internal technical support is available whenever required."
      },
      {
        question: "What is the warranty period for the machines?",
        answer: "The warranty period for mechanical parts is 1 year, excluding buyer misuse. The warranty starts from the date of machine delivery."
      },
      {
        question: "What is included in the warranty?",
        answer: "Warranty covers mechanical parts for 1 year, excluding any buyer misuse. Heat treatment and material certificates are also provided."
      },
      {
        question: "What is not included in the warranty?",
        answer: "Warranty does not cover machine molds. Also, electronic devices are subject to the conditions determined by the purchasing institution."
      },
      {
        question: "Who is responsible for the expenses of service personnel during the warranty period?",
        answer: "The buyer is responsible for the expenses for accommodation, travel, round-trip airfare, and meals of the service personnel."
      },
      {
        question: "How long does it take for machine delivery?",
        answer: "The machine will be delivered within 2.5 months from the order confirmation date."
      },
      {
        question: "Where will the machine be tested?",
        answer: "The machine will be tested in the seller's production area under the supervision of the buyer."
      },
      {
        question: "When is the test considered successful?",
        answer: "The test is successful if the machine produces a final product that meets the requirements, such as the test material processed by the machine and the specified logos."
      },
      {
        question: "Is there training for the machine?",
        answer: "The seller provides training for the buyer's personnel in the seller's production area. The training takes 1 day and includes the demonstration of installation and usage of the machine."
      },
      {
        question: "What if I need technical drawings of male and female molds?",
        answer: "The seller will provide them on request."
      },
      {
        question: "What raw materials should I use?",
        answer: "Use companies that produce steep-edge st37 soft steel rolls with dimensions of 3x11.5 mm for 5g and 3x23 mm for 10g, manufactured by the cold drawing method with wire drawing."
      },
      {
        question: "Can the seller provide contact information for raw material firms?",
        answer: "If requested, the seller will provide the contact information of such firms located in Turkey to the buyer."
      },
      {
        question: "What should I do before initial operation?",
        answer: "Before starting the machine for the first time, make sure that all operators have carefully read and understood the user manual."
      },
      {
        question: "What social media platforms is YILSA on?",
        answer: "YILSA is on YouTube, Facebook, X, Instagram, OK.ru, and VK."
      }
    ]
  },
  {
    category: "Wheel Weight Chopping and Marking Machine",
    questions: [
      {
        question: "How does the Wheel Weight Chopping and Marking Machine work?",
        answer: "The machine uses Rotary Punch technology with male and female cutters on rotating drums. The sheet metal is cut and marked as the drums rotate."
      },
      {
        question: "What are the advantages of using this machine?",
        answer: "Advantages include low energy consumption, rapid production, long mold life, obvious marks, burr-free cuts, and high precision. The machine also doesn't require an extra feeding unit."
      },
      {
        question: "What is the production capacity of the Wheel Weight Chopping and Marking Machine?",
        answer: "It can produce 100,000 pieces per hour with rolled double sheet feeding."
      },
      {
        question: "What materials can be used with this machine?",
        answer: "It uses St37 steel strip in roll with a thickness of around 3 mm. Recommended dimensions are 3x11.5 mm for 5g weights and 3x23 mm for 10g weights."
      },
      {
        question: "What is the distance between the cutting blades on the machine?",
        answer: "The distance between the blades is 19 mm. This determines the cutting length."
      },
      {
        question: "What is the energy cost of the machine?",
        answer: "The energy cost is 1.37 kWh in weight production of 100,000 pieces."
      },
      {
        question: "What type of motor does the machine use?",
        answer: "The machine uses a 3 kW Motor and Speed Adjusted AC Drive."
      },
      {
        question: "What is the control system of the machine?",
        answer: "It uses a Delta brand PLC and 7\" Display."
      },
      {
        question: "What is the material of the cutting molds and marking drums?",
        answer: "The cutting molds are made of 2379 Cold inner tool steel, and the marking drums are made of Vanadis 4e."
      },
      {
        question: "What safety measures should I keep in mind while using the wheel weight chopping machine?",
        answer: "Keep the safety guidelines in mind to avoid injuries. Moving parts can cause serious injuries. Prior to operating the machine, make sure all safety covers are closed."
      },
      {
        question: "What do I do in case of a malfunction?",
        answer: "The control panel has an \"Arıza Tablosu\" (Failure Log) that shows current and past errors. The \"Arıza reset\" (Failure Reset) button can be used after fixing the problem."
      }
    ]
  },
  {
    category: "Wheel Weight Taping and Packaging Machine",
    questions: [
      {
        question: "What types of wheel weights can the Wheel Weight Taping Machine produce?",
        answer: "It is capable of producing 5g+5g single drums and 5g+10g double drums, with the latter also adaptable to a 5g+5g setting. It can be used for 10g+10g and 7.5g+7.5g as well."
      },
      {
        question: "What is the capacity of the Wheel Weight Taping Machine?",
        answer: "It has a capacity of 80~100 kg/h."
      },
      {
        question: "What are the dimensions of the Wheel Weight Taping Machine?",
        answer: "The machine dimensions are 1158mm(B)*1058mm(W)1380mm(H)."
      },
      {
        question: "How many operators are required for the Wheel Weight Taping Machine?",
        answer: "One person can operate 2~4 sets of machines."
      },
      {
        question: "What is the energy cost of the Wheel Weight Taping Machine?",
        answer: "The energy cost is 0.2 kW/h."
      },
      {
        question: "Can a packaging unit be added to the Wheel Weight Taping Machine later?",
        answer: "Yes, a packaging unit can be added without mechanical modifications."
      },
      {
        question: "What is the capacity of the Wheel Weight Packaging Unit?",
        answer: "The packaging unit has a capacity of 15 boxes/hour."
      },
      {
        question: "How does the Wheel Weight Packaging Unit connect to the taping machine?",
        answer: "It is attached directly to the outlet conveyor of the taping machine."
      }
    ]
  },
  {
    category: "Decoiler Machine",
    questions: [
      {
        question: "What are the types+ of decoiler machines available?",
        answer: "There are manual and hydraulic decoilers. The purchased decoiler machine comes with a hydraulic mandrel expansion unit."
      },
      {
        question: "What is the coil weight capacity of the Decoiler Machine?",
        answer: "The coil weight capacity is 2000 kg."
      },
      {
        question: "What are the minimum and maximum coil inner diameters?",
        answer: "Minimum coil inner diameter: 385 mm, Maximum coil inner diameter: 510 mm."
      },
      {
        question: "What is the maximum coil outer diameter?",
        answer: "The maximum coil outer diameter is 1300 mm."
      },
      {
        question: "What is the coil width capacity?",
        answer: "The coil width capacity is 450 mm."
      },
      {
        question: "What is the maximum working speed of the Decoiler Machine?",
        answer: "The maximum working speed is 40m/min."
      }
    ]
  },
  {
    category: "Production Line Specific Questions",
    questions: [
      {
        question: "What are the two main types of wheel weight production lines?",
        answer: "The two main types are:\nDecoiler + Chopping + Taping: This line uses a decoiler to feed strip sheets into a chopping and marking machine, followed by a taping machine.\nWire Flattening + Chopping + Taping: This line uses a wire flattening machine to prepare the material before chopping and taping."
      },
      {
        question: "What are the components of the \"Decoiler + Chopping + Taping\" production line?",
        answer: "The components include:\nDecoiler: For unwinding the coil of raw material.\nWheel Weight Chopping and Marking Machine (Rotary Punch): For cutting and marking the wheel weights.\nWheel Weight Taping Machine: For applying adhesive tape to the wheel weights."
      },
      {
        question: "What are the advantages of using a Rotary Punch in the production line?",
        answer: "Rotary Punch technology offers advantages such as:\nWaste Reduction: Capable of chopping the fed metal strip without generating any waste.\nHigh Production Capacity: Can produce 100,000 pieces/hour (if there is a rolled double sheet feeding)."
      },
      {
        question: "What is the purpose of the Decoiler Machine in the production line?",
        answer: "The Decoiler Machine simplifies coil and sheet metal processing by unwinding the coil."
      },
      {
        question: "What is the role of the Taping Machine in the production line?",
        answer: "The Taping Machine lines the manufactured wheel weight parts side by side with adhesive tapes after the coating process."
      },
      {
        question: "What are the components of the \"Wire Flattening + Chopping + Taping\" production line?",
        answer: "The components include:\nWire Flattening Machine: For flattening the wire into a strip suitable for wheel weights.\nChopping and Marking Machine: For cutting and marking the wheel weights.\nTaping Machine: For applying adhesive tape to the wheel weights."
      },
      {
        question: "What are the advantages of using a Wire Flattening Machine in the production line?",
        answer: "The Wire Flattening Machine is specifically designed for producing 5-gram wheel weights (LBA), offering a cost-effective price compared to general-purpose machines."
      },
      {
        question: "What raw materials are suitable for the \"Decoiler + Chopping + Taping\" line?",
        answer: "Suitable raw materials include ST37 or ST42 soft steel strip or coil. It is recommended to use companies that produce steep-edge st37 soft steel rolls with dimensions of 3x11.5 mm for 5g and 3x23 mm for 10g, manufactured by the cold drawing method with wire drawing."
      },
      {
        question: "What is the production capacity of YILSA Rotary Punch?",
        answer: "The monthly capacity obtained when YILSA Rotary Punch is used in the production of 5-10 g of wasteless wheel weight is 4800 boxes."
      },
      {
        question: "Can YILSA provide technical support and spare parts for automatic sorting and taping machines purchased from abroad?",
        answer: "Yes, YILSA provides all kinds of technical support and spare parts."
      }
    ]
  },
  {
    category: "General Questions About Wheel Weights",
    questions: [
      {
        question: "What are wheel weights made of?",
        answer: "Wheel weights are made of ST37 or ST42 soft steel strip or coil."
      },
      {
        question: "What materials are recommended for raw materials?",
        answer: "It is recommended to use companies that produce steep-edge st37 soft steel rolls with dimensions of 3x11.5 mm for 5g and 3x23 mm for 10g, manufactured by the cold drawing method with wire drawing."
      },
      {
        question: "What coatings are used for wheel weights?",
        answer: "Coatings, usually zinc, are applied to prevent corrosion. The wheel weights are also galvanized."
      },
      {
        question: "What is the weight accuracy of wheel weights produced by YILSA machines?",
        answer: "Weight accuracy is maintained within 60 ± 0.5g strips."
      },
      {
        question: "What sizes are available for wheel weights?",
        answer: "Wheel weights come in 5g and 10g."
      },
      {
        question: "What are the dimensions of a 5g wheel weight strip?",
        answer: "5g wheel weights have dimensions of 19 x 11.5 x 3 mm."
      },
      {
        question: "What are the dimensions of a 10g wheel weight strip?",
        answer: "10g wheel weights have dimensions of 19 x 23 x 3 mm."
      },
      {
        question: "What is the weight of a box of wheel weights?",
        answer: "A box of wheel weights weighs 6 kg."
      },
      {
        question: "How many pieces of adhesive tape are in each box?",
        answer: "Each box contains 100 pieces of adhesive tape."
      },
      {
        question: "What is the significance of sharp edges in wheel weights?",
        answer: "Sharp edges ensure precise application and secure fit."
      },
      {
        question: "Are YILSA wheel weights self-adhesive?",
        answer: "Yes, the wheel weights are self-adhesive."
      },
      {
        question: "What is the raw material thickness for the wheel weights?",
        answer: "The thickness of the raw material is 3mm."
      },
      {
        question: "What is the length of the wheel weight?",
        answer: "The length of the wheel weight is 19 mm and is fixed."
      }
    ]
  }
];

export function FAQSections() {

  return (
    <section id="faq-sections" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqSections.map((section, sectionIndex) => (
              <AccordionItem key={sectionIndex} value={`section-${sectionIndex}`} className="glass-card border-none shadow-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                  <h3 className="font-semibold text-lg">{section.category}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <Accordion type="single" collapsible className="space-y-4">
                    {section.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${sectionIndex}-${index}`}
                        className="border-none"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <span className="text-left font-semibold">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
