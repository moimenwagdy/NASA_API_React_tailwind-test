export async function apiFetch() {
  let fetchLink = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=lwybxbzSD8wb61dithRPyr0JBJYTMvex6rEjdf1W"
  );
  let fetchedData = await fetchLink.json();
  if (!fetchLink.ok) {
    throw new Error("Faild to Fetch Data");
  } else {
    return fetchedData;
  }
  yy;
}
