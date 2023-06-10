import { useEffect, useState } from 'react';
import { RickAndMortyService } from '../../services/RickAndMorty.Service';
import { Character, Info } from '../../models/interfaces/character.interface';
import Card from '../../components/Card/Card';
import s from './Home.module.scss';
import PaginationComp from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>();
  const [page, setPage] = useState<number>(1);
  const [info, setInfo] = useState<Info>();
  const [error, setError] = useState('');
  const { getAll, filter } = RickAndMortyService;
  useEffect(() => {
    getAll(page)
      .then((res) => {
        setCharacters(res.results);
        setInfo(res.info);
      })
      .catch((e) => setError(e.response.data.error));
  }, [page, getAll]);

  const changeName = (name: string) => {
    filter(name)
      .then((res) => {
        setCharacters(res.results);
        setInfo(res.info);
        setError('');
      })
      .catch((e) => setError(e.response.data.error));
  };

  return (
    <>
      <Search submit={(e) => changeName(e)}></Search>
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
                change={(e: number) => setPage(e)}
              />
            </div>
          )}

          <div className={s.grid}>
            {characters &&
              characters.length > 0 &&
              characters.map((character: Character) => (
                <Card key={character.id} character={character} />
              ))}
          </div>
        </>
      )}
    </>
  );
};
export default Home;