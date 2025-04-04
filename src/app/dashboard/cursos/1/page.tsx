"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  ExternalLink,
  FileText,
  LogOut,
  Menu,
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
import { useTheme } from "next-themes"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Datos del curso 1: Elementos de Cohesión y Marcadores Textuales
const courseData = {
  id: 1,
  title: "Elementos de Cohesión y Marcadores Textuales",
  instructor: "Dra. María González",
  description:
    "Aprende sobre los elementos que dan cohesión a un texto y los diferentes tipos de marcadores textuales.",
  level: "Intermedio",
  totalLessons: 3,
  completedLessons: 0,
  progress: 0,
  duration: "3 horas",
  lastAccessed: "",
  rating: 4.9,
  reviews: 840,
  image: "/placeholder.svg?height=400&width=800&text=Cohesión+Textual",
  lessons: [
    {
      id: 101,
      title: "Elementos de cohesión textual",
      duration: "45:00",
      isCompleted: false,
      type: "video",
      content: `
        <h2>Elementos de cohesión textual</h2>
        <p>La cohesión textual es la propiedad que permite que las diferentes partes de un texto estén conectadas entre sí, formando una unidad de sentido. Los elementos de cohesión son los recursos lingüísticos que establecen relaciones entre las distintas partes del texto.</p>
        
        <h3>Principales elementos de cohesión textual:</h3>
        
        <h4>1. Referencia</h4>
        <p>La referencia es la relación que se establece entre un elemento del texto y otro que aparece antes o después. Puede ser:</p>
        <ul>
          <li><strong>Anafórica:</strong> Cuando un elemento remite a otro mencionado anteriormente. Ejemplo: "Juan llegó tarde a la reunión. <em>Él</em> se disculpó con todos."</li>
          <li><strong>Catafórica:</strong> Cuando un elemento remite a otro que aparecerá después. Ejemplo: "Te diré <em>esto</em>: no vuelvas tarde."</li>
        </ul>
        
        <h4>2. Sustitución</h4>
        <p>Consiste en reemplazar un elemento por otro para evitar repeticiones. Ejemplo: "Me regalaron un libro nuevo. <em>El mismo</em> tiene ilustraciones a color."</p>
        
        <h4>3. Elipsis</h4>
        <p>Es la omisión de elementos que se sobreentienden por el contexto. Ejemplo: "Juan compró un libro y María [compró] una revista."</p>
        
        <h4>4. Conectores o marcadores textuales</h4>
        <p>Son palabras o expresiones que establecen relaciones lógicas entre las partes del texto. Se clasifican según la relación que establecen (adición, contraste, causa, etc.).</p>
        
        <h4>5. Cohesión léxica</h4>
        <p>Se establece mediante la repetición de palabras, el uso de sinónimos, antónimos, hiperónimos, hipónimos, etc. Ejemplo: "El <em>perro</em> ladró toda la noche. El <em>animal</em> estaba inquieto."</p>
        
        <h3>Importancia de la cohesión textual</h3>
        <p>La cohesión es fundamental para que un texto sea comprensible y eficaz. Un texto con buena cohesión:</p>
        <ul>
          <li>Facilita la lectura y comprensión</li>
          <li>Evita ambigüedades y confusiones</li>
          <li>Permite seguir el hilo argumentativo</li>
          <li>Contribuye a la coherencia global del texto</li>
        </ul>
      `,
    },
    {
      id: 102,
      title: "Marcadores textuales y sus tipos",
      duration: "50:00",
      isCompleted: false,
      type: "video",
      content: `
        <h2>Marcadores textuales y sus tipos</h2>
        <p>Los marcadores textuales son palabras, expresiones o frases que establecen relaciones lógicas entre las diferentes partes de un texto. Funcionan como señales que guían al lector en la interpretación del discurso.</p>
        
        <h3>Clasificación de los marcadores textuales</h3>
        
        <h4>1. Marcadores de ordenación</h4>
        <p>Organizan la información en el texto, indicando el orden de las ideas.</p>
        <ul>
          <li><strong>De inicio:</strong> en primer lugar, para empezar, primeramente, por un lado...</li>
          <li><strong>De continuidad:</strong> en segundo lugar, a continuación, seguidamente, por otra parte...</li>
          <li><strong>De cierre:</strong> finalmente, por último, para terminar, en conclusión...</li>
        </ul>
        
        <h4>2. Marcadores de adición</h4>
        <p>Añaden información nueva a la ya presentada.</p>
        <ul>
          <li>además, también, asimismo, igualmente, de igual modo, del mismo modo...</li>
        </ul>
        
        <h4>3. Marcadores de contraste</h4>
        <p>Expresan oposición o contradicción entre ideas.</p>
        <ul>
          <li><strong>De oposición:</strong> pero, sin embargo, no obstante, por el contrario...</li>
          <li><strong>De concesión:</strong> aunque, a pesar de, pese a, si bien...</li>
        </ul>
        
        <h4>4. Marcadores de causa</h4>
        <p>Indican la causa o motivo de algo.</p>
        <ul>
          <li>porque, ya que, puesto que, dado que, debido a, a causa de...</li>
        </ul>
        
        <h4>5. Marcadores de consecuencia</h4>
        <p>Señalan el efecto o resultado de una acción o situación.</p>
        <ul>
          <li>por lo tanto, por consiguiente, en consecuencia, de ahí que, por eso, así pues...</li>
        </ul>
        
        <h4>6. Marcadores de ejemplificación</h4>
        <p>Introducen ejemplos que ilustran o aclaran una idea.</p>
        <ul>
          <li>por ejemplo, como, así, en particular, en concreto, a saber, tal como...</li>
        </ul>
        
        <h4>7. Marcadores de reformulación</h4>
        <p>Expresan de otra manera lo que se ha dicho anteriormente.</p>
        <ul>
          <li>es decir, o sea, esto es, en otras palabras, dicho de otro modo...</li>
        </ul>
        
        <h4>8. Marcadores de énfasis</h4>
        <p>Destacan o enfatizan una idea.</p>
        <ul>
          <li>sobre todo, especialmente, principalmente, en particular, de hecho...</li>
        </ul>
        
        <h3>Uso adecuado de los marcadores textuales</h3>
        <p>Para utilizar correctamente los marcadores textuales, es importante:</p>
        <ul>
          <li>Seleccionar el marcador que mejor exprese la relación que queremos establecer</li>
          <li>No abusar de ellos para evitar un texto recargado</li>
          <li>Variar los marcadores para enriquecer el texto</li>
          <li>Tener en cuenta el registro (formal o informal) del texto</li>
        </ul>
        
        <p>Los marcadores textuales son herramientas fundamentales para construir textos cohesionados y coherentes, facilitando la comprensión del lector y haciendo más eficaz la comunicación escrita.</p>
      `,
    },
    {
      id: 103,
      title: "Evaluación: Elementos de cohesión y marcadores textuales",
      duration: "30:00",
      isCompleted: false,
      type: "quiz",
      questions: [
        {
          id: 1,
          question: "¿Qué es la cohesión textual?",
          options: [
            "La propiedad que permite que las diferentes partes de un texto estén conectadas entre sí",
            "La capacidad de un texto para transmitir un mensaje claro",
            "La estructura gramatical de un texto",
            "La organización de párrafos en un texto",
          ],
          correctAnswer: 0,
        },
        {
          id: 2,
          question: "La referencia anafórica se produce cuando:",
          options: [
            "Un elemento remite a otro que aparecerá después en el texto",
            "Un elemento remite a otro mencionado anteriormente en el texto",
            "Se omite un elemento que se sobreentiende por el contexto",
            "Se sustituye un elemento por otro para evitar repeticiones",
          ],
          correctAnswer: 1,
        },
        {
          id: 3,
          question: "¿Cuál de los siguientes es un marcador de contraste?",
          options: ["Además", "Por lo tanto", "Sin embargo", "Es decir"],
          correctAnswer: 2,
        },
        {
          id: 4,
          question: "Los marcadores textuales de consecuencia indican:",
          options: [
            "La causa o motivo de algo",
            "El efecto o resultado de una acción o situación",
            "Una oposición o contradicción entre ideas",
            "Una ejemplificación de una idea",
          ],
          correctAnswer: 1,
        },
        {
          id: 5,
          question: "En la frase 'Juan compró un libro y María una revista', ¿qué elemento de cohesión se utiliza?",
          options: ["Referencia anafórica", "Sustitución", "Elipsis", "Cohesión léxica"],
          correctAnswer: 2,
        },
      ],
    },
  ],
}

export default function CourseDetailPage() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [completedLessons, setCompletedLessons] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentNote, setCurrentNote] = useState("")
  const [videoProgress, setVideoProgress] = useState(0)
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [quizScore, setQuizScore] = useState(0)

  const currentLesson = courseData.lessons[currentLessonIndex]

  // Calcular el progreso del curso
  const calculateProgress = () => {
    if (courseData.lessons.length === 0) return 0
    return Math.round((completedLessons.length / courseData.lessons.length) * 100)
  }

  const courseProgress = calculateProgress()

  // Manejar el cambio de lección
  const handleLessonChange = (index) => {
    setCurrentLessonIndex(index)
    setVideoProgress(0)
    setIsPlaying(false)
    setQuizAnswers({})
    setQuizSubmitted(false)
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
    if (!completedLessons.includes(currentLesson.id)) {
      setCompletedLessons([...completedLessons, currentLesson.id])
    }

    // Si hay una siguiente lección, avanzar a ella
    if (currentLessonIndex < courseData.lessons.length - 1) {
      handleLessonChange(currentLessonIndex + 1)
    }
  }

  // Manejar las respuestas del quiz
  const handleQuizAnswer = (questionId, answerIndex) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionId]: answerIndex,
    })
  }

  // Enviar el quiz
  const handleSubmitQuiz = () => {
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

    // Si el puntaje es mayor a 60%, marcar la lección como completada
    if (score >= 60) {
      if (!completedLessons.includes(currentLesson.id)) {
        setCompletedLessons([...completedLessons, currentLesson.id])
      }
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
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
                  <X className="h-5 w-5" />
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
              {isSidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </Button>
          </div>

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
                      <Button variant="outline" size="sm" className="gap-2" onClick={handleCompleteLesson}>
                        <Check className="h-4 w-4" />
                        Marcar como completada
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

                  {/* Contenido de la lección */}
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
                    Completa esta evaluación para poner a prueba tus conocimientos sobre los elementos de cohesión y
                    marcadores textuales.
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
                                  <X className="h-5 w-5 text-red-500" />
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
                          {quizScore >= 60 ? "Siguiente lección" : "Completa el quiz primero"}
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Instructor info */}
            <div className="mt-8 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4">Sobre el instructor</h3>
              <div className="flex items-start gap-4">
                <Avatar className="size-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64&text=MG" alt="María González" />
                  <AvatarFallback className="text-lg">MG</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-lg">Dra. María González</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                    Doctora en Lingüística y especialista en análisis del discurso con 15 años de experiencia
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span>4.9 Valoración</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>12,450 Estudiantes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>8 Cursos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

