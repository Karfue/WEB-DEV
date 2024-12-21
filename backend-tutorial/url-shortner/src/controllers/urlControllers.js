import { nanoid } from 'nanoid';
import URL from '../models/urlModels.js';

async function generateShortUrl(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const shortId = nanoid(8);
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortId });
}

export default generateShortUrl;













































// import shortid from "shortid";

// async function generateShortUrl(req, res) {
//     const { originalUrl } = req.body;
//     const shortUrl = shortid.generate();
//     const newUrl = ({originalUrl, shortUrl});
//     await newUrl.save();
//     res.json({ shortUrl: `http://localhost:3000/${shortUrl}` });
// }

// export default generateShortUrl;