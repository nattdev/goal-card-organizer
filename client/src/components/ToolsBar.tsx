import { useGoals } from "../context/GoalsContext";

function ToolsBar() {

    const { setGoalOrganizer } = useGoals();

    const demoHandle = () => {
        const demoData = [
            {
                "id": 1,
                "name": "CURSOS DE TECNOLOGÍA",
                "columns": 2,
                "goalSet": [
                    {
                        "id": 1,
                        "content": "Curso de Maestría en JavaScript",
                        "isComplete": false,
                        "taskList": [
                            {
                                "id": 1,
                                "content": "Introducción a JavaScript",
                                "isComplete": true
                            },
                            {
                                "id": 2,
                                "content": "Entendiendo Variables",
                                "isComplete": true
                            },
                            {
                                "id": 3,
                                "content": "Funciones y Ámbitos",
                                "isComplete": false
                            },
                            {
                                "id": 4,
                                "content": "JavaScript Asíncrono",
                                "isComplete": false
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "content": "Python para Ciencia de Datos",
                        "isComplete": false,
                        "taskList": [
                            {
                                "id": 1,
                                "content": "Fundamentos de Python",
                                "isComplete": true
                            },
                            {
                                "id": 2,
                                "content": "Manipulación de Datos con Pandas",
                                "isComplete": false
                            },
                            {
                                "id": 3,
                                "content": "Visualización de Datos",
                                "isComplete": false
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "content": "Fundamentos de React.js",
                        "isComplete": true,
                        "taskList": [
                            {
                                "id": 1,
                                "content": "Introducción a JSX",
                                "isComplete": true
                            },
                            {
                                "id": 2,
                                "content": "Ciclo de Vida de Componentes",
                                "isComplete": true
                            },
                            {
                                "id": 3,
                                "content": "Estado y Props",
                                "isComplete": true
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "content": "Computación en la Nube con AWS",
                        "isComplete": false,
                        "taskList": [
                            {
                                "id": 1,
                                "content": "Introducción a Servicios de AWS",
                                "isComplete": false
                            },
                            {
                                "id": 2,
                                "content": "Despliegue de Aplicaciones",
                                "isComplete": false
                            },
                            {
                                "id": 3,
                                "content": "Seguridad en AWS",
                                "isComplete": false
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "content": "DevOps con Docker",
                        "isComplete": false,
                        "taskList": [
                            {
                                "id": 1,
                                "content": "Conceptos de Contenerización",
                                "isComplete": false
                            },
                            {
                                "id": 2,
                                "content": "Creación de Imágenes Docker",
                                "isComplete": false
                            },
                            {
                                "id": 3,
                                "content": "Gestión de Contenedores",
                                "isComplete": false
                            }
                        ]
                    }
                ],
                "isMinimize": false,
                "isVisible": true
            },
            {
                "id": 2,
                "name": "AUTOESTUDIO",
                "columns": 3,
                "goalSet": [
                    {
                        "id": 1,
                        "content": "Lista de Lectura",
                        "isComplete": false,
                        "taskList": [
                            {
                                "id": 1,
                                "content": "Hábitos Atómicos",
                                "isComplete": true
                            },
                            {
                                "id": 2,
                                "content": "Código Limpio",
                                "isComplete": false
                            },
                            {
                                "id": 3,
                                "content": "El Programador Pragmático",
                                "isComplete": false
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "content": "Cursos en Línea",
                        "isComplete": false,
                        "taskList": [
                            {
                                "id": 1,
                                "content": "Coursera: IA para Todos",
                                "isComplete": true
                            },
                            {
                                "id": 2,
                                "content": "Udemy: Desarrollador Completo de Node.js",
                                "isComplete": false
                            }
                        ]
                    }
                ],
                "isMinimize": true,
                "isVisible": true
            },
            {
                "id": 3,
                "name": "SALUD Y ACONDICIONAMIENTO FÍSICO",
                "columns": 1,
                "goalSet": [
                    {
                        "id": 1,
                        "content": "Rutina de Ejercicio",
                        "isComplete": false,
                        "taskList": [
                            {
                                "id": 1,
                                "content": "Cardio - 30 minutos",
                                "isComplete": true
                            },
                            {
                                "id": 2,
                                "content": "Entrenamiento de Fuerza",
                                "isComplete": false
                            },
                            {
                                "id": 3,
                                "content": "Estiramientos y Flexibilidad",
                                "isComplete": false
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "content": "Planificación de Comidas",
                        "isComplete": false,
                        "taskList": [
                            {
                                "id": 1,
                                "content": "Planificar Comidas Semanales",
                                "isComplete": false
                            },
                            {
                                "id": 2,
                                "content": "Hacer la Lista de Compras",
                                "isComplete": false
                            }
                        ]
                    }
                ],
                "isMinimize": false,
                "isVisible": true
            },
            {
                "id": 4,
                "name": "PROYECTOS PERSONALES",
                "columns": 3,
                "goalSet": [
                    {
                        "id": 1,
                        "content": "Sitio Web de Blog",
                        "isComplete": true,
                        "taskList": [
                            {
                                "id": 1,
                                "content": "Configurar el hosting",
                                "isComplete": true
                            },
                            {
                                "id": 2,
                                "content": "Diseñar la estructura del blog",
                                "isComplete": true
                            },
                            {
                                "id": 3,
                                "content": "Crear publicaciones iniciales",
                                "isComplete": true
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "content": "Desarrollo de Aplicación Móvil",
                        "isComplete": false,
                        "taskList": [
                            {
                                "id": 1,
                                "content": "Investigar la idea de la app",
                                "isComplete": true
                            },
                            {
                                "id": 2,
                                "content": "Comenzar a construir la interfaz",
                                "isComplete": false
                            }
                        ]
                    }
                ],
                "isMinimize": true,
                "isVisible": true
            },
            {
                "id": 5,
                "name": "DESARROLLO PROFESIONAL",
                "columns": 2,
                "goalSet": [
                    {
                        "id": 1,
                        "content": "Actualizar Perfil de LinkedIn",
                        "isComplete": true,
                        "taskList": [
                            {
                                "id": 1,
                                "content": "Revisar titular",
                                "isComplete": true
                            },
                            {
                                "id": 2,
                                "content": "Actualizar experiencia laboral",
                                "isComplete": true
                            },
                            {
                                "id": 3,
                                "content": "Agregar nuevas habilidades",
                                "isComplete": true
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "content": "Sitio Web de Portafolio",
                        "isComplete": false,
                        "taskList": [
                            {
                                "id": 1,
                                "content": "Diseñar la estructura del portafolio",
                                "isComplete": true
                            },
                            {
                                "id": 2,
                                "content": "Agregar proyectos recientes",
                                "isComplete": false
                            }
                        ]
                    }
                ],
                "isMinimize": false,
                "isVisible": true
            }
        ]
        setGoalOrganizer(demoData);
    }

    const cleanHandle = () => {
        setGoalOrganizer([]);
    }

    return (
        <div className="flex flex-row sm:flex-row items-center gap-y-3 justify-center pt-6 pb-7">
            <div className="flex items-center">
                <button className="bg-slate-50 px-2 text-black p-1 rounded-md mx-1 border border-slate-300 dark:bg-slate-600 dark:border-slate-500
            dark:text-white" onClick={demoHandle}>Demo 📝</button>
            </div>
            <div className="flex items-center">
                <button className="bg-slate-50 px-2 text-black p-1 rounded-md mx-1 border border-slate-300 dark:bg-slate-600 dark:border-slate-500
            dark:text-white" onClick={cleanHandle}>Limpiar ✨</button>
            </div>
        </div>
    )
}

export default ToolsBar;