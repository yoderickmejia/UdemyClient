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

// Datos del curso 2: Referencias y Relaciones en el Texto
const courseData = {
  id: 2,
  title: "Referencias y Relaciones en el Texto",
  instructor: "Dr. Carlos Rodríguez",
  description:
    "Estudio de los deícticos, relaciones fóricas y citas bibliográficas para mejorar la coherencia textual.",
  level: "Intermedio",
  totalLessons: 3,
  completedLessons: 0,
  progress: 0,
  duration: "3 horas",
  lastAccessed: "",
  rating: 4.8,
  reviews: 720,
  image: "/placeholder.svg?height=400&width=800&text=Referencias+Textuales",
  lessons: [
    {
      id: 201,
      title: "Deícticos y sus tipos",
      duration: "45:00",
      isCompleted: false,
      type: "video",
      content: `
        <h2>Deícticos y sus tipos</h2>
        <p>Los deícticos son elementos lingüísticos que señalan o apuntan a personas, objetos, lugares o momentos, y cuyo significado depende completamente del contexto en que se utilizan. La deixis es un fenómeno pragmático fundamental para la cohesión textual.</p>
        
        <h3>Principales tipos de deícticos:</h3>
        
        <h4>1. Deícticos personales</h4>
        <p>Hacen referencia a las personas que participan en el acto comunicativo:</p>
        <ul>
          <li><strong>Primera persona:</strong> Señalan al emisor del mensaje. Ejemplos: yo, me, mi, nosotros, nuestro.</li>
          <li><strong>Segunda persona:</strong> Señalan al receptor del mensaje. Ejemplos: tú, te, ti, vosotros, ustedes.</li>
          <li><strong>Tercera persona:</strong> Señalan a personas que no son ni el emisor ni el receptor. Ejemplos: él, ella, ellos, les, su.</li>
        </ul>
        
        <h4>2. Deícticos espaciales</h4>
        <p>Indican la ubicación de personas u objetos en relación con el emisor:</p>
        <ul>
          <li><strong>Proximidad al emisor:</strong> aquí, este, esta, estos, estas, acá.</li>
          <li><strong>Proximidad al receptor:</strong> ahí, ese, esa, esos, esas.</li>
          <li><strong>Lejanía de ambos:</strong> allí, allá, aquel, aquella, aquellos, aquellas.</li>
        </ul>
        
        <h4>3. Deícticos temporales</h4>
        <p>Sitúan los acontecimientos en relación con el momento en que se produce el enunciado:</p>
        <ul>
          <li><strong>Presente:</strong> ahora, hoy, este mes, este año, actualmente.</li>
          <li><strong>Pasado:</strong> ayer, anteayer, la semana pasada, el mes pasado, entonces.</li>
          <li><strong>Futuro:</strong> mañana, pasado mañana, la próxima semana, el mes que viene.</li>
        </ul>
        
        <h4>4. Deícticos sociales</h4>
        <p>Expresan la relación social entre los participantes de la comunicación:</p>
        <ul>
          <li>Formas de tratamiento: tú/usted, vosotros/ustedes.</li>
          <li>Títulos: señor, doctor, profesor, excelencia.</li>
        </ul>
        
        <h4>5. Deícticos discursivos o textuales</h4>
        <p>Señalan elementos dentro del propio texto:</p>
        <ul>
          <li>Anafóricos: se refieren a elementos mencionados anteriormente.</li>
          <li>Catafóricos: se refieren a elementos que se mencionarán después.</li>
          <li>Ejemplos: como se ha dicho antes, más adelante veremos, en el siguiente párrafo.</li>
        </ul>
        
        <h3>Importancia de los deícticos en la cohesión textual</h3>
        <p>Los deícticos son fundamentales para:</p>
        <ul>
          <li>Evitar repeticiones innecesarias</li>
          <li>Establecer relaciones entre diferentes partes del texto</li>
          <li>Situar el discurso en un contexto específico</li>
          <li>Facilitar la comprensión del mensaje</li>
          <li>Economizar el lenguaje</li>
        </ul>
        
        <p>El uso adecuado de los deícticos contribuye significativamente a la cohesión y coherencia textual, permitiendo que el texto fluya de manera natural y sea fácilmente comprensible para el receptor.</p>
      `,
    },
    {
      id: 202,
      title: "Relaciones fóricas: Anáfora, catáfora y elipsis",
      duration: "50:00",
      isCompleted: false,
      type: "video",
      content: `
        <h2>Relaciones fóricas: Anáfora, catáfora y elipsis</h2>
        <p>Las relaciones fóricas son mecanismos de cohesión textual que establecen vínculos entre diferentes elementos del texto. Estas relaciones son fundamentales para evitar repeticiones y dar fluidez al discurso.</p>
        
        <h3>1. Anáfora</h3>
        <p>La anáfora es una relación fórica en la que un elemento del texto (pronombre, adverbio, etc.) remite a otro elemento mencionado previamente, llamado antecedente.</p>
        
        <h4>Tipos de anáfora:</h4>
        <ul>
          <li><strong>Anáfora pronominal:</strong> Utiliza pronombres para referirse al antecedente.
            <br>Ejemplo: "María llegó tarde a la reunión. <em>Ella</em> se disculpó con todos."</li>
          <li><strong>Anáfora léxica:</strong> Utiliza sinónimos, hiperónimos o expresiones equivalentes.
            <br>Ejemplo: "Compré un <em>perro</em> en la tienda de mascotas. El <em>animal</em> es muy juguetón."</li>
          <li><strong>Anáfora adverbial:</strong> Utiliza adverbios para referirse a lugares, tiempos o modos mencionados antes.
            <br>Ejemplo: "Fuimos a París el verano pasado. <em>Allí</em> conocimos a mucha gente."</li>
        </ul>
        
        <h3>2. Catáfora</h3>
        <p>La catáfora es una relación fórica en la que un elemento del texto anticipa o anuncia algo que aparecerá después en el discurso.</p>
        
        <h4>Ejemplos de catáfora:</h4>
        <ul>
          <li>"<em>Esto</em> es lo que quiero decirte: no vuelvas tarde."</li>
          <li>"<em>Lo</em> que voy a contarte es un secreto: nadie debe saberlo."</li>
          <li>"<em>Sus</em> palabras fueron claras: Juan no vendría a la fiesta."</li>
        </ul>
        
        <h3>3. Elipsis</h3>
        <p>La elipsis consiste en la omisión de elementos que se sobreentienden por el contexto. Es un recurso de economía lingüística que evita repeticiones innecesarias.</p>
        
        <h4>Tipos de elipsis:</h4>
        <ul>
          <li><strong>Elipsis nominal:</strong> Omisión de un sustantivo o sintagma nominal.
            <br>Ejemplo: "Juan compró un libro de historia y María [compró] uno de ciencia ficción."</li>
          <li><strong>Elipsis verbal:</strong> Omisión de un verbo o sintagma verbal.
            <br>Ejemplo: "Pedro estudia medicina y Ana [estudia] derecho."</li>
          <li><strong>Elipsis oracional:</strong> Omisión de una oración completa.
            <br>Ejemplo: "¿Vienes al cine? Sí [vengo al cine]."</li>
        </ul>
        
        <h3>Diferencias entre anáfora, catáfora y elipsis</h3>
        <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 8px; text-align: left;">Relación fórica</th>
            <th style="padding: 8px; text-align: left;">Dirección</th>
            <th style="padding: 8px; text-align: left;">Característica principal</th>
          </tr>
          <tr>
            <td style="padding: 8px;">Anáfora</td>
            <td style="padding: 8px;">Hacia atrás (retrospectiva)</td>
            <td style="padding: 8px;">Remite a algo ya mencionado</td>
          </tr>
          <tr>
            <td style="padding: 8px;">Catáfora</td>
            <td style="padding: 8px;">Hacia adelante (prospectiva)</td>
            <td style="padding: 8px;">Anticipa algo que se mencionará después</td>
          </tr>
          <tr>
            <td style="padding: 8px;">Elipsis</td>
            <td style="padding: 8px;">Variable</td>
            <td style="padding: 8px;">Omite elementos que se sobreentienden</td>
          </tr>
        </table>
        
        <h3>Importancia de las relaciones fóricas</h3>
        <p>Las relaciones fóricas son esenciales para:</p>
        <ul>
          <li>Dar cohesión al texto</li>
          <li>Evitar repeticiones innecesarias</li>
          <li>Economizar el lenguaje</li>
          <li>Facilitar la lectura y comprensión</li>
          <li>Establecer conexiones entre diferentes partes del texto</li>
        </ul>
        
        <p>El dominio de estos mecanismos es fundamental para la producción de textos coherentes y cohesionados, tanto en el ámbito académico como profesional.</p>
      `,
    },
    {
      id: 203,
      title: "Evaluación: Referencias y relaciones en el texto",
      duration: "30:00",
      isCompleted: false,
      type: "quiz",
      questions: [
        {
          id: 1,
          question: "¿Qué son los deícticos?",
          options: [
            "Elementos lingüísticos cuyo significado depende del contexto en que se utilizan",
            "Palabras que siempre tienen el mismo significado independientemente del contexto",
            "Signos de puntuación que estructuran el texto",
            "Recursos estilísticos para embellecer el texto",
          ],
          correctAnswer: 0,
        },
        {
          id: 2,
          question: "En la frase 'Ella llegó tarde a la reunión', el pronombre 'ella' es un ejemplo de:",
          options: ["Catáfora", "Anáfora", "Elipsis", "Deíctico temporal"],
          correctAnswer: 1,
        },
        {
          id: 3,
          question: "¿Cuál de los siguientes es un ejemplo de deíctico espacial?",
          options: ["Yo", "Mañana", "Aquí", "Nosotros"],
          correctAnswer: 2,
        },
        {
          id: 4,
          question: "La catáfora se caracteriza por:",
          options: [
            "Remitir a un elemento mencionado anteriormente en el texto",
            "Anticipar un elemento que aparecerá después en el texto",
            "Omitir elementos que se sobreentienden por el contexto",
            "Repetir palabras para enfatizar una idea",
          ],
          correctAnswer: 1,
        },
        {
          id: 5,
          question: "En la frase 'Juan compró un libro y María una revista', ¿qué mecanismo de cohesión se utiliza?",
          options: ["Anáfora", "Catáfora", "Elipsis", "Deíctico personal"],
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
              {isSidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
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
                        <ChevronRightIcon className="h-4 w-4" />
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
                    Completa esta evaluación para poner a prueba tus conocimientos sobre referencias y relaciones en el
                    texto.
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
                          <ChevronRightIcon className="h-4 w-4" />
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
                  <AvatarImage src="/placeholder.svg?height=64&width=64&text=CR" alt="Carlos Rodríguez" />
                  <AvatarFallback className="text-lg">CR</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-lg">Dr. Carlos Rodríguez</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                    Doctor en Lingüística Aplicada y especialista en análisis del discurso con 12 años de experiencia
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span>4.8 Valoración</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>10,820 Estudiantes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>7 Cursos</span>
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

// Componente ChevronRight que faltaba
function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

