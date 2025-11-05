"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  Image as ImageIcon,
  Link,
  Trash2,
  ExternalLink,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";

interface NoteEditorProps {
  note: {
    id: string;
    title: string;
    content: string;
    category: string;
    author: string;
    timestamp: string;
  } | null;
  onUpdate: (id: string, title: string, content: string) => void;
}

export function NoteEditor({ note, onUpdate }: NoteEditorProps) {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (note) {
      onUpdate(note.id, value, content);
    }
  };

  const handleContentChange = (value: string) => {
    setContent(value);
    if (note) {
      onUpdate(note.id, title, value);
    }
  };

  if (!note) {
    return (
      <div className="flex h-screen flex-1 items-center justify-center bg-background">
        <div className="text-center">
          <h3 className="text-lg font-medium text-muted-foreground">
            Select a note to view
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose a note from the sidebar to start editing
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-1 flex-col bg-background">
      {/* Header */}
      <div className="border-b px-6 py-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-purple-600 border-purple-400 font-normal px-2.5 py-0.5">
              {note.category}
            </Badge>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">{note.author}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{note.timestamp}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Trash2 className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 overflow-auto">
        <div className="mx-auto max-w-4xl px-12 py-8">
          {/* Title */}
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="mb-8 w-full border-none bg-transparent text-4xl font-bold outline-none placeholder:text-muted-foreground/50"
            placeholder="Untitled"
          />

          {/* Toolbar */}
          <div className="mb-6 flex items-center gap-0.5 rounded-lg border bg-card px-1 py-1 w-fit">
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent">
              <Bold className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent">
              <Italic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent">
              <Underline className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="mx-1 h-6" />
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent">
              <AlignLeft className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="mx-1 h-6" />
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent">
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent">
              <Link className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <Textarea
              value={content}
              onChange={(e) => handleContentChange(e.target.value)}
              className="min-h-[500px] resize-none border-none text-base leading-7 focus-visible:ring-0 p-0 shadow-none"
              placeholder="Start writing..."
            />
          </div>

          {/* Info Cards */}
          {content.includes("Jeff Bezos") && (
            <>
              <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950">
                <div className="flex gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed text-foreground">
                      As the company grew, Bezos expanded Amazon&apos;s product offerings, including electronics, clothing, and home goods. Under his leadership...
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-lg border p-4">
                <h4 className="mb-3 text-sm font-medium">
                  Jeff Bezos is a business magnate and the founder, CEO, and president of Amazon, the world&apos;s largest online retailer. Born on January 12, 1964, in Albuquerque, New Mexico...
                </h4>
                <ul className="mb-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Jeff Bezos was born on January 12, 1964, in Albuquerque, New Mexico</li>
                  <li>• Bezos worked on Wall Street for several years before founding Amazon</li>
                  <li>• Amazon started out as an online bookstore, but Bezos expanded it to include a wide range of items.</li>
                  <li>• Bezos is known for his philanthropy and has donated millions to various causes, including the Bezos Family Foundation</li>
                </ul>
                <Button variant="ghost" className="gap-2 text-purple-600 hover:text-purple-700">
                  <ExternalLink className="h-4 w-4" />
                  Check wikipedia source
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
