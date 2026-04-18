import { Navbar } from "@/components/Navbar"
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
})

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-20">

        <motion.div {...fadeUp(0.1)} className="pt-12 pb-8 border-b border-gray-100">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">Здоровый образ жизни</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Практические рекомендации</h1>
          <p className="text-lg text-gray-500">Ежедневные привычки и стратегии для эффективного управления стрессом</p>
        </motion.div>

        <motion.div {...fadeUp(0.15)} className="mt-8 rounded-xl bg-indigo-50 border border-indigo-200 p-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Важный принцип:</strong> Управление стрессом — это не разовое действие, а образ жизни. Небольшие изменения в ежедневных привычках могут оказать значительное влияние на уровень стресса и общее самочувствие.
          </p>
        </motion.div>

        {/* Режим дня */}
        <motion.section {...fadeUp(0.2)} className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Режим дня</h2>

          <div className="rounded-xl border border-gray-100 overflow-hidden mb-5">
            <div className="bg-yellow-50 px-5 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">🌅 Утренний ритуал <span className="text-gray-500 font-normal text-sm">(30–60 минут)</span></h3>
            </div>
            <div className="p-5 space-y-3">
              {[
                { n: "1.", title: "Пробуждение в одно время", desc: "регулирует циркадные ритмы. Старайтесь просыпаться в одно и то же время даже в выходные (±30 минут)." },
                { n: "2.", title: "Избегайте смартфона первые 30–60 минут.", desc: "Проверка почты и соцсетей сразу после пробуждения активирует стрессовую реакцию." },
                { n: "3.", title: "Гидратация —", desc: "выпейте стакан воды. Организм обезвожен после сна." },
                { n: "4.", title: "Лёгкая зарядка —", desc: "5–10 минут растяжки или йоги активируют кровообращение и «пробуждают» тело." },
                { n: "5.", title: "Медитация или дыхательные упражнения —", desc: "5–15 минут для настройки на день." },
                { n: "6.", title: "Полноценный завтрак —", desc: "сбалансированное питание с белками и сложными углеводами стабилизирует уровень сахара в крови." },
              ].map((item) => (
                <div key={item.n} className="flex gap-3 text-sm text-gray-700">
                  <span className="font-bold text-indigo-600 min-w-[1.5rem]">{item.n}</span>
                  <p><strong>{item.title}</strong> {item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 overflow-hidden mb-5">
            <div className="bg-blue-50 px-5 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">☀️ В течение дня</h3>
            </div>
            <div className="p-5 space-y-2">
              {[
                { title: "Регулярные перерывы", desc: "— каждые 60–90 минут делайте 5–10 минутные перерывы. Встаньте, подвигайтесь, сделайте дыхательные упражнения." },
                { title: "Микро-медитации", desc: "— 1–3 минуты осознанного дыхания между задачами помогают «перезагрузиться»." },
                { title: "Прогулки на свежем воздухе", desc: "— хотя бы 15–20 минут, желательно на солнце (витамин D и регуляция циркадных ритмов)." },
                { title: "Ограничьте мультитаскинг", desc: "— фокусируйтесь на одной задаче за раз. Постоянное переключение истощает ресурсы мозга." },
              ].map((i) => (
                <p key={i.title} className="text-sm text-gray-700"><strong>{i.title}</strong>{i.desc}</p>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 overflow-hidden">
            <div className="bg-indigo-50 px-5 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">🌙 Вечерний ритуал <span className="text-gray-500 font-normal text-sm">(60–90 минут до сна)</span></h3>
            </div>
            <div className="p-5 space-y-3">
              {[
                { n: "1.", title: "Прекратите работу за 2–3 часа до сна —", desc: "дайте мозгу время «остыть»." },
                { n: "2.", title: "Приглушите свет —", desc: "яркий свет подавляет мелатонин. Используйте тёплое освещение." },
                { n: "3.", title: "Цифровой детокс —", desc: "выключите все экраны за 60–90 минут до сна. Если необходимо использовать гаджеты, включите режим «ночной свет»." },
                { n: "4.", title: "Расслабляющая активность —", desc: "чтение, лёгкая растяжка, спокойная музыка, тёплая ванна." },
                { n: "5.", title: "Практика благодарности —", desc: "запишите 3 вещи, за которые благодарны сегодня. Это переключает фокус с негативного на позитивное." },
                { n: "6.", title: "Подготовка на завтра —", desc: "составьте короткий список задач на следующий день (не более 3–5 приоритетов). Это «разгружает» мозг." },
              ].map((item) => (
                <div key={item.n} className="flex gap-3 text-sm text-gray-700">
                  <span className="font-bold text-indigo-600 min-w-[1.5rem]">{item.n}</span>
                  <p><strong>{item.title}</strong> {item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Питание */}
        <motion.section {...fadeUp(0.3)} className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-2xl rounded-xl p-2 bg-green-100">🍎</div>
            <h2 className="text-2xl font-bold text-gray-900">Питание</h2>
          </div>
          <h3 className="font-bold text-gray-900 mb-4">Продукты, снижающие стресс (включите в рацион):</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Богатые магнием", desc: "Магний регулирует стрессовый ответ и успокаивает нервную систему.", items: ["Листовая зелень (шпинат, мангольд)", "Орехи (миндаль, кешью)", "Семена (тыквенные, подсолнечник)", "Бобовые, авокадо, бананы"] },
              { title: "Омега-3 жирные кислоты", desc: "Противовоспалительное действие, улучшают работу мозга.", items: ["Жирная рыба (лосось, сардины, скумбрия)", "Льняное семя и масло", "Грецкие орехи", "Чиа семена"] },
              { title: "Сложные углеводы", desc: "Стабилизируют уровень сахара и повышают серотонин.", items: ["Цельнозерновые (овсянка, киноа, бурый рис)", "Сладкий картофель", "Бобовые", "Фрукты и овощи"] },
              { title: "Пробиотики", desc: "Ось «кишечник-мозг» — здоровая микробиота влияет на настроение.", items: ["Йогурт, кефир", "Квашеная капуста, кимчи", "Комбуча", "Мисо"] },
              { title: "Адаптогенные травы", desc: "Помогают организму адаптироваться к стрессу.", items: ["Ашваганда", "Родиола розовая", "Женьшень", "Элеутерококк"] },
              { title: "Антиоксиданты", desc: "Борются с оксидативным стрессом.", items: ["Ягоды (черника, голубика)", "Зелёный чай", "Тёмный шоколад (70%+ какао)", "Цитрусовые"] },
            ].map((block) => (
              <div key={block.title} className="rounded-xl border border-gray-200 p-4">
                <h4 className="font-bold text-gray-900 mb-1 text-sm">{block.title}</h4>
                <p className="text-xs text-gray-500 mb-2">{block.desc}</p>
                <ul className="space-y-1">{block.items.map(i => <li key={i} className="text-xs text-gray-700 flex gap-1"><span className="text-gray-400">•</span>{i}</li>)}</ul>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-red-50 border border-red-100 p-5 mb-5">
            <h3 className="font-bold text-red-800 mb-3">Продукты, усиливающие стресс (ограничьте):</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              {[
                "Кофеин — более 400 мг/день (4 чашки кофе) повышает кортизол и тревожность. Избегайте после 14:00.",
                "Сахар и рафинированные углеводы — вызывают скачки глюкозы, что усиливает стрессовый ответ.",
                "Алкоголь — нарушает сон и повышает тревожность на следующий день («алкогольная тревога»).",
                "Обработанные продукты — содержат трансжиры и добавки, способствующие воспалению.",
                "Избыток соли — повышает артериальное давление, усиливая физические проявления стресса.",
              ].map(i => <li key={i} className="flex gap-2"><span className="text-red-400">•</span>{i}</li>)}
            </ul>
          </div>

          <div className="rounded-xl bg-blue-50 border border-blue-100 p-5">
            <h3 className="font-bold text-blue-800 mb-3">💧 Гидратация</h3>
            <p className="text-sm text-gray-700 mb-3">Даже лёгкое обезвоживание (1–2% потери жидкости) повышает уровень кортизола и ухудшает когнитивные функции.</p>
            <ul className="space-y-1 text-sm text-gray-700">
              {["Количество: 30–35 мл на кг веса (например, 2.1–2.4 л для 70 кг)", "Начинайте день со стакана воды", "Держите бутылку воды на виду", "Пейте до появления жажды (жажда = уже обезвоживание)", "Травяные чаи (ромашка, лаванда) — дополнительный релакс-эффект", "Ограничьте диуретики (кофе, чай) — увеличивают потери жидкости"].map(i => (
                <li key={i} className="flex gap-2"><span className="text-blue-400">•</span>{i}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Цифровая гигиена */}
        <motion.section {...fadeUp(0.35)} className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl rounded-xl p-2 bg-gray-100">📱</div>
            <h2 className="text-2xl font-bold text-gray-900">Цифровая гигиена</h2>
          </div>
          <p className="text-gray-700 mb-5 leading-relaxed">Постоянная связанность и информационная перегрузка — значительные источники современного стресса.</p>
          <div className="space-y-4">
            {[
              { title: "Установите границы", color: "bg-gray-50 border-gray-200", items: ["Определите «часы без телефона» (утро, вечер, приёмы пищи)", "Отключите большинство уведомлений (оставьте только важные)", "Не берите телефон в спальню или используйте «режим сна»", "Один день в неделю — минимум экранного времени"] },
              { title: "Кураируйте контент", color: "bg-indigo-50 border-indigo-100", items: ["Отпишитесь от аккаунтов, вызывающих негативные эмоции", "Ограничьте новостной контент (1–2 раза в день, фиксированное время)", "Избегайте «бесконечной прокрутки» — установите лимиты приложений", "Следите за позитивным/образовательным контентом"] },
              { title: "Осознанное использование", color: "bg-green-50 border-green-100", items: ["Спрашивайте себя: «Зачем я сейчас беру телефон?»", "Используйте трекеры экранного времени", "Замените «скроллинг» на другую активность (чтение, прогулка)", "Практикуйте «цифровые детоксы» (выходные без соцсетей)"] },
            ].map(b => (
              <div key={b.title} className={`rounded-xl border p-5 ${b.color}`}>
                <h3 className="font-bold text-gray-900 mb-3">{b.title}</h3>
                <ul className="space-y-1">{b.items.map(i => <li key={i} className="text-sm text-gray-700 flex gap-2"><span className="text-gray-400">•</span>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Управление временем */}
        <motion.section {...fadeUp(0.4)} className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl rounded-xl p-2 bg-purple-100">⏰</div>
            <h2 className="text-2xl font-bold text-gray-900">Управление временем</h2>
          </div>
          <h3 className="font-bold text-gray-800 mb-4">Принципы снижения стресса:</h3>
          <div className="space-y-4">
            {[
              { name: "Приоритизация", desc: "Матрица Эйзенхауэра: разделите задачи на срочные/важные, важные/не срочные, срочные/не важные, не срочные/не важные. Фокусируйтесь на важных, но не срочных задачах — это профилактика стресса." },
              { name: "Метод «одной вещи»", desc: "Каждый день определяйте ОДНУ самую важную задачу. Выполните её в первую очередь. Это снижает чувство перегруженности." },
              { name: "Техника Помодоро", desc: "25 минут фокусной работы + 5 минут перерыв. После 4 циклов — длинный перерыв 15–30 минут. Предотвращает выгорание." },
              { name: "Учитесь говорить «нет»", desc: "Переутомление часто происходит из-за неумения отказывать. Помните: каждое «да» чужому запросу — это «нет» своим приоритетам. Используйте: «Спасибо за предложение, но у меня сейчас другие приоритеты»." },
              { name: "Батчинг задач", desc: "Группируйте похожие задачи (все звонки, вся почта, все встречи). Переключение между разными типами задач истощает ресурсы." },
              { name: "Буферное время", desc: "Между встречами/задачами оставляйте 10–15 минут буфера. Это время для отдыха и непредвиденных ситуаций." },
            ].map((item) => (
              <div key={item.name} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-1 text-sm">{item.name}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Скорая помощь */}
        <motion.section {...fadeUp(0.45)} className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl rounded-xl p-2 bg-red-100">🆘</div>
            <h2 className="text-2xl font-bold text-gray-900">«Скорая помощь» при остром стрессе</h2>
          </div>
          <p className="text-gray-700 mb-5">Когда чувствуете, что стресс накрывает, используйте эти быстрые техники:</p>
          <div className="space-y-4">
            {[
              { n: "1.", title: "Дыхание 4-7-8 (2 минуты)", desc: "Описано в разделе «Методы коррекции». Быстро активирует парасимпатическую систему." },
              { n: "2.", title: "Техника заземления «5-4-3-2-1» (5 минут)", desc: "Помогает при панике и тревоге. Назовите: 5 вещей, которые видите • 4 вещи, которые можете потрогать • 3 вещи, которые слышите • 2 вещи, которые чувствуете запах/вкус • 1 вещь, за которую благодарны." },
              { n: "3.", title: "Прогрессивная мышечная релаксация (10 минут)", desc: "Последовательно напрягайте и расслабляйте группы мышц (начиная с пальцев ног, заканчивая лицом). Снимает физическое напряжение." },
              { n: "4.", title: "Холодная вода (30 секунд)", desc: "Умойте лицо холодной водой или подержите кубик льда. Активирует нырятельный рефлекс, быстро снижая пульс." },
              { n: "5.", title: "Интенсивное движение (5–10 минут)", desc: "Быстрая прогулка, прыжки, отжимания — сжигает избыток адреналина." },
              { n: "6.", title: "Позвоните близкому человеку", desc: "Даже короткий разговор с поддерживающим человеком высвобождает окситоцин и снижает кортизол." },
            ].map((item) => (
              <div key={item.n} className="border-l-4 border-red-400 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-1 text-sm">{item.n} {item.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Когда к специалисту */}
        <motion.section {...fadeUp(0.5)} className="mt-12">
          <div className="rounded-xl bg-yellow-50 border border-yellow-300 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Когда обратиться к специалисту?</h2>
            <p className="text-sm text-gray-700 mb-4">Обратитесь к психологу, психотерапевту или врачу, если:</p>
            <ul className="space-y-2 mb-4">
              {[
                "Стресс значительно влияет на работу, отношения или здоровье более 2–3 недель",
                "Появились симптомы депрессии (потеря интереса, безнадёжность, мысли о суициде)",
                "Частые панические атаки",
                "Злоупотребление алкоголем или веществами для «справления» со стрессом",
                "Физические симптомы (головные боли, проблемы с ЖКТ, боли в груди) без медицинской причины",
                "Чувство безвыходности и неспособность справиться самостоятельно",
              ].map(i => <li key={i} className="text-sm text-gray-700 flex gap-2"><span className="text-yellow-600">•</span>{i}</li>)}
            </ul>
            <p className="text-sm font-bold text-indigo-700">Обращение за помощью — признак силы, а не слабости!</p>
          </div>
        </motion.section>

        {/* План действий */}
        <motion.section {...fadeUp(0.55)} className="mt-12">
          <div className="rounded-xl bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">План действий: с чего начать?</h2>
            <p className="text-sm text-gray-700 mb-5">Не пытайтесь внедрить всё сразу — это создаст дополнительный стресс! Начните с малого:</p>
            <div className="space-y-3">
              {[
                { week: "Неделя 1–2:", desc: "Выберите одну привычку из раздела «Режим дня» (например, утренняя медитация 5 минут)." },
                { week: "Неделя 3–4:", desc: "Добавьте одну пищевую привычку (например, завтрак с белком и сложными углеводами)." },
                { week: "Неделя 5–6:", desc: "Внедрите физическую активность 3 раза в неделю (начните с 15–20 минут)." },
                { week: "Неделя 7–8:", desc: "Оптимизируйте сон (вечерний ритуал, постоянное время отхода ко сну)." },
                { week: "Далее:", desc: "Постепенно добавляйте другие стратегии по мере закрепления предыдущих." },
              ].map((item) => (
                <div key={item.week} className="flex gap-3 text-sm">
                  <span className="font-bold text-indigo-700 min-w-[6rem]">{item.week}</span>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-indigo-800 font-medium">Помните: формирование устойчивой привычки занимает 21–66 дней. Будьте терпеливы к себе!</p>
          </div>
        </motion.section>

      </main>
    </div>
  )
}
