import { Link, useLocation } from "react-router-dom"

const navLinks = [
  { label: "Главная", path: "/" },
  { label: "Биология стресса", path: "/biology" },
  { label: "Методы коррекции", path: "/methods" },
  { label: "Рекомендации", path: "/recommendations" },
]

export function Navbar() {
  const location = useLocation()

  return (
    <nav className="relative z-10 w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🧠</span>
          <span className="text-xl font-bold font-heading text-indigo-700">Стресс-менеджмент</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-600 hover:text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
