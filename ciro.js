let palabras = ["árbol", "agua", "casa", "perro", "gato", "mesa", "silla", "ventana", "cielo", "sol",
    "luna", "estrella", "noche", "día", "montaña", "playa", "río", "mar", "coche", "bicicleta",
    "tren", "avión", "barco", "jardín", "flor", "hoja", "nube", "viento", "lluvia", "trueno",
    "relámpago", "nieve", "hielo", "fuego", "tierra", "arena", "bosque", "campo", "ciudad", "pueblo",
    "escuela", "universidad", "libro", "cuaderno", "lápiz", "bolígrafo", "papel", "computadora", "teléfono", "reloj",
    "zapato", "calcetín", "camisa", "pantalón", "vestido", "sombrero", "bufanda", "guante", "abrigo", "chaqueta",
    "cinturón", "pared", "puerta", "espejo", "cocina", "baño", "dormitorio", "sala", "comedor", "sofá",
    "televisión", "radio", "música", "cine", "teatro", "libro", "revista", "periódico", "historia", "arte",
    "pintura", "escultura", "fotografía", "museo", "galería", "universo", "planeta", "estrella", "cometa", "asteroide",
    "constelación", "zoológico", "parque", "estadio", "gimnasio", "piscina", "mercado", "supermercado", "tienda", "restaurante",
    "cafetería", "hotel", "hospital", "clínica", "farmacia", "doctor", "enfermera", "paciente", "medicina", "cirugía",
    "operación", "dentista", "oculista", "veterinario", "arquitecto", "ingeniero", "abogado", "profesor", "maestro", "estudiante",
    "alumno", "pelota", "balón", "juguete", "muñeca", "juego", "deporte", "fútbol", "baloncesto", "tenis",
    "voleibol", "natación", "atletismo", "correr", "saltar", "cantar", "bailar", "tocar", "instrumento", "guitarra",
    "piano", "violín", "trompeta", "batería", "canción", "poema", "novela", "cuento", "relato", "escritor",
    "poeta", "pintor", "escultor", "director", "actor", "actriz", "cantante", "bailarín", "coreógrafo", "músico",
    "artista", "diseñador", "fotógrafo", "arquitectura", "dibujo", "ilustración", "cerámica", "moda", "costura", "tejido",
    "cineasta", "guionista", "productor", "editor", "animador", "programador", "desarrollador", "analista", "consultor", "contador",
    "economista", "finanzas", "mercadeo", "publicidad", "ventas", "cliente", "proveedor", "negocio", "empresa", "corporación",
    "industria", "fábrica", "producción", "calidad", "control", "ingeniería", "tecnología", "informática", "software", "hardware",
    "internet", "red", "servidor", "computadora", "sistema", "aplicación", "programa", "archivo", "base de datos", "seguridad",
    "privacidad", "criptografía", "código", "lenguaje", "proyecto", "equipo", "grupo", "reunión", "presentación", "plan",
    "estrategia", "objetivo", "meta", "resultado", "éxito", "fracaso", "problema", "solución", "desafío", "oportunidad",
    "cambio", "mejora", "innovación", "creatividad", "diseño", "planificación", "organización", "administración", "gestión", "liderazgo",
    "comunicación", "negociación", "persuasión", "influencia", "motivación", "inspiración", "aprendizaje", "educación", "formación", "capacitación",
    "desarrollo", "crecimiento", "progreso", "avance", "mejora", "optimización", "eficiencia", "productividad", "rendimiento", "calidad",
    "servicio", "atención", "satisfacción", "experiencia", "cliente", "usuario", "consumidor", "mercado", "competencia", "demanda",
    "oferta", "precio", "costo", "beneficio", "ganancia", "pérdida", "inversión", "financiamiento", "presupuesto", "gasto",
    "ingreso", "impuesto", "deuda", "crédito", "banco", "tarjeta", "cuenta", "préstamo", "hipoteca", "interés",
    "ahorro", "inversión", "riesgo", "seguro", "protección", "cobertura", "pago", "transacción", "transferencia", "compra",
    "venta", "contrato", "acuerdo", "negociación", "firma", "documento", "registro", "licencia", "permiso", "certificado",
    "legal", "norma", "regla", "ley", "regulación", "cumplimiento", "auditoría", "inspección", "control", "revisión",
    "evaluación", "análisis", "diagnóstico", "reporte", "informe", "documento", "formulario", "hoja", "planilla", "tabla",
    "gráfico", "diagrama", "mapa", "plano", "dibujo", "esquema", "borrador", "nota", "mensaje", "correo",
    "carta", "postal", "fax", "televisión", "radio", "prensa", "revista", "periódico", "noticia", "artículo",
    "editorial", "columna", "opinión", "crítica", "reseña", "entrevista", "reportaje", "documental", "programa", "serie",
    "película", "corto", "tráiler", "video", "animación", "dibujo", "ilustración", "foto", "imagen", "galería",
    "exposición", "muestra", "feria", "congreso", "simposio", "seminario", "taller", "curso", "clase", "lección",
    "tema", "materia", "asignatura", "examen", "prueba", "evaluación", "calificación", "nota", "resultado", "rendimiento",
    "promedio", "mérito", "honor", "distinción", "premio", "trofeo", "medalla", "certificado", "diploma", "título",
    "grado", "licenciatura", "maestría", "doctorado", "investigación", "estudio", "proyecto", "tesis", "disertación", "publicación",
    "artículo", "libro", "revista", "ensayo", "informe", "memoria", "reporte", "análisis", "comentario", "observación",
    "opinión", "crítica", "evaluación", "diagnóstico", "recomendación", "sugerencia", "consejo", "guía", "manual", "instrucción",
    "norma", "regla", "procedimiento", "protocolo", "método", "estrategia", "técnica", "herramienta", "recurso", "material",
    "equipo", "instrumento", "dispositivo", "aparato", "maquinaria", "sistema", "programa", "software", "aplicación", "plataforma",
    "red", "internet", "web", "sitio", "página", "blog", "foro", "chat", "mensaje", "correo",
    "electrónico", "texto", "llamada", "videollamada", "conferencia", "reunión", "presentación", "discurso", "charla", "ponencia",
    "taller", "seminario", "curso", "clase", "lección", "sesión", "módulo", "unidad", "tema", "contenido",
    "material", "recursos", "actividad", "ejercicio", "tarea", "práctica", "proyecto", "trabajo", "ensayo", "informe",
    "análisis", "estudio", "investigación", "experimento", "prueba", "evaluación", "diagnóstico", "reporte", "informe", "documento",
    "registro", "base", "datos", "archivo", "expediente", "carpeta", "hoja", "tabla", "gráfico", "diagrama",
    "esquema", "dibujo", "plano", "mapa", "croquis", "boceto", "bosquejo", "modelo", "maqueta", "prototipo",
    "simulación", "animación", "video", "imagen", "foto", "ilustración", "dibujo", "pintura", "cuadro", "obra",
    "arte", "escultura", "instalación", "performance", "intervención", "proyecto", "obra", "pieza", "serie", "colección",
    "muestra", "exposición", "galería", "museo", "centro", "cultural", "biblioteca", "archivo", "documental", "histórico",
    "patrimonio", "cultura", "tradición", "costumbre", "ritual", "ceremonia", "fiesta", "celebración", "evento", "acto",
    "concierto", "espectáculo", "obra", "teatro", "danza", "música", "ópera", "ballet", "festival", "competencia",
    "concurso", "premio", "certamen", "gala", "recepción", "cena", "banquete", "comida", "desayuno", "almuerzo",
    "cena", "meriendas", "bebida", "comida", "plato", "receta", "cocina", "restaurante", "bar", "café",
    "cafetería", "pastelería", "panadería", "heladería", "pizzería", "bodega", "tienda", "mercado", "supermercado", "almacén",
    "ferretería", "farmacia", "librería", "papelería", "floristería", "boutique", "tienda", "ropa", "zapatería", "joyería",
    "relojería", "perfumería", "cosméticos", "electrónica", "muebles", "decoración", "hogar", "juguetes", "deportes", "mascotas",
    "animales", "plantas", "jardinería", "feria", "mercado", "venta", "oferta", "compra", "negocio", "comercio",
    "empresa", "industria", "producción", "manufactura", "fabricación", "procesamiento", "distribución", "logística", "transporte", "envío",
    "entrega", "recepción", "almacenamiento", "inventario", "gestión", "administración", "planificación", "organización", "dirección", "control",
    "coordinación", "supervisión", "evaluación", "auditoría", "análisis", "diagnóstico", "estrategia", "política", "regulación", "norma",
    "ley", "derecho", "jurisdicción", "tribunal", "juzgado", "corte", "abogado", "juez", "fiscal", "defensor",
    "acusado", "demandado", "testigo", "perito", "experto", "asesor", "consultor", "consejero", "mediador", "arbitro",
    "negociador", "diplomático", "embajador", "consul", "ministro", "presidente", "gobernador", "alcalde", "diputado", "senador",
    "congresista", "legislador", "funcionario", "empleado", "trabajador", "operador", "técnico", "mecánico", "electricista", "plomero",
    "carpintero", "albañil", "pintor", "decorador", "arquitecto", "ingeniero", "diseñador", "proyectista", "constructor", "contratista",
    "empresario", "inversionista", "accionista", "socio", "director", "gerente", "administrador", "supervisor", "coordinador", "asistente",
    "secretario", "recepcionista", "telefonista", "mensajero", "repartidor", "conductor", "chofer", "piloto", "marinero", "capitán",
    "oficial", "soldado", "guardia", "vigilante", "policía", "bombero", "paramédico", "rescatista", "socorrista", "enfermero",
    "médico", "doctor", "cirujano", "especialista", "dentista", "oculista", "pediatra", "psicólogo", "psiquiatra", "terapeuta",
    "nutricionista", "fisioterapeuta", "masajista", "quiropráctico", "farmacéutico", "bioquímico", "biólogo", "químico", "físico", "matemático",
    "estadístico", "informático", "programador", "desarrollador", "ingeniero", "analista", "consultor", "asesor", "investigador", "científico",
    "profesor", "maestro", "educador", "instructor", "formador", "capacitador", "entrenador", "coach", "tutor", "mentor",
    "orientador", "consejero", "psicopedagogo", "trabajador", "social", "asistente", "domiciliario", "cuidador", "acompañante", "niñera",
    "ama", "de", "llaves", "limpiador", "jardinero", "portero", "conserje", "seguridad", "vigilante", "controlador"];
  
  let num;
  let palabra;
  let acum;
  let mySelect;
  let canti = 0;
  let i;
  function setup() {
    createCanvas(800, 600);
    num = random(0, palabras.length);
    num = floor(num)
    palabra = palabras[num]
    let button = createButton('probar');
    button.position(660, 100);
    mySelect = createSelect("Letras");
    mySelect.position(670, 50);
    mySelect.option('a');
    mySelect.option('b');
    mySelect.option('c');
    mySelect.option('d');
    mySelect.option('e');
    mySelect.option('f');
    mySelect.option('g');
    mySelect.option('h');
    mySelect.option('i');
    mySelect.option('j');
    mySelect.option('k');
    mySelect.option('l');
    mySelect.option('m');
    mySelect.option('n');
    mySelect.option('o');
    mySelect.option('p');
    mySelect.option('q');
    mySelect.option('r');
    mySelect.option('s');
    mySelect.option('t');
    mySelect.option('u');
    mySelect.option('v');
    mySelect.option('w');
    mySelect.option('x');
    mySelect.option('y');
    mySelect.option('z');
    button.mousePressed(analizar);
    background(0);
    for (i = 0; i <= palabra.length - 1; i++) {
      celdas(i)
    }
    console.log(palabra, num, palabra.length, mySelect.value());
  }
  function draw() {
    fill(255)
    text(`Intentos = ${canti}`)
    stroke(255)
    strokeWeight(5);
    line(0, 460, 800, 460);
    stroke(255);
    strokeWeight(5);
    line(600, 0, 600, 460);
    drawGallows();
    drawHangman(canti);
    console.log(canti, mySelect.value())
  }
  function celdas(i) {
    fill(255)
    square(13 + 66 * i, 500, 40, 10);
    textSize(35);
    fill(0);
    text("?", 24 + 66 * i, 532);
  }
  
  function analizar() {
    let estaLaLetra = false;
    for (let z = 0; z <= palabra.length; z++) {
      if (palabra[z] === mySelect.value()) {
        estaLaLetra = true
        colocarLetra(z)
      }
    }
  
    if (estaLaLetra == false) {
      canti++;
      mySelect.disable(mySelect.value());
    }
  }
  function colocarLetra(z) {
    fill(255)
    square(13 + 66 * z, 500, 40, 10);
    textSize(35);
    fill(0);
    text(mySelect.value(), 24 + 66 * z, 532);
  }
  
  
  function drawGallows() {
    // Base de la horca
    strokeWeight(4);
    line(100, 300, 250, 300); // Base
    line(175, 300, 175, 100); // Poste vertical
    line(175, 100, 275, 100); // Poste horizontal
    line(275, 100, 275, 150); // Cuerda
  }
  function drawHangman(canti) {
    strokeWeight(2);
    // Dibujar el hombre de palos en función del valor de canti
    if (canti > 0) {
      ellipse(275, 170, 40, 40); // Cabeza
    }
    if (canti > 1) {
      line(275, 190, 275, 250); // Cuerpo
    }
    if (canti > 2) {
      line(275, 210, 250, 230); // Brazo izquierdo
    }
    if (canti > 3) {
      line(275, 210, 300, 230); // Brazo derecho
    }
    if (canti > 4) {
      line(275, 250, 250, 280); // Pierna izquierda
    }
    if (canti > 5) {
      line(275, 250, 300, 280); // Pierna derecha
    }
  }