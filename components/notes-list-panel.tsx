"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Note {
  id: string;
  title: string;
  preview: string;
  category: string;
  timestamp: string;
}

interface NotesListPanelProps {
  notes: Note[];
  selectedNoteId: string | null;
  onNoteSelect: (noteId: string) => void;
  onNewNote: () => void;
}

export function NotesListPanel({
  notes,
  selectedNoteId,
  onNoteSelect,
  onNewNote,
}: NotesListPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen w-80 flex-col border-r bg-background">
      {/* Header */}
      <div className="border-b px-5 py-4">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold">MY NOTES</h1>
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7 ml-auto"
            onClick={onNewNote}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-3 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search notes"
            className="pl-9 text-sm h-9 bg-accent/30 border-0 focus-visible:ring-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Notes List */}
      <ScrollArea className="flex-1">
        <div className="p-2">
          {filteredNotes.map((note) => (
            <button
              key={note.id}
              onClick={() => onNoteSelect(note.id)}
              className={cn(
                "w-full rounded-lg p-4 text-left transition-all hover:bg-accent mb-1",
                selectedNoteId === note.id &&
                  "bg-accent border border-purple-200 dark:border-purple-800"
              )}
            >
              <div className="mb-2">
                <h3 className="text-sm font-medium line-clamp-1 mb-1">
                  {note.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {note.preview}
                </p>
              </div>
              <div className="flex items-center justify-between gap-2">
                <Badge
                  variant="outline"
                  className={cn(
                    "text-xs px-2 py-0 h-5 font-normal",
                    note.category === "Working" && "border-orange-400 text-orange-600 dark:text-orange-400",
                    note.category === "Blogging" && "border-blue-400 text-blue-600 dark:text-blue-400",
                    note.category === "Personal" && "border-purple-400 text-purple-600 dark:text-purple-400"
                  )}
                >
                  {note.category}
                </Badge>
                <span className="text-xs text-muted-foreground tabular-nums">
                  {note.timestamp}
                </span>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
