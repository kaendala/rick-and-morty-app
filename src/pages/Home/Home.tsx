import { useEffect, useState } from 'react';
import { RickAndMortyService } from '../../services/RickAndMorty.Service';
import { Character, Info } from '../../models/interfaces/character.interface';
import Card from '../../components/Card/Card';

import PaginationComp from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import { useAppDispatch } from '../../app/hooks';
import { useSelector } from 'react-redux';
import { lastSelected } from '../../reducer/character.selector';
import { insert, currentSelection } from '../../reducer/characters.actions';
import LastSelected from '../../components/LastSelected/LastSelected';
import s from './Home.module.scss';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>();
  const [page, setPage] = useState<number>(1);
  const [info, setInfo] = useState<Info>();
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const { getAll } = RickAndMortyService;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const lastSelectedList = useSelector(lastSelected);

  useEffect(() => {
    callService(1);
  }, []);

  const callService = (page: number, name?: string) => {
    getAll(page, name)
      .then((res) => {
        setCharacters(res.results);
        setInfo(res.info);
      })
      .catch((e) => setError(e.response.data.error));
  };

  const GoToDetail = (character: Character) => {
    const list = [...lastSelectedList];
    if (list.length === 5) {
      list.pop();
    }
    list.unshift(character);
    dispatch(insert(list));
    dispatch(currentSelection(character));
    navigate('/detail');
  };
  return (
    <>
      <Search
        submit={(e) => {
          setName(e);
          callService(1, e);
        }}></Search>
      {error ? (
        <div className={s.error}> {error}</div>
      ) : (
        <>
          {info && (
            <div className={s.pagination}>
              <PaginationComp
                total={info.count}
                defaultPageSize={20}
                showSizeChanger={false}
                current={page}
                change={(e: number) => {
                  setPage(e);
                  console.log(name, e);
                  callService(e, name);
                }}
              />
            </div>
          )}

          <div className={s.grid}>
            {characters &&
              characters.length > 0 &&
              characters.map((character: Character) => (
                <Card
                  onClick={() => GoToDetail(character)}
                  key={character.id}
                  character={character}
                />
              ))}
          </div>
        </>
      )}
      <LastSelected />
    </>
  );
};
export default Home;
