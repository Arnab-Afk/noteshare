"use client";

import { useState } from "react";
import { NotesSidebar } from "@/components/notes-sidebar";
import { NotesListPanel } from "@/components/notes-list-panel";
import { NoteEditor } from "@/components/note-editor";

interface Note {
  id: string;
  title: string;
  content: string;
  preview: string;
  category: string;
  author: string;
  timestamp: string;
}

const sampleNotes: Note[] = [
  {
    id: "1",
    title: "Work on budget report for....",
    content: `Working on a budget report for the next quarter involves planning and forecasting the financial performance of a company or organization. It typically involves analyzing past...

Jeff Bezos is a business magnate and the founder, CEO, and president of Amazon, the world's largest online retailer. Born on January 12, 1964, in Albuquerque, New Mexico, Bezos studied computer science at Princeton University before starting his career on Wall Street.

After several years in the financial industry, Bezos founded Amazon in 1994 as an online bookstore. In the early days of the company, Bezos ran Amazon out of his garage in Seattle, Washington. The company quickly grew and expanded to include a wide range of products beyond books.

As the company grew, Bezos expanded Amazon's product offerings, including electronics, clothing, and home goods. Under his leadership, Amazon has become one of the most successful and influential companies in the world.

• Jeff Bezos was born on January 12, 1964, in Albuquerque, New Mexico
• Bezos worked on Wall Street for several years before founding Amazon
• Amazon started out as an online bookstore, but Bezos expanded it to include a wide range of items.
• Bezos is known for his philanthropy and has donated millions to various causes, including the Bezos Family Foundation`,
    preview: "Working on a budget report for the next quarter involves planning and forecasting the financial performance of a company or organization. It typically involves analyzing past...",
    category: "Working",
    author: "Chandra Handani",
    timestamp: "Today, 15:28",
  },
  {
    id: "2",
    title: "The Remarkable Story of....",
    content: "Jeff Bezos is a business magnate and the founder, CEO, and president of Amazon, the world's largest online retailer. Born on January 12, 1964, in Albuquerque, New Mexico...",
    preview: "have data is represented in visual form. It can also be helpful to make a list of items you want to exclude from the budget or...",
    category: "Blogging",
    author: "Nathalia Anderson",
    timestamp: "Today, 15:28",
  },
  {
    id: "3",
    title: "Grocery shopping after work..",
    content: "Grocery shopping after work can be a convenient way to get your weekly or monthly shopping done. It can be helpful to make a list of items you need to purchase beforehand...",
    preview: "Grocery shopping after work can be a convenient way to get your weekly or monthly shopping done. It can be helpful to make a list of items you need to purchase beforehand...",
    category: "Personal",
    author: "Current User",
    timestamp: "Today, 12:24",
  },
];

export default function Home() {
  const [notes, setNotes] = useState<Note[]>(sampleNotes);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>("1");

  const selectedNote = notes.find((note) => note.id === selectedNoteId) || null;

  const handleNoteUpdate = (id: string, title: string, content: string) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              title,
              content,
              preview: content.substring(0, 150) + "...",
            }
          : note
      )
    );
  };

  const handleNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "Untitled Note",
      content: "",
      preview: "",
      category: "Personal",
      author: "Current User",
      timestamp: "Just now",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setSelectedNoteId(newNote.id);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <NotesSidebar />
      <NotesListPanel
        notes={notes}
        selectedNoteId={selectedNoteId}
        onNoteSelect={setSelectedNoteId}
        onNewNote={handleNewNote}
      />
      <NoteEditor
        note={selectedNote}
        onUpdate={handleNoteUpdate}
      />
    </div>
  );
}
