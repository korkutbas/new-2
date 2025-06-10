
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfaf5] to-[#f5f0e8] text-[#222] px-6 py-12 font-sans">
      <header className="text-center mb-16">
        <h1 className="text-6xl font-serif font-bold tracking-tight">Velmondo</h1>
        <p className="text-lg mt-4 text-gray-600 font-light italic">
          A refined way of seeing the world
        </p>
        <p className="mt-3 text-sm text-gray-500">usa.velmondo.com</p>
      </header>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2 text-[#b49b63]">Sourcing</h2>
            <p className="text-sm text-gray-700">
              Precision sourcing from Asia with supplier verification and local presence.
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2 text-[#b49b63]">Security</h2>
            <p className="text-sm text-gray-700">
              All transactions fully documented, supported by SWIFT and MT103 protocols.
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2 text-[#b49b63]">Trust</h2>
            <p className="text-sm text-gray-700">
              We build direct, verifiable bridges between buyer and supplier.
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2 text-[#b49b63]">Prestige</h2>
            <p className="text-sm text-gray-700">
              Velmondo is designed for high-trust, high-value international relationships.
            </p>
          </CardContent>
        </Card>
      </section>

      <div className="text-center">
        <Button className="text-lg px-8 py-4 rounded-xl bg-[#b49b63] text-white hover:bg-[#a78c52]">Contact Us</Button>
      </div>
    </div>
  );
}
