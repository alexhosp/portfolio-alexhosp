// To do:
/* 
- Layout for Desktop has to be added 
- Dimensions of player should be set responively
- The more shorts banner needs to disappear
- Add a loading skelleton for each of the videos
  */

export const VideoComponent: React.FC<{
  id: string;
  isShort?: boolean;
  title: string;
}> = ({ id, isShort, title }) => {
  const src = `https://www.youtube.com/embed/${id}`;

  return (
    <div>
      <iframe
        src={src}
        allowFullScreen
        title={title}
        loading='lazy'
        width={isShort ? '315' : ''}
        height={isShort ? '560' : ''}
      />
    </div>
  );
};
