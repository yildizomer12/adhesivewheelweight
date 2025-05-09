'use client';

import { Badge } from "@/components/ui/badge";
// Imports removed
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Interface definition removed

export function TechnologySection() { // lang prop removed
  // Hook call removed

  return (
    <section className="w-full bg-white pt-8 md:pt-16 pb-16">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1] hover:bg-[#e6f0f7]">Technology</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Beyond Wheel Weights: Unveiling the Versatility of Rotary Punch Technology
            </h2>
          </div>

          {/* Ana Kapsayıcı: Mobil için flex-col (order ile sıralı), Masaüstü için grid (order ile sıralı) */}
          <div className="mt-8 flex flex-col md:grid md:grid-cols-3 gap-8 items-center">
            {/* İlk GIF: Mobil sıra 1, Masaüstü sıra 1 */}
            <div className="flex flex-col items-center order-1 md:order-1">
              <div className="text-center font-semibold text-[#0066a1] mb-2">Rotary Punch</div>
              <img src="/images/Rotary_Punch_Animation.gif" alt="Rotary Punch Animation" className="max-w-[80%] h-auto" />
            </div>
            {/* İkinci GIF: Mobil sıra 2, Masaüstü sıra 3 */}
            <div className="flex flex-col items-center order-2 md:order-3">
              <div className="text-center font-semibold text-[#0066a1] mb-2">Punch Press</div>
              <img src="/images/Punch_Press_Animation.gif" alt="Punch Press Animation" className="max-w-[80%] h-auto" />
            </div>
            {/* Yazı Bloğu: Mobil sıra 3, Masaüstü sıra 2 (orta) */}
            <div className="text-justify text-gray-600 order-3 md:order-2">
              {"The unsung hero behind incredible speed and precision in manufacturing processes might just be ".split('(link)').map((part, i) => {
                if (i === 0) {
                  return <span key="first">{part}</span>;
                }
                return (
                  <span key="second">
                    <a
                      href="https://rotarypunch.tech/"
                      className="text-[#0066a1] hover:text-blue-800 transition-colors duration-200 font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rotary Punch Technology {/* Hardcoded English */}
                    </a>
                    {". While a star in the wheel weight industry, its talents stretch far beyond, revolutionizing how things are made. Rotary Punch Technology operates with a mesmerizing continuous rotary motion. Two drums, perfectly synchronized and fitted with male and female cutters, spin to smoothly and efficiently cut and mark materials. The action of punching is not vertical, which allows for smaller machine dimensions that can be used in tighter spaces."}
                  </span>
              );
              })}
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 text-justify">
            The Edge: Why Rotary Punch Excels
          </h3>
          <p className="text-gray-600 text-justify mb-4">
            Rotary Punch Technology is a game-changer because of its potent mix of efficiency, quality, and adaptability:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-justify">
            <li>Blazing Speed: Production speeds soaring up to 100,000 pieces per hour – that’s 4-8 times faster than conventional presses</li>
            <li>Energy Savings: Consuming as little as 1.37 kWh per 100,000 pieces, slashing energy consumption by up to 80%</li>
            <li>Zero Waste: Every cut is precise, maximizing raw material yield and minimizing waste</li>
            <li>Unwavering Quality: Expect burr-free cuts, clear markings, and consistent results every time</li>
            <li>Adaptable: It can be customized for different materials, thicknesses, and product specifications</li>
            <li>Durable: Rotary Punch Technology brings low maintenance costs and long die life</li>
          </ul>


          <div className="rounded-lg border bg-white shadow-lg overflow-hidden max-w-2xl mx-auto mt-8">
            <Table>
              <TableBody>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40 font-medium">Feature</TableCell>
                  <TableCell className="w-40 font-medium">Rotary Punch Technology</TableCell>
                  <TableCell className="w-40 font-medium">Traditional Press Systems</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">Production Speed</TableCell>
                  <TableCell className="w-40">100,000 pieces/hour</TableCell>
                  <TableCell className="w-40">25,000 pieces/hour</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">Energy Efficiency</TableCell>
                  <TableCell className="w-40">83,300 pieces/kWh</TableCell>
                  <TableCell className="w-40">20,800 pieces/kWh</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">Motion</TableCell>
                  <TableCell className="w-40">Continuous rotary motion for smooth operation</TableCell>
                  <TableCell className="w-40">Intermittent motion causing vibration</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">Feeding Mechanism</TableCell>
                  <TableCell className="w-40">Self-feeding mechanism</TableCell>
                  <TableCell className="w-40">Requires external feeding unit</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">Cut Quality</TableCell>
                  <TableCell className="w-40">Burr-free, precise cuts</TableCell>
                  <TableCell className="w-40">Burrs and cutting angle distortion</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">Material Waste</TableCell>
                  <TableCell className="w-40">0</TableCell>
                  <TableCell className="w-40">High</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">Maintenance Costs</TableCell>
                  <TableCell className="w-40">Lower</TableCell>
                  <TableCell className="w-40">Higher</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">Overall Lifespan</TableCell>
                  <TableCell className="w-40">Longer</TableCell>
                  <TableCell className="w-40">Shorter</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-16 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 text-justify">Beyond the Expected: Applications Across Industries</h3>
            <p className="text-gray-600 text-justify">Rotary Punch Technology shines in diverse sectors:</p>
            <ul className="space-y-6 text-justify">
              <li>
                <Link href="/chopping-and-marking-machine" className="font-medium text-[#0066a1] hover:text-blue-700">
                  Wheel Weights
                </Link>
                <p className="mt-1 text-gray-600">Providing high-precision and rapid production for the wheel weight industry.</p>
              </li>
              <li>
                <a href="https://rotarypunch.tech/urun-rotary-punch--clamping-profile-perforation--1631.html"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="font-medium text-[#0066a1] hover:text-blue-700"
                >
                  Clamping Profile Perforation
                </a>
                <p className="mt-1 text-gray-600">Designed for the perforation of metal clips used to strengthen edge trims, enhancing production speed and energy conservation with patented rotary punch technology.</p>
              </li>
              <li>
                <a href="https://rotarypunch.tech/urun-cardboard-reel-edge-protector-v-notching-machine-technical-specifications-1630.html"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="font-medium text-[#0066a1] hover:text-blue-700"
                >
                  Cardboard Reel Edge Protector V Notching Machine
                </a>
                <p className="mt-1 text-gray-600">Designed for producing cardboard reel edge protectors, which cover round edges of products to avoid impact and dispersion. It utilizes patented rotary punch technology to perforate cardboard, extending the life of punching tools.</p>
              </li>
              <li>
                <a href="https://rotarypunch.tech/urun-rotary-punch-cable-tray-production-line-1633.html"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="font-medium text-[#0066a1] hover:text-blue-700"
                >
                  Cable Tray Production
                </a>
                <p className="mt-1 text-gray-600">Manufacturing metal cable trays with unparalleled precision and speed, ensuring robust support for electrical systems.</p>
              </li>
              <li>
                <div className="font-medium text-[#0066a1]">Customized Solutions for Repetitive Tasks</div>
                <p className="mt-1 text-gray-600">Rotary Punch can provide solutions for repetitive hole punching and marking projects.</p>
              </li>
            </ul>
            <h4 className="text-xl font-semibold text-gray-900 mt-8 text-justify">Integration and Real-World Impact</h4>
            <p className="text-gray-600 mt-4 text-justify">Rotary Punch Technology seamlessly integrates into existing production lines. Whether it's the self-feeding mechanism in wheel weight manufacturing or the synchronization with roll forming systems in cable tray production, this technology streamlines operations for maximum efficiency. Rotary Punch Technology is a gateway to greater efficiency, higher quality, and significant cost savings. As industries evolve, this technology stands ready to meet the challenges of tomorrow, driving innovation and transforming manufacturing processes across the globe.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
