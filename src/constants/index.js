import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: " Topicos sobre segurança ",
    url: "#features",
  },
  {
    id: "1",
    title: "AntiVirus",
    url: "#antivirus",
  },
  {
    id: "2",
    title: "Inteligencia Artificial",
    url: "#ia",
  },
  {
    id: "3",
    title: "Jogar",
    url: "/game",
  },
  {
    id: "4",
    title: "Nova Conta",
    url: "/register",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Entrar",
    url: "/login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Aprimoramento de Proteção",
  "Detecção Rápida de Ameaças",
  "Proteção Avançada contra Malware",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Uso Seguro da Internet",
    text: "Para garantir uma navegação segura na internet, é crucial adotar práticas que protejam suas informações e sua privacidade. Comece mantendo seus dispositivos sempre atualizados, pois as atualizações de sistema e aplicativos corrigem vulnerabilidades e ajudam a proteger contra novas ameaças. É essencial usar senhas fortes e únicas para suas contas e evitar reutilizá-las em diferentes serviços; um gerenciador de senhas pode ser útil para criar e armazenar senhas seguras.Adicionar uma camada extra de segurança com a autenticação de dois fatores (2FA) é uma boa prática. Isso exige um segundo fator de verificação, como um código enviado para seu celular, além da senha. Quando receber e-mails ou mensagens com links ou anexos de remetentes desconhecidos, evite clicar ou abrir esses itens, pois podem ser tentativas de phishing ou outros tipos de ataques.Sempre que possível, utilize conexões criptografadas, identificadas por um cadeado na barra de endereço do navegador, para proteger seus dados durante a transmissão. Além disso, ajuste as configurações de privacidade em suas contas e aplicativos para controlar quais informações você compartilha e com quem. Realizar backups regulares de seus dados é uma prática importante para garantir que você possa recuperar suas informações em caso de falhas técnicas ou ataques cibernéticos.",
    date: "Agosto 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Privacidade",
    text: "Privacidade na internet refere-se à proteção das suas informações pessoais e ao controle sobre quem pode acessá-las e como são usadas. Manter a privacidade online é essencial para proteger dados sensíveis e evitar que suas informações sejam usadas sem sua autorização.Uma forma de proteger sua privacidade é configurar as opções de privacidade em suas contas e aplicativos. Isso permite que você controle quais dados são compartilhados e com quem. Por exemplo, em redes sociais, você pode ajustar as configurações para que apenas amigos ou contatos aprovados vejam suas postagens e informações pessoais.Além disso, é importante ser cauteloso ao compartilhar informações pessoais. Evite fornecer dados sensíveis, como número de telefone ou endereço, a menos que seja absolutamente necessário e você confie na fonte. Quando utilizar serviços online, verifique suas políticas de privacidade para entender como seus dados serão coletados, armazenados e usados. Usar navegadores e ferramentas de privacidade, como bloqueadores de rastreadores e extensões de privacidade, também pode ajudar a proteger suas informações. Essas ferramentas podem impedir que sites e empresas coletem dados sobre seu comportamento online e oferecem uma camada adicional de proteção.Por fim, é importante estar atento às configurações de privacidade em dispositivos e aplicativos. Revise regularmente as permissões concedidas a aplicativos e serviços para garantir que apenas as informações essenciais sejam acessadas.",
    date: "Agosto 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Segurança de Computadores",
    text: "A segurança de computadores é fundamental para proteger seu dispositivo contra ameaças, como vírus, malware e ataques cibernéticos, garantindo que suas informações e dados pessoais permaneçam seguros.Para manter a segurança do seu computador, é essencial instalar e atualizar um programa antivírus confiável. Os antivírus ajudam a detectar e remover ameaças, como vírus e malwares, que podem comprometer a integridade do seu sistema e seus dados. Além disso, atualize regularmente seu sistema operacional e todos os aplicativos. Atualizações frequentemente incluem correções de segurança que ajudam a proteger contra vulnerabilidades conhecidas.Outra medida importante é o uso de um firewall, que atua como uma barreira entre seu computador e a internet, controlando e monitorando o tráfego de dados. Um firewall pode impedir que software malicioso acesse seu sistema e proteger contra tentativas de intrusão. Backup regular dos seus dados é crucial para garantir que você possa recuperar suas informações em caso de falhas do sistema ou ataques, como ransomware, que podem criptografar e bloquear o acesso aos seus arquivos. Faça backups em dispositivos externos ou em serviços de armazenamento em nuvem.",
    date: "Agosto 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Segurança de suas redes",
    text: "Implemente firewalls para monitorar e controlar o tráfego de entrada e saída, bloqueando acessos não autorizados. Utilize sistemas de detecção e prevenção de intrusões para identificar e responder a atividades suspeitas. Configure redes privadas virtuais (VPNs) para garantir uma conexão segura e criptografada, especialmente em redes Wi-Fi públicas. Mantenha todos os dispositivos e softwares atualizados com patches de segurança para proteger contra vulnerabilidades conhecidas. Use autenticação forte e controle de acesso para garantir que apenas usuários autorizados possam acessar recursos críticos. Segmente sua rede para limitar o acesso a diferentes partes e reduzir a propagação de possíveis ameaças. Realize auditorias e testes de segurança regularmente para identificar e corrigir falhas antes que possam ser exploradas. Adotar essas práticas ajuda a proteger sua rede contra ameaças e ataques, garantindo a segurança e a integridade das informações.",
    date: "Agosto 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
  {
    id: "4",
    title: "Segurança em dispositivos moveis",
    text: "A segurança em dispositivos móveis é crucial para proteger suas informações pessoais e dados enquanto você usa smartphones e tablets. Esses dispositivos são alvos comuns de ameaças devido à sua popularidade e à quantidade de dados sensíveis que armazenam e processam. Para garantir a segurança do seu dispositivo móvel, comece mantendo o sistema operacional e aplicativos atualizados. As atualizações frequentemente incluem correções de segurança importantes que ajudam a proteger seu dispositivo contra vulnerabilidades e novas ameaças. Instale e utilize aplicativos de segurança confiáveis, como antivírus e anti-malware, que podem detectar e remover ameaças antes que causem danos. Além disso, ative a autenticação de dois fatores (2FA) para suas contas, quando disponível. Isso adiciona uma camada extra de segurança, exigindo um segundo código de verificação, geralmente enviado para seu celular ou gerado por um aplicativo de autenticação, além da senha. Proteja seu dispositivo com uma senha, PIN ou biometria (como impressão digital ou reconhecimento facial). Isso ajuda a garantir que apenas você possa acessar seu dispositivo e os dados armazenados nele. Além disso, é uma boa prática ativar o recurso de bloqueio remoto e de limpeza remota, caso seu dispositivo seja perdido ou roubado. Esses recursos permitem que você bloqueie ou apague seus dados remotamente para evitar que eles sejam acessados por terceiros. Evite baixar aplicativos de fontes não confiáveis ou clicar em links desconhecidos. Apenas faça downloads de lojas oficiais e verifique as permissões solicitadas pelos aplicativos para garantir que eles não estejam pedindo acesso desnecessário a seus dados. Monitore suas conexões de rede e use uma VPN (Virtual Private Network) quando estiver em redes Wi-Fi públicas. Isso criptografa sua conexão e ajuda a proteger suas informações contra interceptações e ataques.",
    date: "Agosto 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
];

export const collabText =
"Estar na internet e não ter um bom software para zelar pela segurança do seu PC é algo arriscado e altamente não recomendável. A web é um espaço repleto de coisas interessantes, mas, é claro, nem só de rosas vive a rede. Confira quais são os melhores antivírus gratuitos e pagos que irão proteger sua privacidade.";

export const collabContent = [
  {
    id: "0",
    title: "Kaspersky",
    text: "Mantenha seu uso da Internet seguro e privado e seus dispositivos funcionando sem problemas com um de nossos planos de segurança premiados e fáceis de usar.",
  },
  {
    id: "1",
    title: "Norton",
    text: "A segurança avançada com antivírus ajuda a proteger seus dispositivos e suas informações financeiras e privadas contra ameaças existentes e emergentes na Internet quando você está online",
  },
  {
    id: "2",
    title: "Avast",
    text: "A segurança avançada com antivírus ajuda a proteger seus dispositivos e suas informações financeiras e privadas contra ameaças existentes e emergentes na Internet quando você está online",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Mecanismos de segurança",
    description: "Mecanismos de segurança  são ferramentas e práticas projetadas para proteger suas informações e dispositivos contra ameaças e ataques na internet",
    features: [
      "Uso de senhas fortes.",
      "Programas antivírus e antimalware",
      "Uso de criptografia",
    ],
  },
  {
    id: "1",
    title: "Contas e senhas",
    description: "Contas e senhas são fundamentais para acessar e proteger informações pessoais na internet. Cada conta online, como e-mails, redes sociais e serviços bancários, exige uma senha para garantir que apenas você tenha acesso a ela.",
    features: [
      "Não reutilizar senhas",
      "Gerenciadores de senhas",
      "Monitorar suas contas regularmente",
    ],
  },
  {
    id: "2",
    title: "Criptografia",
    description: "A criptografia é uma técnica usada para proteger informações transformando-as em um formato que só pode ser lido por quem tem a chave para decodificá-las. ",
    features: [
      "Proteção de Dado",
      "Criptografia de Comunicação",
      "Criptografia de Mensagens",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Segurança na Internet",
    text: "Segurança na internet é como cuidar da sua casa. Quando usamos a internet, é importante proteger nossos dados e privacidade, assim como trancamos as portas e janelas para manter nossa casa segura. Uma forma de fazer isso é criando senhas fortes, que misturam letras, números e símbolos, e são difíceis de adivinhar. Além disso, é importante ter cuidado ao clicar em links que recebemos por e-mail ou mensagem, especialmente se vierem de alguém que não conhecemos, pois podem ser perigosos. Outra medida essencial é manter nossos dispositivos, como computadores e celulares, sempre atualizados, o que ajuda a proteger contra novos tipos de ameaças e vírus. Com esses cuidados, podemos usar a internet de forma mais segura, aproveitando tudo o que ela oferece sem correr riscos desnecessários.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Golpes na Internet",
    text: "Golpes na internet são armadilhas criadas por pessoas mal-intencionadas para enganar e tirar vantagem dos outros. Esses golpes podem aparecer de muitas formas, como e-mails falsos, mensagens de texto, ou até em sites que parecem confiáveis. Por exemplo, você pode receber um e-mail dizendo que ganhou um prêmio, mas para recebê-lo, precisa fornecer seus dados pessoais ou bancários. Se fizer isso, os golpistas podem usar essas informações para roubar seu dinheiro ou até sua identidade.Para se proteger, é importante desconfiar de ofertas que parecem boas demais para ser verdade e nunca compartilhar informações pessoais ou financeiras sem ter certeza de que o pedido é legítimo. Se algo parecer suspeito, é melhor não responder e buscar informações diretamente com a empresa ou pessoa que supostamente entrou em contato com você. Assim, você evita cair em golpes e mantém suas informações seguras.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Ataques na Internet",
    text: "Ataques na internet são ações maliciosas feitas por pessoas ou grupos que querem prejudicar usuários, empresas ou sistemas online. Esses ataques podem causar problemas como roubo de informações, prejuízos financeiros, ou até paralisar o funcionamento de sites e serviços.Um exemplo comum de ataque é o vírus: programas que se instalam no seu computador ou celular sem você perceber e causam danos, como roubar dados ou destruir arquivos. Outra forma de ataque é o phishing, onde os criminosos se passam por empresas ou pessoas conhecidas para enganar você e conseguir informações pessoais, como senhas e números de cartão de crédito.Há também os ataques DDoS, que consistem em sobrecarregar um site ou serviço com um grande número de acessos ao mesmo tempo, fazendo com que ele pare de funcionar. Esses ataques podem ser feitos para prejudicar empresas ou grupos específicos. Para se proteger, é importante ter programas antivírus instalados e sempre atualizados, evitar clicar em links ou baixar arquivos de fontes desconhecidas, e ser cauteloso ao fornecer informações pessoais ou financeiras online. Assim, você reduz o risco de ser vítima de ataques e mantém seus dados e dispositivos mais seguros.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Codigos Maliciosos",
    text: "Códigos maliciosos, ou malwares, são programas criados para causar danos ao seu computador, celular ou outros dispositivos. Eles são desenvolvidos por pessoas mal-intencionadas e podem realizar uma série de ações prejudiciais, como roubar informações, controlar seu dispositivo à distância, ou até mesmo destruí-lo. Existem diferentes tipos de códigos maliciosos. Um exemplo é o vírus, que se espalha de um arquivo para outro, infectando o sistema e danificando arquivos. Outro tipo é o trojan (ou cavalo de Troia), que se disfarça como um programa útil, mas, uma vez instalado, permite que o criminoso tenha acesso ao seu dispositivo. Temos também o ransomware, que bloqueia o acesso ao seu próprio dispositivo ou arquivos e exige um pagamento (resgate) para liberar o acesso.Esses malwares podem se espalhar de várias maneiras, como por meio de e-mails suspeitos, downloads de sites não confiáveis, ou até ao conectar dispositivos como pendrives infectados.Para se proteger contra códigos maliciosos, é importante usar um antivírus confiável, evitar abrir e-mails de remetentes desconhecidos, e não baixar ou instalar programas de sites duvidosos. Além disso, manter seus programas e sistemas operacionais sempre atualizados é essencial para fechar brechas de segurança que podem ser exploradas por esses malwares. Com esses cuidados, você pode reduzir significativamente o risco de ser infectado por códigos maliciosos.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Span",
    text: "Spam são mensagens indesejadas que você recebe na internet, principalmente por e-mail, mas também em mensagens de texto e redes sociais. Geralmente, essas mensagens são propagandas ou tentativas de golpe enviadas em massa. Elas podem ser irritantes e, em alguns casos, perigosas, pois podem conter links que levam a sites maliciosos ou tentam roubar suas informações.Para evitar o spam, é importante usar filtros de e-mail que bloqueiam essas mensagens, além de evitar compartilhar seu endereço de e-mail em sites desconhecidos. Quando receber uma mensagem de spam, marque-a como spam para que futuras mensagens semelhantes sejam filtradas automaticamente. Isso ajuda a proteger sua caixa de entrada e manter suas informações seguras.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Outros Riscos",
    text: "Na internet, além dos riscos mais comuns como ataques e spam, há outros perigos que podem afetar sua segurança e privacidade. Um deles é o roubo de identidade, onde criminosos tentam obter suas informações pessoais, como nome, endereço e números de documentos, para se passar por você e cometer fraudes. Eles podem usar essas informações para abrir contas bancárias, fazer compras ou até cometer crimes em seu nome.Outro risco importante é a privacidade. Muitos aplicativos e sites coletam e compartilham seus dados pessoais sem que você perceba. Essas informações, que podem incluir seus hábitos online, localização e até conversas privadas, podem ser usadas para publicidade direcionada ou vendidas a terceiros, comprometendo sua privacidade.A perda de dados é também uma preocupação. Problemas técnicos ou ataques podem levar à perda de documentos e fotos importantes. Sem backups, essas informações podem ser irrecuperáveis, causando um impacto significativo.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
