const RenderTable = () => ( 
    <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
        <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Image
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Amount
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
        </th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
        <tr>
        <td className="px-6 py-4 whitespace-nowrap">
            <img src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="Monitor" className="max-w-full h-28 object-cover rounded"/>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Monitor
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            $2500.00
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Approve
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Reject
            </button>
            </div>
        </td>
        </tr>
        <tr>
        <td className="px-6 py-4 whitespace-nowrap">
            <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="Hard Disk/SSD" className="max-w-full h-28 object-cover rounded"/>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Hard Disk/SSD
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            $2000.75
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Approve
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Reject
            </button>
            </div>
        </td>
        </tr>
    </tbody>
    </table>
);

export default RenderTable;
