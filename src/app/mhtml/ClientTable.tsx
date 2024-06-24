'use client';

import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";

type MHTMLFiles = {
    source: string
    size: number
    article: string
    title: string
    date: string
    fullPath?: string
}

const copyFilePathToClipboard = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const text = e.currentTarget.getAttribute('title');
    if (!navigator.clipboard) {
        console.warn('Clipboard API not available');
        return;
    }
    navigator.clipboard.writeText(text || '')
    .then(() => {
        console.log('Copied to clipboard:', text);
        // Optionally, add some visual feedback here
    })
    .catch(err => {
        console.error('Failed to copy:', err);
    });
}

const ClientTable = ({data}: { data: MHTMLFiles[] }) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Sources</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Article ID</TableHead>
                    <TableHead>Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((file, index) => (
                    <TableRow key={index}>
                        <TableCell title={file.source}>
                            <div className="flex items-center space-x-2 max-w-full">
                                <a href="#"
                                   onClick={copyFilePathToClipboard}
                                   className="flex-shrink-0"
                                   title={file.fullPath}>
                                    <img src="/clipboard.svg" alt="Copy" className="h-4 w-4"/>
                                </a>
                                <span className="truncate flex-grow min-w-0" title={file.source}>
                                    {file.source}
                                </span>
                            </div>
                        </TableCell>
                        <TableCell>{file.size}</TableCell>
                        <TableCell>{file.article}</TableCell>
                        <TableCell>{file.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default ClientTable;