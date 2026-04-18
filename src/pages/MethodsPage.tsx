import { Navbar } from "@/components/Navbar"
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
})

const methods = [
  {
    icon: "🧘",
    title: "Медитация и майндфулнес",
    subtitle: "Медитация осознанности (mindfulness) — практика концентрации внимания на настоящем моменте без оценки.",
    mechanism: [
      "Снижает активность амигдалы (центра страха и тревоги)",
      "Укрепляет префронтальную кору (контроль эмоций)",
      "Уменьшает выработку кортизола",
      "Улучшает нейропластичность гиппокампа",
      "Повышает активность парасимпатической нервной системы",
    ],
    fact: "8 недель практики медитации по 30 минут в день приводят к измеримым изменениям в структуре мозга.",
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100",
  },
  {
    icon: "🏃",
    title: "Физическая активность",
    subtitle: "Регулярные упражнения — один из наиболее эффективных способов борьбы со стрессом.",
    mechanism: [
      "Стимулирует выработку эндорфинов и серотонина",
      "Снижает уровень кортизола и адреналина",
      "Улучшает качество сна",
      "Повышает нейропластичность мозга",
      "Укрепляет иммунную систему",
    ],
    fact: "30 минут умеренных аэробных упражнений снижают тревожность на 48 часов.",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
  {
    icon: "😮‍💨",
    title: "Дыхательные техники",
    subtitle: "Контролируемое дыхание — быстрый способ активировать парасимпатическую нервную систему.",
    mechanism: [
      "Активирует блуждающий нерв",
      "Снижает частоту сердечных сокращений",
      "Уменьшает артериальное давление",
      "Снижает уровень кортизола в крови",
      "Улучшает вариабельность сердечного ритма",
    ],
    fact: "Техника 4-7-8 снижает острый стресс за 2–3 минуты практики.",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
]

export default function MethodsPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-20">
        <motion.div {...fadeUp(0.1)} className="pt-12 pb-8 border-b border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Методы коррекции стресса</h1>
          <p className="text-lg text-gray-500">Научно обоснованные способы управления стрессом и восстановления организма</p>
        </motion.div>

        <motion.p {...fadeUp(0.2)} className="mt-8 text-gray-700 leading-relaxed">
          Существует множество методов коррекции стресса, подтверждённых научными исследованиями. Ключ к успеху — комплексный подход и регулярная практика. Рассмотрим наиболее эффективные методы.
        </motion.p>

        <div className="mt-10 space-y-12">
          {methods.map((method, i) => (
            <motion.section key={method.title} {...fadeUp(0.3 + i * 0.1)}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`text-2xl rounded-xl p-2 ${method.iconBg}`}>{method.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900">{method.title}</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>{method.title}</strong> — {method.subtitle}
              </p>
              <h3 className="font-bold text-gray-800 mb-2">Механизм действия:</h3>
              <ul className="list-disc list-inside space-y-1 mb-5 text-gray-700">
                {method.mechanism.map((item) => (
                  <li key={item} className="text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
              <div className={`rounded-xl border p-4 ${method.color}`}>
                <p className="text-sm text-gray-700"><strong>Научные данные:</strong> {method.fact}</p>
              </div>
            </motion.section>
          ))}
        </div>
      </main>
    </div>
  )
}
