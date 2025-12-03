"use client"

import { CountProvider } from "@/context/CountContext";
import { ToastProvider } from "@/context/ToastContext";



export default function Providers({children}) {
    return (

            <CountProvider>
                <ToastProvider>
                    {children}
                </ToastProvider>
            </CountProvider>

    )
}