import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="relative z-10 w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold font-heading text-gray-900">СтрессОлогия</div>
        </div>

        {/* CTA Button */}
        <Button size="lg" className="hover:bg-indigo-700 text-white bg-slate-900">
          Читать гайд
        </Button>
      </div>
    </nav>
  )
}