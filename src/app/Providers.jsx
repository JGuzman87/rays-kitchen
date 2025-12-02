"use client"

import { CountProvider } from "@/context/CountContext";
import { ToastProvider } from "@/context/ToastContext";


export default function Providers({children}) {
    return (
        <ToastProvider>
            <CountProvider>
                {children}
            </CountProvider>
        </ToastProvider>
    )
}