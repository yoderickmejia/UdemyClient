import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Globe,
  GraduationCap,
  Languages,
  Menu,
  Star,
  Users,
} from "lucide-react";
// Importa el ThemeToggle al inicio del archivo
import { ThemeToggle } from "@/components/theme-toggle";

import foto from "@/app/assets/images.jpg";
import foto1 from "@/app/assets/images.jpg";
import avatar1 from "@/app/assets/avatar1.jpg";
import avatar2 from "@/app/assets/avatar2.jpeg";
import avatar3 from "@/app/assets/avatar3.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Languages className="h-6 w-6 text-violet-600" />
            <span className="text-xl font-bold">EspañolPro</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Añade el ThemeToggle aquí */}
            <ThemeToggle />
            <Link
              href="/login"
              className="text-sm font-medium hover:text-violet-600 transition-colors hidden sm:inline-block"
            >
              Iniciar Sesión
            </Link>
            <Button
              asChild
              className="rounded-full bg-violet-600 hover:bg-violet-700"
            >
              <Link href="/register">Registrarse</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-50 to-white dark:from-slate-900 dark:to-slate-950" />
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] dark:bg-grid-slate-800/20" />

          <div className="container relative px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-violet-100 text-violet-800 hover:bg-violet-100 dark:bg-violet-900 dark:text-violet-300">
                    La mejor plataforma para aprender español
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Domina el español con profesores nativos
                  </h1>
                  <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-lg">
                    Aprende español a tu ritmo con cursos interactivos,
                    profesores certificados y una comunidad global de
                    estudiantes.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full h-12 px-6 sm:px-8 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <Link href="/register" className="gap-2">
                      Comenzar Gratis
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full h-12 px-6 sm:px-8 border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                  >
                    <Link href="#cursos">Explorar Cursos</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-violet-600" />
                    <span> cursos Gratuitos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-violet-600" />
                    <span>Certificados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-violet-600" />
                    <span>Acceso 24/7</span>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="absolute -inset-1 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl blur-xl opacity-70 dark:from-violet-900/30 dark:to-indigo-900/30 dark:opacity-50" />
                <div className="relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={foto}
                    alt="Estudiantes aprendiendo español"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900"
          id="caracteristicas"
        >
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <Badge className="mb-4 bg-violet-100 text-violet-800 hover:bg-violet-100 dark:bg-violet-900 dark:text-violet-300">
                ¿Por qué elegirnos?
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Características que nos hacen diferentes
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400">
                Nuestra plataforma está diseñada para ofrecerte la mejor
                experiencia de aprendizaje del español.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="border-none shadow-md bg-white dark:bg-slate-950">
                <CardContent className="pt-6">
                  <div className="size-12 rounded-lg bg-violet-100 flex items-center justify-center mb-4 dark:bg-violet-900/30">
                    <GraduationCap className="size-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Profesores Nativos</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Aprende con profesores nativos que te ayudarán a dominar el
                    español auténtico.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white dark:bg-slate-950">
                <CardContent className="pt-6">
                  <div className="size-12 rounded-lg bg-violet-100 flex items-center justify-center mb-4 dark:bg-violet-900/30">
                    <Globe className="size-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Comunidad Global</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Conecta con estudiantes de todo el mundo y practica tus
                    habilidades en un entorno amigable.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white dark:bg-slate-950 sm:col-span-2 md:col-span-1">
                <CardContent className="pt-6">
                  <div className="size-12 rounded-lg bg-violet-100 flex items-center justify-center mb-4 dark:bg-violet-900/30">
                    <BookOpen className="size-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Contenido Interactivo
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Ejercicios interactivos, videos, y recursos descargables
                    para un aprendizaje completo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="py-16 sm:py-20" id="cursos">
  <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
      <div>
        <Badge className="mb-4 bg-violet-100 text-violet-800 hover:bg-violet-100 dark:bg-violet-900 dark:text-violet-300">
          Cursos Populares
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Nuestros cursos más destacados
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl">
          Explora nuestra selección de cursos diseñados para todos los niveles, desde principiantes hasta avanzados.
        </p>
      </div>
      <Button
        asChild
        variant="outline"
        className="mt-6 md:mt-0 w-full md:w-auto"
      >
        <Link href="/login" className="gap-2">
          Ver todos los cursos
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 radius-2xl">
      {[
        {
          title: "Español para Principiantes",
          level: "Básico",
          lessons: 3,
          rating: 4.9,
          hours: 18,
          reviews: 1240,
          image: foto1,
        },
        {
          title: "Español Intermedio",
          level: "Intermedio",
          lessons: 56,
          hours: 18,
          rating: 4.8,
          reviews: 980,
          price: "€69.99",
          image: "/placeholder.svg?height=200&width=400&text=Español+Intermedio",
        },
        {
          title: "Español de Negocios",
          level: "Avanzado",
          lessons: 38,
          hours: 15,
          rating: 4.9,
          reviews: 750,
          price: "€79.99",
          image: "/placeholder.svg?height=200&width=400&text=Español+Negocios",
        },
      ].map((course, index) => (
        <Card
        key={index}
        className="border-2 border-purple-500 dark:border-white shadow-lg overflow-hidden bg-white dark:bg-slate-950 rounded-2xl"
      >
        <div className="relative">
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <Badge className="absolute top-4 left-4 bg-white/90 text-violet-800 hover:bg-white/90 dark:bg-slate-900/90 dark:text-violet-300">
            {course.level}
          </Badge>
        </div>
      
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg sm:text-xl font-bold">{course.title}</h3>
            <div className="text-base sm:text-lg font-bold text-violet-600">
              {course.price}
            </div>
          </div>
      
          <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
            <div className="flex items-center gap-1">
              <BookOpen className="size-4" />
              <span>{course.lessons} lecciones</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="size-4" />
              <span>{course.hours} horas</span>
            </div>
          </div>
      
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${
                    i < Math.floor(course.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-slate-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{course.rating}</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              ({course.reviews})
            </span>
          </div>
      <Link href="/register">
          <Button className="w-full rounded-full bg-violet-600 hover:bg-violet-700">
            Inscribirse
          </Button>
          </Link>
        </CardContent>
      </Card>
      
      ))}
    </div>
  </div>
</section>


        {/* Testimonials */}
        <section
          className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900"
          id="testimonios"
        >
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <Badge className="mb-4 bg-violet-100 text-violet-800 hover:bg-violet-100 dark:bg-violet-900 dark:text-violet-300">
                Testimonios
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Lo que dicen nuestros estudiantes
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400">
                Miles de estudiantes han mejorado su español con nuestra
                plataforma. Esto es lo que dicen sobre nosotros.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  name: "María González",
                  country: "Estados Unidos",
                  text: "Después de 3 meses con EspañolPro, pude mantener conversaciones fluidas durante mi viaje a España. Los profesores son increíbles y el método realmente funciona.",
                  avatar: avatar1,
                },
                {
                  name: "John Smith",
                  country: "Reino Unido",
                  text: "La plataforma es muy intuitiva y los cursos están muy bien estructurados. He probado muchas apps para aprender español, pero esta es sin duda la mejor.",
                  avatar:avatar2,
                },
                {
                  name: "Akira Tanaka",
                  country: "Japón",
                  text: "Los profesores nativos hacen toda la diferencia. Puedo entender diferentes acentos y expresiones coloquiales que no aprendería en un libro de texto.",
                  avatar:avatar3,
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md bg-white dark:bg-slate-950"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={testimonial.avatar }
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full w-12 h-12 object-cover"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {testimonial.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600" />
              <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />

              <div className="relative py-10 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-12 text-center text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Comienza tu viaje hacia la fluidez en español hoy
                </h2>
                <p className="max-w-2xl mx-auto mb-6 sm:mb-8 text-white/80">
                  Únete a más de 50,000 estudiantes que están aprendiendo
                  español con nuestros cursos interactivos y profesores nativos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full h-12 px-6 sm:px-8 bg-white text-violet-600 hover:bg-white/90"
                  >
                    <Link href="/register">Comenzar Gratis</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full h-12 px-6 sm:px-8 bg-white text-violet-600 hover:bg-white/90 "
                  >
                    <Link href="#cursos">Explorar Cursos</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
      

          <div className="  pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Languages className="h-5 w-5 text-violet-600" />
              <span className="font-bold">EspañolPro</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              &copy; {new Date().getFullYear()} EspañolPro. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
