"""Write media/videos.json from the DomZaddy YouTube channel feed (run daily by GitHub Actions)."""
import json
import os
import urllib.request
import xml.etree.ElementTree as ET

FEED = "https://www.youtube.com/feeds/videos.xml?channel_id=UCWpydqCyWxwpH_ggKQOP9HA"
NS = {"a": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015", "media": "http://search.yahoo.com/mrss/"}
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "media", "videos.json")

root = ET.fromstring(urllib.request.urlopen(urllib.request.Request(FEED, headers={"User-Agent": "domzaddy-site"}), timeout=30).read())
videos = []
for e in root.findall("a:entry", NS):
    link = e.find("a:link", NS).get("href")
    stats = e.find("media:group/media:community/media:statistics", NS)
    videos.append({"id": e.find("yt:videoId", NS).text, "title": e.find("a:title", NS).text, "published": e.find("a:published", NS).text[:10],
                   "short": "/shorts/" in link, "url": link, "views": int(stats.get("views")) if stats is not None else None})
if videos:
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(videos, f, ensure_ascii=False, indent=1)
print(len(videos), "videos")
