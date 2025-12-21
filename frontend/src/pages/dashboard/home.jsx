import Navbar from "../../components/Navbar";
import SummaryCard from "../../components/SummaryCard";
import TransactionItem from "../../components/TransactionItem";

const Home = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />


      <div className="p-6 max-w-6xl mx-auto">
        {/* Summary */}
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">Dashboard
      <p className="text-sm text-gray-500 mb-8">Welcome back! Here’s your Mintly overview 🌱
      </p>
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SummaryCard title="Total Income" amount="5000" />
          <SummaryCard title="Total Expense" amount="2300" />
          <SummaryCard title="Balance" amount="2700" />
        </div>

        {/* Recent Transactions */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Transactions
          </h2>

          <div className="space-y-3">
            <TransactionItem title="Groceries" amount="500" type="expense" />
            <TransactionItem title="Pocket Money" amount="2000" type="income" />
            <TransactionItem title="Coffee" amount="150" type="expense" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;