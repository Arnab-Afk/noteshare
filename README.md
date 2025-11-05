# NoteShare Frontend

A modern, beautiful notes application built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

✨ **Modern UI Design** - Clean, intuitive interface inspired by popular note-taking apps  
🎨 **Dark/Light Mode** - Seamless theme switching with persistent preferences  
📝 **Rich Text Editor** - Format your notes with bold, italic, underline, and more  
🔍 **Search Functionality** - Quickly find notes by title  
📁 **Categories** - Organize notes with custom categories (Personal, Work, Blogging)  
🎯 **Real-time Updates** - Notes update instantly as you type  
💅 **Beautiful Components** - Built with shadcn/ui for consistent, accessible design

## UI Components Used

- **Button** - Interactive buttons with multiple variants
- **Input** - Text input fields with search functionality
- **Textarea** - Multi-line text editor for note content
- **Card** - Container components for note previews
- **Avatar** - User profile images with fallbacks
- **Badge** - Category labels and tags
- **Scroll Area** - Smooth scrolling for note lists
- **Separator** - Visual dividers between sections
- **Sidebar** - Navigation and note list panel

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, pnpm, or bun

### Installation

1. Install dependencies:
```bash
npm install
# or
bun install
```

2. Run the development server:
```bash
npm run dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
frontend/
├── app/
│   ├── page.tsx          # Main application page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles and Tailwind config
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── notes-sidebar.tsx # Left sidebar with navigation and notes list
│   ├── note-editor.tsx   # Main note editor component
│   └── theme-toggle.tsx  # Dark/light mode switcher
├── lib/
│   └── utils.ts          # Utility functions (cn, etc.)
└── hooks/
    └── use-mobile.ts     # Mobile detection hook
```

## Features Breakdown

### Notes Sidebar
- User profile section
- Navigation menu (Home, My Notes, Calendar, Bookmarks)
- Search bar for filtering notes
- Scrollable notes list with preview
- Category organization
- Settings and Help links

### Note Editor
- Note metadata (category, author, timestamp)
- Rich text formatting toolbar
- Auto-save functionality
- Theme toggle in header
- Context-aware content (highlights, info cards)
- Wikipedia source integration example

### Responsive Design
- Mobile-friendly layout
- Adaptive sidebar
- Touch-optimized controls

## Customization

### Adding New Categories
Edit the `categories` array in `components/notes-sidebar.tsx`:

```tsx
const categories = [
  { name: "Personal", icon: "📌", count: 12 },
  { name: "Work", icon: "💼", count: 8 },
  { name: "Your Category", icon: "🎯", count: 0 },
];
```

### Styling
The application uses Tailwind CSS with shadcn/ui. Customize colors in `app/globals.css`.

## Building for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

## Next Steps

- [ ] Add backend API integration
- [ ] Implement user authentication
- [ ] Add collaborative editing
- [ ] File attachments support
- [ ] Export notes (PDF, Markdown)
- [ ] Mobile app version

## Learn More

To learn more about Next.js and the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT License - Feel free to use this project for learning or your own applications!
