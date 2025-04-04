"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  BookOpen,
  Calendar,
  Check,
  CheckCircle,
  Clock,
  Filter,
  GraduationCap,
  Home,
  Languages,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings,
  Sun,
  User,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"

export default function CursosPage() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("courses")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleLogout = () => {
    router.push("/")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Modificar los datos de ejemplo para tener un solo curso
  const allCourses = [
    {
      id: 1,
      title: "Cohesión Textual y Figuras Literarias",
      progress: 0,
      status: "not-started",
      lastLesson: "",
      image: "/placeholder.svg?height=120&width=200&text=Curso+Completo",
      nextLesson: "Elementos de cohesión textual",
      instructor: "Dra. María González",
      totalLessons: 9,
      completedLessons: 0,
      lastAccessed: "",
      description:
        "Curso completo sobre elementos de cohesión textual, referencias, relaciones en el texto, estilos y figuras literarias.",
    },
  ]

  // Filtrar cursos según la búsqueda
  const filteredCourses = allCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Separar cursos en progreso y completados
  const inProgressCourses = filteredCourses.filter((course) => course.status === "in-progress")
  const completedCourses = filteredCourses.filter((course) => course.status === "completed")

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Sidebar */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} md:flex fixed inset-y-0 left-0 z-50 md:relative md:z-0 flex-col w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950`}
      >
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <Languages className="size-4 text-white" />
            </div>
            <h1 className="text-xl font-bold">EspañolPro</h1>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <Link href="/dashboard">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              className={`w-full justify-start gap-2 ${activeTab === "overview" ? "bg-violet-600 hover:bg-violet-700" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              <Home className="size-4" />
              Inicio
            </Button>
          </Link>

          <Link href="/dashboard/cursos">
            <Button
              variant={activeTab === "courses" ? "default" : "ghost"}
              className={`w-full justify-start gap-2 ${activeTab === "courses" ? "bg-violet-600 hover:bg-violet-700" : ""}`}
              onClick={() => setActiveTab("courses")}
            >
              <BookOpen className="size-4" />
              Mis Cursos
            </Button>
          </Link>

          <Link href="/dashboard/calendario">
            <Button
              variant={activeTab === "calendar" ? "default" : "ghost"}
              className={`w-full justify-start gap-2 ${activeTab === "calendar" ? "bg-violet-600 hover:bg-violet-700" : ""}`}
              onClick={() => setActiveTab("calendar")}
            >
              <Calendar className="size-4" />
              Calendario
            </Button>
          </Link>

          <Link href="/dashboard/certificados">
            <Button
              variant={activeTab === "certificates" ? "default" : "ghost"}
              className={`w-full justify-start gap-2 ${activeTab === "certificates" ? "bg-violet-600 hover:bg-violet-700" : ""}`}
              onClick={() => setActiveTab("certificates")}
            >
              <GraduationCap className="size-4" />
              Certificados
            </Button>
          </Link>

          <Link href="/dashboard/perfil">
            <Button
              variant={activeTab === "profile" ? "default" : "ghost"}
              className={`w-full justify-start gap-2 ${activeTab === "profile" ? "bg-violet-600 hover:bg-violet-700" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              <User className="size-4" />
              Perfil
            </Button>
          </Link>

          <Link href="/dashboard/configuracion">
            <Button
              variant={activeTab === "settings" ? "default" : "ghost"}
              className={`w-full justify-start gap-2 ${activeTab === "settings" ? "bg-violet-600 hover:bg-violet-700" : ""}`}
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="size-4" />
              Configuración
            </Button>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <Button variant="outline" className="w-full justify-start gap-2" onClick={handleLogout}>
            <LogOut className="size-4" />
            Cerrar sesión
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center ml-auto gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Cambiar tema</span>
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="size-5" />
              <span className="absolute top-1 right-1 size-2 rounded-full bg-red-500" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative ml-2 flex items-center gap-2 rounded-full">
                  <Avatar className="size-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Usuario" />
                    <AvatarFallback className="bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200">
                      JP
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium">Juan Pérez</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">juan@ejemplo.com</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2">
                  <User className="size-4" />
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Settings className="size-4" />
                  Configuración
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2" onClick={handleLogout}>
                  <LogOut className="size-4" />
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Courses content */}
        <main className="p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">Mis Cursos</h1>
            <p className="text-slate-500 dark:text-slate-400">Gestiona todos tus cursos en un solo lugar</p>
          </div>

          {/* Search and filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Buscar por título o instructor..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="size-4" />
              Filtros
            </Button>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="mb-6">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="all">Todos ({filteredCourses.length})</TabsTrigger>
              <TabsTrigger value="in-progress">En Progreso ({inProgressCourses.length})</TabsTrigger>
              <TabsTrigger value="completed">Completados ({completedCourses.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
              {filteredCourses.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-600 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No se encontraron cursos</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Intenta con otra búsqueda o explora nuestro catálogo
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="in-progress">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {inProgressCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
              {inProgressCourses.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-600 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No tienes cursos en progreso</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Explora nuestro catálogo para comenzar a aprender
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="completed">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {completedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
              {completedCourses.length === 0 && (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-600 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No has completado ningún curso</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    ¡Continúa aprendiendo para obtener tu primer certificado!
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

// Arreglar los cards de cursos en la página de cursos

// Reemplazar la función CourseCard con esta versión mejorada:
// Componente de tarjeta de curso
function CourseCard({ course }) {
  const router = useRouter()

  const handleViewCourse = () => {
    router.push(`/dashboard/cursos/${course.id}`)
  }

  return (
    <Card className="border-none shadow-md overflow-hidden bg-white dark:bg-slate-950 flex flex-col h-full">
      <div className="relative">
        <div className="w-full h-40 overflow-hidden">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        {course.status === "completed" && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/30">
              <Check className="mr-1 h-3 w-3" /> Completado
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{course.title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{course.instructor}</p>

        {course.status === "in-progress" && (
          <div className="mt-auto">
            <div className="flex justify-between text-sm mb-1">
              <span>
                {course.completedLessons} de {course.totalLessons} lecciones
              </span>
              <span className="font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2 mb-4" />
            <div className="flex justify-between items-center">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {course.lastAccessed ? `Último acceso: ${course.lastAccessed}` : "No iniciado"}
              </div>
              <Button size="sm" className="rounded-full bg-violet-600 hover:bg-violet-700" onClick={handleViewCourse}>
                {course.progress > 0 ? "Continuar" : "Comenzar"}
              </Button>
            </div>
          </div>
        )}

        {course.status === "completed" && (
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-500 dark:text-slate-400">Completado el {course.completionDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <Button variant="outline" size="sm" className="gap-1">
                <GraduationCap className="h-4 w-4" />
                Certificado
              </Button>
              <Button size="sm" className="rounded-full bg-violet-600 hover:bg-violet-700" onClick={handleViewCourse}>
                Revisar
              </Button>
            </div>
          </div>
        )}

        {course.status === "not-started" && (
          <div className="flex flex-col h-full">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 flex-grow">
              {course.description}
            </p>
            <Button
              className="w-full rounded-full bg-violet-600 hover:bg-violet-700 mt-auto"
              onClick={handleViewCourse}
            >
              Comenzar curso
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

