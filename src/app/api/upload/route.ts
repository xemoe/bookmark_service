import {NextRequest} from 'next/server';
import {writeFile} from 'fs/promises';
import path from 'path';
import * as fs from 'fs';

const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, {recursive: true});
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req: NextRequest): Promise<Response> {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File | null;
        if (!file) {
            return Response.json({error: 'No file uploaded'}, {status: 400});
        }

        const fileSize = file.size;
        const fileName = file.name;
        if (!fileName.match(/\.(mhtml)$/)) {
            return Response.json({error: 'Please upload a .mhtml file'}, {status: 400});
        }
        if (fileSize > 5 * 1024 * 1024) {
            return Response.json({error: 'File is too large'}, {status: 400});
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = path.join(uploadDir, fileName);
        await writeFile(filePath, buffer);
        return Response.json({
                message: 'Upload successful', file: {name: fileName, size: fileSize, path: filePath}
            }, {status: 200}
        );
    } catch (error) {
        console.error('Upload error:', error);
        return Response.json({error: 'Upload failed'}, {status: 500});
    }
}