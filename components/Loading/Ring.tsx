type Props = {
  size: string;
};

const Ring: React.FC<Props> = ({ size }): JSX.Element => (
  <div
    className={`loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-${size} w-${size}`}>
    <style jsx>
      {`
        .loader {
          border-top-color: #3498db;
          -webkit-animation: spinner 1.5s linear infinite;
          animation: spinner 1.5s linear infinite;
        }

        @-webkit-keyframes spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }

        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}
    </style>
  </div>
);

export default Ring;
