"use client"

import * as React from "react"
import { useRouter } from "next/router"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import {
  FileText,
  Home,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
} from "lucide-react"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const [isClosing, setIsClosing] = React.useState(false)
  const router = useRouter()
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        if (open) {
          handleClose()
        } else {
          setOpen(true)
          setIsClosing(false)
        }
      }
      if (e.key === "Escape" && open) {
        e.preventDefault()
        handleClose()
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open])

  // Prevent body scrolling when menu is open
  React.useEffect(() => {
    if (open) {
      // Store the current scroll position
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }

    // Cleanup function
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [open])

  // Auto-focus the input when the menu opens
  React.useEffect(() => {
    if (open && !isClosing && inputRef.current) {
      // Small delay to ensure the modal is fully rendered
      setTimeout(() => {
        inputRef.current?.focus()
      }, 50)
    }
  }, [open, isClosing])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setOpen(false)
      setIsClosing(false)
    }, 200) // Match animation duration
  }

  const runCommand = React.useCallback((command: () => unknown) => {
    handleClose()
    setTimeout(() => {
      command()
    }, 200)
  }, [])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleMouseLeave = () => {
    // Reset any hover states when leaving the command menu
    const commandItems = document.querySelectorAll('[cmdk-item]')
    commandItems.forEach((item) => {
      item.removeAttribute('data-highlighted')
    })
  }

  return (
    <>
      {open && (
        <div 
          className="fixed inset-0 z-[70] bg-[var(--background)]/50 flex items-center justify-center p-4 transition-opacity duration-200 ease-out backdrop-blur-xs"
          style={{ 
            animation: isClosing ? 'fade-out 200ms ease-in' : 'fade-in 200ms ease-out',
            opacity: isClosing ? 0 : 1
          }}
          onClick={handleBackdropClick}
        >
          <div 
            className="bg-[var(--background)] border border-[var(--foreground)]/15 rounded-xl w-full max-w-md overflow-hidden shadow-2xl"
            style={{ 
              animation: isClosing ? 'zoom-out 200ms ease-in' : 'zoom-in 200ms ease-out',
              opacity: isClosing ? 0 : 1,
              transform: isClosing ? 'scale(0.95)' : 'scale(1)'
            }}
            onMouseLeave={handleMouseLeave}
          >
            <CommandPrimitive className="w-full">
              <div className="flex items-center border-b border-[var(--foreground)]/15 px-4 py-1">
                <Search className="mr-3 h-4 w-4 shrink-0 opacity-50" />
                <CommandPrimitive.Input 
                  ref={inputRef}
                  placeholder="Search for a section or page..." 
                  className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-[var(--foreground)]/50 text-[var(--foreground)] tracking-[-0.01em]"
                />
              </div>
              
              <CommandPrimitive.List className="max-h-[300px] overflow-y-auto p-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--foreground)]/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[var(--foreground)]/30">
                <CommandPrimitive.Empty className="py-6 text-center text-sm text-[var(--foreground)]/50">
                  No results found.
                </CommandPrimitive.Empty>
                
                <CommandPrimitive.Group heading="Navigation" className="text-[var(--foreground)] [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[var(--foreground)]/50">
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => router.push("/"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <Home className="mr-3 h-4 w-4 opacity-60" />
                    <span>Home</span>
                  </CommandPrimitive.Item>
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => router.push("/#about"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <User className="mr-3 h-4 w-4 opacity-60" />
                    <span>About</span>
                  </CommandPrimitive.Item>
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => router.push("/#experience"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <Briefcase className="mr-3 h-4 w-4 opacity-60" />
                    <span>Experience</span>
                  </CommandPrimitive.Item>
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => router.push("/#education"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <GraduationCap className="mr-3 h-4 w-4 opacity-60" />
                    <span>Education</span>
                  </CommandPrimitive.Item>
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => router.push("/#projects"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <FileText className="mr-3 h-4 w-4 opacity-60" />
                    <span>Projects</span>
                  </CommandPrimitive.Item>
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => router.push("/#research"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <Search className="mr-3 h-4 w-4 opacity-60" />
                    <span>Research</span>
                  </CommandPrimitive.Item>
                </CommandPrimitive.Group>
                
                <CommandPrimitive.Separator className="-mx-1 h-px bg-[var(--foreground)]/15 my-2" />
                
                <CommandPrimitive.Group heading="Case Studies" className="text-[var(--foreground)] [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[var(--foreground)]/50">
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => router.push("/case-studies/patchly"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <FileText className="mr-3 h-4 w-4 opacity-60" />
                    <span>Patchly</span>
                  </CommandPrimitive.Item>
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => router.push("/case-studies/questporter"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <FileText className="mr-3 h-4 w-4 opacity-60" />
                    <span>Questporter</span>
                  </CommandPrimitive.Item>
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => router.push("/case-studies/cnsimulator"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <FileText className="mr-3 h-4 w-4 opacity-60" />
                    <span>CNSimulator</span>
                  </CommandPrimitive.Item>
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => router.push("/case-studies/deenboard"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <FileText className="mr-3 h-4 w-4 opacity-60" />
                    <span>Deenboard</span>
                  </CommandPrimitive.Item>
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => router.push("/case-studies/revett"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <FileText className="mr-3 h-4 w-4 opacity-60" />
                    <span>Revett</span>
                  </CommandPrimitive.Item>
                </CommandPrimitive.Group>
                
                <CommandPrimitive.Separator className="-mx-1 h-px bg-[var(--foreground)]/15 my-2" />
                
                <CommandPrimitive.Group heading="Social" className="text-[var(--foreground)] [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[var(--foreground)]/50">
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => window.open("https://github.com/rawsabsaid", "_blank"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <Github className="mr-3 h-4 w-4 opacity-60" />
                    <span>GitHub</span>
                    <span className="ml-auto text-xs tracking-widest text-[var(--foreground)]/50">↗</span>
                  </CommandPrimitive.Item>
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => window.open("https://linkedin.com/in/rawsabsaid", "_blank"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <Linkedin className="mr-3 h-4 w-4 opacity-60" />
                    <span>LinkedIn</span>
                    <span className="ml-auto text-xs tracking-widest text-[var(--foreground)]/50">↗</span>
                  </CommandPrimitive.Item>
                  <CommandPrimitive.Item 
                    onSelect={() => runCommand(() => window.open("mailto:rawsab.said@gmail.com", "_blank"))}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-sm outline-none hover:bg-[var(--foreground)]/15 aria-selected:bg-[var(--foreground)]/15 aria-selected:bg-opacity-70 aria-selected:text-[var(--foreground)] transition-colors duration-150 font-acuminpro tracking-[-0.01em]"
                  >
                    <Mail className="mr-3 h-4 w-4 opacity-60" />
                    <span>Email</span>
                    <span className="ml-auto text-xs tracking-widest text-[var(--foreground)]/50">↗</span>
                  </CommandPrimitive.Item>
                </CommandPrimitive.Group>
              </CommandPrimitive.List>
            </CommandPrimitive>
            
            <div 
              className="flex items-center justify-end p-3 border-t border-[var(--foreground)]/15 font-google-sans-code tracking-[-0.025em] cursor-pointer hover:bg-[var(--foreground)]/5 transition-colors duration-150"
              onClick={handleClose}
            >
              <span className="text-[var(--foreground)]/50 text-xs">
                PRESS <span className="text-[var(--foreground)]">ESC</span> TO CLOSE
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


