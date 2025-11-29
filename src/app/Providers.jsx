"use client"

import { CountProvider } from "@/context/CountContext";

export default function Providers({children}) {
    return <CountProvider>{children}</CountProvider>
}