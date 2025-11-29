import React from 'react'

const Order = () => {
  return (
    <div>
      <div className="card bg-amber-800/30 backdrop-blur-xs">
        <div className="card-body">
          <h1 className="font-bold text-2xl text-white">Review Your Order</h1>
          <div className="card-actions justify-end">
            <button type="button" className="btn btn-success">
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;