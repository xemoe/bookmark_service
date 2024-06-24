"use server";

import multer from 'multer';

const fileFilter = (req, file, cb) => {
    const fileSize = parseInt(req.headers["content-length"]);
    if (!file.originalname.match(/\.(mhtml)$/)) {
        return cb(new Error('Please upload a .mhtml file'));
    } else if (fileSize > 5 * 1024 * 1024) {
        return cb(new Error('File is too large')); // 5MB
    }

    cb(null, true);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = async (req, res) => {
    if (req.method === 'POST') {
        upload.single('file')(req, res, async (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({error: 'Upload failed'});
            }
            req.setTimeout(60 * 5 * 1000); // 5 min
            const file = req.file;
            res.status(200).json({success: true});
        });
    } else {
        res.status(405).json({message: 'Method Not Allowed'});
    }
}

export default handler;