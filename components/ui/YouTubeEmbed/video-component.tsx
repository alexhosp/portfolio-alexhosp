// To do:
/* 
- Add a loading skelleton for each of the videos
- In order to control loading state use the YouTube API to fetch videos
  */

export const VideoComponent: React.FC<{
  id: string;
  isShort?: boolean;
  title: string;
}> = ({ id, isShort, title }) => {
  const src = `https://www.youtube.com/embed/${id}?modestbranding=1`;

  return (
    <div className='md:flex md:place-content-end'>
      <iframe
        src={src}
        allowFullScreen
        title={title}
        loading='lazy'
        width={isShort ? '255.15' : '560'}
        height={isShort ? '453.6' : '315'}
      />
    </div>
  );
};
