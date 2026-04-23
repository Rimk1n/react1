import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function DrinkPage() {
  const { id } = useParams();
  const [drink, setDrink] = useState(null);
  const [comment, setComment] = useState([]);
  const [commenttext, setCommentText] = useState("");

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const postResponse = await axios.get(
          `https://22d610f8eb606a26.mokky.dev/drinks/${id}`,
        );
        setDrink(postResponse.data);

        const commentResponse = await axios.get(
          `https://22d610f8eb606a26.mokky.dev/comments?productId=${id}`,
        );
        setComment(commentResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDrinks();
  }, [id]);

  const handleSendComment = async (e) => {
    e.preventDefault();

    if (!commenttext.trim()) return;

    try {
      const response = await axios.post(
        "https://22d610f8eb606a26.mokky.dev/comments",
        {
          productId: id,
          text: commenttext,
          date: new Date().toLocaleString(),
        },
      );
      setComment([...comment, response.data]);
      setCommentText("");
    } catch (error) {
      console.log(error);
    }
  };

  if (!drink) {
    return;
  }

  return (
    <div>
      <Header />

      <div className="drinkPage">
        <div className="container">
          <a href="/">← Назад</a>
          <img src={drink.image} alt={drink.name} width="300" height="300" />
          <h1>{drink.name}</h1>
          <h2>{drink.price} ₸</h2>
          <button className="addToCart">В корзину</button>
        </div>
      </div>

      <div className="comments container">
        <h3 className="commentsTitle">Комментарий</h3>

        <form onSubmit={handleSendComment}>
          <textarea
            className="commentInput"
            value={commenttext}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Введите коммент"
          ></textarea>
          <br />
          <button className="commentBtn" type="submit">
            Отправить
          </button>
        </form>

        <div className="commentList">
          {comment.map((comm) => (
            <div key={comm.id} className="commentCard">
              <p className="commentText">{comm.text}</p>
              <h4 className="commentDate">{comm.date}</h4>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DrinkPage;
