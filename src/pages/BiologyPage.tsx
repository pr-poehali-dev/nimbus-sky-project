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
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">Нейробиология стресса</p>
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

        <motion.section {...fadeUp(0.25)} className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Общий адаптационный синдром</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ганс Селье описал три стадии стрессовой реакции, известные как <strong>Общий адаптационный синдром (ОАС)</strong>:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "⚡", title: "1. Тревога", color: "bg-yellow-50 border-yellow-200", text: "Немедленная реакция на стрессор. Активируется симпатическая нервная система, выделяются гормоны стресса." },
              { icon: "🛡️", title: "2. Резистентность", color: "bg-blue-50 border-blue-200", text: "Организм адаптируется к стрессору. Сопротивляемость повышается, но расходуются ресурсы организма." },
              { icon: "⚠️", title: "3. Истощение", color: "bg-red-50 border-red-200", text: "При длительном стрессе ресурсы истощаются, защитные механизмы ослабевают, возникают заболевания." },
            ].map((card) => (
              <div key={card.title} className={`rounded-xl border p-5 ${card.color}`}>
                <div className="text-2xl mb-2">{card.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp(0.3)} className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Нейробиологические механизмы</h2>
          <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-5 mb-5">
            <h3 className="font-bold text-indigo-800 mb-3">Гипоталамо-гипофизарно-надпочечниковая ось (ГГН-ось)</h3>
            <p className="text-gray-700 text-sm mb-3">Центральная система реагирования на стресс включает:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-indigo-400">•</span>Гипоталамус выделяет кортикотропин-рилизинг-гормон (КРГ)</li>
              <li className="flex gap-2"><span className="text-indigo-400">•</span>Гипофиз в ответ секретирует адренокортикотропный гормон (АКТГ)</li>
              <li className="flex gap-2"><span className="text-indigo-400">•</span>Надпочечники вырабатывают кортизол — основной гормон стресса</li>
            </ul>
          </div>
          <div className="rounded-xl bg-orange-50 border border-orange-100 p-5">
            <h3 className="font-bold text-orange-800 mb-3">Симпато-адреналовая система</h3>
            <p className="text-gray-700 text-sm mb-3">При остром стрессе активируется симпатическая нервная система, что приводит к:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              {["Выбросу адреналина и норадреналина", "Учащению сердцебиения и дыхания", "Повышению артериального давления", "Расширению зрачков", "Перераспределению крови к мышцам", "Повышению уровня глюкозы в крови"].map(i => (
                <li key={i} className="flex gap-2"><span className="text-orange-400">•</span>{i}</li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-orange-200">
              <p className="text-sm text-gray-700"><strong>Реакция «бей или беги»:</strong> физиолог Уолтер Кэннон описал «fight or flight» — комплекс физиологических изменений, подготавливающих организм к активным действиям в ответ на угрозу.</p>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp(0.35)} className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ключевые гормоны и нейромедиаторы</h2>
          <div className="space-y-4">
            {[
              { name: "Кортизол", desc: "Главный глюкокортикоидный гормон. Повышает уровень глюкозы, подавляет иммунную систему, влияет на метаболизм. Длительное повышение приводит к негативным последствиям." },
              { name: "Адреналин и норадреналин", desc: "Катехоламины, обеспечивающие быструю реакцию на стресс. Усиливают работу сердца, повышают давление, улучшают внимание и концентрацию." },
              { name: "Серотонин и дофамин", desc: "Нейромедиаторы, влияющие на настроение и мотивацию. Хронический стресс нарушает их баланс, что может приводить к депрессии и тревожности." },
            ].map((h) => (
              <div key={h.name} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-1">{h.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp(0.4)} className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Последствия хронического стресса</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">Длительное воздействие стресса оказывает негативное влияние на различные системы организма:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Нервная система", color: "bg-purple-50 border-purple-200", items: ["Атрофия гиппокампа (нарушение памяти)", "Изменения в амигдале (усиление тревожности)", "Нарушение нейрогенеза"] },
              { title: "Сердечно-сосудистая система", color: "bg-red-50 border-red-200", items: ["Артериальная гипертензия", "Повышенный риск инфаркта и инсульта", "Атеросклероз"] },
              { title: "Иммунная система", color: "bg-yellow-50 border-yellow-200", items: ["Снижение иммунитета", "Замедление заживления ран", "Повышенная восприимчивость к инфекциям"] },
              { title: "Эндокринная система", color: "bg-blue-50 border-blue-200", items: ["Нарушение метаболизма", "Повышенный риск диабета 2 типа", "Дисфункция щитовидной железы"] },
              { title: "Пищеварительная система", color: "bg-green-50 border-green-200", items: ["Синдром раздражённого кишечника", "Язвенная болезнь", "Нарушение пищеварения"] },
              { title: "Психическое здоровье", color: "bg-pink-50 border-pink-200", items: ["Депрессия и тревожные расстройства", "Нарушения сна", "Синдром выгорания"] },
            ].map((block) => (
              <div key={block.title} className={`rounded-xl border p-4 ${block.color}`}>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{block.title}</h3>
                <ul className="space-y-1">
                  {block.items.map(i => (
                    <li key={i} className="text-xs text-gray-700 flex gap-2"><span className="text-gray-400 mt-0.5">•</span>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp(0.45)} className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Нейропластичность и восстановление</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Хорошая новость заключается в том, что мозг обладает <strong>нейропластичностью</strong> — способностью изменяться и восстанавливаться. Правильные методы коррекции стресса могут:
          </p>
          <ul className="space-y-2 mb-6">
            {["Восстановить объём гиппокампа", "Улучшить связи между нейронами", "Нормализовать работу ГГН-оси", "Восстановить баланс нейромедиаторов", "Снизить хроническое воспаление"].map(i => (
              <li key={i} className="flex gap-2 text-gray-700 text-sm"><span className="text-indigo-500 font-bold">✓</span>{i}</li>
            ))}
          </ul>
          <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Важно помнить:</strong> Понимание биологических механизмов стресса — первый шаг к эффективному управлению им. В следующих разделах вы узнаете о научно обоснованных методах коррекции стресса и практических рекомендациях.
            </p>
          </div>
        </motion.section>

      </main>
    </div>
  )
}
