# CyberShield Web

## Sobre o Projeto

O **CyberShield Web** é uma plataforma interativa projetada para ensinar princípios essenciais de segurança na internet de forma gamificada. Através de um jogo estilo "Reigns", os usuários tomam decisões sobre situações reais de segurança digital e aprendem boas práticas para se proteger no ambiente online.

## 🚀 Funcionalidades

- 🎮 **Jogo Educativo**: Estilo "Reigns", onde o usuário toma decisões sobre segurança na internet.
- 🔐 **Módulos de Aprendizado**: Aborda temas como senhas seguras, phishing, privacidade online, segurança em redes públicas, entre outros.
- 📊 **Feedback em Tempo Real**: Cada decisão impacta o aprendizado do usuário e fornece dicas para melhores escolhas.
- 🏆 **Sistema de Progressão**: Os usuários podem acompanhar seu progresso e desbloquear novos níveis de conhecimento.
- 🌐 **Interface Responsiva**: Funciona em diferentes dispositivos para acessibilidade ampla.

## 🛠️ Tecnologias Utilizadas

- **React.js** - Desenvolvimento da interface interativa
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de dados
- **ASP.NET** - Back-end para gerenciar dados do jogo e progresso dos usuários
- **MongoDB** - Banco de dados para armazenar progresso e estatísticas
- **Tailwind CSS** - Estilização moderna e responsiva

## 📌 Como Jogar

1. Acesse o CyberShield Web e faça login.
2. Escolha um dos módulos de aprendizado.
3. Enfrente cenários do jogo e tome decisões sobre segurança na internet.
4. Receba feedback e aprimore seus conhecimentos.
5. Complete os módulos e torne-se um especialista em segurança digital!

## 📥 Como Executar o Projeto Localmente

### Pré-requisitos:
- Node.js instalado
- MongoDB configurado (caso não utilize Docker)

### Passos:
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/cybershield-web.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd cybershield-web
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Configure o banco de dados com Docker:
   ```sh
   docker-compose up -d
   ```
5. Inicie o servidor:
   ```sh
   npm run dev
   ```
6. Acesse o site no navegador:
   ```
   http://localhost:3000
   ```
