import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const ArticlePage = () => {
  const { id } = useParams();
  const url = `http://localhost:4000/articles/${id}`;

  const { data: article, isPending: loading, error } = useFetch(url);

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate.push("/");
      }, 2000);
    }
  }, [error, navigate]);
  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <h1>Article - {id}</h1>
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
          <img src={article.imgUrl} alt="" />
        </div>
      )}
    </div>
  );
};
