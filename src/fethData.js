export async function apiFetch() {
  let fetchLink = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=lwybxbzSD8wb61dithRPyr0JBJYTMvex6rEjdf1W"
  );
  if (!fetchLink.ok) {
    throw new Error("Faild to Fetch Data");
  } else {
    return fetchLink;
  }
  yy;
}
