

const Toast = () => {

return (
    <div className="toast toast-top toast-center">
      <div className="alert alert-info">
        <span>{`${mealName} added to cart!`}</span>
      </div>
    </div>
  );
};

export default Toast;