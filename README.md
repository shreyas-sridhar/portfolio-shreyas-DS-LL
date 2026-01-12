# 0x00: Linked List Portfolio

> "A data structure implementation of a personal portfolio."

A minimalist, vertically structured personal website inspired by a **Singly Linked List**. Each section (About, Skills, Projects) acts as a **Node**, connected by a traversal line with interactive pointers.

Designed with a **Dark Academic** aesthetic (Charcoal, Off-white, Muted Teal) and built for performance.

## ⚡ Features

*   **Data Structure Metaphor**: Vertical layout representing `Head -> Node -> Node -> NULL`.
*   **Interactive Traversal**: Clickable `ptr->next` pointers to smooth-scroll between nodes.
*   **Reactive Animations**:
    *   Nodes fade in and scale on hover.
    *   The "connection line" draws itself as you scroll.
*   **Responsive**: Looks great on Desktop and Mobile.
*   **Dockerized**: Ready to deploy anywhere.

## 🛠️ Tech Stack

*   **Core**: React 18, TypeScript, Vite
*   **Styling**: Tailwind CSS
*   **Animation**: Framer Motion
*   **Icons**: Custom SVG

## 🚀 Getting Started

### Local Development

```bash
# 1. Clone the repo
git clone https://github.com/shreyas-sridhar/portfolio.git

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

### Docker

You still need to get the files first:

```bash
# 1. Clone the repo
git clone https://github.com/shreyas-sridhar/portfolio.git
cd portfolio

# 2. Run with Docker
docker-compose up
```

## 📂 Project Structure

*   `src/components/Node.tsx`: The generic Node component with scroll logic.
*   `src/components/HeadNode.tsx`: The Hero section (HEAD).
*   `src/App.tsx`: Main configuration file. **Edit this to change content.**

## 👨‍💻 Author

**Shreyas Sridhar**
*   Aspiring Backend Developer | System Integration Expert
*   [GitHub](https://github.com/shreyas-sridhar)
*   [LinkedIn](https://www.linkedin.com/in/shreyas-sridhar7/)

---
*0xNULL*
