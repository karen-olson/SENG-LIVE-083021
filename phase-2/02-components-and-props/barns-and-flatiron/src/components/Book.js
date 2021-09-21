function Book({author,title,likes=0}) {
    return (
      <div className="book-card">
        <h2>Title: {title}</h2>
        <p>Author: {author}</p>
        <p>Likes: {likes}</p>
      </div>
      );
  }
  
export default Book