"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  GraduationCap,
  Home,
  Languages,
  LogOut,
  Menu,
  Moon,
  Settings,
  Sun,
  User,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"

export default function DashboardPage() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("overview")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleLogout = () => {
    // En una app real, manejarías la lógica de cierre de sesión aquí
    router.push("/")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Datos de ejemplo para cursos disponibles
  const availableCourses = [
    {
      id: 1,
      title: "Elementos de Cohesión y Marcadores Textuales",
      progress: 0,
      lastLesson: "",
      image: "/placeholder.svg?height=80&width=120&text=Cohesión+Textual",
      nextLesson: "Elementos de cohesión textual",
      instructor: "Dra. María González",
      totalLessons: 3,
      completedLessons: 0,
    },
    {
      id: 2,
      title: "Referencias y Relaciones en el Texto",
      progress: 0,
      lastLesson: "",
      image: "/placeholder.svg?height=80&width=120&text=Referencias+Textuales",
      nextLesson: "Deícticos y sus tipos",
      instructor: "Dr. Carlos Rodríguez",
      totalLessons: 3,
      completedLessons: 0,
    },
    {
      id: 3,
      title: "Estilo y Figuras Literarias",
      progress: 0,
      lastLesson: "",
      image: "/placeholder.svg?height=80&width=120&text=Figuras+Literarias",
      nextLesson: "Estilo: Directo, indirecto e indirecto libre",
      instructor: "Dra. Ana Martínez",
      totalLessons: 3,
      completedLessons: 0,
    },
  ]

  // Datos de ejemplo para estudiantes destacados
  const topStudents = [
    {
      name: "Juan Pérez",
      courses: 8,
      completionRate: 95,
      avatar: "/placeholder.svg?height=40&width=40&text=JP",
    },
    {
      name: "Laura García",
      courses: 7,
      completionRate: 92,
      avatar: "/placeholder.svg?height=40&width=40&text=LG",
    },
    {
      name: "Miguel Torres",
      courses: 6,
      completionRate: 88,
      avatar: "/placeholder.svg?height=40&width=40&text=MT",
    },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Sidebar */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} md:flex fixed inset-y-0 left-0 z-50 md:relative md:z-0 flex-col ${isSidebarOpen ? "w-64" : "w-20"} border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-all duration-300`}
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
              className={`w-full justify-start gap-2 ${activeTab === "overview" ? "bg-violet-600 hover:bg-violet-700" : ""} ${!isSidebarOpen ? "px-0 justify-center" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              <Home className="size-4" />
              {isSidebarOpen && <span>Inicio</span>}
            </Button>
          </Link>

          <Link href="/dashboard/cursos">
            <Button
              variant={activeTab === "courses" ? "default" : "ghost"}
              className={`w-full justify-start gap-2 ${activeTab === "courses" ? "bg-violet-600 hover:bg-violet-700" : ""} ${!isSidebarOpen ? "px-0 justify-center" : ""}`}
              onClick={() => setActiveTab("courses")}
            >
              <BookOpen className="size-4" />
              {isSidebarOpen && <span>Mis Cursos</span>}
            </Button>
          </Link>

      
          <Link href="/dashboard/certificados">
            <Button
              variant={activeTab === "certificates" ? "default" : "ghost"}
              className={`w-full justify-start gap-2 ${activeTab === "certificates" ? "bg-violet-600 hover:bg-violet-700" : ""} ${!isSidebarOpen ? "px-0 justify-center" : ""}`}
              onClick={() => setActiveTab("certificates")}
            >
              <GraduationCap className="size-4" />
              {isSidebarOpen && <span>Certificados</span>}
            </Button>
          </Link>

          <Link href="/dashboard/perfil">
            <Button
              variant={activeTab === "profile" ? "default" : "ghost"}
              className={`w-full justify-start gap-2 ${activeTab === "profile" ? "bg-violet-600 hover:bg-violet-700" : ""} ${!isSidebarOpen ? "px-0 justify-center" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              <User className="size-4" />
              {isSidebarOpen && <span>Perfil</span>}
            </Button>
          </Link>

         
        </nav>

        <div className="hidden md:flex justify-center p-2 border-t border-slate-200 dark:border-slate-800">
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="rounded-full">
            {isSidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          </Button>
        </div>

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

        {/* Dashboard content */}
        <main className="p-4 md:p-6">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">¡Bienvenido de nuevo, Juan!</h1>
            <p className="text-slate-500 dark:text-slate-400">Continúa aprendiendo donde lo dejaste.</p>
          </div>

          {/* Stats */}
          <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4 mb-6 md:mb-8">
            <Card className="border-none shadow-md bg-white dark:bg-slate-950">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Cursos Disponibles</p>
                    <h3 className="text-2xl font-bold mt-1">3</h3>
                    <p className="text-xs text-green-500 mt-1 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trending-up"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                      </svg>
                      Nuevos cursos disponibles
                    </p>
                  </div>
                  <div className="size-12 rounded-full bg-violet-100 flex items-center justify-center dark:bg-violet-900/30">
                    <BookOpen className="size-6 text-violet-600 dark:text-violet-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white dark:bg-slate-950">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Cursos Completados</p>
                    <h3 className="text-2xl font-bold mt-1">0</h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">Comienza tu primer curso</p>
                  </div>
                  <div className="size-12 rounded-full bg-violet-100 flex items-center justify-center dark:bg-violet-900/30">
                    <GraduationCap className="size-6 text-violet-600 dark:text-violet-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white dark:bg-slate-950">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Horas de Estudio</p>
                    <h3 className="text-2xl font-bold mt-1">0h</h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">Comienza a aprender hoy</p>
                  </div>
                  <div className="size-12 rounded-full bg-violet-100 flex items-center justify-center dark:bg-violet-900/30">
                    <Clock className="size-6 text-violet-600 dark:text-violet-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white dark:bg-slate-950">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Certificados</p>
                    <h3 className="text-2xl font-bold mt-1">0</h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                      Completa cursos para obtener certificados
                    </p>
                  </div>
                  <div className="size-12 rounded-full bg-violet-100 flex items-center justify-center dark:bg-violet-900/30">
                    <Download className="size-6 text-violet-600 dark:text-violet-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cursos disponibles */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Cursos Disponibles</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/cursos" className="flex items-center gap-1">
                  Ver todos <ChevronRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {availableCourses.map((course) => (
                <Card key={course.id} className="border-none shadow-md bg-white dark:bg-slate-950">
                  <CardContent className="p-0">
                    <div className="flex items-center p-4 gap-3">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base truncate">{course.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{course.instructor}</p>
                      </div>
                    </div>

                    <div className="px-4 pb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>
                          {course.completedLessons} de {course.totalLessons} lecciones
                        </span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>

                    <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Primera lección</p>
                          <p className="text-sm font-medium truncate">{course.nextLesson}</p>
                        </div>
                        <Button
                          size="sm"
                          className="rounded-full bg-violet-600 hover:bg-violet-700"
                          onClick={() => router.push(`/dashboard/cursos/${course.id}`)}
                        >
                          Comenzar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Estudiantes destacados */}
          <div>
            <h2 className="text-xl font-bold mb-4">Estudiantes Destacados</h2>
            <Card className="border-none shadow-md bg-white dark:bg-slate-950">
              <CardContent className="p-4">
                <div className="space-y-4">
                  {topStudents.map((student, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="size-10">
                          <AvatarImage src={student.avatar} alt={student.name} />
                          <AvatarFallback className="bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200">
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{student.name}</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {student.courses} cursos completados
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <span className="text-sm font-medium">{student.completionRate}%</span>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Tasa de finalización</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/30">
                          #{index + 1}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

