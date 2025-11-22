const SnapshotSection = ({ title, children }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 transition-shadow duration-500">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">{title}</h2>
      {children}
    </div>
  );
}

export default SnapshotSection;
