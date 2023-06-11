import { useSelector } from 'react-redux';
import { lastSelected } from '../../reducer/character.selector';
import Card from '../Card/Card';
import s from './LastSelected.module.scss';

const LastSelected = () => {
  const selectedList = useSelector(lastSelected);
  return (
    <>
      {selectedList && selectedList.length > 0 && (
        <div className={s.lastSelected}>
          <p className={s.title}>Last views</p>
          <div className={s.contentList}>
            {selectedList.map((selected) => (
              <Card key={selected.id} character={selected} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default LastSelected;
