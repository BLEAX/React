import { use } from "react";

function Note({ id, shouldIncludeAuthor }) {
  // fetching data asynchronously
  const note = use(fetchNote(id));
  let byline = null;
  if (shouldIncludeAuthor) {
    // can be used inside if statements
    // Because `use` is inside a conditional block, we avoid blocking
    // unncessarily when `shouldIncludeAuthor` is false.
    const author = use(fetchNoteAuthor(note.authorId));
    byline = <h2>{author.displayName}</h2>;
  }
  return (
    <div>
      <h1>{note.title}</h1>
      {byline}
      <section>{note.body}</section>
    </div>
  );
}

export default Note;
