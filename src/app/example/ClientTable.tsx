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

const ClientTable = ({ data }: { data: MHTMLFiles[] }) => {
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
                        <TableCell>
                            <a href="#" onClick={copyFilePathToClipboard}
                               className="text-sm me-3"
                               title={file.fullPath}>Copy</a>
                            <span>{file.source}</span>
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