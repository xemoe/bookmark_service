const fs = require('fs')

type MHTMLFiles = {
    source: string
    size: number
    article: string
    title: string
    date: string
    fullPath?: string
}

let mhtmlFiles: MHTMLFiles[] = []
const basePath = process.cwd()
const uploadsPath = `${basePath}/uploads`
fs.readdir(uploadsPath, (err: any, files: any) => {
    if (err) {
        console.error("Error reading directory:", err)
        return
    }

    // sort files by date
    files.sort((a: any, b: any) => {
        return fs.statSync(`${uploadsPath}/${b}`).mtime.getTime() - fs.statSync(`${uploadsPath}/${a}`).mtime.getTime()
    });

    files.forEach((file: any) => {
        if (!file.endsWith(".mhtml")) {
            return
        }

        const fileParts = file.split("_")
        const date_day = fileParts.pop()
        const date_month = fileParts.pop()
        const date_year = fileParts.pop()
        const date = `${date_year}-${date_month}-${date_day}`.replace(".mhtml", "")
        const title = fileParts.pop()
        const article = fileParts.pop()
        const source = fileParts.join(".")

        // Get file size
        const stats = fs.statSync(`${uploadsPath}/${file}`);
        const fileSizeInBytes = stats.size;
        const fileSizeInKilobytes = Math.round(fileSizeInBytes / 1024);
        const fileModified = stats.mtime;
        const fileModifiedFormatted = fileModified.toISOString().replace("T", " ").replace("Z", "")

        // Debug
        console.log("File:", file)

        // Add the file information to the list
        mhtmlFiles.push({
            source: source,
            size: fileSizeInKilobytes,
            article: article,
            title: title,
            date: fileModifiedFormatted,
            fullPath: `${uploadsPath}/${file}`
        })
    })
})

export async function GET(request: Request, response: Response) {
    return Response.json(mhtmlFiles)
}