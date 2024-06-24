'use client';

import { useState, useEffect } from 'react';
import ExampleLayout from "@/app/example/layout";
import ClientTable from './ClientTable';

const Page = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/files');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <ExampleLayout>
            <div className="max-w-7xl w-full mx-auto mt-10 py-10">
                <div className="rounded-md border p-8">
                    <h1 className="text-2xl font-bold mb-5">My MHTML Files</h1>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        <ClientTable data={data} />
                    )}
                </div>
            </div>
        </ExampleLayout>
    );
};

export default Page;