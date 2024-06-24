import React from 'react';
import ExampleLayout from "@/app/example/layout";
import ClientTable from './ClientTable';  // Import the new client component

type MHTMLFiles = {
    source: string
    size: number
    article: string
    title: string
    date: string
    fullPath?: string
}

export const revalidate = 5 // Revalidate every 5 seconds
export const fetchCache = 'force-no-store' // Disable caching

async function getMHTMLFiles(): Promise<MHTMLFiles[]> {
    const response = await fetch('http://localhost:3001/api/files')
    if (!response.ok) {
        throw new Error('Failed to fetch data from API')
    }

    return response.json()
}

import { Suspense } from 'react';

const LoadingComponent = () => (
    <div>Loading...</div>
);

const Page = async () => {
    return (
        <ExampleLayout>
            <div className="max-w-7xl w-full mx-auto mt-10 py-10">
                <div className="rounded-md border p-8">
                    <h1 className="text-2xl font-bold mb-5">My MHTML Files</h1>
                    <Suspense fallback={<LoadingComponent />}>
                        <DataComponent />
                    </Suspense>
                </div>
            </div>
        </ExampleLayout>
    )
}

const DataComponent = async () => {
    const data = await getMHTMLFiles()
    return <ClientTable data={data} />
}

export default Page;