export function getVideo(link) {
  let newLink = link.replace("watch?v=", "embed/");
  let regEx =
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  let vidId = newLink.match(regEx)[1];
  return vidId;
}
