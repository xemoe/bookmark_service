import React from "react";

export default function ExampleLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}