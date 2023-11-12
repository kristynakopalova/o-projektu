import './style.css';
export const ONas = ({ name, description, link, image }) => {
  return (
    <>
      <div className='profile'>
        <h1 className='profile__name'>{name}</h1>
        <h2 className='profile__about'>O mně:</h2>
        <p className='profile__description'>{description}</p>
        <img src={image} alt={name} className="profile__photo" />
        <a href={link} target="_blank">
          Odkaz na Github
        </a>
      </div>
    </>
  );
};
