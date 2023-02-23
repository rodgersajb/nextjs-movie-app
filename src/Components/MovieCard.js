import Image from "next/image";

function MovieCard(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
        alt={props.overview}
        width={500}
        height={500}
      />
      <p>{props.overview}</p>
    </>
  );
}

export default MovieCard;
