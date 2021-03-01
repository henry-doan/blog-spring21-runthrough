import React from "react";

const PageEdit = ({ page }) => {
  const { id, title, author, body } = page;
  return (
    <>
      <h1>Edit Page</h1>
      <form action={`/pages/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Title</p>
        <input defaultValue={title} name="page[title]" />
        <p>Author </p>
        <input defaultValue={author} name="page[author]" />
        <p>Body</p>
        <textarea defaultValue={body} name="page[body]" />
        <br />
        <button type="submit">Update Page</button>
      </form>
    </>
  );
};

export default PageEdit;