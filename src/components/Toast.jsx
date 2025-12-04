

const Toast = ({message, styling}) => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-md">
      <div className={styling}>
        <span className="font-stretch-extra-condensed">{message}</span>
      </div>
    </div>
  );
}

export default Toast;