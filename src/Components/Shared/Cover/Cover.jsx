import { Parallax } from 'react-parallax';
const Cover = ({heading,subHeading,img}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div>
            <div className="hero md:min-h-[700px] pt-44 pb-40 px-10 md:px-72" style={{backgroundImage: `url(${img})`}}>
  <div className="bg-black bg-opacity-50 h-full w-full"></div>
  <div className="hero-content text-center text-white">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl md:text-7xl font-semibold">{heading}</h1>
      <p className="mb-5 text-2xl font-semibold">{subHeading}</p>
    </div>
  </div>
</div>
        </div>
        </Parallax>
    );
};

export default Cover;