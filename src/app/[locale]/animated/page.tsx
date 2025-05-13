"use client";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function HomePage() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <AnimatedBackground />

            <div className="text-overlay font-thin">
                <h1 className="animate-float [animation-duration:12s]">Portfolio</h1>
            </div>

            <main className="relative z-10 min-h-screen pt-[100vh]">
                <section className="h-screen flex items-center justify-center">
                    <div className="backdrop-blur-lg p-8 rounded-3xl bg-black/10">
                        <h2 className="text-6xl text-purple-100/90">Sección 1</h2>
                    </div>
                </section>

                <section className="h-screen flex items-center justify-center backdrop-blur-sm">
                    <h2 className="text-6xl text-purple-100/90 drop-shadow-lg">Sección 2</h2>
                </section>
            </main>
        </div>
    );
}