"use client"

import { AlertDescription } from "@/components/ui/alert"
import { AlertTitle } from "@/components/ui/alert"
import { Alert } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group"
import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu"
import { DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { AvatarFallback } from "@/components/ui/avatar"
import { AvatarImage } from "@/components/ui/avatar"
import { Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import {
  ArrowLeft,
  Check,
  ChevronLeftIcon,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  LogOut,
  Menu,
  MessageSquare,
  Moon,
  Pause,
  Play,
  Share2,
  Settings,
  Sun,
  ThumbsUp,
  User,
  Volume2,
  VolumeX,
  XIcon,
} from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { RadioGroupItem } from "@radix-ui/react-radio-group"

const coursesData = {
  "101": {
    id: 101,
    title: "Curso de Introducción a la Programación",
    lessons: [
      {
        id: 1,
        title: "Variables y Tipos de Datos",
        duration: "15:00",
        isCompleted: true,
        type: "video",
        content:
          "<p>En esta lección, aprenderemos sobre las variables y los diferentes tipos de datos en programación.</p>",
      },
      {
        id: 2,
        title: "Estructuras de Control",
        duration: "20:00",
        isCompleted: false,
        type: "video",
        content: "<p>En esta lección, exploraremos las estructuras de control como condicionales y bucles.</p>",
      },
      {
        id: 3,
        title: "Evaluación: Variables y Tipos de Datos",
        duration: "10:00",
        isCompleted: false,
        type: "quiz",
        questions: [
          {
            id: 1,
            question: "¿Qué es una variable en programación?",
            options: ["Un tipo de dato", "Un espacio en memoria para almacenar datos", "Una función", "Un operador"],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cuál de los siguientes no es un tipo de dato primitivo?",
            options: ["Entero", "Booleano", "Cadena", "Array"],
            correctAnswer: 3,
          },
        ],
      },
    ],
  },
  "202": {
    id: 202,
    title: "Curso de Diseño Gráfico para Principiantes",
    lessons: [
      {
        id: 4,
        title: "Introducción al Diseño Gráfico",
        duration: "18:00",
        isCompleted: true,
        type: "video",
        content:
          "<p>En esta lección, daremos una introducción al mundo del diseño gráfico y sus principios básicos.</p>",
      },
      {
        id: 5,
        title: "Teoría del Color",
        duration: "22:00",
        isCompleted: false,
        type: "video",
        content: "<p>En esta lección, profundizaremos en la teoría del color y cómo aplicarla en tus diseños.</p>",
      },
    ],
  },
  "309": {
    id: 309,
    title: "Curso de Redacción Creativa",
    lessons: [
      {
        id: 6,
        title: "Introducción a la Redacción Creativa",
        duration: "15:00",
        isCompleted: true,
        type: "video",
        content:
          "<p>En esta lección, exploraremos los fundamentos de la redacción creativa y cómo desbloquear tu potencial.</p>",
      },
      {
        id: 7,
        title: "Técnicas de Escritura",
        duration: "20:00",
        isCompleted: false,
        type: "video",
        content:
          "<p>En esta lección, aprenderemos diversas técnicas de escritura para mejorar tu estilo y narrativa.</p>",
      },
      {
        id: 308,
        title: "Quiz: Metáforas y símiles",
        duration: "15:00",
        isCompleted: false,
        type: "quiz",
        questions: [
          {
            id: 1,
            question: "¿Qué es una metáfora?",
            options: [
              "Una comparación usando 'como'",
              "Una identificación directa entre dos elementos diferentes",
              "Una exageración",
              "Una pregunta retórica",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cuál es la principal diferencia entre metáfora y símil?",
            options: [
              "La metáfora es más poética que el símil",
              "La metáfora identifica directamente A con B, mientras que el símil compara A con B mediante un nexo",
              "El símil solo se usa en poesía, mientras que la metáfora se usa en todo tipo de textos",
              "No hay diferencia, son sinónimos",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué figura literaria se utiliza en 'Estoy leyendo a Cervantes'?",
            options: ["Metáfora", "Símil", "Metonimia", "Sinécdoque"],
            correctAnswer: 2,
          },
          {
            id: 4,
            question: "¿Qué figura literaria se utiliza en 'Necesitamos más manos para este trabajo'?",
            options: ["Metáfora", "Símil", "Metonimia", "Sinécdoque"],
            correctAnswer: 3,
          },
          {
            id: 5,
            question:
              "¿Qué figura literaria consiste en representar una idea abstracta mediante una imagen concreta, generalmente a través de una serie de metáforas relacionadas entre sí?",
            options: ["Metáfora", "Símil", "Metonimia", "Alegoría"],
            correctAnswer: 3,
          },
        ],
      },
      {
        id: 309,
        title: "Evaluación final: Figuras literarias",
        duration: "25:00",
        isCompleted: false,
        type: "quiz",
        questions: [
          {
            id: 1,
            question: "¿Cuáles son los tres grandes grupos de figuras literarias?",
            options: [
              "Metáfora, metonimia y sinécdoque",
              "Anáfora, hipérbole y paradoja",
              "Figuras de dicción, figuras de pensamiento y tropos",
              "Aliteración, personificación y alegoría",
            ],
            correctAnswer: 2,
          },
          {
            id: 2,
            question: "¿Qué figura literaria se utiliza en 'Tus ojos son dos luceros'?",
            options: ["Símil", "Metáfora", "Metonimia", "Sinécdoque"],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué figura literaria se utiliza en 'El ruido con que rueda la ronca tempestad'?",
            options: ["Aliteración", "Onomatopeya", "Anáfora", "Hipérbaton"],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué figura literaria se utiliza en 'Es tan corto el amor y tan largo el olvido'?",
            options: ["Hipérbole", "Antítesis", "Paradoja", "Ironía"],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué figura literaria se utiliza en 'La Casa Blanca ha emitido un comunicado'?",
            options: ["Metáfora", "Símil", "Metonimia", "Sinécdoque"],
            correctAnswer: 2,
          },
        ],
      },
    ],
  },
}

export default function CourseDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentNote, setCurrentNote] = useState("")
  const [videoProgress, setVideoProgress] = useState(0)
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [quizScore, setQuizScore] = useState(0)

  // Get course data based on the ID from the URL
  const courseId = params?.id as string
  const courseData = coursesData[courseId]

  // Set current lesson data
  const currentLesson = courseData?.lessons[currentLessonIndex]

  // Load completed lessons from localStorage on component mount
  useEffect(() => {
    if (courseId) {
      const savedCompletedLessons = localStorage.getItem(`completedLessons_${courseId}`)
      if (savedCompletedLessons) {
        setCompletedLessons(JSON.parse(savedCompletedLessons))
      }
    }
  }, [courseId])

  // Save completed lessons to localStorage whenever it changes
  useEffect(() => {
    if (courseId && completedLessons.length > 0) {
      localStorage.setItem(`completedLessons_${courseId}`, JSON.stringify(completedLessons))
    }
  }, [courseId, completedLessons])

  // Calculate the progress of the course
  const calculateProgress = () => {
    if (!courseData || courseData.lessons.length === 0) return 0
    return Math.round((completedLessons.length / courseData.lessons.length) * 100)
  }

  const courseProgress = calculateProgress()

  // Handle lesson change
  const handleLessonChange = (index: number) => {
    setCurrentLessonIndex(index)
    setVideoProgress(0)
    setIsPlaying(false)
    setQuizAnswers({})
    setQuizSubmitted(false)
  }

  // Handle video playback
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Handle video mute
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  // Handle playback speed change
  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed)
  }

  // Handle completing a lesson
  const handleCompleteLesson = () => {
    if (currentLesson && !completedLessons.includes(currentLesson.id)) {
      // Add the current lesson to completed lessons
      const updatedCompletedLessons = [...completedLessons, currentLesson.id]
      setCompletedLessons(updatedCompletedLessons)

      // Show a success message (you could implement a toast notification here)
      alert(`¡Lección "${currentLesson.title}" completada con éxito!`)

      // Save to localStorage immediately
      if (courseId) {
        localStorage.setItem(`completedLessons_${courseId}`, JSON.stringify(updatedCompletedLessons))
      }
    }

    // If there's a next lesson, advance to it
    if (currentLessonIndex < courseData.lessons.length - 1) {
      handleLessonChange(currentLessonIndex + 1)
    }
  }

  // Handle quiz answers
  const handleQuizAnswer = (questionId: number, answerIndex: number) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionId]: answerIndex,
    })
  }

  // Submit quiz
  const handleSubmitQuiz = () => {
    if (!currentLesson || currentLesson.type !== "quiz") return

    const questions = currentLesson.questions
    let correctAnswers = 0

    questions.forEach((question) => {
      if (quizAnswers[question.id] === question.correctAnswer) {
        correctAnswers++
      }
    })

    const score = Math.round((correctAnswers / questions.length) * 100)
    setQuizScore(score)
    setQuizSubmitted(true)

    // If the score is at least 60%, mark the lesson as completed
    if (score >= 60 && !completedLessons.includes(currentLesson.id)) {
      setCompletedLessons([...completedLessons, currentLesson.id])
    }
  }

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // If course data is not found, show an error message
  if (!courseData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Curso no encontrado</h1>
          <p className="mb-6">El curso que estás buscando no existe o no está disponible.</p>
          <Button onClick={() => router.push("/dashboard/cursos")}>Volver a cursos</Button>
        </div>
      </div>
    )
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

        <div className="w-full mt-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Progreso del Curso</h2>
            <span className="text-sm font-medium">{courseProgress}% Completado</span>
          </div>
          <Progress value={courseProgress} className="h-3 w-full bg-slate-200 dark:bg-slate-700" />
          <div className="flex justify-between mt-2 text-sm text-slate-500 dark:text-slate-400">
            <span>
              {completedLessons.length} de {courseData.lessons.length} lecciones completadas
            </span>
            {courseProgress === 100 ? (
              <span className="text-green-600 dark:text-green-400 font-medium">¡Curso completado! 🎉</span>
            ) : (
              <span>{courseData.lessons.length - completedLessons.length} lecciones restantes</span>
            )}
          </div>
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
        {/* Sidebar - Course content */}
        <div
          className={`${isSidebarOpen ? "w-80" : "w-0"} border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-all duration-300 overflow-hidden flex-shrink-0 hidden md:block`}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold">Contenido del curso</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsSidebarOpen(false)} className="md:hidden">
                  <ChevronLeftIcon className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Progress value={courseProgress} className="flex-1 h-2" />
                <span className="text-sm font-medium">{courseProgress}%</span>
              </div>

              <div className="text-sm text-slate-500 dark:text-slate-400">
                {completedLessons.length} de {courseData.lessons.length} lecciones completadas
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {courseData.lessons.map((lesson, index) => (
                <button
                  key={lesson.id}
                  className={`flex items-center w-full p-4 text-left border-b border-slate-100 dark:border-slate-800 ${
                    currentLessonIndex === index
                      ? "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300"
                      : "hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`}
                  onClick={() => handleLessonChange(index)}
                >
                  <div className="flex-1 flex items-center gap-2">
                    {lesson.type === "video" && <Play className="h-4 w-4" />}
                    {lesson.type === "quiz" && <FileText className="h-4 w-4" />}
                    <span className="truncate">{lesson.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {completedLessons.includes(lesson.id) && <Check className="h-4 w-4 text-green-500" />}
                    <span className="text-xs text-slate-500 dark:text-slate-400">{lesson.duration}</span>
                  </div>
                </button>
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
                  <XIcon className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Progress value={courseProgress} className="flex-1 h-2" />
                <span className="text-sm font-medium">{courseProgress}%</span>
              </div>

              <div className="text-sm text-slate-500 dark:text-slate-400">
                {completedLessons.length} de {courseData.lessons.length} lecciones completadas
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {courseData.lessons.map((lesson, index) => (
                <button
                  key={lesson.id}
                  className={`flex items-center w-full p-4 text-left border-b border-slate-100 dark:border-slate-800 ${
                    currentLessonIndex === index
                      ? "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300"
                      : "hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`}
                  onClick={() => {
                    handleLessonChange(index)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <div className="flex-1 flex items-center gap-2">
                    {lesson.type === "video" && <Play className="h-4 w-4" />}
                    {lesson.type === "quiz" && <FileText className="h-4 w-4" />}
                    <span className="truncate">{lesson.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {completedLessons.includes(lesson.id) && <Check className="h-4 w-4 text-green-500" />}
                    <span className="text-xs text-slate-500 dark:text-slate-400">{lesson.duration}</span>
                  </div>
                </button>
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
              {isSidebarOpen ? <ChevronLeftIcon className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </Button>
          </div>

          {currentLesson && (
            <div className="p-4 md:p-6">
              {currentLesson.type === "video" && (
                <>
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
                        <Clock className="h-4 w-4" />
                        <span>{currentLesson.duration}</span>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-4">
                        <Button
                          variant="default"
                          size="default"
                          className="gap-2 bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                          onClick={handleCompleteLesson}
                        >
                          <Check className="h-5 w-5" />
                          {completedLessons.includes(currentLesson.id)
                            ? "Lección Completada ✓"
                            : "Marcar como Completada"}
                        </Button>

                        <Button variant="ghost" size="sm" className="gap-2">
                          <ThumbsUp className="h-4 w-4" />
                          Me gusta
                        </Button>
                      </div>

                      {currentLessonIndex < courseData.lessons.length - 1 && (
                        <Button className="gap-2 bg-violet-600 hover:bg-violet-700" onClick={handleCompleteLesson}>
                          Siguiente lección
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    {/* Lesson content */}
                    <div
                      className="prose prose-slate dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: currentLesson.content }}
                    />
                  </div>
                </>
              )}

              {currentLesson.type === "quiz" && (
                <div className="max-w-3xl mx-auto">
                  <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-2">{currentLesson.title}</h1>
                    <p className="text-slate-500 dark:text-slate-400">
                      Completa esta evaluación para poner a prueba tus conocimientos.
                    </p>
                  </div>

                  {!quizSubmitted ? (
                    <>
                      <div className="space-y-6 mb-6">
                        {currentLesson.questions.map((question, qIndex) => (
                          <Card key={question.id} className="border-slate-200 dark:border-slate-800">
                            <CardHeader>
                              <CardTitle className="text-lg font-medium">
                                {qIndex + 1}. {question.question}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <RadioGroup
                                value={quizAnswers[question.id]?.toString()}
                                onValueChange={(value) => handleQuizAnswer(question.id, Number.parseInt(value))}
                              >
                                {question.options.map((option, oIndex) => (
                                  <div key={oIndex} className="flex items-center space-x-2 mb-2">
                                    <RadioGroupItem value={oIndex.toString()} id={`q${question.id}-o${oIndex}`} />
                                    <Label htmlFor={`q${question.id}-o${oIndex}`}>{option}</Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <Button
                        className="w-full bg-violet-600 hover:bg-violet-700"
                        onClick={handleSubmitQuiz}
                        disabled={Object.keys(quizAnswers).length !== currentLesson.questions.length}
                      >
                        Enviar respuestas
                      </Button>
                    </>
                  ) : (
                    <div className="space-y-6">
                      <Alert
                        className={
                          quizScore >= 60
                            ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                            : "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
                        }
                      >
                        <AlertTitle
                          className={
                            quizScore >= 60 ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"
                          }
                        >
                          {quizScore >= 60 ? "¡Felicidades!" : "Necesitas repasar"}
                        </AlertTitle>
                        <AlertDescription
                          className={
                            quizScore >= 60 ? "text-green-700 dark:text-green-200" : "text-red-700 dark:text-red-200"
                          }
                        >
                          {quizScore >= 60
                            ? `Has obtenido ${quizScore}% de respuestas correctas. ¡Has completado esta lección!`
                            : `Has obtenido ${quizScore}% de respuestas correctas. Necesitas al menos 60% para completar la lección.`}
                        </AlertDescription>
                      </Alert>

                      <div className="space-y-6">
                        {currentLesson.questions.map((question, qIndex) => {
                          const isCorrect = quizAnswers[question.id] === question.correctAnswer
                          return (
                            <Card
                              key={question.id}
                              className={`border-2 ${isCorrect ? "border-green-200 dark:border-green-800" : "border-red-200 dark:border-red-800"}`}
                            >
                              <CardHeader>
                                <CardTitle className="text-lg font-medium flex items-center gap-2">
                                  {qIndex + 1}. {question.question}
                                  {isCorrect ? (
                                    <Check className="h-5 w-5 text-green-500" />
                                  ) : (
                                    <XIcon className="h-5 w-5 text-red-500" />
                                  )}
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-2">
                                  {question.options.map((option, oIndex) => (
                                    <div
                                      key={oIndex}
                                      className={`p-2 rounded-md ${
                                        oIndex === question.correctAnswer
                                          ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                                          : quizAnswers[question.id] === oIndex
                                            ? "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                                            : "bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                      }`}
                                    >
                                      {option}
                                      {oIndex === question.correctAnswer && (
                                        <span className="ml-2 text-green-600 dark:text-green-400 text-sm">
                                          (Respuesta correcta)
                                        </span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          )
                        })}
                      </div>

                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setQuizAnswers({})
                            setQuizSubmitted(false)
                          }}
                        >
                          Intentar de nuevo
                        </Button>

                        {currentLessonIndex < courseData.lessons.length - 1 && (
                          <Button
                            className="gap-2 bg-violet-600 hover:bg-violet-700"
                            onClick={() => handleLessonChange(currentLessonIndex + 1)}
                            disabled={quizScore < 60}
                          >
                            {quizScore >= 60 ? "Siguiente lección" : "Repasa el contenido"}
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tabs for additional content */}
              <Tabs defaultValue="notes" className="mt-8">
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
                          <p className="font-medium">Material complementario.pdf</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">PDF - 2.4 MB</p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 p-3 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
                      >
                        <FileText className="h-5 w-5 text-violet-600" />
                        <div>
                          <p className="font-medium">Ejercicios de práctica.pdf</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">PDF - 1.8 MB</p>
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
                        <span className="text-violet-600 font-medium">00:00</span> - Bienvenidos a nuestra lección sobre
                        cohesión textual.
                      </p>
                      <p className="mb-2">
                        <span className="text-violet-600 font-medium">00:15</span> - En esta lección, vamos a aprender
                        sobre los elementos que dan cohesión a un texto.
                      </p>
                      <p className="mb-2">
                        <span className="text-violet-600 font-medium">00:30</span> - La cohesión textual es la propiedad
                        que permite que las diferentes partes de un texto estén conectadas entre sí.
                      </p>
                      <p className="mb-2">
                        <span className="text-violet-600 font-medium">01:05</span> - Estos elementos son fundamentales
                        para que un texto sea comprensible y eficaz en su propósito comunicativo.
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
                            <AvatarImage src="/placeholder.svg?height=32&width=32&text=MG" alt="María González" />
                            <AvatarFallback>MG</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">María González</h4>
                              <Badge variant="outline" className="text-xs">
                                Instructor
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Hace 2 días</p>
                          </div>
                        </div>
                        <p>
                          ¡Hola a todos! Si tienen alguna duda sobre la cohesión textual, no duden en preguntar aquí.
                          Estaré respondiendo todas sus consultas.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Final Course Exam */}
              {completedLessons.length === courseData.lessons.length && (
                <div className="mt-8 p-6 border border-violet-200 dark:border-violet-800 rounded-lg bg-violet-50 dark:bg-violet-900/20">
                  <h2 className="text-2xl font-bold mb-4">Examen Final del Curso</h2>
                  <p className="mb-6 text-slate-600 dark:text-slate-300">
                    ¡Felicidades por completar todas las lecciones! Ahora puedes poner a prueba tus conocimientos con
                    este examen final.
                  </p>

                  <form className="space-y-6">
                    <div className="space-y-4">
                      <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h3 className="font-medium mb-3">1. ¿Cuál es el objetivo principal de este curso?</h3>
                        <RadioGroup>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="a" id="q1-a" />
                            <Label htmlFor="q1-a">Aprender conceptos básicos</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="b" id="q1-b" />
                            <Label htmlFor="q1-b">Dominar técnicas avanzadas</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="c" id="q1-c" />
                            <Label htmlFor="q1-c">Obtener un certificado</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="d" id="q1-d" />
                            <Label htmlFor="q1-d">Todas las anteriores</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h3 className="font-medium mb-3">2. ¿Qué habilidades has desarrollado durante este curso?</h3>
                        <RadioGroup>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="a" id="q2-a" />
                            <Label htmlFor="q2-a">Análisis crítico</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="b" id="q2-b" />
                            <Label htmlFor="q2-b">Aplicación práctica</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="c" id="q2-c" />
                            <Label htmlFor="q2-c">Resolución de problemas</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="d" id="q2-d" />
                            <Label htmlFor="q2-d">Todas las anteriores</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h3 className="font-medium mb-3">3. ¿Cómo aplicarías lo aprendido en un contexto real?</h3>
                        <Textarea placeholder="Escribe tu respuesta aquí..." className="min-h-[100px]" />
                      </div>

                      <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h3 className="font-medium mb-3">4. ¿Qué tema te resultó más interesante y por qué?</h3>
                        <Textarea placeholder="Escribe tu respuesta aquí..." className="min-h-[100px]" />
                      </div>

                      <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h3 className="font-medium mb-3">5. Evalúa la calidad del contenido del curso:</h3>
                        <RadioGroup>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="excellent" id="q5-excellent" />
                            <Label htmlFor="q5-excellent">Excelente</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="good" id="q5-good" />
                            <Label htmlFor="q5-good">Bueno</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="average" id="q5-average" />
                            <Label htmlFor="q5-average">Regular</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="poor" id="q5-poor" />
                            <Label htmlFor="q5-poor">Necesita mejorar</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <Button className="w-full bg-violet-600 hover:bg-violet-700">Enviar Examen Final</Button>
                  </form>
                </div>
              )}

              {/* Certificate Generation */}
              {completedLessons.length === courseData.lessons.length && (
                <div className="mt-8 p-6 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-900/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">¡Felicidades! Has completado el curso</h2>
                      <p className="text-slate-600 dark:text-slate-300">
                        Has completado todas las lecciones de "{courseData.title}". Ahora puedes descargar tu
                        certificado.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <GraduationCap className="h-16 w-16 text-green-600 dark:text-green-400" />
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <Button className="gap-2 bg-green-600 hover:bg-green-700">
                      <Download className="h-4 w-4" />
                      Descargar Certificado
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Compartir Logro
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

