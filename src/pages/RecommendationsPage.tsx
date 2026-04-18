import { Navbar } from "@/components/Navbar"
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
})

const daily = [
  { time: "Утро", icon: "🌅", items: ["10–15 мин медитации или дыхательных упражнений", "Лёгкая зарядка или прогулка", "Планирование дня — не более 3 приоритетных задач"] },
  { time: "День", icon: "☀️", items: ["Перерывы каждые 90 минут (техника Помодоро)", "Прогулка на свежем воздухе", "Осознанный приём пищи без телефона"] },
  { time: "Вечер", icon: "🌙", items: ["Отказ от гаджетов за 1 час до сна", "Тёплый душ или ванна", "Чтение или спокойная музыка", "Сон 7–9 часов"] },
]

const nutrition = [
  { name: "Магний", sources: "Орехи, семена, тёмный шоколад, листовая зелень", effect: "Снижает возбудимость нервной системы" },
  { name: "Омега-3", sources: "Жирная рыба, льняное масло, грецкие орехи", effect: "Уменьшает воспаление, улучшает настроение" },
  { name: "Витамин C", sources: "Цитрусовые, перец, шиповник", effect: "Нейтрализует окислительный стресс, поддерживает надпочечники" },
  { name: "Витамин B", sources: "Цельнозерновые, яйца, бобовые", effect: "Поддерживает работу нервной системы" },
]

const warning = [
  "Постоянная тревога или паника",
  "Бессонница более 2–3 недель",
  "Полная потеря интереса к жизни",
  "Физические симптомы (боли в груди, головокружение)",
  "Мысли о причинении вреда себе",
]

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-20">
        <motion.div {...fadeUp(0.1)} className="pt-12 pb-8 border-b border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Рекомендации</h1>
          <p className="text-lg text-gray-500">Практические советы для снижения стресса в повседневной жизни</p>
        </motion.div>

        <motion.section {...fadeUp(0.2)} className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Режим дня</h2>
          <div className="space-y-6">
            {daily.map((block) => (
              <div key={block.time} className="rounded-xl bg-indigo-50 border border-indigo-100 p-5">
                <h3 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                  <span>{block.icon}</span> {block.time}
                </h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-indigo-400 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp(0.3)} className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Питание при стрессе</h2>
          <p className="text-gray-600 mb-6 text-sm">Некоторые нутриенты особенно важны для поддержания нервной системы:</p>
          <div className="space-y-3">
            {nutrition.map((n) => (
              <div key={n.name} className="rounded-xl bg-green-50 border border-green-200 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-green-800">{n.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Источники: {n.sources}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-2">{n.effect}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp(0.4)} className="mt-12">
          <div className="rounded-2xl bg-red-50 border border-red-200 p-6">
            <h2 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
              <span>⚠️</span> Когда обратиться к специалисту
            </h2>
            <p className="text-sm text-gray-700 mb-4">Обязательно проконсультируйтесь с врачом или психологом, если вы замечаете:</p>
            <ul className="space-y-2">
              {warning.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-400 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
