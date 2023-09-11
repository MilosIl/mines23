import './card.css';

interface CardProps {
  title: string;
  body: string;
}

const Card = ({ title, body }: CardProps) => {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <p className="card-body">{body}</p>
    </div>
  );
};

export default Card;
