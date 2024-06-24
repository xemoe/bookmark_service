import "@/styles/globals.css"
import React from "react";

export default function MainLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
}