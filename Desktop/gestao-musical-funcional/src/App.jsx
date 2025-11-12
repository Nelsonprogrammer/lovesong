import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { 
  FaMusic, 
  FaSearch, 
  FaHome, 
  FaInfoCircle, 
  FaEnvelope,
  FaHeadphones,
  FaBars,
  FaTimes,
  FaCompactDisc,
  FaCalendarAlt,
  FaClock,
  FaMicrophone
} from 'react-icons/fa'
import { GiGuitar } from 'react-icons/gi'
import './App.css'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-full">
      <div className="nav-container-full">
        <Link className="nav-brand" to="/" onClick={() => setIsMenuOpen(false)}>
          <FaMusic className="brand-icon" />
          Gestão Musical
        </Link>
        
        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <div className={`nav-menu-full ${isMenuOpen ? 'active' : ''}`}>
          <Link className="nav-link" to="/" onClick={() => setIsMenuOpen(false)}>
            <FaHome className="nav-icon" /> Home
          </Link>
          <Link className="nav-link" to="/musicas" onClick={() => setIsMenuOpen(false)}>
            <FaHeadphones className="nav-icon" /> Músicas
          </Link>
          <Link className="nav-link" to="/about" onClick={() => setIsMenuOpen(false)}>
            <FaInfoCircle className="nav-icon" /> Sobre
          </Link>
          <Link className="nav-link" to="/contact" onClick={() => setIsMenuOpen(false)}>
            <FaEnvelope className="nav-icon" /> Contato
          </Link>
        </div>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <div className="page-container home-page">
      <div className="content-full">
        <div className="hero-section-full">
          <div className="hero-content-full">
            <FaMusic className="hero-icon" />
            <h1>Gestão Musical</h1>
            <p className="hero-subtitle">Sua Jornada Musical Começa Aqui</p>
            <p className="hero-description">
              Descubra, Explore e Viva a Música como Nunca Antes
            </p>
            <Link to="/musicas" className="cta-button">
              Explorar Catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Musicas() {
  const [musicaSelecionada, setMusicaSelecionada] = useState(null);
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [musicas] = useState([
    {
      id: 1,
      titulo: "Bohemian Rhapsody",
      autor: "Queen",
      ano: 1975,
      genero: "Rock Progressivo",
      duracao: "5:55",
      album: "A Night at the Opera",
      imagem: "https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png",
      descricao: `"Bohemian Rhapsody" é uma das músicas mais icônicas da história do rock, composta por Freddie Mercury para a banda Queen. Lançada em 1975 como parte do álbum "A Night at the Opera", a música quebra convenções ao misturar vários gêneros musicais em uma única faixa. A estrutura incomum divide-se em seis seções distintas: introdução acapella, balada, solo de guitarra, ópera, hard rock e conclusão. A seção operística foi particularmente inovadora, envolvendo overdubs massivos onde Mercury, May e Taylor cantaram suas partes repetidamente, criando um coro virtual. A letra é enigmática e aberta a interpretações, com Mercury sempre se recusando a explicar seu significado. Teorias sugerem que trata de confissão pessoal, enfrentamento da mortalidade ou até referências a "Fausto". O videoclipe inovador, considerado um dos primeiros da era moderna, ajudou a popularizar o formato. A música enfrentou ceticismo inicial da gravadora, mas tornou-se um sucesso monumental, liderando as paradas por nove semanas no Reino Unido e se tornando um marco cultural que transcende gerações.`,
      letra: `Is this the real life?
Is this just fantasy?
Caught in a landslide
No escape from reality

Open your eyes
Look up to the skies and see
I'm just a poor boy, I need no sympathy
Because I'm easy come, easy go
Little high, little low
Any way the wind blows
Doesn't really matter to me, to me

Mama, just killed a man
Put a gun against his head
Pulled my trigger, now he's dead
Mama, life had just begun
But now I've gone and thrown it all away

Mama, ooh
Didn't mean to make you cry
If I'm not back again this time tomorrow
Carry on, carry on as if nothing really matters

Too late, my time has come
Sends shivers down my spine
Body's aching all the time
Goodbye, everybody, I've got to go
Gotta leave you all behind and face the truth

Mama, ooh (any way the wind blows)
I don't wanna die
I sometimes wish I'd never been born at all

I see a little silhouetto of a man
Scaramouche, Scaramouche, will you do the Fandango?
Thunderbolt and lightning very very frightening me
(Galileo) Galileo
(Galileo) Galileo
Galileo Figaro magnifico

I'm just a poor boy, nobody loves me
He's just a poor boy from a poor family
Spare him his life from this monstrosity

Easy come, easy go, will you let me go?
Bismillah! No, we will not let you go
(Let him go!) Bismillah! We will not let you go
(Let him go!) Bismillah! We will not let you go
(Let me go) Will not let you go
(Let me go) Will not let you go
(Never, never, never, never let me go) Ah
No, no, no, no, no, no, no
(Oh, mamma mia, mamma mia) Mamma mia, let me go
Beelzebub has a devil put aside for me, for me, for me!

So you think you can stone me and spit in my eye?
So you think you can love me and leave me to die?
Oh, baby, can't do this to me, baby
Just gotta get out, just gotta get right outta here!

Nothing really matters
Anyone can see
Nothing really matters
Nothing really matters to me

Any way the wind blows`
    },
    {
      id: 2,
      titulo: "Imagine",
      autor: "John Lennon",
      ano: 1971,
      genero: "Rock Soft",
      duracao: "3:04",
      album: "Imagine",
      imagem: "https://upload.wikimedia.org/wikipedia/en/6/69/ImagineCover.jpg",
      descricao: `"Imagine" é uma das canções mais emblemáticas de John Lennon, lançada em 1971 como faixa-título do álbum "Imagine". Composta durante um período de intensa criatividade, a música apresenta uma visão utópica de um mundo sem divisões religiosas, nacionais ou materiais. A simplicidade da melodia no piano contrasta com a profundidade da mensagem pacifista. Lennon descreveu a canção como "anti-religiosa, anti-nacionalista, anti-convencional e anti-capitalista", mas admitiu que era essencialmente uma mensagem de esperança. A letra convida os ouvintes a imaginar um mundo sem posses, fome ou guerras, onde toda a humanidade vive em paz. A gravação ocorreu no estúdio caseiro de Lennon, com produção de Phil Spector, mantendo um ar intimista. A música tornou-se hino do movimento pacifista e foi elogiada por sua capacidade de transmitir uma mensagem profunda de forma acessível. Após o assassinato de Lennon em 1980, "Imagine" ganhou status de hino global pela paz, sendo tocada em cerimônias memoriais e eventos humanitários worldwide. Em 2017, foi re-lançada em uma versão remasterizada para arrecadar fundos para vítimas de desastres naturais.`,
      letra: `Imagine there's no heaven
It's easy if you try
No hell below us
Above us, only sky
Imagine all the people
Living for today

Imagine there's no countries
It isn't hard to do
Nothing to kill or die for
And no religion, too
Imagine all the people
Living life in peace

You may say I'm a dreamer
But I'm not the only one
I hope someday you'll join us
And the world will be as one

Imagine no possessions
I wonder if you can
No need for greed or hunger
A brotherhood of man
Imagine all the people
Sharing all the world

You may say I'm a dreamer
But I'm not the only one
I hope someday you'll join us
And the world will live as one`
    },
    {
      id: 3,
      titulo: "Hotel California",
      autor: "Eagles",
      ano: 1976,
      genero: "Rock",
      duracao: "6:30",
      album: "Hotel California",
      imagem: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg",
      descricao: `"Hotel California" é a faixa-título do quinto álbum dos Eagles, lançada em 1976. A música tornou-se um dos maiores sucessos da banda e um ícone do rock americano. Composta por Don Felder, Don Henley e Glenn Frey, a canção é conhecida por sua atmosfera misteriosa e letra enigmática que gerou diversas interpretações ao longo dos anos. A narrativa segue um viajante cansado que encontra um hotel luxuoso na estrada deserta da California, apenas para descobrir que é uma armadilha da qual não pode escapar. A interpretação mais aceita sugere que a música critica o excesso e o vazio do estilo de vida californiano, particularmente da indústria musical de Los Angeles durante os anos 70. O solo de guitarra dupla no final, executado por Felder e Joe Walsh, é considerado um dos melhores da história do rock. A gravação utilizou técnicas avançadas para a época, incluindo múltiplas camadas de guitarra e uma produção meticulosa. A capa do álbum mostra o Hotel Beverly Hills ao entardecer, embora a banda sempre tenha mantido que o "Hotel California" é uma metáfora, não um lugar real. A música ganhou o Grammy de Gravação do Ano em 1977 e continua sendo uma das mais executadas nas rádios worldwide.`,
      letra: `On a dark desert highway, cool wind in my hair
Warm smell of colitas, rising up through the air
Up ahead in the distance, I saw a shimmering light
My head grew heavy and my sight grew dim
I had to stop for the night

There she stood in the doorway
I heard the mission bell
And I was thinking to myself
"This could be Heaven or this could be Hell"
Then she lit up a candle and she showed me the way
There were voices down the corridor
I thought I heard them say

Welcome to the Hotel California
Such a lovely place (such a lovely place)
Such a lovely face
Plenty of room at the Hotel California
Any time of year (any time of year)
You can find it here

Her mind is Tiffany-twisted, she got the Mercedes bends
She got a lot of pretty, pretty boys she calls friends
How they dance in the courtyard, sweet summer sweat
Some dance to remember, some dance to forget

So I called up the Captain
"Please bring me my wine"
He said, "We haven't had that spirit here since nineteen sixty nine"
And still those voices are calling from far away
Wake you up in the middle of the night
Just to hear them say

Welcome to the Hotel California
Such a lovely place (such a lovely place)
Such a lovely face
They're livin' it up at the Hotel California
What a nice surprise (what a nice surprise)
Bring your alibis

Mirrors on the ceiling
The pink champagne on ice
And she said "We are all just prisoners here, of our own device"
And in the master's chambers
They gathered for the feast
They stab it with their steely knives
But they just can't kill the beast

Last thing I remember, I was
Running for the door
I had to find the passage back to the place I was before
"Relax, " said the night man
"We are programmed to receive
You can check-out any time you like
But you can never leave!"`
    },
    {
      id: 4,
      titulo: "Billie Jean",
      autor: "Michael Jackson",
      ano: 1982,
      genero: "Pop",
      duracao: "4:54",
      album: "Thriller",
      imagem: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Billie_Jean.png",
      descricao: `"Billie Jean" é um dos singles mais famosos de Michael Jackson, lançado em 1982 como parte do álbum "Thriller", o mais vendido da história. A música foi escrita e composta por Jackson, inspirada em experiências reais com groupies que alegavam ser mães de seus filhos. A batida distintiva e o baixo marcante criaram um som revolucionário para a época. A produção, a cargo de Quincy Jones, quase não incluiu a música no álbum por considerá-la muito fraca, mas Jackson insistiu em sua inclusão. O videoclipe, dirigido por Steve Barron, foi um marco na história da MTV, sendo um dos primeiros vídeos de um artista afro-americano a ser exaustivamente transmitido pela emissora. A coreografia, incluindo o moonwalk que Jackson popularizou durante sua performance no Motown 25, tornou-se icônica. A letra conta a história de uma mulher que alega que o narrador é o pai de seu filho, enquanto ele nega veementemente a acusação. A gravação utilizou tecnologias inovadoras, incluindo o sintetizador Synclavier e a bateria Linn LM-1. "Billie Jean" liderou as paradas nos EUA por sete semanas e ganhou dois Grammys, consolidando Jackson como o "Rei do Pop" e revolucionando a indústria musical.`,
      letra: `She was more like a beauty queen from a movie scene
I said don't mind, but what do you mean, I am the one
Who will dance on the floor in the round?
She said I am the one, who will dance on the floor in the round

She told me her name was Billie Jean, as she caused a scene
Then every head turned with eyes that dreamed of being the one
Who will dance on the floor in the round

People always told me be careful of what you do
And don't go around breaking young girls' hearts
And mother always told me be careful of who you love
And be careful of what you do 'cause the lie becomes the truth

Billie Jean is not my lover
She's just a girl who claims that I am the one
But the kid is not my son
She says I am the one, but the kid is not my son

For forty days and for forty nights
The law was on her side
But who can stand when she's in demand
Her schemes and plans
'Cause we danced on the floor in the round
So take my strong advice, just remember to always think twice
(Do think twice)

She told my baby we'd danced 'til three, then she looked at me
Then showed a photo my baby cried his eyes were like mine (oh, no)
'Cause we danced on the floor in the round, baby

People always told me be careful of what you do
And don't go around breaking young girls' hearts
She came and stood right by me
Just the smell of sweet perfume
This happened much too soon
She called me to her room

Billie Jean is not my lover
She's just a girl who claims that I am the one
But the kid is not my son
She says I am the one, but the kid is not my son

She says I am the one, but the kid is not my son

Billie Jean is not my lover
She's just a girl who claims that I am the one
But the kid is not my son
She says I am the one, but the kid is not my son

She says I am the one
You know what you did, (she says he is my son) breaking my heart babe
She says I am the one

Billie Jean is not my lover
Billie Jean is not my lover
Billie Jean is not my lover
Billie Jean is not my lover
(Billie Jean is not my lover)
She's just a girl who claims that I am the one
But the kid is not my son

She says I am the one
You know what you did

She says he is my son
Breaking my heart babe
She says I am the one

Billie Jean is not my lover
She's just a girl who claims that I am the one
But the kid is not my son

She says I am the one
You know what you did

She says he is my son
Breaking my heart babe
She says I am the one`
    },
    {
      id: 5,
      titulo: "Smells Like Teen Spirit",
      autor: "Nirvana",
      ano: 1991,
      genero: "Grunge",
      duracao: "5:01",
      album: "Nevermind",
      imagem: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
      descricao: `"Smells Like Teen Spirit" é o single de estreia da banda Nirvana, lançado em 1991 como parte do álbum "Nevermind". A música tornou-se um hino da Geração X e o marco definitivo do movimento grunge, catapultando o rock alternativo para o mainstream. Composta por Kurt Cobain, a música combina uma introdução suave com versos quietos e refrões explosivos, criando uma dinâmica que se tornaria característica do grunge. O título foi inspirado por uma frase que a amiga de Cobain, Kathleen Hanna, escreveu em sua parede: "Kurt smells like Teen Spirit", referindo-se a um desodorante da marca. A letra, típica do estilo de Cobain, é deliberadamente ambígua e fragmentada, misturando imagens de rebeldia adolescente com sentimentos de apatia e desilusão. O videoclipe, dirigido por Samuel Bayer, mostra uma performance da banda em um ginásio escolar com torcedores de basquete apáticos, tornando-se um ícone cultural da década de 1990. A música chegou ao topo das paradas worldwide e é creditada por encerrar a era do hair metal, inaugurando uma nova era do rock mais autêntico e raw. Apesar do sucesso massivo, Cobain expressou desconforto com a fama que a música trouxe, sentindo que a mensagem original havia sido deturpada pela comercialização.`,
      letra: `Load up on guns, bring your friends
It's fun to lose and to pretend
She's over-bored and self-assured
Oh no, I know a dirty word

Hello, hello, hello, how low
Hello, hello, hello, how low
Hello, hello, hello, how low
Hello, hello, hello

With the lights out, it's less dangerous
Here we are now, entertain us
I feel stupid and contagious
Here we are now, entertain us
A mulatto, an albino
A mosquito, my libido
Yeah, hey

I'm worse at what I do best
And for this gift I feel blessed
Our little group has always been
And always will until the end

Hello, hello, hello, how low
Hello, hello, hello, how low
Hello, hello, hello, how low
Hello, hello, hello

With the lights out, it's less dangerous
Here we are now, entertain us
I feel stupid and contagious
Here we are now, entertain us
A mulatto, an albino
A mosquito, my libido
Yeah, hey

And I forget just why I taste
Oh yeah, I guess it makes me smile
I found it hard, it's hard to find
Oh well, whatever, never mind

Hello, hello, hello, how low
Hello, hello, hello, how low
Hello, hello, hello, how low
Hello, hello, hello

With the lights out, it's less dangerous
Here we are now, entertain us
I feel stupid and contagious
Here we are now, entertain us
A mulatto, an albino
A mosquito, my libido

A denial, a denial
A denial, a denial
A denial, a denial
A denial, a denial
A denial`
    }
  ]);

  const musicasFiltradas = musicas.filter(musica =>
    musica.titulo.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
    musica.autor.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
    musica.album.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
    musica.genero.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  const abrirModal = (musica) => {
    setMusicaSelecionada(musica);
    document.body.style.overflow = 'hidden';
  };

  const fecharModal = () => {
    setMusicaSelecionada(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="page-container musicas-page">
      <div className="content-full">
        <div className="page-header-full">
          <FaHeadphones className="page-icon" />
          <h1>Catálogo Musical</h1>
          <p>Descubra as histórias por trás das músicas mais icônicas</p>
        </div>

        {/* BARRA DE PESQUISA */}
        <div className="search-section-full">
          <div className="search-container-full">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input-full"
              placeholder="Pesquisar músicas, artistas, álbuns..."
              value={termoPesquisa}
              onChange={(e) => setTermoPesquisa(e.target.value)}
            />
          </div>
        </div>

        <div className="music-grid-full">
          {musicasFiltradas.map((musica) => (
            <div className="music-card-full" key={musica.id}>
              <div className="music-image-container-full">
                <img src={musica.imagem} alt={musica.titulo} />
              </div>
              <div className="music-info-full">
                <h3>{musica.titulo}</h3>
                <h4>{musica.autor}</h4>
                <div className="music-details-full">
                  <span><FaCompactDisc /> <strong>Álbum:</strong> {musica.album}</span>
                  <span><FaCalendarAlt /> <strong>Ano:</strong> {musica.ano}</span>
                  <span><GiGuitar /> <strong>Gênero:</strong> {musica.genero}</span>
                  <span><FaClock /> <strong>Duração:</strong> {musica.duracao}</span>
                </div>
                <p className="music-description">
                  {musica.descricao.substring(0, 150)}...
                </p>
                <button 
                  className="view-button-full"
                  onClick={() => abrirModal(musica)}
                >
                  <FaMicrophone /> Ver Música Completa
                </button>
              </div>
            </div>
          ))}
        </div>

        {musicaSelecionada && (
          <div className="modal-overlay-full" onClick={fecharModal}>
            <div className="modal-content-full" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header-full">
                <div className="modal-title-section">
                  <h2>{musicaSelecionada.titulo}</h2>
                  <h3>{musicaSelecionada.autor}</h3>
                </div>
                <button className="close-button-full" onClick={fecharModal}>
                  <FaTimes />
                </button>
              </div>
              
              <div className="modal-body-full">
                <div className="modal-image-full">
                  <img src={musicaSelecionada.imagem} alt={musicaSelecionada.titulo} />
                </div>
                
                <div className="modal-details-full">
                  <div className="detail-item"><FaCompactDisc /> <strong>Álbum:</strong> {musicaSelecionada.album}</div>
                  <div className="detail-item"><FaCalendarAlt /> <strong>Ano:</strong> {musicaSelecionada.ano}</div>
                  <div className="detail-item"><GiGuitar /> <strong>Gênero:</strong> {musicaSelecionada.genero}</div>
                  <div className="detail-item"><FaClock /> <strong>Duração:</strong> {musicaSelecionada.duracao}</div>
                </div>

                <div className="description-section-full">
                  <h4><FaInfoCircle /> Descrição Detalhada</h4>
                  <p>{musicaSelecionada.descricao}</p>
                </div>

                <div className="lyrics-section-full">
                  <h4><FaMicrophone /> Letra Completa</h4>
                  <div className="lyrics-container-full">
                    <pre>{musicaSelecionada.letra}</pre>
                  </div>
                </div>
              </div>
              
              <div className="modal-footer-full">
                <button className="close-modal-btn" onClick={fecharModal}>
                  <FaTimes /> Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="page-container about-page">
      <div className="content-full">
        <div className="page-header-full">
          <FaInfoCircle className="page-icon" />
          <h1>Sobre o Gestão Musical</h1>
        </div>
        <div className="about-content-full">
          <p>Uma plataforma completa para amantes da música explorarem e descobrirem as histórias por trás das canções que marcaram gerações.</p>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="page-container contact-page">
      <div className="content-full">
        <div className="page-header-full">
          <FaEnvelope className="page-icon" />
          <h1>Contato</h1>
        </div>
        <div className="contact-content-full">
          <form className="contact-form-full">
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Assunto" required />
            <textarea placeholder="Mensagem" rows="5" required></textarea>
            <button type="submit"><FaEnvelope /> Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musicas" element={<Musicas />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App