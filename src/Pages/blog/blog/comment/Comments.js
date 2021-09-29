import { useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import Comment from "./Comment";

const Comments = ({ slug }) => {
  const { data: comments, loading } = useFetch("/api/blog-comment/" + slug);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const comment = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_API_URL + "/api/blog-comment/" + slug, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          comments.unshift(data.comment);
          setResponse(data.message);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setError(data.errors);
        }
      })
      .catch((err) => setError(err));

    setTimeout(() => {
      setError(null);
      setResponse(null);
    }, 5000);
  };
  return (
    <div className="comment-section">
      <div className="comment-form">
        <div className="sec-title">
          <h3>Leave A Comment</h3>
        </div>
        <div className="cont-form-sec">
          {response && (
            <div className="alert alert-success">
              <span>{response}</span>
            </div>
          )}
          <form onSubmit={comment}>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {error && <p className="text-danger">{error.name}</p>}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && <p className="text-danger">{error.email}</p>}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-field">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  >
                    {message}
                  </textarea>
                  {error && <p className="text-danger">{error.message}</p>}
                </div>
              </div>
              <div className="col-lg-12">
                <input type="submit" name="submit" value="Post Comment" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="comment-list-sec mt-5">
        <div className="sec-title">
          <h3>Comments {comments && comments.length}</h3>
        </div>
        <ul className="comment-list">
          {loading && <div className="loader"></div>}
          {comments?.map((comment) => (
            <Comment loading={loading} comment={comment} key={comment.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
