const SummaryCard = ({ title, amount }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-2xl font-semibold text-emerald-600 mt-2">
        ₹ {amount}
      </h2>
    </div>
  );
};

export default SummaryCard;
