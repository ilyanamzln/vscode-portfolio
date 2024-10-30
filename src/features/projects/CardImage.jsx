/* eslint-disable react/prop-types */
function CardImage({ image, emoji, color, title }) {
  return (
    <div className={`flex h-[25vh] items-center justify-center p-12 ${color}`}>
      {image ? (
        <img src={image} className="max-h-32" alt={title} />
      ) : emoji ? (
        <p className="text-8xl">{emoji}</p>
      ) : (
        <p className="text-8xl">🚫</p>
      )}
    </div>
  );
}

export default CardImage;
