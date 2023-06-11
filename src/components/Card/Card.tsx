import { Character } from '../../models/interfaces/character.interface';
import s from './Card.module.scss';

type CardProps = {
  character: Character;
  onClick?: () => void;
};

const Card = ({ character, onClick }: CardProps) => {
  return (
    <div
      data-testid={character.name + character.id}
      className={s.card}
      key={character.id}
      onClick={() => onClick && onClick()}>
      <div className={s.title}>
        <p>{character.name}</p>
      </div>
      <img className={s.image} src={character.image} alt="character" />
      <div className={s.info}>
        {character.status && (
          <p>
            <span>Status:</span>
            <span> {character.status}</span>
          </p>
        )}
        {character.species && (
          <p>
            <span>Species:</span>
            <span> {character.species}</span>
          </p>
        )}
        {character.type && (
          <p>
            <span>Type:</span>
            <span> {character.type}</span>
          </p>
        )}
        {character.gender && (
          <p>
            <span>Gender:</span>
            <span> {character.gender}</span>
          </p>
        )}
      </div>
    </div>
  );
};
export default Card;
