export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Parameter url diperlukan' });
  }

  const apiUrl = `https://api.ryzumi.vip/api/downloader/ytmp4?url=${encodeURIComponent(url)}&quality=1080`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Gagal mengambil data dari API', detail: err.message });
  }
}
