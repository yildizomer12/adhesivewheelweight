"use client";
import React from 'react';
import Link from 'next/link';


interface AdhesiveWheelWeightsBlogContentProps {}

const AdhesiveWheelWeightsBlogContent: React.FC<AdhesiveWheelWeightsBlogContentProps> = () => {
  

  const linkClassName = "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline cursor-pointer transition-colors";

  
  const rotaryPunchAdvantagesList = [
    <React.Fragment key="rpa1"><strong>High Production Speed:</strong> Up to 100,000 pieces per hour. The wheel weight chopping and marking machine can produce 60,000 pieces of 5g or 10g wheel weights per hour with single strip feeding, and 120,000 pieces with double strip feeding.</React.Fragment>,
    <React.Fragment key="rpa2"><strong>Low Energy Consumption:</strong> Rotary cutting and marking consumes less energy due to a smaller electric motor. The energy cost is approximately 1.37 kWh for producing 100,000 pieces.</React.Fragment>,
    <React.Fragment key="rpa3"><strong>Waste Reduction:</strong> The machine cuts the metal strip without any material waste.</React.Fragment>,
    <React.Fragment key="rpa4"><strong>Precision and Quality:</strong> Burr-free and smooth-edged wheel weights are produced with clear markings.</React.Fragment>,
    <React.Fragment key="rpa5"><strong>Low Maintenance:</strong> Rotary technology reduces vibration, prolongs mold life, and lowers maintenance costs.</React.Fragment>
  ];

  const wireFlatteningMachineList = [
    <React.Fragment key="wfm1"><Link href='/wire-flattening-machine' className={linkClassName}>Wire Flattening Machine</Link>: This machine processes M8 wire rod directly into 11.5 mm x 3 mm dimensions, streamlining production and reducing raw material costs by up to 50%. It eliminates the need for a decoiler in some cases.</React.Fragment>,
    <React.Fragment key="wfm2"><Link href='/chopping-and-marking-machine' className={linkClassName}>Wheel Weight Chopping and Marking Machine</Link>: Employs rotary punch technology for high-speed cutting and marking of wheel weights. It can mark brand logos and denominations (Fe 5 and 10) on the weights.</React.Fragment>,
    <React.Fragment key="wfm3"><Link href='/taping-and-packaging-machine' className={linkClassName}>Wheel Weight Taping Machine</Link>: This machine produces single drums of 5g+5g and double drums of 5g+10g, with the latter adjustable to a 5g+5g setting. Production can be monitored via a control panel.</React.Fragment>,
    <React.Fragment key="wfm4"><Link href='/taping-and-packaging-machine' className={linkClassName}>Wheel Weight Packaging Unit</Link>: Efficiently packages wheel weights in specified combinations at a rate of 15 boxes per hour. It attaches to the taping machine's outlet conveyor for continuous packaging.</React.Fragment>,
    <React.Fragment key="wfm5"><Link href='/decoiler-machine' className={linkClassName}>Decoiler Machine</Link>: YILSA offers mechanical and hydraulic decoilers that can handle coils of different weights and dimensions. The hydraulic decoiler includes a hydraulic mandrel expansion unit for automated operation and improved precision.</React.Fragment>
  ];

  const machineAdvantagesList = [
    <React.Fragment key="ma1"><strong>Cost-Effective</strong>: YILSA machines offer a <strong>lower initial capital</strong> investment compared to multiple eccentric press lines while providing higher production capacity.</React.Fragment>,
    <React.Fragment key="ma2"><strong>Compact Design</strong>: The machines have a small footprint and can be used in tighter spaces and on intermediate floors due to reduced vibration.</React.Fragment>,
    <React.Fragment key="ma3"><strong>In-House Production and Automation</strong>: Except for electrical and electronic components, all parts are manufactured in-house, and automation is performed by experienced staff, ensuring reliability and readily available technical support.</React.Fragment>,
    <React.Fragment key="ma4"><strong>Customization</strong>: The wheel weight taping machine can be produced with or retrofitted with a packaging unit. Marking drums with different logos can also be provided.</React.Fragment>
  ];

  const materialsAndQualityFeaturesList = [
    <React.Fragment key="mqf1"><strong>Galvanized Coating</strong>: Enhanced corrosion resistance.</React.Fragment>,
    <React.Fragment key="mqf2"><strong>Sharp Edges</strong>: Precise application and secure fit.</React.Fragment>,
    <React.Fragment key="mqf3"><strong>Premium Adhesive Tape</strong>: High-quality adhesive for superior attachment.</React.Fragment>,
    <React.Fragment key="mqf4"><strong>Weight Accuracy</strong>: Maintained within ± 0.5g per strip.</React.Fragment>
  ];

  

  return (
    <article className="pt-16 pb-8 md:pt-28 md:pb-12">
      <div className="container">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            YILSA: Revolutionizing Wheel Weight Production with Advanced Rotary Punch Technology {/* Hardcoded */}
          </h1>
        </header>
        {/* Refactored direct call */}
        <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
          <p>Discover YILSA's high-speed wheel weight production machines featuring rotary punch technology. Produce up to 100,000 pieces per hour with lower energy consumption and maintenance costs.</p> {/* Hardcoded */}
        </div>
      </div>

      {/* Advanced Production Technology section */}
      <div className="container mt-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Advanced Production Technology {/* Hardcoded */}
        </h2>
        {/* Refactored direct call with Link */}
        <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4 mb-4 text-justify">
          <p>YILSA's wheel weight chopping and marking machines utilize <Link href='/rotary-punch' className={linkClassName}>rotary punch technology</Link>, which is significantly faster than traditional eccentric presses. This technology employs male and female cutters on rotating drums to chop sheet metal with precision.</p> {/* Hardcoded */}
        </div>
        <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
          <p>
            Key advantages of YILSA's rotary punch technology: {/* Hardcoded */}
          </p>
          {/* Refactored loop */}
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
            {rotaryPunchAdvantagesList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Comprehensive Production Line section */}
      <section className="pt-8">
        <div className="container">
          <header className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Comprehensive Production Line {/* Hardcoded */}
            </h2>
          </header>
          {/* Refactored direct call */}
          <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4 text-justify">
            <p>YILSA offers a complete production line for adhesive wheel weights:</p> {/* Hardcoded */}
          </div>
        </div>
        <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
          {/* Refactored loop */}
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
            {wireFlatteningMachineList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Machine Advantages section */}
      <section className="pb-8">
        <div className="container">
          <header className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Advantages of YILSA Machines {/* Hardcoded */}
            </h2>
          </header>
          <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
            {/* Refactored loop */}
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
              {machineAdvantagesList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Materials and Quality section */}
      <section className="pt-0 pb-8">
        <div className="container">
          <header className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Raw Materials and Quality {/* Hardcoded */}
            </h2>
          </header>
          <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
            {/* Refactored direct call */}
            <div className="leading-relaxed space-y-4 text-justify">
              <p>YILSA provides recommendations for raw materials, ensuring that the buyer uses the correct specifications for optimal machine performance. The company also submits heat treatment and material certificates as per the contract. YILSA's adhesive wheel weights feature:</p> {/* Hardcoded */}
            </div>
          </div>
          <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
            {/* Refactored loop */}
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
              {materialsAndQualityFeaturesList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4 mt-6">
            <p className="leading-relaxed text-justify font-bold">
              By choosing YILSA, companies can achieve faster, more precise, and more cost-effective wheel weight production. {/* Hardcoded */}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default AdhesiveWheelWeightsBlogContent;
