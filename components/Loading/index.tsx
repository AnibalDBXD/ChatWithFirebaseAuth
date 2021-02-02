import Ring from "./Ring";

const LoadingScreen: React.FC = (): JSX.Element => (
  <div className="h-screen w-screen flex justify-center items-center">
    <Ring size="64" />
  </div>
);
export default LoadingScreen;
