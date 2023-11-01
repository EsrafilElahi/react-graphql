type Props = {
  handleScroll: () => void;
};

const Title = (props: Props) => {
  const { handleScroll } = props;

  return (
    <div className="absolute top-[45%] left-[5%]">
      <h1 className="text-[7vmin] md:text-[10vmin] leading-[2.5rem] md:leading-[5rem]">
        Esrafil Elahi
      </h1>
      <h2 className="text-[3.5vmin] md:text-[5vmin] mb-3 md:mb-5">
        Senior Frontend Engineer
      </h2>
      <button
        className="btn-outline xs-only:text-[3vmin]"
        onClick={handleScroll}
      >
        About Me
      </button>
    </div>
  );
};

export default Title;
