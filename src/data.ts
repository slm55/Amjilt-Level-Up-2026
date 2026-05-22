export interface Nominee {
  id: string;
  name: string;
  photo: string;
  bio: string;
  achievements: string[];
}

export interface Nomination {
  id: string;
  group: 'it' | 'designer' | 'general' | 'student-year';
  title: string;
  subTitle?: string;
  description: string;
  nominees: Nominee[];
  winnerId?: string; // Standard nominations have 1 winner
  winners?: Nominee[]; // 'Жыл оқушысы' has 3 winners directly, no other nominees
}

export const nominations: Nomination[] = [
  // --- Жыл IT жобасы ---
  {
    id: "it-1-4",
    group: "it",
    title: "Жыл IT жобасы (1-4 сынып)",
    description: "Бастауыш сыныптар арасындағы ең үздік, шығармашылық деңгейі жоғары технологиялық IT жоба.",
    winnerId: "it-1-4-winner",
    nominees: [
      {
        id: "it-1-4-winner",
        name: "Әлихан Марат",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Scratch бағдарламасында қазақ ертегілері негізінде интерактивті ойын жасап шықты.",
        achievements: ["Scratch Бастауыш Кубогі", "Үздік қорғау дизайны"]
      },
      {
        id: "it-1-4-n2",
        name: "Аружан Сәбит",
        photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Ақылды үй жүйесінің кішігірім картон макетін электроникамен құрастырды.",
        achievements: ["Жас Техник көрмесінің қатысушысы"]
      },
      {
        id: "it-1-4-n3",
        name: "Нұрасыл Асқар",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Қалдықтарды сұрыптау бойынша анимациялық веб-сайт дайындады.",
        achievements: ["Экология және Технология жүлдесі"]
      },
      {
        id: "it-1-4-n4",
        name: "Амина Серік",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Математиканы үйренуге арналған Scratch викторинасын құрастырды.",
        achievements: ["Мектепішілік олимпиада белсендісі"]
      },
      {
        id: "it-1-4-n5",
        name: "Санжар Болат",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Ағаштан жасалған робот көлік моделін бағдарламалады.",
        achievements: ["Робототехника фестивалінің дипломанты"]
      }
    ]
  },
  {
    id: "it-5-6",
    group: "it",
    title: "Жыл IT жобасы (5-6 сынып)",
    description: "Орта буын оқушылары арасындағы жоғары деңгейде бағдарламаланған үздік IT жоба.",
    winnerId: "it-5-6-winner",
    nominees: [
      {
        id: "it-5-6-n1",
        name: "Диас Берікші",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Экологиялық мониторинг жасайтын телеграм-бот құрастырды.",
        achievements: ["Жас Бағдарламашы гранты"]
      },
      {
        id: "it-5-6-winner",
        name: "Алдияр Хасен",
        photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Сыныптастар арасында білім алмасатын мектепшілік чат-қосымшасын құрды.",
        achievements: ["Мектепшілік Смартех жеңімпазы", "Технологиялық инновация дипломы"]
      },
      {
        id: "it-5-6-n3",
        name: "Томирис Жақсылық",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Python тілінде жазылған қарапайым 2D экшн деңгейлі ойнын дамытты.",
        achievements: ["Python Coding Junior сыйлығы"]
      },
      {
        id: "it-5-6-n4",
        name: "Мәди Омар",
        photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Мектеп кітапханасына арналған шағын іздеу мәліметтер қорын іске қосты.",
        achievements: ["Жыл кітапханашысы көмекшісі"]
      },
      {
        id: "it-5-6-n5",
        name: "Айша Мырза",
        photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "HTML және CSS көмегімен өз сыныбының виртуалды альбомын құрастырды.",
        achievements: ["Web Design Kids сертификаты"]
      }
    ]
  },
  {
    id: "it-7",
    group: "it",
    title: "Жыл IT жобасы (7 сынып)",
    description: "7-сынып оқушылары әзірлеген білім беру немесе практикалық маңызы бар инновациялық жоба.",
    winnerId: "it-7-winner",
    nominees: [
      {
        id: "it-7-winner",
        name: "Сұңқар Төлеген",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Мектеп кестесін автоматты түрде оңтайландыратын алгоритм ұсынды.",
        achievements: ["Сыныптық үздік жоба", "Жас математик жүлдегері"]
      },
      { id: "it-7-n2", name: "Інжу Назар", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop", bio: "Оқушыларға арналған қазақ тілі фразеологиялық сөздік мобильді қосымшасы.", achievements: ["Тіл жанашыры марапаты"] },
      { id: "it-7-n3", name: "Мирас Құрман", photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&h=500&auto=format&fit=crop", bio: "Arduino негізінде жасалған өсімдіктерге автоматты су құю жүйесі.", achievements: ["RoboCON қола медалі"] },
      { id: "it-7-n4", name: "Раяна Илияс", photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&h=500&auto=format&fit=crop", bio: "Ауа сапасын бағалайтын жасанды интеллект негізіндегі талдау бағдарламасы.", achievements: ["Эко-Стартап номинациясы"] },
      { id: "it-7-n5", name: "Аслан Сүлеймен", photo: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=400&h=500&auto=format&fit=crop", bio: "Ортағасырлық тарихи шайқастар туралы 3D виртуалды интерактивті карта.", achievements: ["Тарих зерттеушісі сертификаты"] }
    ]
  },
  {
    id: "it-8",
    group: "it",
    title: "Жыл IT жобасы (8 сынып)",
    description: "8-сынып оқушылары арасындағы маңызды әлеуметтік немесе ғылыми-жаратылыстану мәселелерін шешетін IT туындысы.",
    winnerId: "it-8-winner",
    nominees: [
      { id: "it-8-n1", name: "Ерасыл Серікбай", photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&h=500&auto=format&fit=crop", bio: "Физика сабақтарына арналған интерактивті 3D заңдылықтар симуляторы.", achievements: ["Физика Көрмесі - 1 орын"] },
      { id: "it-8-n2", name: "Самира Кәрім", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=500&auto=format&fit=crop", bio: "Оқушыларға арналған зияткерлік тапсырмалар мен логикалық ойындар веб-платформасы.", achievements: ["WebDev-Community үздік жас шебері"] },
      {
        id: "it-8-winner",
        name: "Бексұлтан Сәрсен",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Зағип жандарға арналған ультрадыбыстық ақылды таяқ құрылғысын бағдарламалап сәтті шығарды.",
        achievements: ["Мектепішілік Гран-При", "Облыстық ғылыми жобалар жүлдегері"]
      },
      { id: "it-8-n4", name: "Нұрай Ербол", photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп тағамдарын таңдау және калориясын бақылау мобильді қосымшасы.", achievements: ["Денсаулық елшісі белгісі"] },
      { id: "it-8-n5", name: "Мұхаммед Нұржан", photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&h=500&auto=format&fit=crop", bio: "Кірістірілген камера арқылы оқушы бет-әлпетін тануға арналған қауіпсіздік скрипті.", achievements: ["Python AI Certificate"] }
    ]
  },
  {
    id: "it-9",
    group: "it",
    title: "Жыл IT жобасы (9 сынып)",
    description: "9-сынып бағдарламалаушылары жасаған күрделі деректер базасы немесе веб-сервистері бар жобалар.",
    winnerId: "it-9-winner",
    nominees: [
      { id: "it-9-n1", name: "Шыңғыс Асқарұлы", photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&h=500&auto=format&fit=crop", bio: "Сынытаралық спорттық біріншіліктерді басқаратын веб-ресурс.", achievements: ["Спорттық менеджмент инновациясы"] },
      { id: "it-9-n2", name: "Данияр Жүніс", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=500&auto=format&fit=crop", bio: "Оқушыларға арналған заманауи психологиялық қолдау чат-боты.", achievements: ["Жылы Жүрек дипломы"] },
      { id: "it-9-n3", name: "Жансая Мұрат", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп радиосын онлайн тыңдауға мүмкіндік беретін интернет-радио жобасы.", achievements: ["Мектеп Дауысы медиа марапаты"] },
      {
        id: "it-9-winner",
        name: "Руслан Бақытжан",
        photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "React және Node.js негізінде мектептің электронды үйірме тіркеу жүйесін әзірледі.",
        achievements: ["Full Stack Junior Developer", "Олимпиада жүлдегері"]
      },
      { id: "it-9-n5", name: "Аяулым Дәулет", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop", bio: "Үй жануарларын іздеуге арналған геолокациялық әлеуметтік платформа.", achievements: ["Қоғам Белсендісі медалі"] }
    ]
  },
  {
    id: "it-10",
    group: "it",
    title: "Жыл IT жобасы (10 сынып)",
    description: "Жоғары сыныпта деңгейіндегі кәсіби деңгейге жақын ғылыми немесе стартап бағытындағы IT әзірлемелер.",
    winnerId: "it-10-winner",
    nominees: [
      {
        id: "it-10-winner",
        name: "Олжас Смағұл",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Мектептің 3D форматындағы толық виртуалды интерактивті бағдарын (Virtual Tour) WebGL-де жасады.",
        achievements: ["Республикалық IT фестивалінің лауреаты", "Үздік WebGL инновациясы"]
      },
      { id: "it-10-n2", name: "Диана Теңізбай", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектептегі экологиялық энергия тұтынуды бақылау және оңтайландыру AI моделі.", achievements: ["Жас Энергетик дипломы"] },
      { id: "it-10-n3", name: "Темірлан Әділ", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop", bio: "Оқу процесін бақылауға арналған кроссплатформалық ұйымдастыру қосымшасы.", achievements: ["Ұйымдастыру Көшбасшысы"] },
      { id: "it-10-n4", name: "Мәліка Сәлім", photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&h=500&auto=format&fit=crop", bio: "Химиялық элементтер арасындағы реакцияларды визуализациялайтын білім беру қолданбасы.", achievements: ["Шығармашылық Ғылым жүлдесі"] },
      { id: "it-10-n5", name: "Арман Нұржан", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп асханасында кезектерді азайту және алдын ала тапсырыс беру жүйесі.", achievements: ["Стартап Көшбасшысы марапаты"] }
    ]
  },

  // --- Жыл дизайнері (1-10 сыныптар) ---
  {
    id: "des-1",
    group: "designer",
    title: "Жыл дизайнері (1 сынып)",
    description: "1-сыныптар арасындағы ерекше бейнелеу өнері және дизайн элементтерін меңгерген кішкентай таланттар.",
    winnerId: "des-1-winner",
    nominees: [
      { id: "des-1-winner", name: "Аяла Жандос", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=500&auto=format&fit=crop", bio: "Сиқырлы әлем суреттер сериясына негізделген ертегі кітапшасының безендірушісі.", achievements: ["Жас Қылқалам байқауы - 1 орын"] },
      { id: "des-1-n2", name: "Нұрбек Әсет", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop", bio: "Қиял-ғажайып ғарыш кемесінің пластилиннен жасалған 3D мүсіндік дизайны.", achievements: ["Бастауыш Мүсінші жүлдесі"] },
      { id: "des-1-n3", name: "Кәусар Нұрлан", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп бөлмесін безендіруге арналған тамаша оригами композициясы.", achievements: ["Оригами шебері кубогі"] },
      { id: "des-1-n4", name: "Талғат Ерке", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop", bio: "Көктемгі табиғат көріністерінің аппликациялық коллаж дизайны.", achievements: ["Жыл Белсендісі"] },
      { id: "des-1-n5", name: "Томирис Ернар", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп логотипін түрлі-түсті қарындаштармен заманауи қайта бейнелеу жұмысы.", achievements: ["Шығармашылық Көзқарас"] }
    ]
  },
  {
    id: "des-2",
    group: "designer",
    title: "Жыл дизайнері (2 сынып)",
    description: "2-сыныптың түстер мен фигураларды үйлестіре алатын дарынды жас суретші-дизайнерлері.",
    winnerId: "des-2-winner",
    nominees: [
      { id: "des-2-n1", name: "Әмина Рахым", photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=500&auto=format&fit=crop", bio: "Күзгі бақ тақырыбындағы сулы бояумен салынған көркем жұмыс.", achievements: ["Сулы бояу патшалығы дипломы"] },
      { id: "des-2-winner", name: "Ибраһим Тұрар", photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектептегі экологиялық тақырыптағы постерлер сериясының авторы.", achievements: ["Үздік Экологиялық Постер", "2-сынып мақтанышы"] },
      { id: "des-2-n3", name: "Зейнеп Марат", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop", bio: "Өз қолымен қуыршақ театрына арналған костюмдер дизайнын жасады.", achievements: ["Театр Сүйер Жан марапаты"] },
      { id: "des-2-n4", name: "Батырхан Төлеу", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=500&auto=format&fit=crop", bio: "Заманауи архитектуралық үйлердің картон материалдан құрастырылған макеті.", achievements: ["Жас Сәулетші кубогі"] },
      { id: "des-2-n5", name: "Аруа Кәмел", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=500&auto=format&fit=crop", bio: "Көктем тақырыбындағы геометриялық ою-өрнектер коллажын жасап шығарды.", achievements: ["Ою-өрнек өнеріші сыйлығы"] }
    ]
  },
  {
    id: "des-3",
    group: "designer",
    title: "Жыл дизайнері (3 сынып)",
    description: "3-сынып оқушыларының эстетикалық талғамы мен қолөнердегі ерекше дизайн туындылары.",
    winnerId: "des-3-winner",
    nominees: [
      { id: "des-3-winner", name: "Радмир Мұхан", photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп фойесіне арналған экологиялық ағаш бұйымдарының көркем дизайнын жасады.", achievements: ["Қолөнер алтын жүлдегері", "Үздік Эко-дизайн"] },
      { id: "des-3-n2", name: "Аянат Дүйсен", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop", bio: "Космос әлемін сипаттайтын өте жарқын гуашь суреті.", achievements: ["Болашақ Ғарышкері көрмесі"] },
      { id: "des-3-n3", name: "Дарын Жомарт", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop", bio: "Өз сыныбының қабырға газетін заманауи поп-арт бағытында әрледі.", achievements: ["Поп-Арт сыйлығы"] },
      { id: "des-3-n4", name: "Мәдина Олжас", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop", bio: "Ұлттық киімдерді заманауи эскизде бейнелейтін сәндік дизайн.", achievements: ["Ұлттық нақыш дипломы"] },
      { id: "des-3-n5", name: "Али Нұрбек", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop", bio: "3D қаламмен (3D Pen) жасалған мектеп өмірінен түрлі мүсіндер мен макеттер.", achievements: ["3D Қалам шебері"] }
    ]
  },
  {
    id: "des-4",
    group: "designer",
    title: "Жыл дизайнері (4 сынып)",
    description: "4-сынып суретшілерінің графикалық элементтері мен кеңістіктік дизайн шеберліктері.",
    winnerId: "des-4-winner",
    nominees: [
      { id: "des-4-n1", name: "Мәншүк Бағлан", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мата бетіне салынған ұлттық нақыштағы заманауи батик суреттер дизайны.", achievements: ["Батик суретшісі белгісі"] },
      { id: "des-4-winner", name: "Расул Марат", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=500&auto=format&fit=crop", bio: "Планшетте сурет салу арқылы мектеп оқиғаларына арналған комикстер сериясын жасады.", achievements: ["Жас Иллюстратор лауреаты", "Комикстер патшасы"] },
      { id: "des-4-n3", name: "Алина Омар", photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=500&auto=format&fit=crop", bio: "Интерьер дизайнына арналған кептірілген өсімдіктер эко-композициясы.", achievements: ["Флорист марапаты"] },
      { id: "des-4-n4", name: "Мирас Серік", photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&h=500&auto=format&fit=crop", bio: "Пластикалық контейнерлерден жасалған болашақ қаласының концептуалды макеті.", achievements: ["Болашақ Сәулетшісі дипломы"] },
      { id: "des-4-n5", name: "Жанерке Дархан", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп кіріс есігіне арналған ерекше визуалды мерекелік плакат дизайны.", achievements: ["Креативті Көзқарас"] }
    ]
  },
  {
    id: "des-5",
    group: "designer",
    title: "Жыл дизайнері (5 сынып)",
    description: "Бесінші сынып дарындарының растрлық графика мен сәндік қолөнер өнеріндегі жетістіктері.",
    winnerId: "des-5-winner",
    nominees: [
      { id: "des-5-winner", name: "Зарина Айдар", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&auto=format&fit=crop", bio: "Қазақтың киіз үйі мен ою-өрнегінің заманауи минималистік графикалық дизайнын жасап шықты.", achievements: ["Республикалық көрме қола жүлдегері", "Ұлттық Бренд Сыйлығы"] },
      { id: "des-5-n2", name: "Есім Ермек", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop", bio: "Қайта өңделген материалдардан экологиялық сөмкелер мен аксессуарлар дизайны.", achievements: ["Эко-дизайнер дипломы"] },
      { id: "des-5-n3", name: "Әсел Рамазан", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп асханасындағы мәзірдің вегетариандық таңдауына арналған каллиграфиялық безендіру.", achievements: ["Ұқыпты каллиграф"] },
      { id: "des-5-n4", name: "Сәбит Асқар", photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&h=500&auto=format&fit=crop", bio: "Өз бөлмесінің 3D моделдік дизайнын компьютерлік ойындар редакторында құрастырды.", achievements: ["3D Архитектор марапаты"] },
      { id: "des-5-n5", name: "Жанель Нұржан", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=500&auto=format&fit=crop", bio: "Күзгі тақырыптағы кәсіби деңгейдегі кептірілген жапырақтардан гербарий өнер суреті.", achievements: ["Табиғат Дауысы"] }
    ]
  },
  {
    id: "des-6",
    group: "designer",
    title: "Жыл дизайнері (6 сынып)",
    description: "6-сыныптар арасындағы графикалық редакторларды тиімді қолданатын жас өнерпаздар.",
    winnerId: "des-6-winner",
    nominees: [
      { id: "des-6-n1", name: "Нариман Дәурен", photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&h=500&auto=format&fit=crop", bio: "Photoshop бағдарламасында мектеп мерекелеріне арналған визуалды афишалар дизайны.", achievements: ["Digital Poster Best Designer"] },
      { id: "des-6-winner", name: "Диляра Болатқызы", photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=500&auto=format&fit=crop", bio: "Сыныптастарының Скетч-портреттерін заманауи сандық иллюстрациялық стилде жасады.", achievements: ["Мектеп Санаты - 1 орын", "Үздік сандық портретші"] },
      { id: "des-6-n3", name: "Ералы Бекзат", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп спорт клубына арналған логотип пен спорттық форма дизайны.", achievements: ["Спорттық Креатив сыйлығы"] },
      { id: "des-6-n4", name: "Аида Серік", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=500&auto=format&fit=crop", bio: "Кітап мұқабаларына арналған ерекше суретті абстракциялық көркем дизайн.", achievements: ["Кітап Әлемі марапаты"] },
      { id: "des-6-n5", name: "Артур Қанат", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=500&auto=format&fit=crop", bio: "Pixel Art бағытында мектеп ғимараты мен сыныптарының қызықты бейнесін жасады.", achievements: ["Pixel Pixel шебері"] }
    ]
  },
  {
    id: "des-7",
    group: "designer",
    title: "Жыл дизайнері (7 сынып)",
    description: "7-сынып оқушыларының жоғары талғамдағы графикалық плакаттар мен полиграфиялық дизайндары.",
    winnerId: "des-7-winner",
    nominees: [
      { id: "des-7-winner", name: "Камила Нұрлан", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&h=500&auto=format&fit=crop", bio: "Қоршаған ортаны қорғауға арналған бірегей баспа постерлер сериясының дизайнері.", achievements: ["Халықаралық Экопатриот сыйлығы", "Жыл экологиялық көшбасшысы"] },
      { id: "des-7-n2", name: "Әлихан Расул", photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп күнделігінің алдыңғы және артқы мұқабасына арналған айрықша концепт-дизайн.", achievements: ["Мектеп Күнделігі Концепті"] },
      { id: "des-7-n3", name: "Дарина Бағдат", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектептің ғылыми үйірмелеріне арналған инфографикалық постерлер жинағы.", achievements: ["Анық инфографика марапаты"] },
      { id: "des-7-n4", name: "Нұржан Қайрат", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop", bio: "Қағаздан жасалған күрделі геометриялық пішіндер полигональды мүсіндерін безендірді.", achievements: ["Озық геометриялық мүсір өнері"] },
      { id: "des-7-n5", name: "Меруерт Ислам", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп газетінің электронды нұсқасын дизайн тұрғысынан толықтай заманауи брендке айналдырды.", achievements: ["Медиа Дизайнер дипломы"] }
    ]
  },
  {
    id: "des-8",
    group: "designer",
    title: "Жыл дизайнері (8 сынып)",
    description: "8-сынып оқушыларының тамаша сәулеттік макеттеу, киім үлгісі мен өндірістік дизайн ізденістері.",
    winnerId: "des-8-winner",
    nominees: [
      { id: "des-8-n1", name: "Мейірлан Оңғарулы", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп ауласындағы демалыс аймағының заманауи ландшафттық дизайн жобасын ұсынды.", achievements: ["Ландшафт шебері сыйлығы"] },
      { id: "des-8-winner", name: "Іңкәр Ержан", photo: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&h=500&auto=format&fit=crop", bio: "Қазақтың зергерлік әшекей бұйымдарының заманауи күнделікті тұрмысқа бейімделген стильдік концепциясын жасап бренд құрды.", achievements: ["Мектеп Бренді Гран-При", "Кәсіби Зергерлік бағыты"] },
      { id: "des-8-n3", name: "Саят Төлеген", photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&h=500&auto=format&fit=crop", bio: "Оқушыларға арналған эргономикалық орындықтар мен мектеп жиһазының дизайны.", achievements: ["Өндірістік Дизайн жобасы"] },
      { id: "des-8-n4", name: "Динара Серікбай", photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=500&auto=format&fit=crop", bio: "Ұлттық нақыштағы киімдер жинағының (Capsule Collection) авторлық сәндік эскиздері.", achievements: ["Мода Эскизі белсендісі"] },
      { id: "des-8-n5", name: "Елдар Сұлтан", photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&h=500&auto=format&fit=crop", bio: "3D Blender бағдарламасында жасалған мектеп спорт кешенінің визуалды жоспары.", achievements: ["3D Blender Арт диплом"] }
    ]
  },
  {
    id: "des-9",
    group: "designer",
    title: "Жыл дизайнері (9 сынып)",
    description: "9-сыныптар арасындағы UX/UI веб-дизайн, дайын брендбук пен корпоративтік сәйкестік жасаған өнерпаздар.",
    winnerId: "des-9-winner",
    nominees: [
      { id: "des-9-n1", name: "Сұлтан Бауыржан", photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектептің жаңа веб-порталының UX/UI дизайнын Figma платформасында әзірледі.", achievements: ["Figma UI Designer Pro"] },
      { id: "des-9-winner", name: "Балауса Сәбитқызы", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектептің 2026 жылғы бітіруші түлектеріне арналған бірегей стилі мен брендбук дизайнының авторы.", achievements: ["Жас Брендмейкер лауреаты", "Мектеп Брендингі - 1 орын"] },
      { id: "des-9-n3", name: "Мәди Малик", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектептің театр мен драма үйірмесіне арналған винтаж постерлерінің дизайн стилі.", achievements: ["Ретро Дизайн марапаты"] },
      { id: "des-9-n4", name: "Анель Дәулет", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп кітапханасына арналған ақпараттық қабырға үлгісі және кеңістіктік бағдарлау белгілері.", achievements: ["Кеңістік Дизайнері"] },
      { id: "des-9-n5", name: "Батыр Қуаныш", photo: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=400&h=500&auto=format&fit=crop", bio: "Шрифт бағытында мектеп атауы үшін арнайы баспа шрифтін (Display Font) жасап шықты.", achievements: ["Типографика Бас жүлдесі"] }
    ]
  },
  {
    id: "des-10a",
    group: "designer",
    title: "Жыл дизайнері (10а сынып)",
    description: "10а сыныбының кәсіби деңгейдегі өнер туындылары, концептуалды графика мен медиалық безендірулер.",
    winnerId: "des-10a-winner",
    nominees: [
      {
        id: "des-10a-winner",
        name: "Дамир Әбілдин",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Мектептің тарих мұражайына арналған толыққанды визуалды экспозиция және белгілер жүйесін жасады.",
        achievements: ["Мектеп Мұражайы Бас Креаторы", "Мемлекеттік байқаудың қатысушысы"]
      },
      { id: "des-10a-n2", name: "Радана Камал", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=500&auto=format&fit=crop", bio: "Білім беру платформасына арналған кейіпкерлер дизайны мен концепт-арт топтамасы.", achievements: ["Кейіпкерлер дизайны сыйлығы"] },
      { id: "des-10a-n3", name: "Елдос Смадияр", photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&h=500&auto=format&fit=crop", bio: "Экологиялық брендке арналған заманауи қайта өңделген материал қаптама дизайны.", achievements: ["Жасыл Қаптама дипломы"] },
      { id: "des-10a-n4", name: "Диляра Қайролла", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop", bio: "Желілік мектеп парақшаларына арналған SMM стильді брендбук пен анимациялық шаблон.", achievements: ["SMM Креатор белгісі"] },
      { id: "des-10a-n5", name: "Асанәлі Мұрат", photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектеп демалыс орындарына арналған жарық-сәндік қондырғылар мен люстралар дизайны.", achievements: ["Жарық архитектурасы марапаты"] }
    ]
  },
  {
    id: "des-10ae",
    group: "designer",
    title: "Жыл дизайнері (10ә сынып)",
    description: "10ә сынып шеберлерінің жоғары технологиялар, 3D анимация мен футуристік дизайн туындылары.",
    winnerId: "des-10ae-winner",
    nominees: [
      {
        id: "des-10ae-winner",
        name: "Нұрила Жолдас",
        photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Мектептің болашақ 3D концепт-моделін және кибер-орта виртуалды галереясын құрған талант.",
        achievements: ["Республикалық 3D Көркемөнер жеңімпазы", "Бейнелеу және Дизайн Құрмет грамотасы"]
      },
      { id: "des-10ae-n2", name: "Мәди Бақтияр", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop", bio: "Жаңа технологиялық кибер-форма мен мектеп киімінің заманауи футуристік үлгісі.", achievements: ["Кибер Мода дипломы"] },
      { id: "des-10ae-n3", name: "Тоғжан Мерей", photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=500&auto=format&fit=crop", bio: "Психологиялық бөлменің түстік-жарықтық релаксациялық сәндік интерьері.", achievements: ["Түстер Терапиясы сыйлығы"] },
      { id: "des-10ae-n4", name: "Санжар Болатұлы", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop", bio: "Мектептегі роботтар Көрмесіне арналған стимпанк бағытындағы робот-мүсін дизайны.", achievements: ["Стимпанк Өнер жүлдесі"] },
      { id: "des-10ae-n5", name: "Самал Арманқызы", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop", bio: "Қалалық мәдени орындарды дамытуға бағытталған заманауи урбанистік аялдама постерлер дизайны.", achievements: ["Қала мақтанышы грамотасы"] }
    ]
  },

  // --- Жалпы номинациялар ---
  {
    id: "olympic-star",
    group: "general",
    title: "Жыл олимпиадисті",
    description: "Халықаралық, республикалық және облыстық пәндік олимпиадаларда мектеп абыройын асқақтатқан білім додасының саңлақтары.",
    winnerId: "olympic-winner",
    nominees: [
      {
        id: "olympic-winner",
        name: "Бағлан Жанарыс",
        photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Математикадан Азия-Тынық мұхиты олимпиадасының Алтын медаль иегері, физика мен программалаудан облыс мақтанышы.",
        achievements: ["Азия Тынық мұхиты олимпиадасы - Алтын", "Республикалық олимпиада - 1 орын"]
      },
      { id: "olympic-n2", name: "Аружан Сәлім", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=500&auto=format&fit=crop", bio: "Химия мен биология пәндері бойынша Республикалық зерттеу олимпиадаларының бірнеше дүркін жүлдегері.", achievements: ["Республикалық Химия жеңімпазы"] },
      { id: "olympic-n3", name: "Серікбол Рахмет", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop", bio: "Информатика және спорттық бағдарламалаудан халықаралық жарыстардың жеңімпазы.", achievements: ["ACM-ICPC мектепішілік көшбасшысы"] },
      { id: "olympic-n4", name: "Мариям Самат", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=500&auto=format&fit=crop", bio: "Ағылшын және француз тілдері бойынша республикалық лингвистикалық сынақтардың грант иегері.", achievements: ["Лингвистика фестивалі Бас жүлдесі"] },
      { id: "olympic-n5", name: "Әділет Жолдас", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=500&auto=format&fit=crop", bio: "География және астрономия бағытындағы республикалық ғылыми жобалардың үздік зерттеушісі.", achievements: ["Жас Географ кубогі"] }
    ]
  },
  {
    id: "teacher-year",
    group: "general",
    title: "Жыл мұғалімі",
    description: "Мектептегі инновациялық оқыту әдістерін меңгерген, оқушыларға сапалы білім мен жылулық сыйлаған ұлағатты ұстаздар.",
    winnerId: "teacher-winner",
    nominees: [
      {
        id: "teacher-winner",
        name: "Гүлнәр Сейітхан",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Математика және геометрия кафедрасының жетекшісі. Оқушыларды интерактивті оқыту және олимпиадаға баулу ісіндегі 20 жылдық еңбек өтілі бар үздік ұстаз.",
        achievements: ["Қазақстанның Еңбек сіңірген ұстазы", "Үздік Мектеп Көшбасшысы Мұғалімі"]
      },
      { id: "teacher-n2", name: "Асхат Әлиев", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop", bio: "Информатика және жасанды интеллект пәнінің заманауи, жобалау бағытындағы білікті мұғалімі.", achievements: ["Цифрлы Қазақстан білім беру жүлдесі"] },
      { id: "teacher-n3", name: "Динара Ибраева", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop", bio: "Қазақ тілі мен әдебиетінің оқыту әдістемесін заманауи тұрғыдан жаңартқан креативті мұғалім.", achievements: ["Жаңашыл Мұғалім сертификаты"] },
      { id: "teacher-n4", name: "Сергей Петров", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop", bio: "Физика сабағын практикалық зертханалар мен қызықты тәжірибелер арқылы жаңа қырынан танытқан ұстаз.", achievements: ["Зертханалық Талдау үздігі"] },
      { id: "teacher-n5", name: "Бақытгүл Сапарқызы", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=500&auto=format&fit=crop", bio: "Тарих және құқық негіздерін оқушыларға терең меңгертетін, белсенді дебат үйірмесінің жетекшісі.", achievements: ["Дебат шебері тәлімгері"] }
    ]
  },
  {
    id: "class-curator",
    group: "general",
    title: "Жыл сынып жетекшісі",
    description: "Сыныптағы ынтымақтастық пен берекені сақтап, әр оқушының тұлғалық дамуына жол көрсеткен жүрегі жылы жетекшілер.",
    winnerId: "curator-winner",
    nominees: [
      {
        id: "curator-winner",
        name: "Жанна Нұрпейіс",
        photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "10-сынып кураторы. Өз сыныбымен бірге ондаған қайырымдылық жобаларын, экологиялық акциялар мен инновациялық кездесулер ұйымдастырды.",
        achievements: ["Мектептің Үздік Тәрбиешісі кубогі", "Бірлік пен ынтымақ белгісі"]
      },
      { id: "curator-n2", name: "Мұрат Жүнісбай", photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&h=500&auto=format&fit=crop", bio: "8-сынып жетекшісі, спорттық және белсенді туристік жорықтар арқылы сынып ауызбіршілігін қалыптастырған тәлімгер.", achievements: ["Туристік Көшбасшы Тәлімгер"] },
      { id: "curator-n3", name: "Айгүл Болатқызы", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&auto=format&fit=crop", bio: "5-сынып жетекшісі. Бастауыш сыныптан орта буынға ауысқан жас жеткіншектерді үлкен қамқорлықпен бейімдеді.", achievements: ["Жылы Ұя марапаты"] },
      { id: "curator-n4", name: "Бауыржан Серік", photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&h=500&auto=format&fit=crop", bio: "9-сынып жетекшісі, оқушылар арасындағы ғылыми жобалар белсенділігі мен шығармашылық бастамаларды үнемі қолдайды.", achievements: ["Шығармашылық Сыйлық"] },
      { id: "curator-n5", name: "Әлия Оспанова", photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=500&auto=format&fit=crop", bio: "7-сынып жетекшісі, сыныпта өнер мен музыка атмосферасын қалыптастырған креативті жетекші.", achievements: ["Рухани Жәдігер сыйлығы"] }
    ]
  },

  // --- Жыл оқушысы (Үміткерлерсіз, Тек 3 Жеңімпаз тікелей көрсетіледі) ---
  {
    id: "student-1-4",
    group: "student-year",
    title: "Жыл оқушысы (1-4 сынып)",
    description: "Мектептің қоғамдық және оқу өміріне зор үлес қосқан ең озық бастауыш сынып оқушылары.",
    nominees: [],
    winners: [
      {
        id: "st-1-4-w1",
        name: "Айсұлтан Сәрсенбай",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Оқудағы тамаша жетістіктері және бастауыш пәндік жарыстардың жеңімпазы болғаны үшін.",
        achievements: ["Үздік Оқушы Белгісі", "Бастауыш Зияткері-2026"]
      },
      {
        id: "st-1-4-w2",
        name: "Кәусар Нұржанқизы",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Мектеп өміріндегі белсенділігі, өнер додаларындағы жоғары жетістіктері үшін.",
        achievements: ["Алтын Қауырсын жүлдесі", "Сынып Мақтанышы"]
      },
      {
        id: "st-1-4-w3",
        name: "Нұралы Тұрар",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Кітап оқу белсендісі, математика мен қазақ тілі олимпиадаларының жүлдегері.",
        achievements: ["Ең көп оқыған оқушы", "Жас Дарын кубогі"]
      }
    ]
  },
  {
    id: "student-5-8",
    group: "student-year",
    title: "Жыл оқушысы (5-8 сынып)",
    description: "Сапалы білімімен, көшбасшылық қасиеттерімен және спорттағы белсенділігімен дараланған орта буын мақтаныштары.",
    nominees: [],
    winners: [
      {
        id: "st-5-8-w1",
        name: "Темірлан Бақыт",
        photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Облыстық және қалалық ғылыми жарыстардың жеңімпазы, сынып старостасы.",
        achievements: ["Көшбасшылық Тәж", "Үздік Жас Ғалым-2026"]
      },
      {
        id: "st-5-8-w2",
        name: "Раяна Алдиярқызы",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Музыка мен өнерде жоғары мектеп абыройын халықаралық додаларда асқақтатқан бірегей тұлға.",
        achievements: ["International Violin Prize", "Мектеп Жұлдызы"]
      },
      {
        id: "st-5-8-w3",
        name: "Әли Кәрім",
        photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Жеңіл атлетика және футболдан мектеп құрамасының капитаны, үздік оқу белсендісі.",
        achievements: ["Мектеп Спартакиадасының Жеңімпазы", "Үздік спортшы тұлға"]
      }
    ]
  },
  {
    id: "student-9-10",
    group: "student-year",
    title: "Жыл оқушысы (9-10 сынып)",
    description: "Мектеп тарихына өз есімдерін алтын әріптермен жазып бара жатқан, жан-жақты білімді жоғары сынып көшбасшылары.",
    nominees: [],
    winners: [
      {
        id: "st-9-10-w1",
        name: "Әділхан Мұратұлы",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Студенттік кеңес төрағасы, мектепішілік стартап бағдарламалардың бас үйлестірушісі және белсенді волонтер.",
        achievements: ["Жыл Көшбасшысы Кубогі", "Үздік Белсенді Мектепші волонтер"]
      },
      {
        id: "st-9-10-w2",
        name: "Аяулым Серікбай",
        photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Республикалық және облыстық пікірсайыстар мен лингвистикалық жобалардың бас жүлдегері.",
        achievements: ["Ұлттық пікірсайыс үздік спикері", "Тіл Маржаны кубогі"]
      },
      {
        id: "st-9-10-w3",
        name: "Диас Хасенов",
        photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&h=500&auto=format&fit=crop",
        bio: "Халықаралық жаратылыстану-ғылыми байқаулардың күміс жүлдегері және мектептің IT инновациялық қолдау тобының белсендісі.",
        achievements: ["International Science Olympiad Silver", "IT Инноватор белгісі"]
      }
    ]
  }
];
