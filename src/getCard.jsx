// Напишіть функцію, яка бере об’єкт із заголовком та/або текстом 
// і повертає готовий для відтворення jsx картки Bootstrap із заголовком та текстом у відповідних тегах.
// Якщо не вказано заголовок або текст, ці теги не повинні відображатися. Якщо немає тексту І заголовка, поверніть null.
// getCard({ title: 'привіт', text: 'як справи?' }) =>
// <div className="card">
// <div className="card-body">
// <h4 className="card-title">привіт</h4>
// <p className="card-text">як справи?</p>
// </div>
// </div>


const getCard = ({ title, text }) => {
  return title || text ? (
    <div className="card">
      <div className="card-body">
        { title ? <h4 className="card-title">{title}</h4> : null }
        { text ? <p className="card-text">{text}</p> : null } 
      </div>
    </div>
  ) : null;
}
export default getCard;