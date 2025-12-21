const TransactionItem = ({ title, amount, type }) => {
  return (
    <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm">
      <span className="text-gray-600">{title}</span>
      <span
        className={`font-medium ${
          type === "expense" ? "text-red-400" : "text-emerald-500"
        }`}
      >
        {type === "expense" ? "-" : "+"}₹{amount}
      </span>
    </div>
  );
};

export default TransactionItem;
