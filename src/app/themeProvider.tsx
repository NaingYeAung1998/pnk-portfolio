"use client"

import * as React from "react"
import { HeroUIProvider } from "@heroui/react";

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof HeroUIProvider>) {
    return <HeroUIProvider {...props}>{children}</HeroUIProvider>
}