import React from "react";

export default function MhtmlLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}