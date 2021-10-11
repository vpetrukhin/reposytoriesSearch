export const RepositoryCard = ({ card }) => {
  return (
    <article className="repository">
      {/* вся карточка это ссылка */}
      <h2 className="repository__title">
        {card.owner}/{card.name}
      </h2>
      <p className="repository__description">{card.description}</p>
      <div className="repository__footer">
        {card.lang.length !== 0 && (
          <div className="repository__lang">
            <div
              className="repository__lang-circle"
              style={{ backgroundColor: card.lang[0]?.langColor }}
            />
            <p className="repository__lang-text">{card.lang[0]?.langName}</p>
          </div>
        )}

        <span className="repository__star">{card.stars}</span>
      </div>
    </article>
  );
};
