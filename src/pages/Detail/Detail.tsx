import { useSelector } from 'react-redux';
import { changeSelection } from '../../reducer/character.selector';
import s from './Detail.module.scss';
const Detail = () => {
  const currentCharacter = useSelector(changeSelection);
  if (currentCharacter) {
    return (
      <div className={s.content}>
        <img className={s.image} src={currentCharacter.image} alt="character" />
        <div className={s.info}>
          <p>
            <span>Name:</span>
            <span> {currentCharacter.name}</span>
          </p>
          {currentCharacter.status && (
            <p>
              <span>Status:</span>
              <span> {currentCharacter.status}</span>
            </p>
          )}
          {currentCharacter.species && (
            <p>
              <span>Species:</span>
              <span> {currentCharacter.species}</span>
            </p>
          )}
          {currentCharacter.type && (
            <p>
              <span>Type:</span>
              <span> {currentCharacter.type}</span>
            </p>
          )}
          {currentCharacter.gender && (
            <p>
              <span>Gender:</span>
              <span> {currentCharacter.gender}</span>
            </p>
          )}
          {currentCharacter.location && (
            <div>
              {currentCharacter.location.name && (
                <p>
                  <span>Location:</span>
                  <span> {currentCharacter.location.name}</span>
                </p>
              )}
            </div>
          )}
          {currentCharacter.origin && (
            <div>
              {currentCharacter.origin.name && (
                <p>
                  <span>Origin:</span>
                  <span> {currentCharacter.origin.name}</span>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return <div>No Selected Character</div>;
  }
};
export default Detail;
