import { PulseLoader } from "react-spinners";
export default function Loading() {
  return (
    <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-filter backdrop-blur-sm"></div>
      <PulseLoader size={25} speedMultiplier={0.8} color="rgb(159 18 57)" />
    </div>
  );
}
