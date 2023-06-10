import s from './Header.module.scss';

const Header = () => {
  return (
    <div className={s.content}>
      <img
        className={s.imageHeader}
        src="/images/header.png"
        alt="rick and morty"
      />
      <img
        className={s.image}
        src="/images/Rick_and_Morty.svg"
        alt="letrero rick and morty"
      />
    </div>
  );
};
export default Header;
