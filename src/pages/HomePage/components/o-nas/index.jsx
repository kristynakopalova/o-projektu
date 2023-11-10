import './style.css';
export const ONas = ({ name, description, link, image }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>O mně:</h2>
      <p>{description}</p>
      <a href={link} target="_blank">
        Odkaz na Github
      </a>
      <img src={image} alt={name} className="photo" />
    </>
  );
};
