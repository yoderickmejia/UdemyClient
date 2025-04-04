"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  ExternalLink,
  File,
  FileText,
  List,
  LogOut,
  Menu,
  MessageSquare,
  Moon,
  Pause,
  Play,
  Settings,
  Share2,
  Star,
  Sun,
  ThumbsUp,
  User,
  Volume2,
  VolumeX,
  Users,
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useTheme } from "next-themes"

// Datos de ejemplo para el curso
const courseData = {
  id: 3,
  title: "Figuras literarias",
  instructor: "Dra. Ana Martínez",
  description:
    "Explora el mundo de las figuras literarias, desde las figuras de dicción y pensamiento hasta los tropos, y aprende a identificarlas y utilizarlas.",
  level: "Intermedio-Avanzado",
  totalLessons: 22,
  completedLessons: 0,
  progress: 0,
  duration: "7 horas",
  lastAccessed: "",
  rating: 4.9,
  reviews: 750,
  image: "/placeholder.svg?height=400&width=800&text=Figuras+Literarias",
  sections: [
    {
      id: 1,
      title: "Introducción a las figuras literarias",
      isCompleted: false,
      lessons: [
        { id: 101, title: "Bienvenida al curso", duration: "4:50", isCompleted: false, type: "video" },
        { id: 102, title: "¿Qué son las figuras literarias?", duration: "11:25", isCompleted: false, type: "video" },
        {
          id: 103,
          title: "Clasificación de las figuras literarias",
          duration: "13:30",
          isCompleted: false,
          type: "video",
        },
        { id: 104, title: "Evaluación inicial", duration: "15:00", isCompleted: false, type: "quiz" },
      ],
    },
    {
      id: 2,
      title: "Figuras de dicción",
      isCompleted: false,
      lessons: [
        {
          id: 201,
          title: "Introducción a las figuras de dicción",
          duration: "10:15",
          isCompleted: false,
          type: "video",
        },
        { id: 202, title: "Aliteración y onomatopeya", duration: "14:30", isCompleted: false, type: "video" },
        { id: 203, title: "Anáfora y epífora", duration: "12:20", isCompleted: false, type: "video" },
        { id: 204, title: "Paralelismo y quiasmo", duration: "13:45", isCompleted: false, type: "video" },
        { id: 205, title: "Polisíndeton y asíndeton", duration: "11:30", isCompleted: false, type: "video" },
        { id: 206, title: "Práctica de identificación", duration: "20:00", isCompleted: false, type: "practice" },
      ],
    },
    {
      id: 3,
      title: "Figuras de pensamiento",
      isCompleted: false,
      lessons: [
        {
          id: 301,
          title: "Introducción a las figuras de pensamiento",
          duration: "9:10",
          isCompleted: false,
          type: "video",
        },
        {
          id: 302,
          title: "Figuras descriptivas: prosopografía y etopeya",
          duration: "15:35",
          isCompleted: false,
          type: "video",
        },
        {
          id: 303,
          title: "Figuras descriptivas: topografía y cronografía",
          duration: "14:40",
          isCompleted: false,
          type: "video",
        },
        { id: 304, title: "Hipérbole y litote", duration: "12:20", isCompleted: false, type: "video" },
        { id: 305, title: "Antítesis y paradoja", duration: "13:50", isCompleted: false, type: "video" },
        { id: 306, title: "Práctica de identificación", duration: "25:00", isCompleted: false, type: "practice" },
      ],
    },
    {
      id: 4,
      title: "Tropos",
      isCompleted: false,
      lessons: [
        { id: 401, title: "Introducción a los tropos", duration: "10:25", isCompleted: false, type: "video" },
        { id: 402, title: "Metáfora: definición y tipos", duration: "16:30", isCompleted: false, type: "video" },
        { id: 403, title: "Metonimia y sinécdoque", duration: "14:15", isCompleted: false, type: "video" },
        { id: 404, title: "Alegoría y símbolo", duration: "15:50", isCompleted: false, type: "video" },
        { id: 405, title: "Personificación e ironía", duration: "12:40", isCompleted: false, type: "video" },
        { id: 406, title: "Práctica de identificación", duration: "20:00", isCompleted: false, type: "practice" },
        { id: 407, title: "Evaluación final del módulo", duration: "30:00", isCompleted: false, type: "quiz" },
      ],
    },
  ],
}

export default function CourseDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [currentLessonId, setCurrentLessonId] = useState(101) // ID de la lección actual
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentNote, setCurrentNote] = useState("")
  const [videoProgress, setVideoProgress] = useState(0)
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Encontrar la lección actual
  const findCurrentLesson = () => {
    for (const section of courseData.sections) {
      for (const lesson of section.lessons) {
        if (lesson.id === currentLessonId) {
          return { lesson, section }
        }
      }
    }
    return null
  }

  const currentLessonInfo = findCurrentLesson()
  const currentLesson = currentLessonInfo?.lesson
  const currentSection = currentLessonInfo?.section

  // Encontrar la siguiente lección
  const findNextLesson = () => {
    let foundCurrent = false

    for (const section of courseData.sections) {
      for (const lesson of section.lessons) {
        if (foundCurrent) {
          return { lesson, section }
        }
        if (lesson.id === currentLessonId) {
          foundCurrent = true
        }
      }
    }
    return null
  }

  const nextLessonInfo = findNextLesson()

  // Calcular el progreso total del curso
  const calculateProgress = () => {
    let totalLessons = 0
    let completedLessons = 0

    courseData.sections.forEach((section) => {
      section.lessons.forEach((lesson) => {
        totalLessons++
        if (lesson.isCompleted) completedLessons++
      })
    })

    return Math.round((completedLessons / totalLessons) * 100)
  }

  const courseProgress = calculateProgress()

  // Manejar el cambio de lección
  const handleLessonChange = (lessonId) => {
    setCurrentLessonId(lessonId)
    // En una aplicación real, aquí cargarías el contenido de la lección
    setVideoProgress(0) // Reiniciar el progreso del video
    setIsPlaying(false) // Pausar la reproducción
  }

  // Manejar la reproducción del video
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Manejar el silencio del video
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  // Manejar la velocidad de reproducción
  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed)
  }

  // Manejar la finalización de la lección
  const handleCompleteLesson = () => {
    // En una aplicación real, aquí marcarías la lección como completada en la base de datos
    if (nextLessonInfo) {
      handleLessonChange(nextLessonInfo.lesson.id)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard/cursos")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <div className="hidden md:block">
            <h1 className="text-lg font-bold truncate max-w-[300px] lg:max-w-[500px]">{courseData.title}</h1>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Cambiar tema</span>
          </Button>

          <Progress value={courseProgress} className="w-24 h-2 mx-2 hidden sm:block" />
          <span className="text-sm text-slate-500 dark:text-slate-400 hidden sm:block">{courseProgress}%</span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative flex items-center gap-2 rounded-full">
                <Avatar className="size-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Usuario" />
                  <AvatarFallback className="bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200">
                    JP
                  </AvatarFallback>
                </Avatar>
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
              <DropdownMenuItem className="gap-2" onClick={() => router.push("/")}>
                <LogOut className="size-4" />
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Contenido del curso */}
        <div
          className={`${isSidebarOpen ? "w-80" : "w-0"} border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-all duration-300 overflow-hidden flex-shrink-0 hidden md:block`}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold">Contenido del curso</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsSidebarOpen(false)} className="md:hidden">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Progress value={courseProgress} className="flex-1 h-2" />
                <span className="text-sm font-medium">{courseProgress}%</span>
              </div>

              <div className="text-sm text-slate-500 dark:text-slate-400">
                {courseData.completedLessons} de {courseData.totalLessons} lecciones completadas
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {courseData.sections.map((section) => (
                <Collapsible key={section.id} defaultOpen={section.id === currentSection?.id}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-slate-100 dark:hover:bg-slate-900 text-left">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 transition-transform duration-200 transform group-data-[state=open]:rotate-90" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    {section.isCompleted && (
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
                      >
                        <Check className="mr-1 h-3 w-3" /> Completado
                      </Badge>
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="pl-6 pr-4 pb-2">
                      {section.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          className={`flex items-center w-full p-2 rounded-md text-left text-sm mb-1 ${
                            currentLessonId === lesson.id
                              ? "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300"
                              : "hover:bg-slate-100 dark:hover:bg-slate-900"
                          }`}
                          onClick={() => handleLessonChange(lesson.id)}
                        >
                          <div className="flex-1 flex items-center gap-2">
                            {lesson.type === "video" && <Play className="h-4 w-4" />}
                            {lesson.type === "quiz" && <FileText className="h-4 w-4" />}
                            {lesson.type === "practice" && <File className="h-4 w-4" />}
                            <span className="truncate">{lesson.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {lesson.isCompleted && <Check className="h-4 w-4 text-green-500" />}
                            <span className="text-xs text-slate-500 dark:text-slate-400">{lesson.duration}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile sidebar overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Mobile sidebar */}
        <div
          className={`fixed inset-y-0 left-0 w-80 z-40 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-all duration-300 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold">Contenido del curso</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Progress value={courseProgress} className="flex-1 h-2" />
                <span className="text-sm font-medium">{courseProgress}%</span>
              </div>

              <div className="text-sm text-slate-500 dark:text-slate-400">
                {courseData.completedLessons} de {courseData.totalLessons} lecciones completadas
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {courseData.sections.map((section) => (
                <Collapsible key={section.id} defaultOpen={section.id === currentSection?.id}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-slate-100 dark:hover:bg-slate-900 text-left">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 transition-transform duration-200 transform group-data-[state=open]:rotate-90" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    {section.isCompleted && (
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
                      >
                        <Check className="mr-1 h-3 w-3" /> Completado
                      </Badge>
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="pl-6 pr-4 pb-2">
                      {section.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          className={`flex items-center w-full p-2 rounded-md text-left text-sm mb-1 ${
                            currentLessonId === lesson.id
                              ? "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300"
                              : "hover:bg-slate-100 dark:hover:bg-slate-900"
                          }`}
                          onClick={() => {
                            handleLessonChange(lesson.id)
                            setIsMobileMenuOpen(false)
                          }}
                        >
                          <div className="flex-1 flex items-center gap-2">
                            {lesson.type === "video" && <Play className="h-4 w-4" />}
                            {lesson.type === "quiz" && <FileText className="h-4 w-4" />}
                            {lesson.type === "practice" && <File className="h-4 w-4" />}
                            <span className="truncate">{lesson.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {lesson.isCompleted && <Check className="h-4 w-4 text-green-500" />}
                            <span className="text-xs text-slate-500 dark:text-slate-400">{lesson.duration}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>

        {/* Main content - Video and lesson details */}
        <div className="flex-1 overflow-y-auto">
          {/* Toggle sidebar button (visible on larger screens) */}
          <div className="hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              className="fixed left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-r-full rounded-l-none"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </Button>
          </div>

          {currentLesson && (
            <div className="p-4 md:p-6">
              {/* Video player */}
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=720&width=1280&text=Video+Lección"
                  alt="Video de la lección"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                />

                {/* Video controls overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex justify-end">
                    <Button variant="ghost" size="icon" className="text-white">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </div>

                  <div>
                    <div className="w-full mb-2">
                      <Progress value={videoProgress} className="h-1" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="text-white" onClick={togglePlayPause}>
                          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </Button>

                        <Button variant="ghost" size="icon" className="text-white" onClick={toggleMute}>
                          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </Button>

                        <span className="text-white text-sm">0:00 / {currentLesson.duration}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-white">
                              {playbackSpeed}x
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleSpeedChange(0.5)}>0.5x</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSpeedChange(0.75)}>0.75x</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSpeedChange(1.0)}>1.0x</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSpeedChange(1.25)}>1.25x</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSpeedChange(1.5)}>1.5x</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSpeedChange(1.75)}>1.75x</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSpeedChange(2.0)}>2.0x</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lesson info */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Compartir
                  </Button>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <List className="h-4 w-4" />
                    <span>
                      Sección {currentSection.id}: {currentSection.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{currentLesson.duration}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="gap-2" onClick={handleCompleteLesson}>
                      <Check className="h-4 w-4" />
                      Marcar como completada
                    </Button>

                    <Button variant="ghost" size="sm" className="gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      Me gusta
                    </Button>
                  </div>

                  {nextLessonInfo && (
                    <Button
                      className="gap-2 bg-violet-600 hover:bg-violet-700"
                      onClick={() => handleLessonChange(nextLessonInfo.lesson.id)}
                    >
                      Siguiente lección
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Tabs for additional content */}
              <Tabs defaultValue="notes">
                <TabsList className="mb-4">
                  <TabsTrigger value="notes">Mis Notas</TabsTrigger>
                  <TabsTrigger value="resources">Recursos</TabsTrigger>
                  <TabsTrigger value="transcript">Transcripción</TabsTrigger>
                  <TabsTrigger value="qa">Preguntas</TabsTrigger>
                </TabsList>

                <TabsContent value="notes">
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Escribe tus notas sobre esta lección aquí..."
                      className="min-h-[150px]"
                      value={currentNote}
                      onChange={(e) => setCurrentNote(e.target.value)}
                    />
                    <Button className="bg-violet-600 hover:bg-violet-700">Guardar Notas</Button>
                  </div>
                </TabsContent>

                <TabsContent value="resources">
                  <div className="space-y-4">
                    <h3 className="font-medium">Recursos de la lección</h3>
                    <div className="grid gap-2">
                      <a
                        href="#"
                        className="flex items-center gap-2 p-3 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
                      >
                        <FileText className="h-5 w-5 text-violet-600" />
                        <div>
                          <p className="font-medium">Introducción a las figuras literarias.pdf</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">PDF - 1.5 MB</p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 p-3 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
                      >
                        <FileText className="h-5 w-5 text-violet-600" />
                        <div>
                          <p className="font-medium">Glosario de términos.pdf</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">PDF - 850 KB</p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 p-3 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
                      >
                        <FileText className="h-5 w-5 text-violet-600" />
                        <div>
                          <p className="font-medium">Ejemplos literarios.docx</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Word - 720 KB</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="transcript">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Transcripción de la lección</h3>
                      <Button variant="outline" size="sm">
                        Descargar
                      </Button>
                    </div>
                    <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 max-h-[300px] overflow-y-auto">
                      <p className="mb-2">
                        <span className="text-violet-600 font-medium">00:00</span> - Bienvenidos al curso de figuras
                        literarias. Mi nombre es Ana Martínez y seré su instructora.
                      </p>
                      <p className="mb-2">
                        <span className="text-violet-600 font-medium">00:15</span> - En este curso, exploraremos el
                        fascinante mundo de las figuras literarias y su importancia en la literatura y la comunicación.
                      </p>
                      <p className="mb-2">
                        <span className="text-violet-600 font-medium">00:30</span> - Las figuras literarias, también
                        conocidas como figuras retóricas, son recursos estilísticos que utilizan los escritores para
                        embellecer el lenguaje y transmitir ideas de manera más efectiva.
                      </p>
                      <p className="mb-2">
                        <span className="text-violet-600 font-medium">01:05</span> - A lo largo de este curso,
                        aprenderemos a identificar y analizar diferentes tipos de figuras literarias, desde las más
                        sencillas hasta las más complejas.
                      </p>
                      <p className="mb-2">
                        <span className="text-violet-600 font-medium">01:30</span> - Estudiaremos figuras de dicción,
                        figuras de pensamiento y tropos, y veremos ejemplos de cada una en textos literarios clásicos y
                        contemporáneos.
                      </p>
                      <p className="mb-2">
                        <span className="text-violet-600 font-medium">02:15</span> - También aprenderemos a utilizar
                        estas figuras en nuestra propia escritura para hacerla más expresiva y efectiva.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qa">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Preguntas y respuestas</h3>
                      <Button className="gap-2 bg-violet-600 hover:bg-violet-700">
                        <MessageSquare className="h-4 w-4" />
                        Hacer una pregunta
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800">
                        <div className="flex items-start gap-3 mb-3">
                          <Avatar className="size-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32&text=AM" alt="Ana Martínez" />
                            <AvatarFallback>AM</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">Ana Martínez</h4>
                              <Badge variant="outline" className="text-xs">
                                Instructor
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Hace 1 día</p>
                          </div>
                        </div>
                        <p>
                          ¡Bienvenidos a todos al curso de figuras literarias! Estoy emocionada de comenzar este viaje
                          con ustedes. Si tienen preguntas sobre el contenido del curso o sobre figuras literarias en
                          general, no duden en preguntar aquí.
                        </p>
                      </div>

                      <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800">
                        <div className="flex items-start gap-3 mb-3">
                          <Avatar className="size-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32&text=RM" alt="Roberto Méndez" />
                            <AvatarFallback>RM</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">Roberto Méndez</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Hace 12 horas</p>
                          </div>
                        </div>
                        <p className="mb-4">
                          Profesora, ¿podría explicar la diferencia entre metáfora y símil? A veces me cuesta
                          distinguirlos en los textos literarios.
                        </p>

                        <div className="pl-8 border-l-2 border-slate-200 dark:border-slate-800 mt-4">
                          <div className="flex items-start gap-3 mb-3">
                            <Avatar className="size-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32&text=AM" alt="Ana Martínez" />
                              <AvatarFallback>AM</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium">Ana Martínez</h4>
                                <Badge variant="outline" className="text-xs">
                                  Instructor
                                </Badge>
                              </div>
                              <p className="text-sm text-slate-500 dark:text-slate-400">Hace 6 horas</p>
                            </div>
                          </div>
                          <p>
                            Excelente pregunta, Roberto. La principal diferencia es que el símil establece una
                            comparación explícita usando palabras como "como", "tal como" o "semejante a" (ej: "Sus ojos
                            brillan como estrellas"), mientras que la metáfora establece una identificación directa sin
                            usar conectores comparativos (ej: "Sus ojos son estrellas"). Veremos esto en detalle en el
                            módulo de tropos, pero es una distinción muy importante que muchos estudiantes suelen
                            confundir.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Instructor info */}
              <div className="mt-8 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold mb-4">Sobre el instructor</h3>
                <div className="flex items-start gap-4">
                  <Avatar className="size-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64&text=AM" alt="Ana Martínez" />
                    <AvatarFallback className="text-lg">AM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-lg">Dra. Ana Martínez</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                      Doctora en Literatura Comparada y especialista en análisis literario con 12 años de experiencia
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span>4.9 Valoración</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>18,450 Estudiantes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>10 Cursos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Componente ChevronLeft que faltaba
function ChevronLeft(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

// Componente X que faltaba
function X(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

