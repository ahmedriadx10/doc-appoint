import { ThreeCircles } from "react-loader-spinner";

export const LoadingSpiner = () => {
  return (
    <div className="min-h-[70vh] flex justify-center items-center">
      <div>
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#0466c8"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default LoadingSpiner;
