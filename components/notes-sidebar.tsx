"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  FileEdit,
  Calendar,
  Bookmark,
  Settings,
  HelpCircle,
} from "lucide-react";

interface NotesSidebarProps {
  className?: string;
}

export function NotesSidebar({ className }: NotesSidebarProps) {
  const categories = [
    { name: "Personal", icon: "📌", count: 12 },
    { name: "Work", icon: "💼", count: 8 },
    { name: "Blogging", icon: "📝", count: 5 },
  ];

  return (
    <div className={className || "flex h-screen w-60 flex-col bg-background border-r"}>
      {/* User Profile */}
      <div className="flex items-center gap-3 px-4 py-5">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/avatar.jpg" alt="User" />
          <AvatarFallback className="bg-purple-500 text-white font-semibold">CA</AvatarFallback>
        </Avatar>
      </div>

      {/* Navigation */}
      <div className="px-2">
        <div className="space-y-0.5">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sm font-normal h-10 px-3 hover:bg-accent/50"
          >
            <Home className="h-[18px] w-[18px]" />
            Home
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sm font-normal h-10 px-3 bg-purple-100 text-purple-700 hover:bg-purple-100 dark:bg-purple-950/50 dark:text-purple-400"
          >
            <FileEdit className="h-[18px] w-[18px]" />
            My Notes
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sm font-normal h-10 px-3 hover:bg-accent/50"
          >
            <Calendar className="h-[18px] w-[18px]" />
            Calendar
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sm font-normal h-10 px-3 hover:bg-accent/50"
          >
            <Bookmark className="h-[18px] w-[18px]" />
            Bookmarks
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-3 py-2 mt-auto">
        <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          CATEGORIES
        </h2>
        <div className="space-y-0.5">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className="w-full justify-start gap-3 text-sm font-normal h-9 px-3 hover:bg-accent/50"
            >
              <span className="text-base">{category.icon}</span>
              <span className="flex-1 text-left">{category.name}</span>
              <span className="text-xs text-muted-foreground tabular-nums">
                {category.count}
              </span>
            </Button>
          ))}
        </div>
      </div>

      <Separator className="mx-3" />

      {/* Bottom Navigation */}
      <div className="px-2 py-4">
        <div className="space-y-0.5">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sm font-normal h-10 px-3 hover:bg-accent/50"
          >
            <Settings className="h-[18px] w-[18px]" />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sm font-normal h-10 px-3 hover:bg-accent/50"
          >
            <HelpCircle className="h-[18px] w-[18px]" />
            Help Center
          </Button>
        </div>
      </div>
    </div>
  );
}
