import { Navbar } from "@/components/Navbar"
import { Hero7 } from "@/components/Hero7"

const Index = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 35%, #818cf8 80%, #4f46e5 100%)",
        }}
      />

      {/* Content */}
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
          />
        </main>
      </div>
    </div>
  )
}

export default Index