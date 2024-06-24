'use client'

import React from 'react'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import ExampleLayout from "@/app/example/layout";

type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

const payments: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
    },
]

// Let's get uploads file information
// E.g. filename "blog_logrocket_com_f3ef0b60caa579325250ca6644fd6b4929d986eb5b00632d6948057735c63598_e944d17ed8588494c7d544fa6e4e034c3b87a3b237960c9352332fef4b2cd82f_2024_06_24"
// 1. blog_logrocket_com
// 2. f3ef0b60caa579325250ca6644fd6b4929d986eb5b00632d6948057735c63598
// 3. e944d17ed8588494c7d544fa6e4e034c3b87a3b237960c9352332fef4b2cd82f
// 4. 2024_06_24

// Attributes
// 1. source website
// 2. article hash
// 3. title hash
// 4. date

type MHTMLFiles = {
    source: string
    article: string
    title: string
    date: string
}

// Example data
const mhtmlFiles: MHTMLFiles[] = [
    {
        source: "blog_logrocket_com",
        article: "f3ef0b60caa579325250ca6644fd6b4929d986eb5b00632d6948057735c63598",
        title: "e944d17ed8588494c7d544fa6e4e034c3b87a3b237960c9352332fef4b2cd82f",
        date: "2024_06_24",
    },
    {
        source: "blog_logrocket_com",
        article: "f3ef0b60caa579325250ca6644fd6b4929d986eb5b00632d6948057735c63598",
        title: "e944d17ed8588494c7d544fa6e4e034c3b87a3b237960c9352332fef4b2cd82f",
        date: "2024_06_24",
    },
]

const Page = () => {
    return (
        <ExampleLayout>
            <div className="max-w-7xl w-full mx-auto mt-10 py-10">
                <div className="rounded-md border p-8">
                    <h1 className="text-2xl font-bold mb-5">My MHTML Files</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Sources</TableHead>
                                <TableHead>Article ID</TableHead>
                                <TableHead>Title ID</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mhtmlFiles.map((file, index) => (
                                <TableRow key={index}>
                                    <TableCell>{file.source}</TableCell>
                                    <TableCell>{file.article}</TableCell>
                                    <TableCell>{file.title}</TableCell>
                                    <TableCell className="text-right">{file.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </ExampleLayout>
    )
}

export default Page