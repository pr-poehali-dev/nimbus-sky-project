import { Navbar } from "@/components/Navbar"
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
})

export default function MethodsPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-20">

        <motion.div {...fadeUp(0.1)} className="pt-12 pb-8 border-b border-gray-100">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">Йога и релаксация</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Методы коррекции стресса</h1>
          <p className="text-lg text-gray-500">Научно обоснованные способы управления стрессом и восстановления организма</p>
        </motion.div>

        <motion.p {...fadeUp(0.2)} className="mt-8 text-gray-700 leading-relaxed">
          Существует множество методов коррекции стресса, подтверждённых научными исследованиями. Ключ к успеху — комплексный подход и регулярная практика. Рассмотрим наиболее эффективные методы.
        </motion.p>

        {/* Медитация */}
        <motion.section {...fadeUp(0.25)} className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl rounded-xl p-2 bg-purple-100">🧘</div>
            <h2 className="text-2xl font-bold text-gray-900">Медитация и майндфулнес</h2>
          </div>
          <p className="text-gray-700 mb-5 leading-relaxed">
            <strong>Медитация осознанности (mindfulness)</strong> — практика концентрации внимания на настоящем моменте без оценки.
          </p>
          <h3 className="font-bold text-gray-800 mb-2">Механизм действия:</h3>
          <ul className="list-disc list-inside space-y-1 mb-5 text-gray-700 text-sm">
            {["Снижает активность амигдалы (центра страха и тревоги)", "Укрепляет префронтальную кору (контроль эмоций)", "Уменьшает выработку кортизола", "Улучшает нейропластичность гиппокампа", "Повышает активность парасимпатической нервной системы"].map(i => <li key={i}>{i}</li>)}
          </ul>
          <div className="rounded-xl bg-purple-50 border border-purple-200 p-5 mb-5">
            <h3 className="font-bold text-purple-800 mb-3">Научные данные:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-purple-400">•</span>Исследования показывают, что 8 недель практики медитации по 30 минут в день приводят к измеримым изменениям в структуре мозга</li>
              <li className="flex gap-2"><span className="text-purple-400">•</span>Снижение уровня кортизола на 20–30% после регулярной практики</li>
              <li className="flex gap-2"><span className="text-purple-400">•</span>Улучшение симптомов тревожности и депрессии сопоставимо с эффектом некоторых антидепрессантов</li>
            </ul>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">Виды медитации:</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            {["Концентрация на дыхании — фокус на процессе дыхания", "Сканирование тела — последовательное осознание ощущений в теле", "Любящая доброта — развитие сострадания к себе и другим", "Открытое наблюдение — наблюдение за мыслями без привязки"].map(i => (
              <li key={i} className="flex gap-2"><span className="text-gray-400">•</span>{i}</li>
            ))}
          </ul>
        </motion.section>

        {/* Физическая активность */}
        <motion.section {...fadeUp(0.3)} className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl rounded-xl p-2 bg-green-100">🏃</div>
            <h2 className="text-2xl font-bold text-gray-900">Физическая активность</h2>
          </div>
          <p className="text-gray-700 mb-5 leading-relaxed">Регулярные физические упражнения — один из самых эффективных способов борьбы со стрессом.</p>
          <h3 className="font-bold text-gray-800 mb-2">Механизм действия:</h3>
          <ul className="list-disc list-inside space-y-1 mb-5 text-gray-700 text-sm">
            {["Стимулирует выработку эндорфинов — естественных анальгетиков", "Повышает уровень серотонина и дофамина", "Снижает уровень гормонов стресса (кортизол, адреналин)", "Улучшает кровообращение и оксигенацию мозга", "Способствует нейрогенезу в гиппокампе", "Улучшает качество сна"].map(i => <li key={i}>{i}</li>)}
          </ul>
          <h3 className="font-bold text-gray-800 mb-3">Рекомендуемые виды активности:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Аэробные нагрузки", color: "bg-green-50 border-green-200", items: ["Бег, ходьба, плавание", "30–45 минут, 3–5 раз в неделю", "Умеренная интенсивность (60–70% от максимального пульса)"] },
              { title: "Йога и тай-чи", color: "bg-teal-50 border-teal-200", items: ["Сочетание движения и осознанности", "Особенно эффективны для снижения тревожности", "Доступны для любого уровня подготовки"] },
              { title: "Силовые тренировки", color: "bg-blue-50 border-blue-200", items: ["Повышают самооценку и уверенность", "2–3 раза в неделю", "Улучшают метаболизм"] },
              { title: "Танцы", color: "bg-pink-50 border-pink-200", items: ["Комбинация физической и социальной активности", "Улучшают координацию и настроение", "Творческое самовыражение"] },
            ].map((b) => (
              <div key={b.title} className={`rounded-xl border p-4 ${b.color}`}>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{b.title}</h4>
                <ul className="space-y-1">{b.items.map(i => <li key={i} className="text-xs text-gray-700 flex gap-2"><span className="text-gray-400">•</span>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Дыхательные техники */}
        <motion.section {...fadeUp(0.35)} className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl rounded-xl p-2 bg-blue-100">😮‍💨</div>
            <h2 className="text-2xl font-bold text-gray-900">Дыхательные техники</h2>
          </div>
          <p className="text-gray-700 mb-5 leading-relaxed">Контролируемое дыхание — быстрый и доступный способ активации парасимпатической нервной системы и снижения стресса.</p>
          <h3 className="font-bold text-gray-800 mb-3">Эффективные техники:</h3>
          <div className="space-y-4">
            {[
              { name: "Диафрагмальное дыхание", desc: "Глубокое дыхание животом активирует блуждающий нерв, снижает частоту сердечных сокращений и давление.", practice: "Вдох на 4 счёта через нос, задержка на 4 счёта, выдох на 6 счётов через рот. Повторять 5–10 минут." },
              { name: "Дыхание 4-7-8", desc: "Техника, разработанная доктором Эндрю Вейлом, особенно эффективна перед сном.", practice: "Вдох через нос на 4 счёта, задержка на 7 счётов, выдох через рот на 8 счётов. 4–8 циклов." },
              { name: "Резонансное дыхание", desc: "Дыхание с частотой около 6 вдохов в минуту синхронизирует сердечный ритм и дыхание.", practice: "Вдох на 5 счётов, выдох на 5 счётов. Практиковать 10–20 минут ежедневно." },
            ].map((t) => (
              <div key={t.name} className="border-l-4 border-indigo-400 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-1">{t.name}</h4>
                <p className="text-sm text-gray-700 mb-2">{t.desc}</p>
                <p className="text-sm text-gray-700"><strong>Практика:</strong> {t.practice}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Социальная поддержка */}
        <motion.section {...fadeUp(0.4)} className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl rounded-xl p-2 bg-pink-100">👥</div>
            <h2 className="text-2xl font-bold text-gray-900">Социальная поддержка</h2>
          </div>
          <p className="text-gray-700 mb-5 leading-relaxed">Качественные социальные связи — мощный буфер против стресса.</p>
          <h3 className="font-bold text-gray-800 mb-2">Биологические механизмы:</h3>
          <ul className="list-disc list-inside space-y-1 mb-5 text-sm text-gray-700">
            {["Окситоцин — «гормон привязанности», снижает активность ГГН-оси", "Социальное взаимодействие стимулирует выработку эндорфинов и серотонина", "Снижает воспалительные процессы в организме", "Улучшает иммунную функцию"].map(i => <li key={i}>{i}</li>)}
          </ul>
          <h3 className="font-bold text-gray-800 mb-2">Практические советы:</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            {["Поддерживайте регулярный контакт с близкими", "Присоединяйтесь к группам по интересам", "Не стесняйтесь просить о помощи", "Помогайте другим — это также снижает стресс", "Рассмотрите групповую терапию или группы поддержки"].map(i => (
              <li key={i} className="flex gap-2"><span className="text-gray-400">•</span>{i}</li>
            ))}
          </ul>
        </motion.section>

        {/* Сон */}
        <motion.section {...fadeUp(0.42)} className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl rounded-xl p-2 bg-indigo-100">🌙</div>
            <h2 className="text-2xl font-bold text-gray-900">Оптимизация сна</h2>
          </div>
          <p className="text-gray-700 mb-5 leading-relaxed">Качественный сон критически важен для восстановления после стресса и регуляции гормонов.</p>
          <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-5 mb-5">
            <h3 className="font-bold text-indigo-800 mb-3">Связь сна и стресса:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-indigo-400">•</span>Недостаток сна повышает уровень кортизола и воспалительных маркеров</li>
              <li className="flex gap-2"><span className="text-indigo-400">•</span>Хронический стресс нарушает архитектуру сна, особенно фазу быстрого сна (REM)</li>
              <li className="flex gap-2"><span className="text-indigo-400">•</span>Во время глубокого сна происходит консолидация памяти и «очистка» мозга от токсинов</li>
            </ul>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">Гигиена сна:</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            {["Соблюдайте постоянный режим сна (даже в выходные)", "Создайте прохладную, тёмную и тихую среду для сна", "Избегайте экранов за 1–2 часа до сна (синий свет подавляет мелатонин)", "Ограничьте кофеин после 14:00", "Избегайте алкоголя перед сном (нарушает REM-фазу)", "Практикуйте расслабляющие ритуалы перед сном"].map(i => (
              <li key={i} className="flex gap-2"><span className="text-indigo-400">✓</span>{i}</li>
            ))}
          </ul>
        </motion.section>

        {/* КПТ */}
        <motion.section {...fadeUp(0.44)} className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl rounded-xl p-2 bg-yellow-100">🧠</div>
            <h2 className="text-2xl font-bold text-gray-900">Когнитивно-поведенческая терапия (КПТ)</h2>
          </div>
          <p className="text-gray-700 mb-5 leading-relaxed">КПТ помогает изменить дисфункциональные мысли и поведение, связанные со стрессом.</p>
          <h3 className="font-bold text-gray-800 mb-2">Основные принципы:</h3>
          <ul className="list-disc list-inside space-y-1 mb-5 text-sm text-gray-700">
            {["Идентификация автоматических негативных мыслей", "Оценка реалистичности этих мыслей", "Замена на более адаптивные интерпретации", "Постепенное изменение избегающего поведения", "Развитие навыков решения проблем"].map(i => <li key={i}>{i}</li>)}
          </ul>
          <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-5">
            <h3 className="font-bold text-yellow-800 mb-2">Эффективность:</h3>
            <p className="text-sm text-gray-700 leading-relaxed">КПТ считается «золотым стандартом» психотерапии для тревожных расстройств и депрессии. Исследования показывают долгосрочную эффективность, сопоставимую или превышающую медикаментозное лечение.</p>
          </div>
        </motion.section>

        {/* Фармакология */}
        <motion.section {...fadeUp(0.46)} className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl rounded-xl p-2 bg-red-100">💊</div>
            <h2 className="text-2xl font-bold text-gray-900">Фармакологические методы</h2>
          </div>
          <div className="rounded-xl bg-red-50 border border-red-200 p-4 mb-5">
            <p className="text-sm text-red-800 font-medium">⚠️ Важно: любые лекарственные препараты должны применяться только по назначению врача. Информация приведена в ознакомительных целях.</p>
          </div>
          <div className="space-y-4">
            {[
              { name: "Селективные ингибиторы обратного захвата серотонина (СИОЗС)", desc: "Повышают уровень серотонина. Используются при хроническом стрессе, тревожности и депрессии. Эффект развивается через 2–4 недели." },
              { name: "Анксиолитики (противотревожные)", desc: "Бензодиазепины — быстрое действие, но риск зависимости. Применяются кратковременно. Буспирон — более мягкое действие, меньше побочных эффектов." },
              { name: "Адаптогены и ноотропы", desc: "Растительные препараты (ашваганда, родиола, женьшень) с более мягким действием. Требуют длительного приёма для накопительного эффекта." },
            ].map((h) => (
              <div key={h.name} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{h.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Творческая деятельность */}
        <motion.section {...fadeUp(0.48)} className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl rounded-xl p-2 bg-orange-100">🎨</div>
            <h2 className="text-2xl font-bold text-gray-900">Творческая деятельность</h2>
          </div>
          <p className="text-gray-700 mb-5 leading-relaxed">Занятия искусством, музыкой, рисованием активируют другие области мозга и способствуют релаксации.</p>
          <h3 className="font-bold text-gray-800 mb-2">Механизмы воздействия:</h3>
          <ul className="list-disc list-inside space-y-1 mb-5 text-sm text-gray-700">
            {["Переключение внимания от стрессоров", "Выражение эмоций в безопасной форме", "Активация системы вознаграждения мозга", "Развитие состояния «потока» (flow state)", "Социальное взаимодействие при групповых занятиях"].map(i => <li key={i}>{i}</li>)}
          </ul>
          <h3 className="font-bold text-gray-800 mb-2">Виды активности:</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            {["Рисование, живопись, лепка", "Музыка (игра на инструментах, пение, прослушивание)", "Письмо (ведение дневника, творческое письмо)", "Танцы и движение", "Рукоделие и ремёсла"].map(i => (
              <li key={i} className="flex gap-2"><span className="text-gray-400">•</span>{i}</li>
            ))}
          </ul>
        </motion.section>

        {/* Комплексный подход */}
        <motion.section {...fadeUp(0.5)} className="mt-12">
          <div className="rounded-xl bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Комплексный подход</h2>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">Наиболее эффективным является <strong>сочетание нескольких методов</strong>. Например:</p>
            <ul className="space-y-1 text-sm text-gray-700 mb-4">
              {["Регулярные физические упражнения + медитация", "Дыхательные техники + социальная поддержка", "Оптимизация сна + КПТ", "Творческая деятельность + физическая активность"].map(i => (
                <li key={i} className="flex gap-2"><span className="text-indigo-400">•</span>{i}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">Важно найти те методы, которые подходят именно вам, и практиковать их регулярно. Изменения требуют времени — обычно заметные улучшения появляются через 4–8 недель постоянной практики.</p>
          </div>
        </motion.section>

      </main>
    </div>
  )
}
