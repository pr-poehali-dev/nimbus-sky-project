import { Navbar } from "@/components/Navbar"
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
})

export default function BiologyPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-20">
        <motion.div {...fadeUp(0.1)} className="pt-12 pb-8 border-b border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Биологические основы стресса</h1>
          <p className="text-lg text-gray-500">Понимание физиологических механизмов стрессовой реакции организма</p>
        </motion.div>

        <motion.section {...fadeUp(0.2)} className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Что такое стресс?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Стресс</strong> — это неспецифическая реакция организма на любое предъявляемое ему требование. Термин был введён канадским учёным Гансом Селье в 1936 году. Стресс является адаптационным механизмом, помогающим организму справиться с вызовами окружающей среды.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Различают <strong>эустресс</strong> (положительный стресс, мобилизующий организм) и <strong>дистресс</strong> (негативный стресс, истощающий ресурсы организма).
          </p>
        </motion.section>

        <motion.section {...fadeUp(0.3)} className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Общий адаптационный синдром</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ганс Селье описал три стадии стрессовой реакции, известные как <strong>Общий адаптационный синдром (ОАС)</strong>:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: "⚡",
                title: "1. Тревога",
                color: "bg-yellow-50 border-yellow-200",
                text: "Немедленная реакция на стрессор. Активируется симпатическая нервная система, выделяются гормоны стресса.",
              },
              {
                icon: "🛡️",
                title: "2. Резистентность",
                color: "bg-blue-50 border-blue-200",
                text: "Организм адаптируется к стрессору. Сопротивляемость повышается, но расходуются ресурсы организма.",
              },
              {
                icon: "⚠️",
                title: "3. Истощение",
                color: "bg-red-50 border-red-200",
                text: "При длительном стрессе ресурсы истощаются, защитные механизмы ослабевают, возникают заболевания.",
              },
            ].map((card) => (
              <div key={card.title} className={`rounded-xl border p-5 ${card.color}`}>
                <div className="text-2xl mb-2">{card.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp(0.4)} className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Гормоны стресса</h2>
          <div className="space-y-4">
            {[
              { name: "Кортизол", desc: "Главный гормон стресса, вырабатывается корой надпочечников. Повышает уровень глюкозы в крови, подавляет иммунную систему, влияет на обмен веществ." },
              { name: "Адреналин", desc: "Выделяется мозговым веществом надпочечников. Учащает сердцебиение, расширяет дыхательные пути, мобилизует энергетические ресурсы." },
              { name: "Норадреналин", desc: "Вызывает сужение сосудов, повышение давления. Усиливает бдительность и концентрацию внимания." },
            ].map((h) => (
              <div key={h.name} className="p-5 rounded-xl bg-indigo-50 border border-indigo-100">
                <h3 className="font-bold text-indigo-800 mb-1">{h.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp(0.5)} className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Нервная система и стресс</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Вегетативная нервная система играет ключевую роль в стрессовой реакции. Она состоит из двух отделов:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-orange-50 border border-orange-200">
              <h3 className="font-bold text-orange-800 mb-2">Симпатическая система</h3>
              <p className="text-sm text-gray-700">Активируется при стрессе — реакция «бей или беги». Повышает пульс, давление, расширяет зрачки.</p>
            </div>
            <div className="p-5 rounded-xl bg-green-50 border border-green-200">
              <h3 className="font-bold text-green-800 mb-2">Парасимпатическая система</h3>
              <p className="text-sm text-gray-700">Отвечает за восстановление — реакция «отдыхай и переваривай». Замедляет пульс, нормализует дыхание.</p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
