'use client'

import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
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

const Page = () => {
    return (
        <ExampleLayout>
            <div className="max-w-7xl w-full mx-auto mt-10 py-10">
                <div className="rounded-md border p-8">
                    <h1 className="text-2xl font-bold mb-5">Payments</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Invoice</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {payments.map((payment) => (
                                <TableRow key={payment.id}>
                                    <TableCell className="font-medium">{payment.id}</TableCell>
                                    <TableCell>{payment.status}</TableCell>
                                    <TableCell>{payment.email}</TableCell>
                                    <TableCell className="text-right">${payment.amount}</TableCell>
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