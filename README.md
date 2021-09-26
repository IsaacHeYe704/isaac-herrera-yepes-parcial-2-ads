# isaac-herrera-yepes-parcial-2-ads
## Explicación general del programa desarrollado:
la finalidad de este programa es simular un juego de rol, en estos juegos se suelen tener roles como lo pueden ser:
-mago
-caballero
-arquero
a su vez en este tipo de juegos se suele entrenar para consaeguir dinero o mejorar tu pesonajes en sistemas como tiendas. 
### estas tres caracteristicas son las que vamos a emular en el juego: 
1. rol( estadisticas diferentes para cada uno)
2.  un sistema de entrenamiento simple para conseguir dinero con el cual mejorar el personaje
3. una tienda donde se pueda a;adir funcionalidades y estadisticas al personaje
### detalles tecnicos:
para desarrollar esto se uso como lenguaje: TYPESCRIPT en el ide VISUALSTUDIOCODE. 
### como ejecutar?: 
recomiendo correrlo desde la consola de windos, pero sirve perfectamente desde la terminal de vs code.
para ejecutar el programa deben seguir los siguientes dos pasos:
1. entrar en la carpeta src
2. descargar las librerias usadas---> correr el comando dentro de la carpeta src: npm i 
3. iniciar el programa---> correr el comando dentro de la carpeta src: npm run dev

## PATRONES DE DISEÑO USADOS: 
### 1) PATRON FACTORY:
en esta cituacion queria poder implementar distintos personajes pero necesitaba poderlos manejar como uno solo, el jugador. esto es porque si manejaba cada rol de jugador de forma distinta se complica el codigo del cliente que en este caso se implementa en el index.ts.

decidi implementar este patron porque la persona que juega y corre el programa es quien decide que tipo de personaje quiere asi que no se sabe exactamente con que tipo de objeto debe funcionar mi codigo, factory me ayuda simplificar esto porque solo tengo jugador la interfaz, que puede ser mago, caballero o arquero quien lo implemente. 

#### partes del codigo donde se usa FACTORY:
1) archivo:index.ts
linea: 47 ----> aca se crea la factory, cuyo proposito es crear el jugador.
linea: 48 ----> aca se usa la factory para crear el tipo de jugador que el usuario quiere

2) archivo: interfaces/jugador.ts
este archivo define como debe ser un jugador, es una interfaz

3) archivo: jugadorFactory/jugadorAbstractFactory.ts
este archivo define como debe ser una factory para crear a los jugadores, por si mas adelante se quieren crear otras facotries concretas con diferentes normas.

4) archivo: jugadorFactory/JugadorConcreteFactory.ts
en este archivo ya se hace la implementacion concreta de la factory que crea los jugadores (extiende de JugadorAbstractFactory)

5) archivos: concreteJugfador/Arquero.ts , concreteJugfador/Caballero.ts ,  concreteJugfador/Mago.ts
estos archivos definen los roles del jugador concretamente, cada uno hace sus propias implementaciones de cuanta vida tiene, cada cuanto va a entrenar con exito, con cuantos talentos inicia, etc.

### 1) PATRON DECORATOR:
en mi propuesta para el ejercicio el personaje mejora sus caracteristicas mediante una tienda donde puede comprar: 
1)Armadura: te da un 20% de probabilidad de no recibir daño(60 talentos).
2)Casco:reduces en la mitad el daño que recibes (30 talentos).
3)10 de Vida maxima. osea aguanta mas(10 talentos)

estas implementaciones pueden recordar a meter funcionalidades encima de las que ya se tienen, es por esto que decidi usar el patron decorator ya que este me deja "decorar" al jugador metiendole capas de logica a sus metodos como recibirDaño para que reciba menos daño.

#### partes del codigo donde se usa DECORATOR:
1) archivo: tienda.ts
lineas: 48,62
en estas lineas retorno un nuevo jugador pero decorado, con los decorators armadura o casco.

2) archivo: interfaces/jugador.ts
en este archivo defino como es un jugador sin importar su implementacion concreta. 

3) archivo: decorators/JugadorDecorator.ts
este archivo es una clase abstracta de la cual extienden cada decorador. 

4) archivo: decorators/ArmaduraDecorator.ts
este archivo define como es el decorador de la armadura para un jugador,l lo que hace es mostrar que el jugador tiene una armadura en consola cuando se llame a jugador.mostrarStats() y  a;ade la posibilidad de un 20% de esquivar el da;o cuando se llame a jugador.recibirDa;o().

5) archivo: decorators/CascoDecorator.ts
este archivo define como es el decorador de un casco para un jugador,lo que hace es mostrar que el jugador tiene un casco en consola cuando se llame a jugador.mostrarStats() y  reduce a la mitad el da;o cuando se llame a jugador.recibirDa;o().


gracias por leer todo es te documento  :)
