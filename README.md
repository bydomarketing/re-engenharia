# RE Engenharia Elétrica - Website Institucional

Este repositório contém o código-fonte do portal institucional da **RE Engenharia Elétrica**, desenvolvido com uma interface moderna, responsiva e de alta performance para apresentação dos serviços e do portfólio de engenharia elétrica de potência.

## 🛠️ Tecnologias Utilizadas

- **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6](https://vite.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Animações:** [Motion](https://motion.dev/)

## 🚀 Como Executar Localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** (versão LTS recomendada) instalado em sua máquina.

1. **Clonar o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd re-engenharia
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O projeto estará acessível localmente em `http://localhost:3000` (ou na porta configurada).

## 📦 Como Gerar o Build de Produção

Para gerar os arquivos estáticos prontos para publicação em servidores de hospedagem como a Hostinger:

```bash
npm run build
```

O comando irá otimizar e compilar todos os arquivos do projeto para o diretório `/dist`.
