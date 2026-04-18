import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Hero7 } from "@/components/Hero7"
import { motion, AnimatePresence } from "framer-motion"

const sections = [
  { label: "Биология стресса", path: "/biology", icon: "🧬", desc: "Физиологические механизмы и гормоны" },
  { label: "Методы коррекции", path: "/methods", icon: "🧘", desc: "Медитация, спорт, дыхание" },
  { label: "Рекомендации", path: "/recommendations", icon: "📋", desc: "Режим дня, питание, советы" },
]

const Index = () => {
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 35%, #818cf8 80%, #4f46e5 100%)",
        }}
      />
      <div className="relative z-10">
        <Navbar />
        <main className="lg:mx-12">
          <Hero7
            heading="Биологические основы стресса и методы его коррекции"
            description="Узнайте, как стресс влияет на организм на клеточном уровне — и какие научно обоснованные методы помогают восстановить баланс нервной системы, гормонального фона и качества жизни."
            button={{ text: "Узнать больше", url: "#" }}
            reviews={{
              count: 1200,
              rating: 4.9,
              avatars: [
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp", alt: "Читатель 1" },
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp", alt: "Читатель 2" },
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp", alt: "Читатель 3" },
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp", alt: "Читатель 4" },
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp", alt: "Читатель 5" },
              ],
            }}
            onButtonClick={() => setShowMenu(true)}
          />
        </main>
      </div>

      <AnimatePresence>
        {showMenu && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMenu(false)}
            />
            <motion.div
              className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Выберите раздел</h2>
                <p className="text-sm text-gray-500 mb-5">Куда хотите перейти?</p>
                <div className="space-y-3">
                  {sections.map((s) => (
                    <button
                      key={s.path}
                      onClick={() => { setShowMenu(false); navigate(s.path) }}
                      className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-left"
                    >
                      <span className="text-2xl">{s.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900">{s.label}</div>
                        <div className="text-xs text-gray-500">{s.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setShowMenu(false)}
                  className="mt-4 w-full text-center text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Закрыть
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Index
